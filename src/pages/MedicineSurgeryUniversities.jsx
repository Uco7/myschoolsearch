import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { hotLink1, hotLink2 } from "../data/hotLinksData";

const html = `<!--include  header file -->
       <!-- hot link_1...........................///////////// -->
   

   <!-- hot link_1...........................///////////// -->
    <div class="container">
        <h1>Best Universities in Nigeria for Medicine and Surgery</h1>
        <p>Medicine and Surgery is one of the most competitive and prestigious courses in Nigeria. Below are some of the best universities offering medical programs.</p>
        
        <div class="university">
            <h2>University of Ibadan (UI)</h2>
            <p><strong>Location:</strong> Oyo State</p>
            <p><strong>Why UI?</strong> Premier university with a top-rated medical school and UCH teaching hospital.</p>
        </div>
        
        <div class="university">
            <h2>Obafemi Awolowo University (OAU)</h2>
            <p><strong>Location:</strong> Osun State</p>
            <p><strong>Why OAU?</strong> Quality medical training with Obafemi Awolowo University Teaching Hospital.</p>
        </div>
        
        <div class="university">
            <h2>University of Lagos (UNILAG)</h2>
            <p><strong>Location:</strong> Lagos State</p>
            <p><strong>Why UNILAG?</strong> Strong medical program affiliated with LUTH.</p>
        </div>

        <div class="university">
            <h2>Ahmadu Bello University (ABU)</h2>
            <p><strong>Location:</strong> Kaduna State</p>
            <p><strong>Why ABU?</strong> One of the largest medical schools with excellent clinical training.</p>
        </div>

        <div class="university">
            <h2>University of Nigeria, Nsukka (UNN)</h2>
            <p><strong>Location:</strong> Enugu State</p>
            <p><strong>Why UNN?</strong> Renowned for research and clinical practice at UNTH.</p>
        </div>
        
        <div class="university">
            <h2>University of Benin (UNIBEN)</h2>
            <p><strong>Location:</strong> Edo State</p>
            <p><strong>Why UNIBEN?</strong> Well-respected medical school with UBTH teaching hospital.</p>
        </div>

        <div class="university">
            <h2>Lagos State University (LASU)</h2>
            <p><strong>Location:</strong> Lagos State</p>
            <p><strong>Why LASU?</strong> Growing medical school affiliated with LASUTH.</p>
        </div>

        <div class="university">
            <h2>University of Ilorin (UNILORIN)</h2>
            <p><strong>Location:</strong> Kwara State</p>
            <p><strong>Why UNILORIN?</strong> Stable academic calendar and excellent medical training.</p>
        </div>
    </div>
    <section class="section-txt"> 
      <h2> <i>Conclusion</i> </h2>
       <p><i> The best universities for Medicine and Surgery in Nigeria are those with well-equipped teaching hospitals, qualified lecturers, and hands-on training programs. If you’re planning to study Medicine, consider any of these universities based on your location, affordability, and personal preference</i>.</p>
    </section>
      <!-- hot link_1...........................///////////// -->
   

   <!-- hot link_1...........................///////////// -->
 <!-- foooter................./////////////////// -->`;

export default function MedicineSurgeryUniversities() {
  return (
    <LegacyContentPage
      title="Best Universities for Medicine and Surgery in Nigeria | MySearch Query"
      description="Discover the top universities in Nigeria for studying Medicine and Surgery. Learn about the best medical schools, their teaching hospitals, and why they are the best options for aspiring medical professionals."
      html={html}
    >
      <HotLinks title="Hot links" links={hotLink1} />
      <HotLinks title="Hot links" links={hotLink2} />
    </LegacyContentPage>
  );
}
