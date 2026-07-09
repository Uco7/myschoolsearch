import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { courses, masterSubjects } from "../data/courseEligibilityData";
import { getCurrentSession } from "../utils/session";

export default function CourseEligibilityChecker() {
  const session = getCurrentSession();
  useDocumentMeta(
    `JAMB Course Eligibility Checker ${session} | MySearch Query`,
    "Free JAMB & O'Level subject combination checker for Nigerian university courses. Instantly find out if you're eligible for Medicine, Law, Engineering, Computer Science and more."
  );

  const [courseIndex, setCourseIndex] = useState(0);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [result, setResult] = useState(null);

  const course = courses[courseIndex];

  const requirementText = useMemo(() => {
    const otherCore = course.jambCore.filter((s) => s !== "English Language");
    const jambSubjects =
      "English Language" +
      (otherCore.length ? ", " + otherCore.join(", ") : "") +
      (course.jambFlexible.length ? ` + ${course.flexibleCount} of (${course.jambFlexible.join(", ")})` : "");
    return { olevel: course.olevel, jambSubjects, note: course.note };
  }, [course]);

  const toggleSubject = (subj) => {
    setSelectedSubjects((prev) =>
      prev.includes(subj) ? prev.filter((s) => s !== subj) : [...prev, subj]
    );
  };

  const checkEligibility = () => {
    const selected = ["English Language", ...selectedSubjects];
    const missingCore = course.jambCore.filter((s) => !selected.includes(s));
    const flexibleMatches = course.jambFlexible.filter((s) => selected.includes(s));
    const flexibleOk = course.flexibleCount === 0 || flexibleMatches.length >= course.flexibleCount;

    if (missingCore.length === 0 && flexibleOk) {
      setResult({
        pass: true,
        text: `✅ Likely eligible for ${course.name} based on the subjects you selected. Always confirm with your specific target school.`,
      });
    } else {
      let msg = `❌ Not yet eligible for ${course.name}. `;
      if (missingCore.length > 0) msg += `Missing compulsory subject(s): ${missingCore.join(", ")}. `;
      if (!flexibleOk) msg += `You need at least ${course.flexibleCount} of: ${course.jambFlexible.join(", ")}.`;
      setResult({ pass: false, text: msg });
    }
  };

  return (
    <Layout>
      <section className="hero">
        <h1>JAMB Course Eligibility &amp; Subject Combination Checker</h1>
        <p>Find the O'Level and JAMB subject combination required for any Nigerian university course, then check your own subjects against it — free, instant, and updated for the current admission cycle.</p>
      </section>

      <div className="container">
        <div className="section-txt">
          <h2>⚠️ Before You Start</h2>
          <p>
            Subject combinations are broadly stable but can vary slightly between institutions for the
            same course (e.g. some schools accept Agricultural Science as a Biology substitute for
            Computer Science, others don't). This tool shows the <strong>most common combination</strong>
            published in the JAMB brochure — always confirm your specific school's requirement in the
            current JAMB UTME brochure or the school's admission page before finalizing your subjects.
          </p>
        </div>

        <div className="section-txt">
          <h2>1. Choose Your Intended Course</h2>
          <select
            aria-label="Select your intended course"
            value={courseIndex}
            onChange={(e) => {
              setCourseIndex(Number(e.target.value));
              setResult(null);
            }}
            style={{ width: "100%", maxWidth: 420, padding: 10, border: "1px solid #ccc", borderRadius: 6, fontSize: "1rem" }}
          >
            {courses.map((c, i) => (
              <option key={i} value={i}>{c.name}</option>
            ))}
          </select>
          <div style={{ marginTop: 12 }}>
            <h4>{course.name}</h4>
            <p><strong>O'Level:</strong> {requirementText.olevel}</p>
            <p><strong>JAMB Subjects:</strong> {requirementText.jambSubjects}</p>
            <p><em>{requirementText.note}</em></p>
          </div>
        </div>

        <div className="section-txt">
          <h2>2. Check Your Subjects</h2>
          <p>English Language is compulsory for every course. Tick the other subjects you are offering or plan to offer:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.6rem", margin: "1rem 0" }}>
            <label style={{ opacity: 0.7 }}>
              <input type="checkbox" checked disabled /> English Language (compulsory)
            </label>
            {masterSubjects.map((subj) => (
              <label key={subj}>
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(subj)}
                  onChange={() => toggleSubject(subj)}
                />{" "}
                {subj}
              </label>
            ))}
          </div>
          <button type="button" className="cta-button" onClick={checkEligibility}>Check My Eligibility</button>

          <div className="info-section">
            <div className="info-card">
              <h3>Result</h3>
              <p style={{ color: result ? (result.pass ? "#2e7d32" : "#c62828") : undefined, fontWeight: result ? 600 : 400 }}>
                {result ? result.text : "Select a course and your subjects above"}
              </p>
            </div>
          </div>
        </div>

        <div className="section-txt">
          <h2>Frequently Asked Questions</h2>
          <ul className="child-ul">
            <li><strong>What subjects do I need for Medicine and Surgery in JAMB?</strong> English Language, Physics, Chemistry, and Biology are compulsory at almost every Nigerian university, with no flexible alternatives.</li>
            <li><strong>Can I study Law without Literature in English?</strong> Most schools expect Literature-in-English, Government, or CRK/IRK as part of your combination — confirm with your target university since requirements vary slightly.</li>
            <li><strong>Do I need Physics for Computer Science?</strong> Yes — English, Mathematics, and Physics are compulsory at most schools, plus one additional science or related subject.</li>
            <li><strong>Where can I confirm the official subject combination for my course?</strong> The current JAMB UTME brochure, cross-checked against your specific university's admission page.</li>
          </ul>
        </div>
      </div>

      <HotLinks title="Hot links" links={jambHotLink6} />
    </Layout>
  );
}
