import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { hotLink1, hotLink2, jambHotLink6, mergeHotLinks } from "../data/hotLinksData";

const html = `<!-- header...........................///////////// -->


    <header class=" heading-top">
        <h1>Law Admission Requirements for OAU</h1>
        <p>Everything you need to know about gaining admission to study Law at Obafemi Awolowo University.</p>
    </header>

    <div class="container my-5">
        <section id="requirements" class="section-txt">
            <h2 class="text-color">General Admission Requirements</h2>
            <p>To gain admission into the Faculty of Law at OAU, candidates must meet the following requirements:</p>
            <ul>
                <li>Minimum of 5 credit passes** in SSCE (WAEC/NECO) including English Language, Mathematics, Literature in English, Government, and one other relevant subject.</li>
                <li>A minimum JAMB score of 200** (subject to change depending on competition).</li>
                <li>Participation in the **Post-UTME screening** conducted by OAU.</li>
            </ul>
        </section>
 <!-- General Queries Section -->
 

 <!-- General Queries Section -->
        <section id="utme" class="mt-4 section-txt">
            <h2 class="text-color">UTME Subject Combination</h2>
            <p>Candidates applying through JAMB must write the following subjects:</p>
            <ul>
                <li>English Language (Compulsory)</li>
                <li>Literature in English</li>
                <li>Government or History</li>
                <li>Any other relevant subject</li>
            </ul>
        </section>

        <section id="direct-entry" class="mt-4 section-txt">
            <h2 class="text-color">Direct Entry Requirements</h2>
            <p>Candidates applying for **Direct Entry** must meet the following criteria:</p>
            <ul>
                <li>At least **two A-Level passes** in subjects including Literature in English, Government, or History.</li>
                <li>Holders of **Diploma in Law** with upper credit from recognized institutions may be considered.</li>
                <li>Must also meet the O-Level requirements (5 credit passes).</li>
            </ul>
        </section>
    </div>
<!-- hot link_1...........................///////////// -->


<!-- hot link_1...........................///////////// -->
 <!-- hot link_1...........................///////////// -->
 

 <!-- hot link_1...........................///////////// -->
        

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


     <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function OauAdmissionRequirement() {
  return (
    <LegacyContentPage
      title="Law Admission Requirements for OAU | MySearch Query"
      description="Learn about the general admission requirements for studying Law at Obafemi Awolowo University (OAU). Includes JAMB score, subject combination, and Direct Entry criteria."
      html={html}
    >
      <HotLinks title="Hot links" links={mergeHotLinks(hotLink1, hotLink2, jambHotLink6)} />
    </LegacyContentPage>
  );
}
