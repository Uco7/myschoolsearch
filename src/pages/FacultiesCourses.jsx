import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";

const html = `<div class="container">
    <h2>Faculties and Their Courses in Nigerian Universities</h2>

    <!-- Faculty of Agriculture -->
    <div class="faculty">
      <h3 onclick="toggleCourses('agriculture')">Faculty of Agriculture</h3>
      <div id="agriculture" class="courses">
        <ul>
          <li onclick="toggleCourseDetails('agriculture-economics')">Agricultural Economics</li>
          <li onclick="toggleCourseDetails('animal-science')">Animal Science</li>
          <li onclick="toggleCourseDetails('crop-science')">Crop Science</li>
          <li onclick="toggleCourseDetails('soil-science')">Soil Science</li>
          <li onclick="toggleCourseDetails('fisheries-aquaculture')">Fisheries and Aquaculture</li>
        </ul>
      </div>

      <!-- Course Details for Agricultural Economics -->
      <div id="agriculture-economics" class="course-details">
        <h4>Course Requirements for Agricultural Economics</h4>
        <div class="requirements">
          <ul>
            <li>Minimum of 5 O'Level credits (English, Mathematics, Biology, Chemistry, and Physics)</li>
            <li>UTME subjects: English, Chemistry, Biology, and Physics</li>
          </ul>
        </div>
        <h4>Best Universities to Study Agricultural Economics</h4>
        <div class="universities">
          <ul>
            <li>University of Ibadan (UI)</li>
            <li>University of Agriculture, Abeokuta (UNAAB)</li>
            <li>Ahmadu Bello University (ABU)</li>
            <li>University of Nigeria, Nsukka (UNN)</li>
          </ul>
        </div>
      </div>

      <!-- Course Details for Animal Science -->
      <div id="animal-science" class="course-details">
        <h4>Course Requirements for Animal Science</h4>
        <div class="requirements">
          <ul>
            <li>Minimum of 5 O'Level credits (English, Mathematics, Biology, Chemistry, and Physics)</li>
            <li>UTME subjects: English, Biology, Chemistry, and Physics</li>
          </ul>
        </div>
        <h4>Best Universities to Study Animal Science</h4>
        <div class="universities">
          <ul>
            <li>University of Ibadan (UI)</li>
            <li>University of Nigeria, Nsukka (UNN)</li>
            <li>Obafemi Awolowo University (OAU)</li>
          </ul>
        </div>
      </div>

      <!-- Course Details for Crop Science -->
      <div id="crop-science" class="course-details">
        <h4>Course Requirements for Crop Science</h4>
        <div class="requirements">
          <ul>
            <li>Minimum of 5 O'Level credits (English, Mathematics, Biology, Chemistry, and Physics)</li>
            <li>UTME subjects: English, Chemistry, Biology, and Physics</li>
          </ul>
        </div>
        <h4>Best Universities to Study Crop Science</h4>
        <div class="universities">
          <ul>
            <li>University of Ibadan (UI)</li>
            <li>University of Agriculture, Makurdi (UAM)</li>
            <li>Federal University of Agriculture, Abeokuta (FUNAAB)</li>
          </ul>
        </div>
      </div>

      <!-- Course Details for Soil Science -->
      <div id="soil-science" class="course-details">
        <h4>Course Requirements for Soil Science</h4>
        <div class="requirements">
          <ul>
            <li>Minimum of 5 O'Level credits (English, Mathematics, Biology, Chemistry, and Physics)</li>
            <li>UTME subjects: English, Chemistry, Biology, and Physics</li>
          </ul>
        </div>
        <h4>Best Universities to Study Soil Science</h4>
        <div class="universities">
          <ul>
            <li>University of Ibadan (UI)</li>
            <li>University of Agriculture, Makurdi (UAM)</li>
            <li>University of Nigeria, Nsukka (UNN)</li>
          </ul>
        </div>
      </div>

      <!-- Course Details for Fisheries and Aquaculture -->
      <div id="fisheries-aquaculture" class="course-details">
        <h4>Course Requirements for Fisheries and Aquaculture</h4>
        <div class="requirements">
          <ul>
            <li>Minimum of 5 O'Level credits (English, Mathematics, Biology, Chemistry, and Physics)</li>
            <li>UTME subjects: English, Biology, Chemistry, and Physics</li>
          </ul>
        </div>
        <h4>Best Universities to Study Fisheries and Aquaculture</h4>
        <div class="universities">
          <ul>
            <li>University of Ibadan (UI)</li>
            <li>University of Agriculture, Makurdi (UAM)</li>
            <li>Federal University of Agriculture, Abeokuta (FUNAAB)</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Faculty of Arts/Humanities -->
    <div class="faculty">
      <h3 onclick="toggleCourses('arts')">Faculty of Arts/Humanities</h3>
      <div id="arts" class="courses">
        <ul>
          <li onclick="toggleCourseDetails('english-language')">English Language</li>
          <li onclick="toggleCourseDetails('history-international-studies')">History and International Studies</li>
          <li onclick="toggleCourseDetails('philosophy')">Philosophy</li>
          <li onclick="toggleCourseDetails('linguistics')">Linguistics</li>
          <li onclick="toggleCourseDetails('religious-studies')">Religious Studies</li>
        </ul>
      </div>

      <!-- Course Details for English Language -->
      <div id="english-language" class="course-details">
        <h4>Course Requirements for English Language</h4>
        <div class="requirements">
          <ul>
            <li>Minimum of 5 O'Level credits (English, Mathematics, Literature, History, and any other subject)</li>
            <li>UTME subjects: English, Literature, and any other two subjects</li>
          </ul>
        </div>
        <h4>Best Universities to Study English Language</h4>
        <div class="universities">
          <ul>
            <li>University of Lagos (UNILAG)</li>
            <li>University of Nigeria, Nsukka (UNN)</li>
            <li>Obafemi Awolowo University (OAU)</li>
            <li>University of Ibadan (UI)</li>
          </ul>
        </div>
      </div>

      <!-- Course Details for History and International Studies -->
      <div id="history-international-studies" class="course-details">
        <h4>Course Requirements for History and International Studies</h4>
        <div class="requirements">
          <ul>
            <li>Minimum of 5 O'Level credits (English, Mathematics, History, and any other two subjects)</li>
            <li>UTME subjects: English, History, and any other two subjects</li>
          </ul>
        </div>
        <h4>Best Universities to Study History and International Studies</h4>
        <div class="universities">
          <ul>
            <li>University of Lagos (UNILAG)</li>
            <li>University of Ibadan (UI)</li>
            <li>University of Nigeria, Nsukka (UNN)</li>
            <li>Obafemi Awolowo University (OAU)</li>
          </ul>
        </div>
      </div>

      <!-- Repeat similar sections for other courses under Faculty of Arts -->
    </div>

    <script>
      let currentOpenCourse = null; // To track the currently open course

      function toggleCourses(facultyId) {
        const courseList = document.getElementById(facultyId);
        const allCourseLists = document.querySelectorAll('.courses');
        
        // Close all other course lists
        allCourseLists.forEach(list => {
          if (list !== courseList) {
            list.style.display = 'none';
          }
        });

        // Toggle current faculty course list
        courseList.style.display = courseList.style.display === 'block' ? 'none' : 'block';
      }

      function toggleCourseDetails(courseId) {
        const courseDetails = document.getElementById(courseId);
        
        if (currentOpenCourse && currentOpenCourse !== courseDetails) {
          currentOpenCourse.style.display = 'none'; // Close previous course
        }

        // Toggle the clicked course details
        courseDetails.style.display = courseDetails.style.display === 'block' ? 'none' : 'block';
        
        currentOpenCourse = courseDetails.style.display === 'block' ? courseDetails : null;
      }
    </script>
  </div>
 <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function FacultiesCourses() {
  return (
    <LegacyContentPage
      title="Faculties and Courses Offered in Nigerian Universities | MySearch Query"
      description="Explore a comprehensive list of faculties and courses offered across Nigerian universities. Discover requirements and available universities for each course."
      html={html}
    >
      <HotLinks title="Hot links" links={jambHotLink6} />
    </LegacyContentPage>
  );
}
