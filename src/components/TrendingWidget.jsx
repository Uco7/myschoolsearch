import { Link } from "react-router-dom";
import { TRENDING_SLUGS } from "../utils/session";

/**
 * "Trending now" widget — curated list of the most-searched schools plus the
 * interactive tools. Used on Home and the university directory to give
 * visitors an immediate next click, the same way MySchoolGist's "Trending
 * Gists" / "Latest Gists" sidebar keeps people browsing instead of leaving
 * after one page.
 */
export default function TrendingWidget({ universities, title = "Trending Now" }) {
  const trending = TRENDING_SLUGS
    .map((slug) => universities.find((u) => u.slug === slug))
    .filter(Boolean);

  return (
    <section className="section-txt">
      <h2>{title}</h2>
      <div className="info-section">
        {trending.map((u) => (
          <div className="info-card" key={u.slug}>
            <h3>{u.abbreviation}</h3>
            <p>{u.name}</p>
            <Link className="cta-button" to={`/university/${u.slug}`}>View Guide</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
