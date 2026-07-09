import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";

const html = `<div class="container">
    <h2>How to Correct Your Name or Date of Birth After JAMB</h2>

    <div class="step">
      <h3>Step 1: Log in to your JAMB Profile</h3>
      <p>Visit the <a href="https://www.jamb.gov.ng" target="_blank">JAMB portal</a> and log in using your email and password used during registration.</p>
      <img src="images/jamb-login-page.png" alt="JAMB login page" />
    </div>

    <div class="step">
      <h3>Step 2: Navigate to Correction of Data</h3>
      <p>Once logged in, scroll down and click on the option that says <strong>“Correction of Data”</strong>.</p>
      <img src="images/correction-of-data-link.png" alt="Correction of Data link on JAMB portal" />
    </div>

    <div class="step">
      <h3>Step 3: Select the Type of Correction</h3>
      <p>Choose either <strong>Name Correction</strong> or <strong>Date of Birth Correction</strong> from the drop-down list.</p>
      <img src="images/select-correction-type.png" alt="Select name or date of birth correction" />
    </div>

    <div class="step">
      <h3>Step 4: Upload Required Documents</h3>
      <p>You’ll be required to upload supporting documents such as:</p>
      <ul>
        <li>Birth Certificate (for Date of Birth)</li>
        <li>Sworn Affidavit (for Name correction)</li>
        <li>National ID (optional for verification)</li>
      </ul>
      <img src="images/upload-documents.png" alt="Uploading documents on JAMB portal" />
    </div>

    <div class="step">
      <h3>Step 5: Make Payment</h3>
      <p>Pay the required fee (usually ₦2,500) using your ATM card or through a bank branch. You’ll be redirected to the Remita payment gateway.</p>
      <img src="images/jamb-payment-page.png" alt="JAMB Remita payment page" />
    </div>

    <div class="step">
      <h3>Step 6: Submit and Await Approval</h3>
      <p>After payment, submit your application. JAMB will review your request and notify you of the outcome via email or SMS within a few days.</p>
      <img src="images/confirmation-success.png" alt="Submission success confirmation" />
    </div>

    <div class="step">
      <h3>Step 7: Check Back for Update</h3>
      <p>You can log back into your profile after a few days to confirm if the correction has been successfully made.</p>
      <img src="images/updated-profile.png" alt="Updated profile page on JAMB portal" />
    </div>

  </div>
 <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function Jamb() {
  return (
    <LegacyContentPage
      title="JAMB Correction of Name or Date of Birth (2025 Guide) | MySearch Query"
      description="Need to fix your name or date of birth on your JAMB profile? Here's a complete step-by-step guide on how to apply for correction on the JAMB portal."
      html={html}
    >
      <HotLinks title="Hot links" links={jambHotLink6} />
    </LegacyContentPage>
  );
}
