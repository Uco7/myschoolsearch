import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { hotLink2, jambHotLink6 } from "../data/hotLinksData";

const html = `<!-- header...........................///////////// -->
   <!-- hot link_1...........................///////////// -->


<!-- hot link_1...........................///////////// -->
    <div class="heading-top">
    <h1>Obafemi Awolowo University (OAU) Post-UTME Screening Date</h1>
    <p>Obafemi Awolowo University (OAU) conducts Post-UTME screening for admission seekers every year.</p>
</div>
    <div class="container my-5">
        <h2 class="text-color">Screening Schedule</h2>
        <p>The Post-UTME screening for OAU is scheduled to hold on <strong>[Insert Date Here]</strong>. Candidates are advised to check their email and the university portal for updates.</p>

        <h2 class="text-color">Eligibility Criteria</h2>
            <li>Visit the official OAU admission portal.</li>
        <ul class="child-ul"  >
            <li>Candidates must have chosen OAU as their first choice in JAMB.</li>
            <li>A minimum JAMB score of [Insert Cut-off Mark Here] is required.</li>
            <li>Must have at least five (5) credit passes in relevant subjects, including Mathematics and English.</li>
        </ul>

        <h2 class="text-color">How to Apply</h2>
        <ul class="child-ul">
            <li>Visit the official OAU admission portal.</li>
            <li>Log in with your JAMB registration number.</li>
            <li>Fill in the required details and upload necessary documents.</li>
            <li>Make the required payment for the screening.</li>
            <li>Print your exam slip after registration.</li>
        </ul>

        <p>For more information, visit the <a href="https://www.oauife.edu.ng" target="_blank">OAU official website</a>.</p>
    </div>
    <!-- General Queries Section -->
    

    <!-- General Queries Section -->

      <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function Oau() {
  return (
    <LegacyContentPage
      title="OAU Post-UTME Screening Date | MySearch Query"
      description="Get the latest information on the OAU Post-UTME Screening Date, eligibility criteria, and application procedure for admission seekers."
      html={html}
    >
      <HotLinks title="Hot links" links={hotLink2} />
      <HotLinks title="Hot links" links={jambHotLink6} />
    </LegacyContentPage>
  );
}
