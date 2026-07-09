#!/usr/bin/env node
/**
 * scripts/generate-articles/generate.mjs
 * ----------------------------------------------------------------
 * topics.json → DuckDuckGo search → Playwright fetch → Readability
 * extraction → Gemini rewrite → src/data/articles/<slug>.json
 *
 * This is a BUILD-TIME tool. It does not run as part of the live site —
 * you run it locally (or in CI) before `npm run build`, review the JSON
 * it produces, commit it, and the static site just imports that JSON like
 * any other data file. Nothing about the deployed site depends on this
 * script or on live network access.
 *
 * ⚠️ This cannot be run from inside a sandboxed environment without
 * outbound internet access. Run it on your own machine or CI runner.
 *
 * SETUP
 *   npm install --save-dev playwright @mozilla/readability jsdom node-fetch @google/generative-ai
 *   npx playwright install chromium
 *   export GEMINI_API_KEY=your_key_here
 *
 * USAGE
 *   node scripts/generate-articles/generate.mjs                 # all topics
 *   node scripts/generate-articles/generate.mjs some-topic-slug  # one topic
 *
 * WHAT TO REVIEW BEFORE COMMITTING OUTPUT
 *   - Every generated article is a REWRITE instructed to paraphrase, not
 *     quote — but you are responsible for the final published content.
 *     Skim each one before it goes live, the same way you would a
 *     freelance writer's draft.
 *   - The prompt instructs Gemini never to state a specific year/session —
 *     it should say "the current admission session" instead of "2026/2027".
 *     A post-processing step below also strips any literal YYYY/YYYY
 *     pattern that slips through, so the site's existing withLiveSession()
 *     mechanism (src/utils/session.js) can compute it live at render time
 *     instead of it ever being hardcoded.
 *   - DuckDuckGo has no official public search API; the scrape approach
 *     below hits their HTML endpoint, which can break or rate-limit
 *     without notice. If that happens, swap in a proper search API
 *     (Bing Search API, SerpAPI, Brave Search API) — the rest of the
 *     pipeline (fetch → Readability → Gemini) stays the same either way.
 *   - Respect each source site's robots.txt / terms of service. This
 *     script is for gathering FACTS to write original content from, not
 *     for republishing scraped text.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";
import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";
import { GoogleGenerativeAI } from "@google/generative-ai";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const TOPICS_PATH = path.join(__dirname, "topics.json");
const OUTPUT_DIR = path.join(ROOT, "src/data/articles");
const MANIFEST_PATH = path.join(OUTPUT_DIR, "manifest.json");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY environment variable. See the setup notes at the top of this file.");
  process.exit(1);
}
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const RESULTS_PER_TOPIC = 4;
const REQUEST_DELAY_MS = 1500; // be polite between requests

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Strips any literal "YYYY/YYYY" the model might still produce, replacing
 *  it with a neutral phrase — the site computes the real session live. */
function stripHardcodedSessions(text) {
  return text.replace(/20\d{2}\/20\d{2}/g, "the current admission session");
}

async function searchDuckDuckGo(browser, query) {
  const page = await browser.newPage();
  const urls = [];
  try {
    await page.goto(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });
    const links = await page.$$eval("a.result__a", (as) => as.map((a) => a.href));
    urls.push(...links.slice(0, RESULTS_PER_TOPIC));
  } catch (err) {
    console.warn(`  ! DuckDuckGo search failed for "${query}": ${err.message}`);
  } finally {
    await page.close();
  }
  return urls;
}

