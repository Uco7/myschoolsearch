import { Link } from "react-router-dom";
import { getRelatedUniversities } from "../utils/session";

/**
 * Internal-linking widget: "Related Universities" shown at the bottom of
 * every university profile page. This is the single highest-leverage thing
 * for both SEO (more crawlable internal links = more indexed pages, more
 * link equity flowing to each page) and for keeping a visitor browsing
 * instead of bouncing after they get the one fact they came for.
 */
export default function RelatedUniversities({ universities, current }) {
  const related = getRelatedUniversities(universities, current, 6);
  if (related.length === 0) return null;

  return (
    <section className="section-txt">
      <h2>Students Also Compare</h2>
      <p>Prospective {current.abbreviation} applicants also check these institutions:</p>
      <ul className="university-list" style={{ maxHeight: "none" }}>
        {related.map((u) => (
          <li key={u.slug}>
            <Link to={`/university/${u.slug}`}>{u.abbreviation} — {u.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
