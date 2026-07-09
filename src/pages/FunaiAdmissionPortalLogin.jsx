import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import AdmissionQueryLink from "../components/AdmissionQueryLink";
import { hotLink1, hotLink2 } from "../data/hotLinksData";

const html = `<!--include  header file -->
    <!-- General Queries Section -->
    

    <!-- General Queries Section -->
    <header class="heading-top">
        <h1>FUNAI Admission Portal Login</h1>
    </header>
    

    <!-- hot link_1...........................///////////// -->
    <div class="container section-txt">
        <p>Access the FUNAI Admission Portal to manage your application process:</p>
        <p><a href="https://portal.funai.edu.ng" target="_blank">Click here to login to the Admission Portal</a></p>
        <p>For any issues with your login credentials, contact the admissions office for assistance.</p>
    </div>
      <!-- General Queries Section -->
      

      <!-- General Queries Section -->
      

      <!-- hot link_1...........................///////////// -->

    <!-- foooter................./////////////////// -->`;

export default function FunaiAdmissionPortalLogin() {
  return (
    <LegacyContentPage
      title="FUNAI Admission Portal Login | Access Your Application | MySearch Query"
      description="Login to the official FUNAI Admission Portal to manage your application. Access screening info, admission status, and support contacts easily."
      html={html}
    >
      <AdmissionQueryLink />
      <HotLinks title="Hot links" links={hotLink2} />
      <HotLinks title="Hot links" links={hotLink1} />
    </LegacyContentPage>
  );
}
