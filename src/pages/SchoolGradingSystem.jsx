import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { hotLink2 } from "../data/hotLinksData";

const html = `<!--include  header file -->

    
    <div class="container">
    <section class="section-txt">
        <h2>What Does "Carryover" Mean?</h2>
        <p>"Carryover" refers to a situation where a student fails a course and has to retake it in a subsequent academic session.</p>
    </section>
    
    <section  class="section-txt">
        <h2>Grading System in Nigerian Universities</h2>
        <p>Nigerian universities use a Grade Point Average (GPA) system, usually as follows:</p>
        <ul>
            <li>A (70-100) - 5.0</li>
            <li>B (60-69) - 4.0</li>
            <li>C (50-59) - 3.0</li>
            <li>D (45-49) - 2.0</li>
            <li>E (40-44) - 1.0</li>
            <li>F (0-39) - 0.0 (Fail)</li>
        </ul>
    </section>
    
    <section class="section-txt">
        <h2>How to Apply for a School Hostel?</h2>
        <p>Students can apply online through the university portal or in person at the student affairs department.</p>
    </section>
    
    <section class="section-txt">
        <h2>Best Off-Campus Accommodations</h2>
        <p>Popular off-campus accommodations include affordable private hostels and rented apartments.</p>
    </section>
    
    <section class="section-txt">
        <h2>How to Join a Student Association?</h2>
        <p>Students can join associations by attending welcome meetings or signing up online.</p>
    </section>
</div>
 <!-- hot link_1...........................///////////// -->
 

 <!-- hot link_1...........................///////////// -->

        <!-- foooter................./////////////////// -->`;

export default function SchoolGradingSystem() {
  return (
    <LegacyContentPage
      title="SchoolGradingSystem | MySearch Query"
      description="Learn about student life, academic processes, and essential tips on grading, hostel applications, and student associations in Nigerian universities."
      html={html}
    >
      <HotLinks title="Hot links" links={hotLink2} />
    </LegacyContentPage>
  );
}
