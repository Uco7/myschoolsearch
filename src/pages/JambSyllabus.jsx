import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";

const html = `<!--include  header file -->
<style>h1,h2{text-align: left};</style>
    <div class="container">
        <h1>JAMB 2025 Information</h1>

        <section id="syllabus">
            <h2>JAMB 2025 Syllabus PDF Download</h2>
            <p>For those preparing for the 2025 JAMB exam, access to the official JAMB syllabus is crucial. The syllabus outlines the subjects, topics, and guidelines for each exam subject. You can download it for free:</p>
            <ul>
                <li><a href="https://www.jamb.gov.ng" target="_blank">Download the JAMB 2025 Syllabus</a></li>
            </ul>
        </section>

        <section id="subject-syllabus">
            <h2>JAMB Syllabus for Physics, Chemistry, and Other Subjects</h2>
            <p>The JAMB syllabus for various subjects like Physics, Chemistry, Biology, and Mathematics is designed to guide candidates in understanding what to focus on during their studies. Here’s an overview:</p>
            <ul>
                <li><strong>Physics:</strong> Mechanics, waves, electricity, magnetism, optics.</li>
                <li><strong>Chemistry:</strong> Organic chemistry, inorganic chemistry, physical chemistry.</li>
            </ul>
            <p>For specific syllabi, visit the official JAMB website to download PDFs for each subject.</p>
        </section>

        <section id="brochure">
            <h2>JAMB Brochure for All Courses</h2>
            <p>The JAMB brochure contains all the important information about courses offered in Nigerian universities, their entry requirements, and the subject combinations needed for each course. You can access the full brochure here:</p>
            <ul>
                <li><a href="https://www.jamb.gov.ng" target="_blank">Download JAMB Brochure</a></li>
            </ul>
        </section>

        <section id="subject-combinations">
            <h2>JAMB Subject Combination for Medicine, Law, and Engineering</h2>
            <p>Each course in Nigerian universities requires specific subject combinations for JAMB. Below are the popular courses and their required subject combinations:</p>
            <ul>
                <li><strong>Medicine:</strong> English, Physics, Chemistry, Biology.</li>
                <li><strong>Law:</strong> English, Literature in English, Government/History, Any other subject.</li>
                <li><strong>Engineering:</strong> English, Mathematics, Physics, Chemistry.</li>
            </ul>
        </section>

        <section id="courses-offered">
            <h2>Courses Offered in Nigerian Universities and Requirements</h2>
            <p>The JAMB brochure also lists all available courses in Nigerian universities along with their entry requirements. You can view the full list of courses and their specific requirements here:</p>
            <ul>
                <li><a href="https://www.jamb.gov.ng" target="_blank">View Courses and Requirements</a></li>
            </ul>
        </section>
    </div>
    <div class="container " style="display: non;">
        <h2>2025 Integrated Brochure & Syllabus System</h2>

        <iframe src="https://ibass.jamb.gov.ng/qr/downloads.php" frameborder="0" style="width: 100%;height: 400px;"></iframe>
    </div>

 <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function JambSyllabus() {
  return (
    <LegacyContentPage
      title="JAMB 2025 Information | MySearch Query"
      description="Get the latest updates on JAMB 2025 including syllabus download, exam registration guidelines, dates, and helpful preparation tips for students."
      html={html}
    >
      <HotLinks title="Hot links" links={jambHotLink6} />
    </LegacyContentPage>
  );
}
