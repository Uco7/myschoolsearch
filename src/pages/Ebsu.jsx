import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { hotLink1, hotLink2 } from "../data/hotLinksData";

const html = `<!--include  header file -->
    <!-- General Queries Section -->
    

    <!-- General Queries Section -->
    <div class="image">   </div>
    <div class="container my-5">
        <h1>How to Gain Admission into Ebonyi State University (EBSU)</h1>
        <p>Gaining admission into Ebonyi State University (EBSU) requires meeting specific requirements and following the right application procedures.</p>
        <h2>Step-by-Step Guide</h2>
        <ul>
            <li>Meet the general admission requirements.</li>
            <li>Register and sit for JAMB UTME.</li>
            <li>Apply for EBSU Post-UTME screening.</li>
            <li>Check the departmental cut-off mark.</li>
            <li>Wait for the admission list.</li>
            <li>Pay the acceptance and school fees.</li>
            <li>Complete clearance and registration.</li>
            <li>Resume and begin lectures.</li>
        </ul>
    </div>
    <!-- hot link_1...........................///////////// -->

<!-- hot link_1...........................///////////// -->
 <!-- hot link_1...........................///////////// -->

<!-- hot link_1...........................///////////// -->
        <!-- foooter................./////////////////// -->`;

export default function Ebsu() {
  return (
    <LegacyContentPage
      title="How to Gain Admission into EBSU | MySearch Query"
      description="Follow this step-by-step guide on how to gain admission into Ebonyi State University (EBSU), including JAMB UTME registration, Post-UTME screening, and more."
      html={html}
    >
      <HotLinks title="Hot links" links={hotLink2} />
      <HotLinks title="Hot links" links={hotLink1} />
    </LegacyContentPage>
  );
}
