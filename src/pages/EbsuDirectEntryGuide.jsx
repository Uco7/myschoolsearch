import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { hotLink1, hotLink2 } from "../data/hotLinksData";

const html = `<!--include  header file -->
    <!-- General Queries Section -->
    

    <!-- General Queries Section -->
   
    
    <div class="image">   </div>
    <div class="container">
        <div class="section-txt"> 
        <h1>How to Apply for Direct Entry into EBSU</h1>
        <p>Ebonyi State University (EBSU) offers <strong>Direct Entry (DE) admission</strong> for candidates with OND, NCE, IJMB, JUPEB, or other recognized qualifications who wish to gain admission into <strong>200 level</strong>.</p>
    </div>
    <div class="section-txt"> 
        <h2 class="text-color">Eligibility Requirements</h2>
        <ul class="child-ul">
            <li>Minimum of <strong>Upper Credit</strong> in OND, HND, or NCE.</li>
            <li>Minimum of <strong>Merit</strong> in JUPEB or IJMB.</li>
            <li>Five (5) credit passes in SSCE (WAEC/NECO/NABTEB), including English and Mathematics.</li>
            <li>Must obtain the <a href="https://www.jamb.gov.ng" target="_blank">JAMB Direct Entry (DE) form</a> and select EBSU as the first choice.</li>
        </ul>
        </div>
        <h2 class="text-color">Steps to Apply</h2>
        <h3>Step 1: Purchase JAMB Direct Entry Form</h3>
        <ul class="child-ul">
            <li>Visit <a href="https://www.jamb.gov.ng" target="_blank">JAMB website</a> to create a profile and generate your Profile Code.</li>
            <li>Purchase the DE form from an accredited bank or online.</li>
            <li>Fill out the form and select <strong>Ebonyi State University (EBSU)</strong> as your first choice.</li>
        </ul>
        
        <h3 class="text-color">Step 2: Apply on EBSU Portal</h3>
        <ul class="child-ul">
            <li>Visit the <a href="https://ebsu.edu.ng" target="_blank">EBSU Admission Portal</a>.</li>
            <li>Fill in your personal details and academic qualifications.</li>
            <li>Upload your academic transcripts, O’level results, and JAMB DE slip.</li>
            <li>Pay the required <strong>screening fee</strong> online.</li>
        </ul>
        
        <h3 class="text-color">Step 3: Screening and Admission</h3>
        <ul class="child-ul">
            <li>Wait for EBSU to review your application.</li>
            <li>Shortlisted candidates will be invited for screening.</li>
            <li>If successful, you will receive a <strong>provisional admission offer</strong> into 200 level.</li>
        </ul>
        
        <h2 class="note">Important Notes</h2>
        <ul>
            <li>Ensure all uploaded documents are clear and authentic.</li>
            <li>Check the <a href="https://ebsu.edu.ng" target="_blank">EBSU admission portal</a> regularly for updates.</li>
        </ul>
        <div class="section-txt">
        <h2>Conclusion</h2>
        <p>To apply for Direct Entry into EBSU, obtain the <a href="https://www.jamb.gov.ng" target="_blank">JAMB DE form</a>, register on the <a href="https://ebsu.edu.ng" target="_blank">EBSU portal</a>, and complete the screening process. Best of luck!</p>
        
       
        <a href="https://ebsu.edu.ng" class="btn" target="_blank">Apply Now</a>
    </div>
    </div>
    

    <!-- hot link_1...........................///////////// -->
    

    <!-- hot link_1...........................///////////// -->
        <!-- foooter................./////////////////// -->`;

export default function EbsuDirectEntryGuide() {
  return (
    <LegacyContentPage
      title="How to Apply for Direct Entry into EBSU | MySearch Query"
      description="Learn how to apply for Direct Entry (DE) into Ebonyi State University (EBSU). Find the eligibility requirements, steps to apply, and the screening process."
      html={html}
    >
      <HotLinks title="Hot links" links={hotLink1} />
      <HotLinks title="Hot links" links={hotLink2} />
    </LegacyContentPage>
  );
}
