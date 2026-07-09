import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HotLinks from "../components/HotLinks";
import LastUpdatedStamp from "../components/LastUpdatedStamp";
import { jambHotLink6 } from "../data/hotLinksData";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { getCurrentSession } from "../utils/session";
import universities from "../data/universitiesData";

const CATEGORIES = ["All", "Federal University", "State University", "Private University"];

// This is the site's main hub/pillar page: a real, searchable, filterable
// directory linking out to all 141 university profile pages. Pillar pages
// like this are what let Google discover and index every individual school
// page, and they're what keep a visitor clicking from school to school
// instead of leaving after their first answer.
export default function InstitutionList() {
  const session = getCurrentSession();
  useDocumentMeta(
    `Full List of Nigerian Universities ${session} — Federal, State & Private | MySearch Query`,
    `Browse all ${universities.length} NUC-approved Nigerian universities — federal, state, and private. Search by name, state, or abbreviation to find admission requirements, cut-off marks, fees, and Post-UTME info for ${session}.`
  );

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    let list = universities;
    if (category !== "All") list = list.filter((u) => u.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (u) => u.name.toLowerCase().includes(q) || u.abbreviation.toLowerCase().includes(q) || u.state.toLowerCase().includes(q)
      );
    }
    return list;
  }, [query, category]);

  const grouped = useMemo(() => {
    const byState = {};
    filtered.forEach((u) => {
      if (!byState[u.state]) byState[u.state] = [];
      byState[u.state].push(u);
    });
    return Object.entries(byState).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <Layout>
      <section className="hero">
        <h1>Full List of Nigerian Universities {session}</h1>
        <p>All {universities.length} NUC-approved federal, state, and private universities — search or filter below, then click through for admission requirements, cut-off marks, fees, and Post-UTME details.</p>
      </section>

      <div className="container">
        <LastUpdatedStamp prefix="List current for the" />

        <div className="search-container">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search by name, abbreviation, or state..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="cta-row" style={{ justifyContent: "center", marginTop: "1rem" }}>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className="cta-button"
                style={{ background: category === c ? undefined : "#aaa" }}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p style={{ textAlign: "center", color: "#555" }}>
          Showing {filtered.length} of {universities.length} universities
        </p>

        {grouped.map(([state, unis]) => (
          <div className="section-txt" key={state}>
            <h2>{state} State</h2>
            <ul className="university-list" style={{ maxHeight: "none" }}>
              {unis.map((u) => (
                <li key={u.slug}>
                  <Link to={`/university/${u.slug}`}>{u.abbreviation} — {u.name} ({u.category.replace(" University", "")})</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="section-txt" style={{ textAlign: "center" }}>
            <p className="no-results">No universities match "{query}"</p>
          </div>
        )}

        <div className="section-txt">
          <h2>Related Tools</h2>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <Link className="cta-button" to="/calculate/cgpa/app">CGPA Calculator</Link>
            <Link className="cta-button" to="/calculate/jamb-aggregate/app">JAMB Aggregate Calculator</Link>
            <Link className="cta-button" to="/check/course-eligibility/app">Course Eligibility Checker</Link>
          </div>
        </div>
      </div>

      <HotLinks title="Hot links" links={jambHotLink6} />
    </Layout>
  );
}
