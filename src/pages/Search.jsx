import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import SearchResultsList from "../components/SearchResultsList";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { getCurrentSession } from "../utils/session";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const session = getCurrentSession();

  useDocumentMeta(
    initialQuery ? `"${initialQuery}" — Search Results | MySearch Query` : `Search MySearch Query ${session}`,
    `Search universities, JAMB correction answers, calculators, and admission guides across MySearch Query for ${session}.`
  );

  const runSearch = (e) => {
    e.preventDefault();
    setSearchParams(query.trim() ? { q: query.trim() } : {});
  };

  return (
    <Layout>
      <section className="hero">
        <h1>Search MySearch Query</h1>
        <p>Search universities, JAMB correction answers, calculators, and admission guides — all in one place.</p>
      </section>

      <div className="container">
        <div className="search-container">
          <form className="search-bar-container" onSubmit={runSearch}>
            <input
              type="text"
              className="search-bar"
              placeholder="e.g. UNILAG, how to correct my JAMB name, CGPA calculator..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>

        <SearchResultsList query={initialQuery} />

        {!initialQuery && (
          <div className="section-txt" style={{ textAlign: "center" }}>
            <p>Type a school name, a JAMB question, or a tool (like "CGPA calculator") above.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
