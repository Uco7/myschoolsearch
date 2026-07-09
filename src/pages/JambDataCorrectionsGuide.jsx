import { Link } from "react-router-dom";
import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";
import { getCurrentSession } from "../utils/session";

const html = `<div class="container">
    <h2>JAMB Portal & Correction of Data Guide</h2>

    <h3>✅ JAMB Portal Overview</h3>
    <p>
      The <strong>JAMB portal</strong> (<a href="https://www.jamb.gov.ng" target="_blank">https://www.jamb.gov.ng</a>) is the official platform where candidates can register, check results, perform data corrections, and monitor their admission status. It is essential for all UTME and Direct Entry processes.
    </p>

    <h3>✅ How to Correct Wrong Data on JAMB Online</h3>
    <p>If you made mistakes during registration, you can correct:</p>
    <ul>
      <li>Name</li>
      <li>Date of Birth</li>
      <li>Gender</li>
      <li>State/LGA of Origin</li>
      <li>Course/Institution</li>
      <li>UTME Subject Combination</li>
    </ul>

    <p><strong>Steps:</strong></p>
    <ul>
      <li>Go to <a href="https://www.jamb.gov.ng" target="_blank">https://www.jamb.gov.ng</a></li>
      <li>Click on <em>“Correction of Data”</em></li>
      <li>Log in with your JAMB profile email and password</li>
      <li>Select the correction type (e.g., Change of Name)</li>
      <li>Make payment (₦2,500) via Remita or card</li>
      <li>Fill the correction form and upload supporting documents</li>
      <li>Submit and print your correction slip</li>
    </ul>

    <h3>✅ JAMB Correction of Data Deadline</h3>
    <p>
      The correction portal is usually available from the end of UTME registration to a few weeks after the exam results are released. Dates vary each year, so check the JAMB portal regularly or subscribe to updates.
    </p>

    <h3>✅ How Long Does It Take for JAMB Change of Name to Reflect?</h3>
    <p>
      Name changes typically reflect within <strong>3–7 working days</strong> after successful submission and approval. You can monitor your profile regularly to confirm the update.
    </p>

    <h3>✅ How Long Does It Take for JAMB Change of State of Origin to Reflect?</h3>
    <p>
      State or LGA of Origin corrections usually take <strong>5–10 working days</strong> depending on server load and verification status.
    </p>

    <h3>✅ JAMB Portal Login</h3>
    <p>
      To log into your JAMB profile, visit <a href="https://efacility.jamb.gov.ng/" target="_blank">https://efacility.jamb.gov.ng/</a> and use your email and password created during registration.
    </p>

    <h3>✅ JAMB Rejected My Change of Name</h3>
    <p>
      If your change of name request is rejected, it may be due to mismatched documents, incorrect uploads, or suspicious alterations. Ensure:
    </p>
    <ul>
      <li>Your affidavit is signed by a court</li>
      <li>You upload a valid birth certificate or declaration of age</li>
      <li>Your name on NIN matches the name you’re correcting to</li>
    </ul>

    <h3>✅ Can I Correct My JAMB Name After Admission?</h3>
    <p>
      Yes, but it is more complicated. You must contact both your <strong>school’s admission office</strong> and <strong>JAMB support</strong>. Correction is possible but might delay NYSC or final clearance, so it’s better to fix issues before admission processing begins.
    </p>
  </div>
</body> <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function JambDataCorrectionsGuide() {
  const session = getCurrentSession();
  return (
    <LegacyContentPage
      title={`JAMB Data Correction & Portal Guide (${session}) | MySearch Query`}
      description={`Learn how to access the JAMB portal and correct your personal data such as name, date of birth, state of origin, and more. ${session} updated guide.`}
      html={html}
    >
      <div className="container section-txt">
        <h2>Correction Fees: What to Expect</h2>
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
          Typical ranges below — JAMB reviews fees periodically, so confirm the exact current amount
          on the official portal before paying.
        </p>
        <div className="table-container">
          <table>
            <thead><tr><th>Correction Type</th><th>Typical Fee</th><th>Documentation Usually Needed</th></tr></thead>
            <tbody>
              <tr><td>Minor spelling fix (name)</td><td>~₦2,500</td><td>JAMB slip, NIN slip</td></tr>
              <tr><td>Full name / surname change</td><td>~₦2,500</td><td>Sworn affidavit, NIN slip</td></tr>
              <tr><td>Date of birth</td><td>~₦2,500</td><td>Birth certificate or age declaration</td></tr>
              <tr><td>State/LGA of origin</td><td>~₦2,500</td><td>NIN slip, LGA identification</td></tr>
              <tr><td>Course / Institution change</td><td>~₦2,500 per change</td><td>None beyond JAMB profile access</td></tr>
              <tr><td>Phone number / email</td><td>Often free</td><td>None — self-service</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Topics Beyond the Basics</h2>
        <p>A few correction scenarios that come up often but rarely get covered in general guides:</p>
        <ul className="child-ul">
          <li><strong>Biometric mismatch at a CBT centre:</strong> if your fingerprint or photo doesn't match your existing JAMB record during a correction visit, the centre will typically flag it for manual verification rather than process it on the spot — bring your original NIN slip and JAMB registration document as backup identification.</li>
          <li><strong>A rejected correction:</strong> if JAMB rejects a submitted correction (common causes: unclear document scans, a name that still doesn't match your NIN, or a suspiciously large change), you can usually resubmit with corrected documentation rather than starting over from scratch — check your profile for the specific rejection reason first.</li>
          <li><strong>Your school already downloaded your (uncorrected) data:</strong> schools typically pull your JAMB record once during admission processing. If you correct something on JAMB afterward, proactively notify your school's admissions office — the correction on JAMB doesn't automatically propagate to a school that already has a copy of your old data.</li>
          <li><strong>Correcting a WAEC/NECO result mismatch through JAMB:</strong> JAMB can only correct what's in JAMB's own system. If the actual error is on your WAEC or NECO result, you'll need WAEC/NECO's own result-correction process — JAMB correcting your JAMB profile to match a wrong WAEC result doesn't fix the underlying issue.</li>
        </ul>

        <h2>Want the Full Question List?</h2>
        <p>This page covers the JAMB correction portal itself. For 100 specific, individually-answered questions — from "can I remove my middle name" to "what happens if my payment succeeded but nothing updated" — see the dedicated FAQ hub.</p>
        <Link className="cta-button" to="/jamb-data-correction/faq">View All 100 JAMB Correction Questions</Link>
      </div>
      <HotLinks title="Hot links" links={jambHotLink6} />
    </LegacyContentPage>
  );
}
