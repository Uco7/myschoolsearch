import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";
import useDocumentMeta from "../hooks/useDocumentMeta";

export default function JambAggregateCalculator() {
  useDocumentMeta(
    "JAMB Aggregate Score Calculator | MySearch Query",
    "Estimate your admission aggregate from your JAMB (UTME) score and Post-UTME/O'Level score — adjust the weighting to match your school's formula."
  );

  const [jambScore, setJambScore] = useState("");
  const [postUtmeScore, setPostUtmeScore] = useState("");
  const [jambWeight, setJambWeight] = useState(50);
  const [postUtmeWeight, setPostUtmeWeight] = useState(50);
  const [result, setResult] = useState(null);

  const weightHint = useMemo(() => {
    const jw = parseFloat(jambWeight) || 0;
    const pw = parseFloat(postUtmeWeight) || 0;
    const total = jw + pw;
    return total === 100
      ? "Weights add up to 100% ✓"
      : `Weights currently add up to ${total}% — most schools expect them to total 100%.`;
  }, [jambWeight, postUtmeWeight]);

  const calculate = () => {
    const jamb = Math.min(parseFloat(jambScore) || 0, 400);
    const postUtme = Math.min(parseFloat(postUtmeScore) || 0, 100);
    const jw = (parseFloat(jambWeight) || 0) / 100;
    const pw = (parseFloat(postUtmeWeight) || 0) / 100;

    const jambNormalized = (jamb / 400) * 100;
    const postUtmeNormalized = postUtme;

    const jambContribution = jambNormalized * jw;
    const postUtmeContribution = postUtmeNormalized * pw;
    const aggregate = jambContribution + postUtmeContribution;

    setResult({
      jambContribution: jambContribution.toFixed(2),
      postUtmeContribution: postUtmeContribution.toFixed(2),
      aggregate: aggregate.toFixed(2),
    });
  };

  const reset = () => {
    setJambScore("");
    setPostUtmeScore("");
    setJambWeight(50);
    setPostUtmeWeight(50);
    setResult(null);
  };

  return (
    <Layout>

      <section className="heading-top">
        <h1>JAMB Aggregate Score Calculator</h1>
        <p>Estimate your admission aggregate from your JAMB (UTME) score and Post-UTME/O'Level score — adjust the weighting to match your school's formula.</p>
      </section>

      <div className="container">
        <div className="section-txt">
          <h2>1. Enter Your Scores</h2>
          <p><strong>Aggregate formulas differ by university</strong> — some use JAMB/Post-UTME 50/50,
            others 60/40, and some (like UNILAG) use JAMB score ÷ 8 + Post-UTME score ÷ 8. Set the
            weights below to match what your target school publishes on its admission portal.</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", margin: "1rem 0" }}>
            <label style={{ display: "flex", flexDirection: "column", fontWeight: 500, gap: 4 }}>
              JAMB (UTME) Score (0–400)
              <input type="number" min="0" max="400" placeholder="e.g. 280" value={jambScore} onChange={(e) => setJambScore(e.target.value)} style={inputStyle} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", fontWeight: 500, gap: 4 }}>
              Post-UTME / Screening Score (0–100)
              <input type="number" min="0" max="100" placeholder="e.g. 65" value={postUtmeScore} onChange={(e) => setPostUtmeScore(e.target.value)} style={inputStyle} />
            </label>
          </div>
        </div>

        <div className="section-txt">
          <h2>2. Set the Weighting</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", margin: "1rem 0" }}>
            <label style={{ display: "flex", flexDirection: "column", fontWeight: 500, gap: 4 }}>
              JAMB Weight (%)
              <input type="number" min="0" max="100" value={jambWeight} onChange={(e) => setJambWeight(e.target.value)} style={inputStyle} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", fontWeight: 500, gap: 4 }}>
              Post-UTME Weight (%)
              <input type="number" min="0" max="100" value={postUtmeWeight} onChange={(e) => setPostUtmeWeight(e.target.value)} style={inputStyle} />
            </label>
          </div>
          <p style={{ fontStyle: "italic", color: "#555" }}>{weightHint}</p>
          <div style={{ display: "flex", gap: "0.7rem" }}>
            <button type="button" className="cta-button" onClick={calculate}>Calculate Aggregate</button>
            <button type="button" className="cta-button" style={{ background: "#777" }} onClick={reset}>Reset</button>
          </div>
        </div>

        <div className="section-txt">
          <h2>3. Your Aggregate Score</h2>
          <div className="info-section">
            <div className="info-card"><h3>JAMB Contribution</h3><p>{result ? result.jambContribution : "0.00"}</p></div>
            <div className="info-card"><h3>Post-UTME Contribution</h3><p>{result ? result.postUtmeContribution : "0.00"}</p></div>
            <div className="info-card"><h3>Aggregate (out of 100)</h3><p>{result ? result.aggregate : "0.00"}</p></div>
          </div>
          <p><strong>This is an estimate only.</strong> Always compare your result against the actual
            published cut-off aggregate on your target school's admission portal — schools change
            formulas and cut-offs every session.</p>
        </div>
      </div>

      <HotLinks title="Hot links" links={jambHotLink6} />
    </Layout>
  );
}

const inputStyle = { padding: 8, border: "1px solid #ccc", borderRadius: 5, width: 220 };
