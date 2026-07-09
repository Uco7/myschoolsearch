# MySearch Query — React static site

Converted from the original Express/EJS app into a static Vite + React +
React Router site, ready to `npm run build` and host anywhere that serves
static files (Render static site, Netlify, Vercel, GitHub Pages, etc.).

## Running it

```bash
npm install
npm run dev       # local dev server
npm run build     # outputs to dist/ — this is what you deploy
npm run preview   # preview the production build locally
npm run generate-sitemap   # regenerates public/sitemap.xml
```

## Folder structure

```
src/
  components/     Header, Footer, Layout, HotLinks, AdmissionQueryLink,
                   JambFaqAccordion, LegacyContentPage
  data/            universitiesData.js, courseEligibilityData.js,
                   hotLinksData.js, jambFaqData.js
  hooks/           useDocumentMeta.js (sets <title>/meta description per page)
  pages/           one component per route (49 pages)
  legacyGlobalScripts.js   see note below
  App.jsx          all routes (matches getRoute.js 1:1)
  main.jsx         entry point
public/
  images/, ads.txt, robots.txt, sitemap.xml
scripts/
  generateSitemap.js   ported from your original script
```

## How pages were converted

- **Shared chrome** (`_headers.ejs`, `_footer.ejs`) → `Header.jsx` / `Footer.jsx`,
  real React (typing slider, mobile menu, scroll-to-top), wrapped by every
  page via `Layout.jsx`.
- **Hot-link partials** (`hot_link_1/2.ejs`, `jambHot_link6.ejs`,
  `_unnHot_link.ejs`, `_unn_jambHotLink.ejs`) → one `HotLinks.jsx` component
  driven by `data/hotLinksData.js`.
- **JAMB FAQ partials** (`_jamb.ejs` … `_jamb_5.ejs`) → one
  `JambFaqAccordion.jsx` + `data/jambFaqData.js`. **These weren't wired into
  any page in the files you sent**, so they're built and ready but not
  currently placed on any route — say where you want them and I'll add them.
- **Most content pages** (about, disclaimer, uniLag, fees, funai/unn/oau/ebsu
  pages, jamb resource pages, etc.) → ported through `LegacyContentPage.jsx`,
  which keeps your **exact original HTML/inline styles** for each page and
  just supplies the SEO title/description via `useDocumentMeta`.
- **Interactive pages** were rebuilt with real React state/hooks instead of
  vanilla DOM scripts: `CgpaCalculator.jsx`, `JambAggregateCalculator.jsx`,
  `CourseEligibilityChecker.jsx`, `Contact.jsx`, `UniversityProfile.jsx`.
- **Inline `onclick=`/`onchange=` attributes** left inside a few ported pages
  (search filters, dropdown toggles, the institution-type selector, past
  question navigation) still work as-is — `legacyGlobalScripts.js` defines
  those handler functions once, globally, since inline event-handler HTML
  attributes execute fine even when injected via `dangerouslySetInnerHTML`.

## University dataset (141 schools, 10 SEO sections each)

`src/data/universitiesData.js` now covers **141 real, NUC-recognized
universities** (federal, state, and prominent private), each with all 10
sections you asked for: Overview, Courses, School Fees, Cut-off Marks,
Admission Requirements, Post UTME, Acceptance Fee, Hostel, Faculties, FAQs.
`UniversityProfile.jsx` renders all 10 as its own `<section>` with a jump-link
table of contents, `CollegeOrUniversity` + `FAQPage` JSON-LD structured data
(via `useDocumentMeta`), and a responsive quick-facts grid.

**Data honesty policy — what's verified vs. typical:**
- The **JAMB 2026/2027 national minimum cut-off (150 for every university)**
  is real and verified (JAMB's 11 May 2026 policy meeting, corroborated by
  multiple news sources) — it applies accurately to all 141 schools.
- **Institutional cut-off, school fees, and acceptance fee** are marked with
  a green "✓ Verified" badge and a real researched figure for the schools
  actually checked via web search so far: **UNILAG, UI, UNN, OAU, UNIBEN,
  Covenant**. Every other school shows an amber "Typical range" badge with a
  category-based estimate (Federal/State/Private tuition bands) — clearly
  labelled as unconfirmed for that specific school, never presented as fact.
- This is intentional: fabricating precise numbers for 135+ schools I haven't
  individually verified would be misinformation, and Google increasingly
  rewards (E-E-A-T) pages that are transparent about confidence level rather
  than pages that assert unverifiable numbers.
- **Next step, if you want it:** I can keep working through the "Typical
  range" schools in batches, replacing them with real verified figures via
  search — this is genuinely ~2-3 searches per school, so 135 schools is a
  multi-session effort, not a one-shot.

## Performance / SEO

- Routes are code-split with `React.lazy` — the initial JS bundle dropped
  from ~1.1MB to ~176KB (57KB gzipped); the 141-school dataset (~32KB
  gzipped) only loads when someone visits the homepage or a university page.
  Page speed is itself a Google ranking factor, so this matters for the
  "rank first" goal.
- Every university page gets a unique `<title>`, meta description, and
  JSON-LD structured data (`CollegeOrUniversity` + `FAQPage`) injected via
  `useDocumentMeta`.
- **One caveat on SEO ceiling:** this is a client-rendered SPA (React Router,
  no server-side rendering). Google can index client-rendered pages, but
  server-rendered/static-generated pages typically index faster and rank
  more reliably. If ranking #1 is the real goal (not just "responsive and
  informative"), the highest-leverage next step is pre-rendering — either
  static-generating each university page at build time (e.g. with
  `vite-plugin-ssg` or migrating to Next.js/Astro) or adding a prerender
  service in front of the static host. Happy to do this next if you want.



