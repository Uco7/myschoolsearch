import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Articles = lazy(() => import("./pages/Articles"));
const Article = lazy(() => import("./pages/Article"));
const UniversityProfile = lazy(() => import("./pages/UniversityProfile"));

// funai
const FunaiHomePageAdmission = lazy(() => import("./pages/FunaiHomePageAdmission"));
const FunaiAdmissionGuide = lazy(() => import("./pages/FunaiAdmissionGuide"));
const FunaiFacultiesDept = lazy(() => import("./pages/FunaiFacultiesDept"));
const FunaiAids = lazy(() => import("./pages/FunaiAids"));
const FunaiAccommodationTransportation = lazy(() => import("./pages/FunaiAccommodationTransportation"));
const FunaiAdmissionProcess = lazy(() => import("./pages/FunaiAdmissionProcess"));
const FunaiExaminationEntryQuery = lazy(() => import("./pages/FunaiExaminationEntryQuery"));
const FunaiAdmissionPortalLogin = lazy(() => import("./pages/FunaiAdmissionPortalLogin"));
const FunaiPostGraduateProgram = lazy(() => import("./pages/FunaiPostGraduateProgram"));

// unn
const UnnCoursesDept = lazy(() => import("./pages/UnnCoursesDept"));
const UnnFees = lazy(() => import("./pages/UnnFees"));
const UnnJambCoursesForProgram = lazy(() => import("./pages/UnnJambCoursesForProgram"));
const UnnRegCourses = lazy(() => import("./pages/UnnRegCourses"));
const UnnAdmissionRequirement = lazy(() => import("./pages/UnnAdmissionRequirement"));

// unilag
const UnilagCutOffMarks = lazy(() => import("./pages/UnilagCutOffMarks"));
const UniLag = lazy(() => import("./pages/UniLag"));

// oau
const OauAdmissionRequirement = lazy(() => import("./pages/OauAdmissionRequirement"));
const Oau = lazy(() => import("./pages/Oau"));

// ebsu
const EbsuDirectEntryGuide = lazy(() => import("./pages/EbsuDirectEntryGuide"));
const EbsuSchoolFees = lazy(() => import("./pages/EbsuSchoolFees"));
const Ebsu = lazy(() => import("./pages/Ebsu"));

// ui
const Ui = lazy(() => import("./pages/Ui"));
const UiSchoolFees = lazy(() => import("./pages/UiSchoolFees"));

// resource / tools
const CgpaCalculator = lazy(() => import("./pages/CgpaCalculator"));
const SchoolDirectEntryQuery = lazy(() => import("./pages/SchoolDirectEntryQuery"));
const SchoolGradingSystem = lazy(() => import("./pages/SchoolGradingSystem"));
const MedicineSurgeryUniversities = lazy(() => import("./pages/MedicineSurgeryUniversities"));
const ScholarshipGuide = lazy(() => import("./pages/ScholarshipGuide"));
const Career = lazy(() => import("./pages/Career"));
const MostDemandingCourses = lazy(() => import("./pages/MostDemandingCourses"));
const WaecNecoQea = lazy(() => import("./pages/WaecNecoQea"));
const Courses = lazy(() => import("./pages/Courses"));
const JambSyllabus = lazy(() => import("./pages/JambSyllabus"));
const JambDataCorrectionPage = lazy(() => import("./pages/JambDataCorrectionPage"));
const JambDataCorrectionFaqHub = lazy(() => import("./pages/JambDataCorrectionFaqHub"));
const JambRegDate = lazy(() => import("./pages/JambRegDate"));
const JambDataCorrectionsGuide = lazy(() => import("./pages/JambDataCorrectionsGuide"));
const JambRegDeadline = lazy(() => import("./pages/JambRegDeadline"));
const JambReprintingDate = lazy(() => import("./pages/JambReprintingDate"));
const JambRegRequirements = lazy(() => import("./pages/JambRegRequirements"));
const InstitutionList = lazy(() => import("./pages/InstitutionList"));
const JambAggregateCalculator = lazy(() => import("./pages/JambAggregateCalculator"));
const CourseEligibilityChecker = lazy(() => import("./pages/CourseEligibilityChecker"));

