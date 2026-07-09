import { Link } from "react-router-dom";
import { withLiveSession } from "../utils/session";

/**
 * Generic "Hot links" / "Quick links" block.
 * Ported from includeFolder/hot_link_1.ejs, hot_link_2.ejs, jambHot_link6.ejs,
 * _unnHot_link.ejs and _unn_jambHotLink.ejs — those 5 files were all the
 * same markup shape with a different title + link list, so they're now one
 * component driven by the datasets in src/data/hotLinksData.js. Any
 * hardcoded session year in a label is rewritten live — see withLiveSession.
 */
export default function HotLinks({ title = "Hot links", links = [] }) {
  return (
    <div className="container section-txt">
      <h2>{title}</h2>
      <ul className="child-ul">
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.href}>{withLiveSession(link.label)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
