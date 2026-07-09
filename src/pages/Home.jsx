import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import useDocumentMeta from "../hooks/useDocumentMeta";
import universities from "../data/universitiesData";
import TrendingWidget from "../components/TrendingWidget";
import LastUpdatedStamp from "../components/LastUpdatedStamp";
import SearchResultsList from "../components/SearchResultsList";
import GraduationIllustration from "../components/illustrations/GraduationIllustration";
import { getCurrentSession } from "../utils/session";

// NOTE: the original view/index.ejs was never uploaded, so this homepage is
// a best-effort reconstruction — built from server.js's `res.render("index",
// { universities })` call and the .hero / .search-container / .university-list
// / .info-section classes already defined in style.css for exactly this kind
// of page. Send over the real index.ejs if you have it and I'll swap this out
// for a 1:1 port instead.
export default function Home() {
  const session = getCurrentSession();
  const federalCount = universities.filter((u) => u.category === "Federal University").length;
  const stateCount = universities.filter((u) => u.category === "State University").length;
  const privateCount = universities.filter((u) => u.category === "Private University").length;

  useDocumentMeta(
    `Nigerian University Admission Guide ${session}: Cut-Off Marks, Fees & JAMB Help | MySearch Query`,
    `Check JAMB cut-off marks, school fees, admission requirements, and Post-UTME info for ${universities.length}+ Nigerian universities — plus free CGPA, JAMB aggregate, and course eligibility calculators. Updated for ${session}.`
  );

  const [query, setQuery] = useState("");
  const isSearching = query.trim().length > 0;

  return (
    <Layout>
      <section className="hero">
        <GraduationIllustration style={{ width: 140, height: "auto", margin: "0 auto 1rem", display: "block" }} />
        <h1>Find Everything About Your Dream University</h1>
        <p>Admission requirements, JAMB cut-off marks, school fees, scholarships, and more — for {universities.length} Nigerian universities, updated for the {session} session.</p>
      </section>

      <div className="container">
        <LastUpdatedStamp />
        <div className="intro-section">
          <h2>Search the Whole Site</h2>
          <p>Search universities, JAMB correction questions, calculators, and guides — all in one box.</p>
        </div>

        <div className="search-container">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="e.g. UNILAG, how to correct my JAMB name, CGPA calculator..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>

        {isSearching ? (
          <SearchResultsList query={query} />
        ) : (
          <>
            <ul className="university-list">
              {universities.map((u) => (
                <li key={u.slug}>
                  <Link to={`/university/${u.slug}`}>{u.abbreviation} — {u.name}</Link>
                </li>
              ))}
            </ul>

            <div className="info-section" style={{ marginTop: "2.5rem" }}>
              <div className="info-card">
                <h3>CGPA Calculator</h3>
                <p>Work out your semester GPA and cumulative CGPA instantly.</p>
                <Link className="cta-button" to="/calculate/cgpa/app">Open Calculator</Link>
              </div>
              <div className="info-card">
                <h3>JAMB Aggregate Calculator</h3>
                <p>Estimate your admission aggregate from your JAMB and Post-UTME scores.</p>
                <Link className="cta-button" to="/calculate/jamb-aggregate/app">Open Calculator</Link>
              </div>
              <div className="info-card">
                <h3>Course Eligibility Checker</h3>
                <p>Check the JAMB &amp; O'Level subject combination for your intended course.</p>
                <Link className="cta-button" to="/check/course-eligibility/app">Check Eligibility</Link>
              </div>
              <div className="info-card">
                <h3>JAMB Data Correction FAQ</h3>
                <p>100 answered questions on fixing your name, DOB, NIN, course, and more.</p>
                <Link className="cta-button" to="/jamb-data-correction/faq">View FAQ</Link>
              </div>
              <div className="info-card">
                <h3>All Institutions</h3>
                <p>Browse the full list of Nigerian universities, polytechnics, and colleges.</p>
                <Link className="cta-button" to="/nigeria/list-of-institution/page">View List</Link>
              </div>
            </div>

            <TrendingWidget universities={universities} title="Trending Universities" />

            {/* ---- Rich homepage content: About, why us, how it works, FAQs ---- */}
            <section className="section-txt">
              <h2>About MySearch Query</h2>
              <p>
                MySearch Query helps Nigerian students find accurate, up-to-date admission
                information for universities across the country — federal, state, and private —
                without having to dig through dozens of scattered school websites, forum threads,
                and outdated blog posts. Every guide on this site is built around the questions
                students actually ask during the admission season: what score do I need, how much
                are the fees, what documents do I need for Post-UTME, and what happens after I'm
                admitted.
              </p>
              <p>
                The platform currently covers {universities.length} Nigerian universities
                ({federalCount} federal, {stateCount} state, and {privateCount} private), each with
                its own dedicated page covering admission requirements, JAMB cut-off marks, school
                fees, acceptance fees, hostel information, faculties, and frequently asked
                questions. Alongside the university guides, the site includes free tools — a CGPA
                and GPA calculator, a JAMB aggregate score calculator, and a course eligibility
                checker — plus a 100-question JAMB data-correction FAQ covering everything from
                fixing a misspelled name to changing your course after registration.
              </p>
            </section>

            <section className="section-txt">
              <h2>Why Students Use This Site</h2>
              <ul className="child-ul">
                <li><strong>One place, not twenty tabs.</strong> Instead of separately searching
                  "UNILAG cut-off mark," "UNILAG school fees," and "UNILAG post-UTME," each
                  university's full admission picture lives on one page.</li>
                <li><strong>Honesty about what's confirmed.</strong> Where a figure (like a
                  specific cut-off mark or fee) has been directly verified against an official
                  source, it's marked as confirmed. Where it's a typical range for that category of
                  school rather than a confirmed number for that specific institution, it's marked
                  that way too — instead of presenting every number with false confidence.</li>
                <li><strong>Built for the current admission cycle.</strong> Session references
                  across the site are computed from the actual date rather than hardcoded, so a
                  page you read in year one and a page you read in year three both reflect the
                  session that's actually current.</li>
                <li><strong>Free calculators, not paywalled ones.</strong> The CGPA calculator,
                  JAMB aggregate calculator, and course eligibility checker all run directly in
                  your browser — no sign-up, no payment.</li>
              </ul>
            </section>

            <section className="section-txt">
              <h2>How to Search This Site</h2>
              <p>
                Type into the search box above and results are grouped by type as you type —
                universities, JAMB FAQ answers, course eligibility guidance, and tools all show up
                together. You can search a school name ("UNILAG"), a state ("universities in
                Ogun"), a specific question ("how do I correct my JAMB date of birth"), or a tool
                ("CGPA calculator"). The same search is available from every page on the site via
                the search box in the header, so you're never more than one click from finding
                something else useful.
              </p>
            </section>

            <section className="section-txt">
              <h2>Popular Universities</h2>
              <div className="cta-row" style={{ flexWrap: "wrap" }}>
                {["unilag", "ui", "unn", "oau", "abu", "uniben", "uniport", "lasu", "covenant", "babcock", "unilorin", "unizik"].map((slug) => {
                  const u = universities.find((x) => x.slug === slug);
                  return u ? (
                    <Link key={slug} className="cta-button" to={`/university/${slug}`}>
                      {u.abbreviation} Admission Guide
                    </Link>
                  ) : null;
                })}
              </div>
            </section>

            <section className="section-txt">
              <h2>Featured Tools</h2>
              <div className="cta-row" style={{ flexWrap: "wrap" }}>
                <Link className="cta-button" to="/calculate/cgpa/app">CGPA & GPA Calculator</Link>
                <Link className="cta-button" to="/calculate/jamb-aggregate/app">JAMB Aggregate Calculator</Link>
                <Link className="cta-button" to="/check/course-eligibility/app">Course Eligibility Checker</Link>
                <Link className="cta-button" to="/schools/grading/system">Universities Grading System</Link>
                <Link className="cta-button" to="/jamb-data-correction/faq">JAMB Data Correction FAQ</Link>
                <Link className="cta-button" to="/most-demanding/courses">Most Demanding Courses</Link>
                <Link className="cta-button" to="/scholarship/guid">Scholarship Guide</Link>
                <Link className="cta-button" to="/universities/medcine/surgry">Medicine & Surgery Schools</Link>
              </div>
            </section>

            <section className="section-txt profile-faq">
              <h2>Frequently Asked Questions</h2>
              <details>
                <summary>Is MySearch Query official or affiliated with JAMB/universities?</summary>
                <p>No. MySearch Query is an independent information platform. It is not affiliated
                  with JAMB, NUC, or any individual university — always confirm time-sensitive
                  details (fees, exact cut-off marks, deadlines) on the relevant official portal
                  before making a decision or a payment.</p>
              </details>
              <details>
                <summary>How often is the information updated?</summary>
                <p>Session and deadline references are computed live from the current date, so
                  they never go stale. Verified fee and cut-off figures are updated as they're
                  individually re-checked against official sources — the "Verified" vs "Typical
                  range" badge on each university page tells you which you're looking at.</p>
              </details>
              <details>
                <summary>Do I need to pay to use the calculators?</summary>
                <p>No — the CGPA calculator, JAMB aggregate calculator, and course eligibility
                  checker are free and run in your browser.</p>
              </details>
              <details>
                <summary>What if my university isn't listed?</summary>
                <p>The directory currently covers {universities.length} NUC-recognized federal,
                  state, and private universities, with more being added. Use the <Link to="/contact-us/page">contact page</Link> to
                  request a specific school.</p>
              </details>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
}
