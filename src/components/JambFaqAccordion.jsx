import { withLiveSession } from "../utils/session";

// Generic accordion, ported from includeFolder/_jamb.ejs, _jamb_2.ejs,
// _jamb_3.ejs, _jamb_4.ejs and _jamb_5.ejs — those 5 files were all the
// same <details>/<summary> FAQ block with different questions, so they're
// now one component driven by the datasets in src/data/jambFaqData.js.
// Any hardcoded session year in a question/answer is rewritten live.
//
// NOTE: none of the pages you've sent so far actually <%- include(...) %>
// these partials — they exist in includeFolder but aren't wired into any
// route yet. This component + its 5 datasets are kept ready to drop into
// whichever JAMB page(s) you want them on.
export default function JambFaqAccordion({ title = "JAMB: Frequently Asked Questions", items = [] }) {
  return (
    <div className="container section-txt">
      <h2>{withLiveSession(title)}</h2>
      {items.map((item, i) => (
        <details key={i} style={{ border: "1px solid #ddd", borderRadius: 8, marginBottom: 10, padding: "10px 15px", background: "#fdfdfd" }}>
          <summary style={{ fontWeight: "bold", cursor: "pointer" }}>{withLiveSession(item.q)}</summary>
          <div style={{ marginTop: 10, color: "#444" }} dangerouslySetInnerHTML={{ __html: withLiveSession(item.a) }} />
        </details>
      ))}
    </div>
  );
}
