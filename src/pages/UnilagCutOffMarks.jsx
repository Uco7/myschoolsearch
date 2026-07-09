import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { hotLink1, hotLink2, jambHotLink6, mergeHotLinks } from "../data/hotLinksData";

const html = `<!-- header...........................///////////// -->

    <header class="text-center py-4 heading-top">
        <h1>Engineering Courses in UNILAG & Their Cut-off Marks</h1>
        <p>Find out the required JAMB scores for different engineering programs at UNILAG</p>
    </header>

    <div class="container my-5" >
        <h2>Available Engineering Courses in UNILAG</h2>
        <ul class="list-group hover-ul">
            <li class="list-group-item">Mechanical Engineering</li>
            <li class="list-group-item">Civil Engineering</li>
            <li class="list-group-item">Electrical & Electronics Engineering</li>
            <li class="list-group-item">Chemical Engineering</li>
            <li class="list-group-item">Computer Engineering</li>
            <li class="list-group-item">Biomedical Engineering</li>
            <li class="list-group-item">Petroleum & Gas Engineering</li>
            <li class="list-group-item">Systems Engineering</li>
        </ul>
    </div>
     <!-- General Queries Section -->
     

     <!-- General Queries Section -->

    <div class="container my-5 table-container" >
        <h2>JAMB Cut-off Marks for Engineering Courses</h2>
        <table class="" id="tb">
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Cut-off Mark</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Mechanical Engineering</td><td>250</td></tr>
                <tr><td>Civil Engineering</td><td>245</td></tr>
                <tr><td>Electrical & Electronics Engineering</td><td>255</td></tr>
                <tr><td>Chemical Engineering</td><td>250</td></tr>
                <tr><td>Computer Engineering</td><td>260</td></tr>
                <tr><td>Biomedical Engineering</td><td>240</td></tr>
                <tr><td>Petroleum & Gas Engineering</td><td>245</td></tr>
                <tr><td>Systems Engineering</td><td>240</td></tr>
            </tbody>
        </table>
    </div>
     <!-- hot link_1...........................///////////// -->
 

 <!-- hot link_1...........................///////////// -->
   <!-- hot link_1...........................///////////// -->
 

 <!-- hot link_1...........................///////////// -->

    <footer >
        <p>&copy; 2025 UNILAG Engineering Guide | Designed for Aspirants</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


     <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function UnilagCutOffMarks() {
  return (
    <LegacyContentPage
      title="UNILAG Engineering Courses & Cut-off Marks 2024/2025 \u2013 Complete List | MySearch Query"
      description="Explore all engineering courses offered at UNILAG and their JAMB cut-off marks for the 2024/2025 academic session. Includes Mechanical, Civil, Computer, Petroleum & more."
      html={html}
    >
      <HotLinks title="Hot links" links={mergeHotLinks(hotLink1, hotLink2, jambHotLink6)} />
    </LegacyContentPage>
  );
}
