import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";

const html = `<!--include  header file -->
  <div class="container section-txt">
    <h1 class="heading-top">📅 JAMB Registration 2025 Start Date – Everything You Need to Know</h1>

    <div class="img-block">
      <img src="/images/download.jpg" alt="JAMB Registration Banner">
    </div>
<div class="text-center" style="text-align: center;padding: 1rem;">
    <p>The Joint Admissions and Matriculation Board (JAMB) is the body responsible for conducting the Unified Tertiary Matriculation Examination (UTME) in Nigeria. Every year, hundreds of thousands of candidates register to take this exam, which is a key requirement for gaining admission into universities, polytechnics, and colleges of education in Nigeria.</p>

    <h2>🗓️ JAMB Registration 2025 Start Date</h2>
    <p>JAMB has announced that the registration for the 2025 UTME will begin on <strong>Monday, January 20th, 2025</strong> and will end on <strong>Tuesday, February 20th, 2025</strong>.</p>
  </div>
    <div class="img-block">
      <img src="/images/utme-jamb-1.png" alt="Candidates registering for JAMB">
    </div>

    <h2>📌 What You Need to Register</h2>
    <ul>
      <li>A valid email address and phone number.</li>
      <li>National Identification Number (NIN).</li>
      <li>Profile code (generated via SMS).</li
>      <li>Passport photograph (recent and clear).</li>
      <li>Payment for the JAMB registration fee (usually around ₦3,500).</li>
    </ul>
     <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function JambRegDate() {
  return (
    <LegacyContentPage
      title="JAMB Registration 2025 Start Date | Official Timetable & Guide | MySearch Query"
      description="Find out the official JAMB Registration 2025 start date, requirements, deadline, and complete step-by-step guide for UTME candidates."
      html={html}
    >
      <HotLinks title="Hot links" links={jambHotLink6} />
    </LegacyContentPage>
  );
}
