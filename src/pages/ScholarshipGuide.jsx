import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { hotLink1, jambHotLink6 } from "../data/hotLinksData";

const html = `<!--include  header file -->
   <!-- hot link_1...........................///////////// -->
   

   <!-- hot link_1...........................///////////// -->
    <div class="heading-top">
    <h1>Scholarships for Nigerian University Students</h1>
    <p>Here are some scholarships available for Nigerian university students with application links:</p>
</div>
    <div class="container">
        <h2>1. Federal Government Scholarships</h2>
        <ul>
            <li>For undergraduate and postgraduate students. <br>
                <a href="https://fsbn.com.ng/" target="_blank">Apply Here</a>
            </li>
        </ul>

        <h2>2. PTDF (Petroleum Technology Development Fund) Scholarship</h2>
        <ul>
            <li>For students in oil and gas-related fields. <br>
                <a href="https://ptdf.gov.ng/scholarship/" target="_blank">Apply Here</a>
            </li>
        </ul>

        <h2>3. NNPC/TotalEnergies Scholarship</h2>
        <ul>
            <li>For 100-level students in accredited Nigerian universities. <br>
                <a href="https://scholarships.totalenergiescsredu.com/" target="_blank">Apply Here</a>
            </li>
        </ul>

        <h2>4. MTN Foundation Scholarship</h2>
        <ul>
            <li>For high-achieving students in STEM fields. <br>
                <a href="https://www.mtn.ng/scholarships/" target="_blank">Apply Here</a>
            </li>
        </ul>

        <h2>5. Agbami Medical and Engineering Scholarship</h2>
        <ul>
            <li>For students in Medicine, Pharmacy, and Engineering. <br>
                <a href="https://www.agbami-scholarship.com/" target="_blank">Apply Here</a>
            </li>
        </ul>

        <h2>6. Shell (SPDC) Scholarship</h2>
        <ul>
            <li>For students in accredited Nigerian universities. <br>
                <a href="https://www.shell.com.ng/careers/students-and-graduates/scholarships.html" target="_blank">Apply Here</a>
            </li>
        </ul>

        <h2>7. Jim Ovia Foundation Scholarship</h2>
        <ul>
            <li>For undergraduate students based on academic excellence. <br>
                <a href="https://www.jimoviafoundation.org/" target="_blank">Apply Here</a>
            </li>
        </ul>

        <h2>8. Seplat JV Scholarship</h2>
        <ul>
            <li>For students in federal and state universities. <br>
                <a href="https://seplatscholarship.com/" target="_blank">Apply Here</a>
            </li>
        </ul>

        <h2>9. NLNG (Nigeria Liquefied Natural Gas) Scholarship</h2>
        <ul>
            <li>For undergraduate students in Nigerian universities. <br>
                <a href="https://www.nigerialng.com/Our-CSR/Pages/Scholarships.aspx" target="_blank">Apply Here</a>
            </li>
        </ul>

        <h2>10. Commonwealth Scholarship</h2>
        <ul>
            <li>For Nigerian students to study abroad with full funding. <br>
                <a href="https://cscuk.fcdo.gov.uk/" target="_blank">Apply Here</a>
            </li>
        </ul>
    </div>
      <!-- General Queries Section -->
      

      <!-- General Queries Section -->
 <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function ScholarshipGuide() {
  return (
    <LegacyContentPage
      title="Scholarships for Nigerian University Students | MySearch Query"
      description="Explore a wide range of scholarships available for Nigerian university students, including government-funded, private, and corporate scholarships. Find detailed information and application links."
      html={html}
    >
      <HotLinks title="Hot links" links={hotLink1} />
      <HotLinks title="Hot links" links={jambHotLink6} />
    </LegacyContentPage>
  );
}
