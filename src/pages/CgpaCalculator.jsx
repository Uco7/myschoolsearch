import { useState } from "react";
import Layout from "../components/Layout";
import useDocumentMeta from "../hooks/useDocumentMeta";

const gradePoints5 = { A: 5, B: 4, C: 3, D: 2, E: 1, F: 0 };
const gradePoints4 = { A: 4, B: 3, C: 2, D: 1, F: 0 };

let nextId = 1;
const newRow = () => ({ id: nextId++, title: "", unit: "", grade: "A" });

const classify = (cgpa, isFivePoint) => {
  if (isFivePoint) {
    if (cgpa >= 4.5) return "First Class Honours";
    if (cgpa >= 3.5) return "Second Class Honours (Upper Division)";
    if (cgpa >= 2.4) return "Second Class Honours (Lower Division)";
    if (cgpa >= 1.5) return "Third Class Honours";
    if (cgpa >= 1.0) return "Pass";
    return "Below Pass Mark — check your school's regulations";
  }
  if (cgpa >= 3.5) return "First Class Honours";
  if (cgpa >= 3.0) return "Second Class Honours (Upper Division)";
  if (cgpa >= 2.0) return "Second Class Honours (Lower Division)";
  if (cgpa >= 1.0) return "Third Class Honours";
  return "Below Pass Mark — check your school's regulations";
};

