import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import AdmissionQueryLink from "../components/AdmissionQueryLink";
import { hotLink1, hotLink2 } from "../data/hotLinksData";

const html = `<!--include  header file -->
    <!-- General Queries Section -->
    

    <!-- General Queries Section -->
    <div class="image">   </div>
    <header class="heading-top">
        <h1>FUNAI Financial Aid and Fees</h1>
        <nav class="nav-ul-wrapper">
            <ul class="child-ul">
                <li><a href="https://funai.edu.ng/#">Financial Aid</a></li>
                <li><a href="https://funai.edu.ng/master-plan/">Important Dates</a></li>
                <li><a href="/funai-aids/scholarship/page">Accommodation</a></li>
                <li><a href="https://funai.edu.ng/#">International Students</a></li>
                <a href="/calculate/cgpa/app">GPA & CGPA Calculation</a>
            </ul>
        </nav>
    </header>

    <main class="section-txt">
        <h2  style="color: green;">1. FUNAI Tuition Fees for Undergraduate Programs</h2>
        <p>The tuition fees at FUNAI vary based on the course of study. For undergraduate programs, the fees typically range from ₦50,000 to ₦150,000 per academic session. Students are advised to visit the official university portal for updated fee structures.</p>

        <h2 style="color: green;">2. What are the Compulsory Charges for Freshmen?</h2>
        <p>Freshmen at FUNAI are required to pay the following compulsory charges: registration fee, student union fee, library fee, lab fee, hostel fee, and ICT charges. The exact amount varies, so students should confirm the charges before registration.</p>

        <h2 style="color: green;">3. FUNAI Payment Options for School Fees</h2>
        <p>FUNAI offers multiple payment options for school fees, including bank transfers, online payments through the student portal, and POS payments. Payment can also be made in installments as per the guidelines provided on the portal.</p>

        <h2 style="color: green;">4. Does FUNAI Offer Financial Aid or Grants?</h2>
        <p>Yes, FUNAI offers financial aid to students in need. Scholarships and grants are available for both undergraduate and postgraduate students. Students can apply through the official scholarship portal.</p>

        <h2 style="color: green;">5. How Much is the Registration Fee at FUNAI?</h2>
        <p>The registration fee for students at FUNAI is approximately ₦10,000, which covers administrative costs like document processing and course registration.</p>
    </main>
<!-- hot link_1...........................///////////// -->


<!-- hot link_1...........................///////////// -->
 <!-- hot link_1...........................///////////// -->
 

 <!-- hot link_1...........................///////////// -->
   <!-- foooter................./////////////////// -->`;

export default function FunaiAids() {
  return (
    <LegacyContentPage
      title="FUNAI Financial Aid and Fees | MySearch Query"
      description=""
      html={html}
    >
      <AdmissionQueryLink />
      <HotLinks title="Hot links" links={hotLink1} />
      <HotLinks title="Hot links" links={hotLink2} />
    </LegacyContentPage>
  );
}