## Internal linking & engagement (so people actually browse, not bounce)

Modelled on how sites like MySchoolGist keep visitors clicking:
- **`InstitutionList.jsx` is now the real hub/pillar page** — a searchable,
  filterable, state-grouped directory linking to all 141 university profiles.
  Pillar pages like this are also what let Google discover and index every
  individual school page in the first place.
- **`RelatedUniversities.jsx`** — every university page ends with "Students
  Also Compare", linking to 6 related schools (same state first, then same
  category). This is the biggest single lever for both crawl depth and
  session length.
- **`TrendingWidget.jsx`** — a curated "Trending Now" grid of the most-searched
  schools, shown on the homepage and every university page.
- **`LastUpdatedStamp.jsx`** — a visible freshness signal ("Page last checked
  [date]") on every major page, which is both a trust signal for visitors and
  something search engines factor into freshness scoring.

## Dates that update themselves

`src/utils/session.js` computes the admission session (e.g. "2026/2027") and
JAMB deadline dates live from the visitor's clock — nothing is hardcoded, so
you never have to manually bump a year. `getCurrentSession()` rolls over
every October 1st automatically. All of Home, InstitutionList, and
UniversityProfile use this instead of a fixed string.

## Deploying as static (SPA fallback)

Because this is a client-side-routed SPA, a request straight to e.g.
`/university/unilag` (exactly what a Google click looks like) needs your
host to serve `index.html` for every path, not 404. Config for the common
static hosts is included:
- `public/_redirects` — Netlify / most static hosts
- `render.yaml` — Render static sites
- `vercel.json` — Vercel

If your host isn't one of these, tell me which one and I'll add its config too.



## Rich content pipeline (generated articles)

`scripts/generate-articles/generate.mjs` — a Node.js pipeline (topics.json →
DuckDuckGo search → Playwright fetch → Readability extraction → Gemini
rewrite → `src/data/articles/<slug>.json`) for generating additional
in-depth guides beyond the university/JAMB pages. **This cannot run inside
this environment** (no outbound internet access beyond package registries)
— run it on your own machine or CI with your own `GEMINI_API_KEY`. Two
example articles are included so the frontend works out of the box:
`/articles` (index) and `/articles/:slug` (detail), both wired into
site-wide search. New articles the pipeline generates are picked up
automatically via `src/data/articlesLoader.js` (Vite glob import) — no code
changes needed to add more, and the sitemap script also auto-includes them
from `manifest.json`.

**Before publishing generated output:** skim it. The prompt instructs
Gemini to paraphrase (never quote), never hardcode a session year, and
flag uncertain figures — but you're responsible for what actually goes
live, the same as reviewing a freelance writer's draft.

## Fee breakdown & department cut-off tables

Every university page now has two structured tables instead of prose-only
figures:
- **School Fees table**: tuition, acceptance fee, and hostel as separate
  line items for Fresh vs. Returning students, plus an "Estimated Total,
  First Year" row (category-level approximation — Federal/State/Private —
  clearly labelled as such).
- **Department Cut-off Marks table**: a typical banding (Medicine/Law/
  Pharmacy, Engineering/CS, Accounting/Economics/Mass Comm, Arts/Social
  Sciences/Education) derived from the school's own institutional cut-off,
  explicitly labelled as illustrative rather than confirmed per-department
  figures — this project's data-honesty policy (see above) applies here
  too: no invented precision presented as fact.

## Original illustrations

`src/components/illustrations/` — hand-authored SVG (not sourced from any
external image), so there's no copyright/licensing exposure. A graduation-
cap illustration on the homepage hero, and small line-icons next to key
section headings on university pages (fees, cut-off, faculties, documents,
timeline, hostel).

## Known gaps / things to double check

1. **`view/index.ejs` (the homepage) was never uploaded.** `Home.jsx` is a
   best-effort rebuild from `server.js`'s `res.render("index", { universities })`
   call and the `.hero`/`.search-container`/`.university-list` CSS already in
   `style.css`. Send the real file if you have it and I'll swap it in.
2. `career.ejs`'s sibling `careerPath.ejs`, `faculties_corses.ejs`,
   `jamb.ejs`, and `past_question.ejs` weren't referenced by any route in
   `getRoute.js` either — I mounted them at `/career/path`, `/faculties/courses`,
   `/jamb/overview`, `/past-questions` respectively so nothing is lost, but
   let me know if you want different paths (or want them folded into an
   existing page instead).
3. The **Contact form** now builds a `mailto:` link on submit since there's
   no backend anymore (`action="/register"` doesn't exist on a static host).
   If you want real form submissions, wire it to something like Formspree
   or EmailJS instead.
4. `stateprofile.ejs` was an earlier/simpler draft of `universityProfile.ejs`
   (same content, less complete) — I used `universityProfile.ejs` as the
   canonical dynamic template since that's the one `getRoute.js` actually
   serves; `stateprofile.ejs` wasn't ported separately.
5. `index.js` (site-wide vanilla script), `funaiStyle.css` (superseded by
   the already-merged `style.css`), `server.js`, `package.json`/`package-lock.json`,
   `postRoute.js`, and `page.js`/`getRoute.js` themselves were reference-only —
   they described the old Express app and aren't part of the static build,
   but nothing from them was silently dropped; every route/behavior they
   define has a React equivalent above.
