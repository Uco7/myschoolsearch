import { useMemo } from "react";
import { Link } from "react-router-dom";
import { searchSite } from "../utils/searchIndex";

export default function SearchResultsList({ query }) {
  const results = useMemo(() => searchSite(query), [query]);

  const grouped = useMemo(() => {
    const groups = {};
    results.forEach((r) => {
      if (!groups[r.type]) groups[r.type] = [];
      groups[r.type].push(r);
    });
    return groups;
  }, [results]);

  if (!query.trim()) return null;

  if (results.length === 0) {
    return (
      <div className="section-txt" style={{ textAlign: "center" }}>
        <p className="no-results">Nothing matches "{query}" yet.</p>
        <p>
          Try browsing the <Link to="/nigeria/list-of-institution/page">full university directory</Link> or
          the <Link to="/jamb-data-correction/faq">JAMB correction FAQ</Link> instead.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p style={{ textAlign: "center", color: "#555" }}>
        {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
      </p>

      {Object.entries(grouped).map(([type, items]) => (
        <div className="section-txt" key={type}>
          <h2>{type}</h2>
          <ul className="university-list" style={{ maxHeight: "none" }}>
            {items.map((item, i) => (
              <li key={`${item.path}-${i}`}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
