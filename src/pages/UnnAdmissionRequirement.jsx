import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";

const html = `<!--include  header file -->
    <div class="image">   </div>

    <div class="container mt-4">
        <h2 class="text-center">UNN Cut-off Marks for All Courses</h2>
        
        <!-- Search Bar -->
        <div class="mb-3">
            <input type="text" id="searchInput" class="form-control" placeholder="Search for a course..." onkeyup="searchCourse()">
        </div>

        <!-- Cut-off Mark Table -->
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>Faculty</th>
                        <th>Course</th>
                        <th>Cut-off Mark</th>
                    </tr>
                </thead>
                <tbody id="courseTable">
                    <tr><td>Medicine</td><td>Medicine & Surgery</td><td>280+</td></tr>
                    <tr><td>Law</td><td>Law</td><td>260+</td></tr>
                    <tr><td>Engineering</td><td>Electrical Engineering</td><td>230+</td></tr>
                    <tr><td>Engineering</td><td>Civil Engineering</td><td>220+</td></tr>
                    <tr><td>Engineering</td><td>Mechanical Engineering</td><td>225+</td></tr>
                    <tr><td>Business</td><td>Business Administration</td><td>200+</td></tr>
                    <tr><td>Science</td><td>Computer Science</td><td>200+</td></tr>
                    <tr><td>Science</td><td>Microbiology</td><td>190+</td></tr>
                    <tr><td>Social Science</td><td>Economics</td><td>200+</td></tr>
                    <tr><td>Social Science</td><td>Political Science</td><td>180+</td></tr>
                    <tr><td>Education</td><td>Education Management</td><td>160+</td></tr>
                    <tr><td>Education</td><td>Educational Psychology</td><td>160+</td></tr>
                    <tr><td>Agriculture</td><td>Agricultural Science</td><td>160+</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Scroll to Top Button -->
    <button class="scroll-top" onclick="scrollToTop()">↑ Top</button>

    <script>
        // Search Function
        function searchCourse() {
            let input = document.getElementById("searchInput").value.toLowerCase();
            let table = document.getElementById("courseTable");
            let rows = table.getElementsByTagName("tr");

            for (let i = 0; i < rows.length; i++) {
                let course = rows[i].getElementsByTagName("td")[1];
                if (course) {
                    let textValue = course.textContent || course.innerText;
                    rows[i].style.display = textValue.toLowerCase().indexOf(input) > -1 ? "" : "none";
                }
            }
        }

        // Scroll to Top Function
        window.onscroll = function() {
            let scrollTopBtn = document.querySelector(".scroll-top");
            if (document.documentElement.scrollTop > 100) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    </script>
    

     <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function UnnAdmissionRequirement() {
  return (
    <LegacyContentPage
      title="UNN Cut-off Marks 2024/2025 for All Courses \u2013 Updated List | MySearch Query"
      description="Check the latest UNN cut-off marks for all courses and faculties for the 2024/2025 academic session. Includes Medicine, Law, Engineering, and more."
      html={html}
    >
      <HotLinks title="Hot links" links={jambHotLink6} />
    </LegacyContentPage>
  );
}
