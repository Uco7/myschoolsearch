import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";

const html = `<div class="container">
    <h1>📝 How to Register for JAMB 2025</h1>

    <img src="https://www.schoolcontents.info/wp-content/uploads/2022/01/jamb-registration.jpg" alt="JAMB Registration" class="img-center">

    <p>The Joint Admissions and Matriculation Board (JAMB) has announced the official process for the 2025 UTME/DE registration. To register successfully, candidates are required to follow a specific step-by-step procedure.</p>

    <h2>✅ Step-by-Step Guide to Register for JAMB 2025</h2>
    <ul>
      <li>✅ Create a JAMB profile via SMS or online at the official portal (<a href="https://www.jamb.gov.ng" target="_blank">jamb.gov.ng</a>).</li>
      <li>✅ Obtain a valid National Identification Number (NIN) and link it with your JAMB profile.</li>
      <li>✅ Visit an accredited CBT registration centre near you.</li>
      <li>✅ Provide your personal and academic information correctly.</li>
      <li>✅ Choose your course, institution(s), and exam town.</li>
      <li>✅ Biometric capturing and photograph will be taken at the CBT center.</li>
      <li>✅ Collect your e-slip as evidence of successful registration.</li>
    </ul>

    <div class="important">
      <strong>Note:</strong> The registration fee is typically around ₦4,700, which covers the application form, reading text, and CBT service charges.
    </div>

    <h2>🖨️ JAMB Reprinting Date 2025</h2>
    <p>After registration, the next crucial step is to reprint your examination slip. This slip contains your exam date, time, and venue.</p>

    <p>The official date for JAMB reprinting for the 2025 UTME is usually <strong>about a week before the exam</strong> begins. For example, if the exam starts on April 19, 2025, reprinting typically begins on April 12–14, 2025.</p>

    <h2>💡 How to Reprint JAMB Exam Slip</h2>
    <ul>
      <li>🖥️ Visit the official JAMB reprinting portal: <a href="https://www.jamb.gov.ng/PrintExaminationSlip" target="_blank">jamb.gov.ng</a></li>
      <li>📌 Enter your JAMB Registration Number, email or phone number.</li>
      <li>📄 Click “Print Examination Slip.”</li>
      <li>📎 Save or print the slip to bring on the exam day.</li>
    </ul>

    <div class="important">
      <strong>Tip:</strong> Make multiple copies of your exam slip and arrive early at your exam center on the scheduled day.
    </div>

    <p>Stay updated on the latest JAMB news and tips by checking back on <strong>School Search</strong> regularly.</p>
  </div>
 <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function JambReprintingDate() {
  return (
    <LegacyContentPage
      title="JAMB 2025 Registration & Reprinting Guide \u2013 Step-by-Step Instructions | MySearch Query"
      description="Learn how to register for JAMB 2025 and reprint your slip with this simple guide. Find dates, procedures, and portal links all in one place."
      html={html}
    >
      <HotLinks title="Hot links" links={jambHotLink6} />
    </LegacyContentPage>
  );
}
