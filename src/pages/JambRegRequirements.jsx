import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";

const html = `<div class="container">
    <h1>JAMB 2025: CBT Exam Date, Accredited Centres & Registration Requirements</h1>

    <div class="section">
      <h2>📅 JAMB CBT Exam Date 2025</h2>
      <p>The Joint Admissions and Matriculation Board (JAMB) has announced that the 2025 UTME (Unified Tertiary Matriculation Examination) will take place from <strong>Saturday, April 19th to Monday, April 28th, 2025</strong>.</p>
      <p>All candidates who have successfully registered should prepare ahead and stay updated by visiting the official JAMB portal regularly.</p>
    </div>

    <div class="section">
      <h2>📍 JAMB Accredited Centres Near You</h2>
      <p>You must register and sit for your exam at JAMB-accredited centres only. These centres are authorized to ensure a secure and standardized testing experience for all candidates.</p>
      <p>To find a JAMB CBT centre near you:</p>
      <ul>
        <li>Visit the official <a href="https://www.jamb.gov.ng" target="_blank">JAMB Website</a>.</li>
        <li>Click on "Accredited CBT Centres" under the UTME section.</li>
        <li>Select your state to view approved centres in your area.</li>
      </ul>
      <div class="highlight">
        <strong>Note:</strong> Do not register at cybercafés or unauthorized locations to avoid invalid registration or fraud.
      </div>
    </div>

    <div class="section">
      <h2>📝 JAMB Registration Requirements</h2>
      <p>Before registering for JAMB 2025, ensure you have the following:</p>
      <ul>
        <li><strong>NIN (National Identification Number)</strong> – It is compulsory for registration.</li>
        <li><strong>Valid Email Address</strong> – Preferably Gmail for easier integration.</li>
        <li><strong>Phone Number</strong> – Used for receiving codes and updates.</li>
        <li><strong>Profile Code</strong> – Send your NIN via SMS to 55019 or 66019 to get your profile code.</li>
        <li><strong>O’Level Results (WAEC/NECO/NABTEB)</strong> – You may apply with awaiting result too.</li>
        <li><strong>Passport Photograph</strong> – Must be recent and meet JAMB standards.</li>
        <li><strong>Registration Fee</strong> – Approximately ₦4,700 (with mock) or ₦3,500 (without mock).</li>
      </ul>
      <p>Once all documents and data are ready, proceed to any accredited centre to complete the biometric and form filling process.</p>
    </div>

    <img src="https://jamb.gov.ng/images/logo.png" alt="JAMB Logo" class="img-center" />

    <p style="text-align: center; margin-top: 2rem;"><em>Stay updated, stay informed. Good luck with your JAMB 2025 preparation!</em></p>
  </div>
 <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function JambRegRequirements() {
  return (
    <LegacyContentPage
      title="JAMB 2025: Exam Date, Centres & Registration Requirements | MySearch Query"
      description="Get updated details on JAMB 2025 CBT exam date, accredited registration centres, and all requirements for successful registration."
      html={html}
    >
      <HotLinks title="Hot links" links={jambHotLink6} />
    </LegacyContentPage>
  );
}
