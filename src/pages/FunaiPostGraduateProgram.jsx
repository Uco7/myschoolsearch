import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import AdmissionQueryLink from "../components/AdmissionQueryLink";
import { hotLink1, hotLink2 } from "../data/hotLinksData";

const html = `<!--include  header file -->
    <!-- General Queries Section -->
    

    <!-- General Queries Section -->
    <div class="heading-top">
        <h1>Apply for Postgraduate Programs at FUNAI</h1>
    </div>

    <div class="container  section-txt">
        <p>
           <strong>FUNAI offers a variety of postgraduate programs for qualified candidates. The application process involves:</strong> 
        </p>
        <ul class="child-ul"></ul>
            <li>Visit the <a href="/funai-post-gradute-guide-procedures/guide" target="_blank">Postgraduate Application Portal</a>.</li>
            <li>Create an account and fill out the application form.</li>
            <li>Upload necessary documents, including transcripts and certificates.</li>
            <li>Pay the application fee as directed on the portal.</li>
            <li>Submit your application and await further instructions.</li>
        </ul>
        <p>For more details, visit the official website or contact the admissions office.</p>
    </div>
      <!-- General Queries Section -->
      

      <!-- General Queries Section -->
    <div class="heading">
        <h1>FUNAI Scholarship Opportunities</h1>
    </div>

    <div class="container section-txt">
        <p> <strong> FUNAI offers various scholarship opportunities to support new students. These include:</strong></p>
        <ul class="child-ul"></ul>
            <li>Merit-based scholarships</li>
            <li>Need-based scholarships</li>
            <li>Scholarships for students in STEM fields</li>
        </ul>
        <p>Learn more about available scholarships and how to apply:</p>
        <p><a href="https://funai.edu.ng/scholarships" target="_blank">Click here for scholarship details</a>.</p>
    </div>
    

    <!-- hot link_1...........................///////////// -->
    

    <!-- hot link_1...........................///////////// -->

        <!-- foooter................./////////////////// -->`;

export default function FunaiPostGraduateProgram() {
  return (
    <LegacyContentPage
      title="Postgraduate Programs & Scholarships at FUNAI | MySearch Query"
      description="Apply for postgraduate programs at FUNAI. Explore the application process, scholarship opportunities, and more at the official FUNAI website."
      html={html}
    >
      <AdmissionQueryLink />
      <HotLinks title="Hot links" links={hotLink1} />
      <HotLinks title="Hot links" links={hotLink2} />
    </LegacyContentPage>
  );
}
