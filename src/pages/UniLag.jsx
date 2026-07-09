import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { hotLink1, hotLink2, jambHotLink6, mergeHotLinks } from "../data/hotLinksData";

const html = `<!-- header...........................///////////// -->
    
    <div class="heading-top">
    <h1>University of Lagos (UNILAG) Admission Requirements</h1>
    <p>To gain admission into UNILAG, you must meet the following requirements:</p>
</div>
    <div class="container my-5">
        <ul>
            <li>Have at least five (5) credit passes in relevant subjects, including English and Mathematics.</li>
            <li>Be at least 16 years old at the time of admission.</li>
            <li>Register for JAMB UTME and select UNILAG as your first choice.</li>
            <li>Meet UNILAG's institutional JAMB cut-off mark for the current admission session — this is a floor, not a guarantee, and competitive departments (Medicine, Law, Engineering) typically set a higher departmental cut-off than the general institutional minimum. Always confirm the exact current-session figure on UNILAG's official admission portal or JAMB CAPS rather than relying on a past year's number.</li>
            <li>Apply for and pass the UNILAG Post-UTME screening.</li>
            <li>Meet the specific departmental cut-off mark.</li>
            <li>Complete the necessary admission procedures and clearance.</li>
        </ul>
    </div>
     <!-- General Queries Section -->
     

     <!-- General Queries Section -->
        <!-- hot link_1...........................///////////// -->
 

 <!-- hot link_1...........................///////////// -->
   <!-- hot link_1...........................///////////// -->
 

 <!-- hot link_1...........................///////////// -->

  
  <script src="js/index.js"></script>`;

export default function UniLag() {
  return (
    <LegacyContentPage
      title="University of Lagos (UNILAG) Admission Requirements | MySearch Query"
      description="Detailed guide on the admission requirements for the University of Lagos (UNILAG) including JAMB cut-off mark, age limit, O'level requirements, and more."
      html={html}
    >
      <HotLinks title="Hot links" links={mergeHotLinks(hotLink1, hotLink2, jambHotLink6)} />
    </LegacyContentPage>
  );
}
