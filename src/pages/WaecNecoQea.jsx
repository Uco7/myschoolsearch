import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";

const html = `<!--include  header file -->
  <div class="container">
    <h2>WAEC & NECO - Frequently Asked Questions</h2>

    <details>
      <summary>1. Can I combine WAEC and NECO results for admission?</summary>
      <p>Yes, many universities and polytechnics in Nigeria accept the combination of WAEC and NECO results, provided the grades meet the course requirements.</p>
    </details>

    <details>
      <summary>2. How do I retrieve my lost WAEC or NECO certificate?</summary>
      <p>You will need to visit the nearest WAEC or NECO office with a sworn affidavit, passport photo, and a valid ID. They will guide you through the process of obtaining a replacement or certified statement of result.</p>
    </details>

    <details>
      <summary>3. How do I check my WAEC or NECO result?</summary>
      <p>You can check online at:</p>
      <ul>
        <li><a href="https://www.waecdirect.org" target="_blank">WAEC Result Checker</a></li>
        <li><a href="https://result.neco.gov.ng" target="_blank">NECO Result Checker</a></li>
      </ul>
      <p>You will need your exam number, PIN, and exam year to check your result.</p>
    </details>

    <details>
      <summary>4. What is the cost of WAEC/NECO scratch cards?</summary>
      <p>The scratch card (or e-PIN) costs between ₦500 to ₦1000 depending on the vendor and location. Always buy from an authorized source to avoid scams.</p>
    </details>

    <details>
      <summary>5. Can I change my name or date of birth on WAEC/NECO certificates?</summary>
      <p>Corrections can be difficult. WAEC does not support name changes after result release. NECO might allow some corrections with legal backing like affidavits and supporting documents. Visit the official office for proper guidance.</p>
    </details>

    <details>
      <summary>6. What is the difference between WAEC GCE and WAEC SSCE?</summary>
      <p>WAEC SSCE is the school-based exam taken by students in SS3, while WAEC GCE is the private candidate exam for those not enrolled in secondary schools or repeating the exam independently.</p>
    </details>

    <details>
      <summary>7. Is it possible to upgrade my WAEC/NECO result?</summary>
      <p>No. Upgrading results is a scam. Both WAEC and NECO have warned against individuals or websites claiming to upgrade results. Avoid such frauds to protect your records.</p>
    </details>

    <details>
      <summary>8. How long are WAEC and NECO certificates valid?</summary>
      <p>They are valid for life. Once issued, they do not expire and can be used anytime for academic or job purposes.</p>
    </details>

    <details>
      <summary>9. Can I use WAEC result abroad?</summary>
      <p>Yes. You may need to apply for a WAEC “attestation of results” or verification, which can be sent directly to foreign institutions through WAEC International Office.</p>
    </details>

    <details>
      <summary>10. When will WAEC/NECO release results?</summary>
      <p>WAEC typically releases results 45 days after the last paper. NECO usually releases results within 60 days. Always check their official websites for announcements.</p>
    </details>
  </div>
 <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function WaecNecoQea() {
  return (
    <LegacyContentPage
      title="WAEC & NECO - Frequently Asked Questions | MySearch Query"
      description="Find answers to frequently asked questions about WAEC and NECO exams in Nigeria, including result checking, certificate retrieval, cost of scratch cards, and more."
      html={html}
    >
      <HotLinks title="Hot links" links={jambHotLink6} />
    </LegacyContentPage>
  );
}
