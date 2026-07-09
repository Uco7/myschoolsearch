import LegacyContentPage from "../components/LegacyContentPage";

const html = `<!--include  header file -->
<section class="about-section" style="padding: 2rem; max-width: 800px; margin: auto; font-family: Arial, sans-serif; line-height: 1.6;">
  <h1>About Uche Innocent</h1>
  <p><strong>Founder, of mySearch-query.onrender</strong></p>

  <p>Hello! I’m <strong>Uche Innocent</strong>, a passionate developer and tech enthusiast based in Nigeria. I'm the founder of <strong>mySearch-query.onrender platform</strong> — a smart platform built to help students, parents, and educators easily access educational resources and tools across Nigeria.</p>

  <p>I created mySearch-query.onrender platform with one goal in mind — to bridge the information gap in education by providing easy access to school directories, past questions, exam updates, and much more, through both web and mobile apps.</p>

  <p>As a developer, I combine my love for education and technology to build solutions that empower learners and make school-related decisions easier and more informed. I believe that information should be simple, accurate, and accessible to everyone.</p>

  <p>Whether you’re preparing for JAMB, WAEC, NECO, or just searching for academic updates, School Search is here to support your journey with reliable and timely content.</p>

  <p>You can follow me on <a href="https://x.com/UcheUc189405" target="_blank" rel="noopener">Twitter</a> for the latest updates or reach out for collaborations, feedback, or tech ideas.</p>

  <p><em>Thank you for using School Search. Together, we can make learning easier and smarter.</em></p>
</section>


 <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function About() {
  return (
    <LegacyContentPage
      title="About Uche Innocent| MySearch-query.onrender | MySearch Query"
      description="Learn more about uche innocent, the founder of MySchool-search,onrender \u2014 a reliable source for Nigerian education news and updates."
      html={html}
    >
      
    </LegacyContentPage>
  );
}