// navigation
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Contact = lazy(() => import("./pages/Contact"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const About = lazy(() => import("./pages/About"));

// Pages that exist as components/includeFolder partials in the files you
// sent, but weren't wired to any route in getRoute.js — kept available and
// mounted at sensible extra paths so nothing you uploaded goes missing.
// Tell me if you'd rather they live somewhere else (or be removed).
const CareerPath = lazy(() => import("./pages/CareerPath"));
const FacultiesCourses = lazy(() => import("./pages/FacultiesCourses"));
const Jamb = lazy(() => import("./pages/Jamb"));
const PastQuestion = lazy(() => import("./pages/PastQuestion"));

function NotFound() {
  return (
    <div className="container section-txt" style={{ textAlign: "center", margin: "3rem auto" }}>
      <h2>404 — Page not found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <a className="cta-button" href="/">Back to Home</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Suspense fallback={<div style={{ padding: "4rem", textAlign: "center" }}>Loading…</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<Article />} />

        {/* funai */}
        <Route path="/funai-homePage/admission" element={<FunaiHomePageAdmission />} />
        <Route path="/funai-admission-guide" element={<FunaiAdmissionGuide />} />
        <Route path="/funai-acceptance/fee/page" element={<FunaiAdmissionGuide />} />
        <Route path="/funai-faculties-dept" element={<FunaiFacultiesDept />} />
        <Route path="/funai-aids/scholarship/page" element={<FunaiAids />} />
        <Route path="/funai-accomodation-guide" element={<FunaiAccommodationTransportation />} />
        <Route path="/funai-admissionprocedures" element={<FunaiAdmissionProcess />} />
        <Route path="/funai-exam-guide" element={<FunaiExaminationEntryQuery />} />
        <Route path="/funai-admission-portal" element={<FunaiAdmissionPortalLogin />} />
        <Route path="/funai-post-gradute-guide-procedures/guide" element={<FunaiPostGraduateProgram />} />

        {/* unn */}
        <Route path="/unn-courses/dept" element={<UnnCoursesDept />} />
        <Route path="/unn-fees" element={<UnnFees />} />
        <Route path="/unn-jamb/courses/programs" element={<UnnJambCoursesForProgram />} />
        <Route path="/unn-reg/courses" element={<UnnRegCourses />} />
        <Route path="/unn-admission/requirement" element={<UnnAdmissionRequirement />} />

        {/* unilag */}
        <Route path="/uni-lag/cut-of-marks" element={<UnilagCutOffMarks />} />
        <Route path="/uni-lag" element={<UniLag />} />

        {/* oau */}
        <Route path="/aou/admission-requirement" element={<OauAdmissionRequirement />} />
        <Route path="/aou" element={<Oau />} />

        {/* ebsu */}
        <Route path="/ebsu_direct_entry/query" element={<EbsuDirectEntryGuide />} />
        <Route path="/ebsu_school/fees" element={<EbsuSchoolFees />} />
        <Route path="/ebsu" element={<Ebsu />} />

        {/* ui */}
        <Route path="/ui" element={<Ui />} />
        <Route path="/ui_school_fees/charges" element={<UiSchoolFees />} />

        {/* resource folder / tools */}
        <Route path="/calculate/cgpa/app" element={<CgpaCalculator />} />
        <Route path="/school-direct/entry/query" element={<SchoolDirectEntryQuery />} />
        <Route path="/schools/grading/system" element={<SchoolGradingSystem />} />
        <Route path="/universities/medcine/surgry" element={<MedicineSurgeryUniversities />} />
        <Route path="/scholarship/guid" element={<ScholarshipGuide />} />
        <Route path="/career/page" element={<Career />} />
        <Route path="/most-demanding/courses" element={<MostDemandingCourses />} />
        <Route path="/waec-neco/freq/questions" element={<WaecNecoQea />} />
        <Route path="/courses/page" element={<Courses />} />
        <Route path="/jamb/syllabus" element={<JambSyllabus />} />
        <Route path="/jamb/data/correction/page" element={<JambDataCorrectionPage />} />
        <Route path="/jamb-data-correction/faq" element={<JambDataCorrectionFaqHub />} />
        <Route path="/jamb-reg-date/page" element={<JambRegDate />} />
        <Route path="/jamb-data/corrections/guide/page" element={<JambDataCorrectionsGuide />} />
        <Route path="/jamb-reg/deadline/page" element={<JambRegDeadline />} />
        <Route path="/jamb-reprinting/date" element={<JambReprintingDate />} />
        <Route path="/jamb-reg/requirements/page" element={<JambRegRequirements />} />
        <Route path="/nigeria/list-of-institution/page" element={<InstitutionList />} />
        <Route path="/calculate/jamb-aggregate/app" element={<JambAggregateCalculator />} />
        <Route path="/check/course-eligibility/app" element={<CourseEligibilityChecker />} />

        {/* navigation */}
        <Route path="/privacy/policy/page" element={<PrivacyPolicy />} />
        <Route path="/contact-us/page" element={<Contact />} />
        <Route path="/disclaimer/page" element={<Disclaimer />} />
        <Route path="/about-us/page" element={<About />} />

        {/* dynamic university profile — one route serves all 65 */}
        <Route path="/university/:slug" element={<UniversityProfile />} />

        {/* uploaded pages not wired into getRoute.js — parked here for now */}
        <Route path="/career/path" element={<CareerPath />} />
        <Route path="/faculties/courses" element={<FacultiesCourses />} />
        <Route path="/jamb/overview" element={<Jamb />} />
        <Route path="/past-questions" element={<PastQuestion />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