async function extractReadableText(browser, url) {
  const page = await browser.newPage();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
    const html = await page.content();
    const dom = new JSDOM(html, { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();
    if (!article || !article.textContent) return null;
    return {
      url,
      title: article.title,
      // Cap length so we don't blow the Gemini context window on one source.
      text: article.textContent.trim().slice(0, 6000),
    };
  } catch (err) {
    console.warn(`  ! Failed to extract ${url}: ${err.message}`);
    return null;
  } finally {
    await page.close();
  }
}

async function generateArticleJson(topicEntry, sourceExtracts) {
  const sourcesBlock = sourceExtracts
    .map((s, i) => `SOURCE ${i + 1} (${s.url}):\n${s.text}`)
    .join("\n\n---\n\n");

  const prompt = `You are writing an original, helpful article for a Nigerian student-facing
education website. Use the source material below only to learn FACTS —
do not copy phrasing or sentence structure from any source. Write entirely
in your own words, in a clear, direct, practical tone aimed at a Nigerian
student.

Topic: ${topicEntry.topic}

IMPORTANT RULES:
- Never state a specific year or "YYYY/YYYY" session. Say things like
  "the current admission session" or "check the official portal for the
  current date" instead — this site computes the real current session at
  render time, so hardcoding a year here would go stale.
- Do not fabricate specific fees, deadlines, or scores that aren't in the
  source material. Where the sources disagree or a figure is likely to
  change, say so and point the reader to the official source.
- Write 700–1200 words of genuinely useful content, not filler.

Return ONLY valid JSON matching exactly this shape, no markdown fences,
no commentary before or after:

{
  "title": "string",
  "description": "string (meta description, under 160 characters)",
  "category": "${topicEntry.category}",
  "sections": [
    { "heading": "string", "body": "string (plain text, 1-4 paragraphs)" }
  ],
  "faqs": [
    { "q": "string", "a": "string" }
  ],
  "sourceUrls": ${JSON.stringify(sourceExtracts.map((s) => s.url))}
}

SOURCE MATERIAL:
${sourcesBlock || "(No sources retrieved — write from general, widely-known knowledge only, and be conservative about specifics.)"}
`;

  const result = await model.generateContent(prompt);
  const raw = result.response.text().trim();
  const cleaned = raw.replace(/^```json\s*/i, "").replace(/```$/, "").trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (err) {
    throw new Error(`Gemini did not return valid JSON for "${topicEntry.topic}": ${err.message}\n---\n${raw}`);
  }

  // Belt-and-braces: strip any hardcoded session that slipped through.
  parsed.title = stripHardcodedSessions(parsed.title);
  parsed.description = stripHardcodedSessions(parsed.description);
  parsed.sections = parsed.sections.map((s) => ({
    heading: stripHardcodedSessions(s.heading),
    body: stripHardcodedSessions(s.body),
  }));
  parsed.faqs = parsed.faqs.map((f) => ({
    q: stripHardcodedSessions(f.q),
    a: stripHardcodedSessions(f.a),
  }));

  return {
    slug: topicEntry.slug,
    ...parsed,
    generatedAt: new Date().toISOString(),
  };
}

async function main() {
  const topics = JSON.parse(fs.readFileSync(TOPICS_PATH, "utf-8"));
  const onlySlug = process.argv[2];
  const toProcess = onlySlug ? topics.filter((t) => t.slug === onlySlug) : topics;

  if (toProcess.length === 0) {
    console.error(`No matching topic for slug "${onlySlug}"`);
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const manifest = fs.existsSync(MANIFEST_PATH) ? JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8")) : [];

  for (const topicEntry of toProcess) {
    console.log(`\n→ ${topicEntry.topic}`);
    const urls = await searchDuckDuckGo(browser, topicEntry.searchQuery);
    console.log(`  found ${urls.length} candidate source(s)`);
    await sleep(REQUEST_DELAY_MS);

    const extracts = [];
    for (const url of urls) {
      const extract = await extractReadableText(browser, url);
      if (extract) extracts.push(extract);
      await sleep(REQUEST_DELAY_MS);
    }
    console.log(`  extracted ${extracts.length} readable source(s)`);

    try {
      const article = await generateArticleJson(topicEntry, extracts);
      const outPath = path.join(OUTPUT_DIR, `${topicEntry.slug}.json`);
      fs.writeFileSync(outPath, JSON.stringify(article, null, 2));
      console.log(`  ✓ wrote ${outPath}`);

      const existingIndex = manifest.findIndex((m) => m.slug === topicEntry.slug);
      const manifestEntry = { slug: article.slug, title: article.title, category: article.category };
      if (existingIndex >= 0) manifest[existingIndex] = manifestEntry;
      else manifest.push(manifestEntry);
    } catch (err) {
      console.error(`  ✗ ${err.message}`);
    }
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  await browser.close();
  console.log(`\nDone. ${manifest.length} article(s) in manifest.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
