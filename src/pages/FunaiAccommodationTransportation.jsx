import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import AdmissionQueryLink from "../components/AdmissionQueryLink";
import { hotLink1, hotLink2 } from "../data/hotLinksData";

const html = `<!--include  header file -->
    
    <!-- General Queries Section -->
    

    <!-- General Queries Section -->
    

    <!-- hot link_1...........................///////////// -->
    <main class="container section-txt">
        <h2 id="accommodation">1. FUNAI Accommodation for International Students</h2>
        <p>International students at FUNAI can apply for on-campus accommodation, although spaces are limited. It is advisable to apply early to secure a spot in the hostel.</p>
    
        <h2 id="travel">2. How to Travel to FUNAI Campus from the Airport?</h2>
        <p>The nearest airport to FUNAI is Aba Airport, which is about 1.5 hours away from the campus. Students can take a taxi or arrange transportation via the university’s transport office.</p>
    
        <h2 id="transport">3. Transport Options Around FUNAI</h2>
        <p>FUNAI is well-connected with local transport services, including buses, taxis, and shuttles. Students can also use the campus transport services for commuting within the city.</p>
    
        <h2 id="shuttles">4. Are There Shuttles to Campus from Nearby Towns?</h2>
        <p>Yes, FUNAI provides shuttle services from surrounding towns like Abakaliki to the campus. Check the shuttle schedule on the university’s transport page.</p>
    </main>
     <!-- General Queries Section -->
    

    <!-- General Queries Section -->

    

    <!-- hot link_1...........................///////////// -->
     <script>document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
    
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust offset if needed
                    behavior: 'smooth' // Enables smooth scrolling
                });
            }
        });
    });
    </script>
      <!-- foooter................./////////////////// -->`;

export default function FunaiAccommodationTransportation() {
  return (
    <LegacyContentPage
      title="FUNAI Accommodation & Transportation Guide | MySearch Query"
      description="Learn about AE-FUNAI accommodation options for students, transportation services from nearby airports, shuttles, and how to navigate around campus for the ${year}/${nextYear} session."
      html={html}
    >
      <AdmissionQueryLink />
      <HotLinks title="Hot links" links={hotLink1} />
      <HotLinks title="Hot links" links={hotLink2} />
    </LegacyContentPage>
  );
}
