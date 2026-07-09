import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { hotLink1, hotLink2, jambHotLink6, mergeHotLinks } from "../data/hotLinksData";
import { getCurrentSession } from "../utils/session";

const session = getCurrentSession();
const startYear = session.split("/")[1];

const html = `<!-- header...........................///////////// -->
  


<div class="container">
    <div class="section-txt">
    <h1>University of Ibadan (UI) Tuition Fees ${startYear}</h1>
    <p>The University of Ibadan (UI) is one of the most prestigious universities in Nigeria. For the ${startYear} academic session, tuition fees vary depending on the faculty, course of study, and whether the student is a freshman or a returning student.</p>

    <h2>UI Tuition Fees for New Students (${startYear})</h2>
    <p>The estimated tuition fees for new students at UI range between <span class="highlight">₦100,000 – ₦250,000</span>, depending on the course.</p>
</div>
    <h2 class="text-color">Estimated Fees by Faculty:</h2>
    <ul class="child-ul">
        <li><strong>Arts and Humanities:</strong> ₦100,000 – ₦120,000</li>
        <li><strong>Science and Engineering:</strong> ₦150,000 – ₦180,000</li>
        <li><strong>Law:</strong> ₦180,000 – ₦200,000</li>
        <li><strong>Medicine and Surgery:</strong> ₦220,000 – ₦250,000</li>
        <li><strong>Social Sciences:</strong> ₦120,000 – ₦150,000</li>
    </ul>

    <h2 class="text-color">Additional Charges</h2>
    <ul class="child-ul">
        <li><strong>Acceptance Fee:</strong> ₦35,000 – ₦50,000</li>
        <li><strong>Accommodation Fee (Optional):</strong> ₦40,000 – ₦80,000</li>
        <li><strong>Departmental and Faculty Dues:</strong> ₦5,000 – ₦15,000</li>
        <li><strong>Medical and Registration Fees:</strong> ₦10,000 – ₦20,000</li>
    </ul>

    <h2 class="text-color">Payment Guidelines</h2>
    <ul class="child-ul">
        <li>New students must pay their acceptance fee before school fees.</li>
        <li>All fees should be paid via the official UI payment portal.</li>
        <li>Late payment may attract extra charges.</li>
    </ul>

    <h2><i>Conclusion</i></h2>
    <p>UI tuition fees for ${startYear} vary based on the course and faculty. Students are advised to visit the official UI website for the latest updates and payment instructions.</p>
</div>
 <!-- hot link_1...........................///////////// -->
 

 <!-- hot link_1...........................///////////// -->
   <!-- hot link_1...........................///////////// -->
 

 <!-- hot link_1...........................///////////// -->
   <!-- General Queries Section -->
   

   <!-- General Queries Section -->
   


    <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function UiSchoolFees() {
  return (
    <LegacyContentPage
      title={`University of Ibadan (UI) Tuition Fees ${startYear} | Updated Breakdown by Faculty | MySearch Query`}
      description={`Check the updated ${startYear} tuition fees for the University of Ibadan (UI). See cost breakdown by faculty including Medicine, Law, Engineering, and more.`}
      html={html}
    >
      <HotLinks title="Hot links" links={mergeHotLinks(hotLink1, hotLink2, jambHotLink6)} />
    </LegacyContentPage>
  );
}