export default function CgpaCalculator() {
  useDocumentMeta(
    "GPA & CGPA Calculator | MySearch Query",
    "Calculate your semester GPA, cumulative CGPA, and expected degree classification instantly for Nigerian university grading scales."
  );

  const [scale, setScale] = useState("5");
  const [rows, setRows] = useState([newRow(), newRow(), newRow()]);
  const [result, setResult] = useState({ totalUnits: 0, totalPoints: 0, gpa: 0 });
  const [prevCGPA, setPrevCGPA] = useState("");
  const [prevUnits, setPrevUnits] = useState("");
  const [cumulativeCGPA, setCumulativeCGPA] = useState(null);
  const [classificationText, setClassificationText] = useState("Enter your courses above to see your result");

  const scaleMap = scale === "5" ? gradePoints5 : gradePoints4;
  const gradeOptions = Object.keys(scaleMap);

  const updateRow = (id, field, value) => {
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const addRow = () => setRows((rs) => [...rs, newRow()]);
  const removeRow = (id) => setRows((rs) => rs.filter((r) => r.id !== id));

  const resetAll = () => {
    setRows([newRow(), newRow(), newRow()]);
    setResult({ totalUnits: 0, totalPoints: 0, gpa: 0 });
    setCumulativeCGPA(null);
    setClassificationText("Enter your courses above to see your result");
    setPrevCGPA("");
    setPrevUnits("");
  };

  const computeSemester = () => {
    let totalUnits = 0;
    let totalPoints = 0;
    rows.forEach((r) => {
      const unit = parseFloat(r.unit) || 0;
      const point = scaleMap[r.grade] !== undefined ? scaleMap[r.grade] : 0;
      totalUnits += unit;
      totalPoints += unit * point;
    });
    const gpa = totalUnits > 0 ? totalPoints / totalUnits : 0;
    const computed = { totalUnits, totalPoints, gpa };
    setResult(computed);
    return computed;
  };

  const calcGpa = () => {
    const { gpa } = computeSemester();
    setClassificationText(`${classify(gpa, scale === "5")} (based on this semester's GPA)`);
  };

  const calcCgpa = () => {
    const { totalUnits, totalPoints } = computeSemester();
    const prevCgpaVal = parseFloat(prevCGPA) || 0;
    const prevUnitsVal = parseFloat(prevUnits) || 0;
    const prevPoints = prevCgpaVal * prevUnitsVal;
    const combinedUnits = totalUnits + prevUnitsVal;
    const combinedPoints = totalPoints + prevPoints;
    const newCGPA = combinedUnits > 0 ? combinedPoints / combinedUnits : 0;
    setCumulativeCGPA(newCGPA.toFixed(2));
    setClassificationText(`${classify(newCGPA, scale === "5")} (based on cumulative CGPA)`);
  };

  return (
    <Layout>
      <section className="hero">
        <h1>GPA &amp; CGPA Calculator</h1>
        <p>Calculate your semester GPA, cumulative CGPA, and expected degree classification — instantly, right in your browser.</p>
      </section>

      <div className="container">
        <div className="section-txt">
          <h2>1. Choose Your Grading Scale</h2>
          <p>Most Nigerian universities use the 5-point scale. Some polytechnics and a few private
            universities use the 4-point scale. <strong>Confirm which one your school uses</strong> in
            your student handbook if you're not sure — this changes the grade points below.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginTop: "0.8rem" }}>
            <label style={{ cursor: "pointer", fontWeight: 500 }}>
              <input type="radio" name="gpaScale" checked={scale === "5"} onChange={() => setScale("5")} /> 5-Point Scale (A=5, most common)
            </label>
            <label style={{ cursor: "pointer", fontWeight: 500 }}>
              <input type="radio" name="gpaScale" checked={scale === "4"} onChange={() => setScale("4")} /> 4-Point Scale (A=4)
            </label>
          </div>
        </div>

        <div className="section-txt">
          <h2>2. Enter This Semester's Courses</h2>
          <div style={{ overflowX: "auto", margin: "1rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Course Title (optional)</th>
                  <th style={thStyle}>Credit Unit</th>
                  <th style={thStyle}>Grade</th>
                  <th style={thStyle}></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id}>
                    <td style={tdStyle}><input type="text" placeholder="e.g. MTH 101" value={r.title} onChange={(e) => updateRow(r.id, "title", e.target.value)} style={inputStyle} /></td>
                    <td style={tdStyle}><input type="number" min="0" max="12" placeholder="e.g. 3" value={r.unit} onChange={(e) => updateRow(r.id, "unit", e.target.value)} style={inputStyle} /></td>
                    <td style={tdStyle}>
                      <select value={r.grade} onChange={(e) => updateRow(r.id, "grade", e.target.value)} style={inputStyle}>
                        {gradeOptions.map((g) => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </td>
                    <td style={tdStyle}>
                      <button type="button" onClick={() => removeRow(r.id)} style={{ background: "#f44336", color: "#fff", border: "none", borderRadius: 4, padding: "6px 10px", cursor: "pointer" }}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button type="button" className="cta-button" onClick={addRow}>+ Add Course</button>{" "}
          <button type="button" className="cta-button" style={{ background: "#777" }} onClick={resetAll}>Reset All</button>
        </div>

        <div className="section-txt">
          <h2>3. Semester GPA</h2>
          <div className="info-section">
            <div className="info-card"><h3>Total Units</h3><p>{result.totalUnits}</p></div>
            <div className="info-card"><h3>Total Grade Points</h3><p>{result.totalPoints.toFixed(2)}</p></div>
            <div className="info-card"><h3>Semester GPA</h3><p>{result.gpa.toFixed(2)}</p></div>
          </div>
          <button type="button" className="cta-button" onClick={calcGpa}>Calculate Semester GPA</button>
        </div>

        <div className="section-txt">
          <h2>4. Cumulative CGPA (Optional)</h2>
          <p>Already have a CGPA from previous semesters? Add it below to calculate your new cumulative CGPA after this semester.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", margin: "1rem 0" }}>
            <label style={{ display: "flex", flexDirection: "column", fontWeight: 500, gap: 4 }}>
              Previous CGPA:
              <input type="number" step="0.01" min="0" max="5" placeholder="e.g. 3.45" value={prevCGPA} onChange={(e) => setPrevCGPA(e.target.value)} style={{ padding: 8, border: "1px solid #ccc", borderRadius: 5, width: 180 }} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", fontWeight: 500, gap: 4 }}>
              Previous Total Units:
              <input type="number" min="0" placeholder="e.g. 90" value={prevUnits} onChange={(e) => setPrevUnits(e.target.value)} style={{ padding: 8, border: "1px solid #ccc", borderRadius: 5, width: 180 }} />
            </label>
          </div>
          <button type="button" className="cta-button" onClick={calcCgpa}>Calculate Cumulative CGPA</button>
          <div className="info-section">
            <div className="info-card"><h3>New Cumulative CGPA</h3><p>{cumulativeCGPA ?? "—"}</p></div>
          </div>
        </div>

        <div className="section-txt">
          <h2>5. Expected Degree Classification</h2>
          <p>Based on the CGPA calculated above (uses cumulative CGPA if you entered previous results,
            otherwise uses this semester's GPA). <strong>Classification bands vary slightly by
            institution</strong> — this reflects the most common Nigerian university bands. Always
            confirm the exact bands in your school's academic regulations / student handbook.</p>
          <div className="info-section">
            <div className="info-card"><h3>Classification</h3><p style={{ fontWeight: 700, fontSize: "1.1rem" }}>{classificationText}</p></div>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", marginTop: "1rem", maxWidth: 600 }}>
            <thead><tr><th style={thStyle}>CGPA Range (5-Point)</th><th style={thStyle}>Classification</th></tr></thead>
            <tbody>
              <tr><td style={tdStyle}>4.50 – 5.00</td><td style={tdStyle}>First Class Honours</td></tr>
              <tr><td style={tdStyle}>3.50 – 4.49</td><td style={tdStyle}>Second Class Honours (Upper Division)</td></tr>
              <tr><td style={tdStyle}>2.40 – 3.49</td><td style={tdStyle}>Second Class Honours (Lower Division)</td></tr>
              <tr><td style={tdStyle}>1.50 – 2.39</td><td style={tdStyle}>Third Class Honours</td></tr>
              <tr><td style={tdStyle}>1.00 – 1.49</td><td style={tdStyle}>Pass</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

const thStyle = { border: "1px solid #ddd", padding: 10, textAlign: "left", fontSize: "0.95rem", background: "#4CAF50", color: "#fff" };
const tdStyle = { border: "1px solid #ddd", padding: 10, textAlign: "left", fontSize: "0.95rem" };
const inputStyle = { width: "100%", padding: 6, border: "1px solid #ccc", borderRadius: 4, fontSize: "0.95rem" };
