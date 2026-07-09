import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { hotLink1, hotLink2 } from "../data/hotLinksData";

const html = `<!--include  header file -->
     <!-- General Queries Section -->
     

     <!-- General Queries Section -->
    <div class="image">   </div>

<div class="container">
    <div class="section-txt"> 
    <h1>How Much is EBSU School Fees for New Students?</h1>
    <p>Ebonyi State University (EBSU) is one of the leading state universities in Nigeria, offering various undergraduate programs across multiple faculties. For new students (freshers), the school fees vary depending on the faculty and course of study.</p>

    <h2>EBSU School Fees for New Students (2025)</h2>
    <p>The school fees for newly admitted students at EBSU typically range between <span class="highlight">₦120,000 – ₦250,000</span>, depending on the program and whether the student is an indigene or non-indigene of Ebonyi State.</p>
    </div>
    <div class="section-txt"> 
    <h2 class="text-color">Estimated Fees by Category</h2>
    <ul class="child-ul">
        <li><strong>Indigenes (Ebonyi State Students):</strong> ₦120,000 – ₦150,000</li>
        <li><strong>Non-Indigenes:</strong> ₦180,000 – ₦250,000</li>
        <li><strong>Medicine and Surgery:</strong> ₦250,000 – ₦300,000</li>
        <li><strong>Law and Engineering:</strong> ₦180,000 – ₦250,000</li>
        <li><strong>Other Courses:</strong> ₦120,000 – ₦200,000</li>
    </ul>
    </div>
    <div class="section-txt">

    <h2 class="text-color">Additional Charges</h2>
    <ul class="child-ul">
        <li><strong>Acceptance Fee:</strong> ₦30,000 – ₦50,000</li>
        <li><strong>Accommodation Fee (Optional):</strong> ₦40,000 – ₦70,000</li>
        <li><strong>Departmental and Faculty Dues:</strong> ₦5,000 – ₦15,000</li>
        <li><strong>Medical and Registration Fees:</strong> ₦10,000 – ₦20,000</li>
    </ul>
</div>
<div class="section-txt">
    <h2 class="text-color">Payment Guidelines</h2>
    <ul class="child-ul">
        <li>New students must pay their acceptance fee first to confirm their admission.</li>
        <li>School fees are usually paid through the official EBSU payment portal.</li>
        <li>Late payment may attract penalties or prevent students from completing their registration.</li>
    </ul>

</div>
<div class="section-tx">
    <h2 class="text-color">Conclusion</h2>
    <p>The school fees for new students at EBSU depend on the course of study and whether the student is an indigene or non-indigene. Prospective students are advised to check the university's official website or visit the school for the latest updates on tuition fees and other payments.</p>
</div>
</div>

<!-- hot link_1...........................///////////// -->

<!-- hot link_1...........................///////////// -->
 <!-- hot link_1...........................///////////// -->

<!-- hot link_1...........................///////////// -->
    <!-- foooter................./////////////////// -->`;

export default function EbsuSchoolFees() {
  return (
    <LegacyContentPage
      title="EBSU School Fees for New Students | MySearch Query"
      description="Discover the school fees for new students at Ebonyi State University (EBSU) for the 2025 session. Learn about fee structures for indigenes, non-indigenes, and specific programs like Medicine, Law, and Engineering."
      html={html}
    >
      <HotLinks title="Hot links" links={hotLink2} />
      <HotLinks title="Hot links" links={hotLink1} />
    </LegacyContentPage>
  );
}
