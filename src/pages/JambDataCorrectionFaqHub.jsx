import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HotLinks from "../components/HotLinks";
import LastUpdatedStamp from "../components/LastUpdatedStamp";
import { jambHotLink6 } from "../data/hotLinksData";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { getCurrentSession } from "../utils/session";
import CATEGORIES from "../data/jambDataCorrectionFaqData";

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function JambDataCorrectionFaqHub() {
  const session = getCurrentSession();
  const [query, setQuery] = useState("");

  const allItems = useMemo(
    () => CATEGORIES.flatMap((c) => c.items.map((i) => ({ ...i, category: c.category }))),
    []
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return CATEGORIES;
    const q = query.toLowerCase();
    return CATEGORIES.map((c) => ({
      ...c,
      items: c.items.filter((i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)),
    })).filter((c) => c.items.length > 0);
  }, [query]);

  const pageTitle = `JAMB Data Correction FAQ ${session}: 100 Answers to the Most-Asked Questions | MySearch Query`;
  const pageDescription = `100 real answers to the most-searched JAMB data correction questions for ${session} — name, date of birth, NIN, course/institution change, CBT centres, fees, deadlines, and more.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  useDocumentMeta(pageTitle, pageDescription, jsonLd);

  return (
    <Layout>
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <Link to="/">Home</Link> &rsaquo;{" "}
        <Link to="/jamb-data/corrections/guide/page">JAMB Data Correction</Link> &rsaquo;{" "}
        <span>FAQ</span>
      </nav>

      <section className="hero">
        <h1>JAMB Data Correction: 100 Most-Asked Questions, Answered</h1>
        <p>Every common question candidates search about correcting JAMB data — name, date of birth, NIN, course/institution, CBT centres, fees, and deadlines — for the {session} admission cycle.</p>
      </section>

      <div className="container">
        <LastUpdatedStamp prefix="Answers current for the" />

        <div className="search-container">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search any correction question (e.g. 'name', 'NIN', 'fee')..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <nav className="profile-toc" aria-label="Jump to category">
          {CATEGORIES.map((c) => (
            <a key={c.category} href={`#${slugify(c.category)}`}>{c.category}</a>
          ))}
        </nav>

        <p style={{ textAlign: "center", color: "#555" }}>
          {filtered.reduce((n, c) => n + c.items.length, 0)} of {allItems.length} questions
          {query.trim() ? ` matching "${query}"` : ""}
        </p>

        {filtered.map((c) => (
          <section key={c.category} id={slugify(c.category)} className="section-txt profile-faq">
            <h2>{c.category}</h2>
            {c.items.map((item, i) => (
              <details key={i}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </section>
        ))}

        {filtered.length === 0 && (
          <div className="section-txt" style={{ textAlign: "center" }}>
            <p className="no-results">No questions match "{query}"</p>
          </div>
        )}

        <div className="section-txt">
          <h2>Related JAMB Guides</h2>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <Link className="cta-button" to="/jamb-data/corrections/guide/page">Data Correction Portal Guide</Link>
            <Link className="cta-button" to="/jamb/data/correction/page">JAMB Registration Dates</Link>
            <Link className="cta-button" to="/jamb-reg/requirements/page">Registration Requirements</Link>
            <Link className="cta-button" to="/jamb/syllabus">JAMB Syllabus</Link>
            <Link className="cta-button" to="/calculate/jamb-aggregate/app">Aggregate Calculator</Link>
            <Link className="cta-button" to="/check/course-eligibility/app">Course Eligibility Checker</Link>
          </div>
        </div>
      </div>

      <HotLinks title="Hot links" links={jambHotLink6} />
    </Layout>
  );
}
