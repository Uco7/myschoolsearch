import universities from "../data/universitiesData";
import JAMB_CORRECTION_CATEGORIES from "../data/jambDataCorrectionFaqData";
import { courses as eligibilityCourses } from "../data/courseEligibilityData";
import { getAllArticles } from "../data/articlesLoader";

/**
 * A single searchable index across every content type on the site, so a
 * search box never has to say "no results" just because it was only ever
 * looking at one dataset (e.g. universities). Each entry has a `type` for
 * grouping results in the UI, a `title`, a `path` to link to, and a
 * `keywords` string that's actually searched against.
 */
function buildSearchIndex() {
  const items = [];

  universities.forEach((u) => {
    items.push({
      type: "University",
      title: `${u.abbreviation} — ${u.name}`,
      path: `/university/${u.slug}`,
      keywords: `${u.name} ${u.abbreviation} ${u.state} ${u.location} admission requirements cut off mark school fees post utme acceptance fee hostel`.toLowerCase(),
    });
  });

  JAMB_CORRECTION_CATEGORIES.forEach((cat) => {
    cat.items.forEach((item) => {
      items.push({
        type: "JAMB FAQ",
        title: item.q,
        path: "/jamb-data-correction/faq",
        keywords: `${item.q} ${item.a} ${cat.category}`.toLowerCase(),
      });
    });
  });

  eligibilityCourses.forEach((c) => {
    items.push({
      type: "Course Eligibility",
      title: `${c.name}: JAMB & O'Level Subject Requirements`,
      path: "/check/course-eligibility/app",
      keywords: `${c.name} subject combination requirements jamb olevel eligibility ${c.jambCore.join(" ")} ${c.jambFlexible.join(" ")}`.toLowerCase(),
    });
  });

  getAllArticles().forEach((a) => {
    items.push({
      type: "Guide / Article",
      title: a.title,
      path: `/articles/${a.slug}`,
      keywords: `${a.title} ${a.description} ${a.category} ${a.faqs.map((f) => f.q).join(" ")}`.toLowerCase(),
    });
  });

  // Every static page in the app (see App.jsx) — titles/keywords written the
  // way a student would actually search, not the internal route name.
  const RESOURCE_PAGES = [
    { title: "CGPA & GPA Calculator", path: "/calculate/cgpa/app", keywords: "cgpa gpa calculator degree classification first class second class calculate" },
    { title: "JAMB Aggregate Score Calculator", path: "/calculate/jamb-aggregate/app", keywords: "jamb aggregate score calculator post utme admission chances aggregate score" },
    { title: "Course Eligibility Checker", path: "/check/course-eligibility/app", keywords: "course eligibility checker jamb subject combination olevel requirements medicine law engineering am i eligible" },
    { title: "Full List of Nigerian Universities", path: "/nigeria/list-of-institution/page", keywords: "list of universities federal state private nigeria institutions all schools directory" },
    { title: "JAMB Data Correction: 100 Most-Asked Questions", path: "/jamb-data-correction/faq", keywords: "jamb data correction faq name date of birth nin course institution change fee cbt centre" },
    { title: "JAMB Data Correction & Portal Guide", path: "/jamb-data/corrections/guide/page", keywords: "jamb portal correction guide how to correct data name date of birth gender state lga" },
    { title: "JAMB Registration Start Date", path: "/jamb/data/correction/page", keywords: "jamb registration start date when does jamb registration begin" },
    { title: "JAMB Registration Date", path: "/jamb-reg-date/page", keywords: "jamb registration date when is jamb registration" },
    { title: "JAMB Registration Deadline", path: "/jamb-reg/deadline/page", keywords: "jamb registration deadline closing date last day to register" },
    { title: "JAMB Reprinting Date", path: "/jamb-reprinting/date", keywords: "jamb reprinting date slip exam date time venue reprint" },
    { title: "JAMB Registration Requirements", path: "/jamb-reg/requirements/page", keywords: "jamb registration requirements documents nin how to register what do i need" },
    { title: "JAMB Syllabus", path: "/jamb/syllabus", keywords: "jamb syllabus subjects download brochure past questions topics" },
    { title: "Universities Offering Medicine & Surgery", path: "/universities/medcine/surgry", keywords: "medicine surgery universities mbbs which schools offer medicine" },
    { title: "Most Demanding Courses in Nigeria", path: "/most-demanding/courses", keywords: "most demanding courses jobs career in demand best courses to study" },
    { title: "Scholarship Guide", path: "/scholarship/guid", keywords: "scholarship guide funding financial aid free education scholarships in nigeria" },
    { title: "WAEC & NECO Frequently Asked Questions", path: "/waec-neco/freq/questions", keywords: "waec neco questions results faq exam" },
    { title: "Universities Grading System", path: "/schools/grading/system", keywords: "grading system first class second class gpa cgpa classification how grades work" },
    { title: "Career Guide", path: "/career/page", keywords: "career guide job prospects courses what can i become" },
    { title: "Career Path Guide", path: "/career/path", keywords: "career path guidance which course leads to which job" },
    { title: "School Direct Entry Guide", path: "/school-direct/entry/query", keywords: "direct entry requirements ond hnd ijmb jupeb 200 level" },
    { title: "List of Courses Offered in Nigerian Institutions", path: "/courses/page", keywords: "list of courses programmes offered nigeria universities" },
    { title: "Faculties & Courses Guide", path: "/faculties/courses", keywords: "faculties departments courses guide structure" },
    { title: "JAMB Overview", path: "/jamb/overview", keywords: "jamb overview what is jamb utme explained" },
    { title: "Past Questions (UNN)", path: "/past-questions", keywords: "past questions download pdf unn medicine law engineering" },
    { title: "About Us", path: "/about-us/page", keywords: "about mysearch query who we are" },
    { title: "Contact Us", path: "/contact-us/page", keywords: "contact us email support get in touch" },
    { title: "Privacy Policy", path: "/privacy/policy/page", keywords: "privacy policy data" },
    { title: "Disclaimer", path: "/disclaimer/page", keywords: "disclaimer terms" },

    { title: "FUNAI Admission & Courses Offered", path: "/funai-homePage/admission", keywords: "funai admission courses offered undergraduate programmes alex ekwueme federal university" },
    { title: "FUNAI Admission Requirements Guide", path: "/funai-admission-guide", keywords: "funai admission requirements guide undergraduate" },
    { title: "FUNAI Acceptance Fee", path: "/funai-acceptance/fee/page", keywords: "funai acceptance fee how much" },
    { title: "FUNAI Faculties & Departments", path: "/funai-faculties-dept", keywords: "funai faculties departments courses list" },
    { title: "FUNAI Scholarship & Financial Aid", path: "/funai-aids/scholarship/page", keywords: "funai scholarship financial aid grants" },
    { title: "FUNAI Accommodation & Transportation", path: "/funai-accomodation-guide", keywords: "funai hostel accommodation transportation" },
    { title: "FUNAI Admission Procedure & Requirements", path: "/funai-admissionprocedures", keywords: "funai admission procedure requirements cutoff mark deadline how to apply" },
    { title: "FUNAI Examination & Entry Requirements", path: "/funai-exam-guide", keywords: "funai examination entry requirements post utme" },
    { title: "FUNAI Admission Portal Login", path: "/funai-admission-portal", keywords: "funai admission portal login check status" },
    { title: "FUNAI Postgraduate Admission Guide", path: "/funai-post-gradute-guide-procedures/guide", keywords: "funai postgraduate admission masters phd" },

    { title: "UNN Courses & Departments", path: "/unn-courses/dept", keywords: "unn courses departments change of course university of nigeria nsukka" },
    { title: "UNN School Fees", path: "/unn-fees", keywords: "unn school fees charges how much nsukka" },
    { title: "UNN JAMB Courses & Requirements", path: "/unn-jamb/courses/programs", keywords: "unn jamb courses programs departmental requirements" },
    { title: "UNN Course Registration Guide", path: "/unn-reg/courses", keywords: "unn course registration how to register courses" },
    { title: "UNN Admission Requirements", path: "/unn-admission/requirement", keywords: "unn admission requirements nsukka how to apply" },

    { title: "UNILAG Cut-Off Marks", path: "/uni-lag/cut-of-marks", keywords: "unilag cut off marks cutoff university of lagos" },
    { title: "UNILAG Admission Guide", path: "/uni-lag", keywords: "unilag admission requirements university of lagos" },

    { title: "OAU Admission Requirements", path: "/aou/admission-requirement", keywords: "oau admission requirements obafemi awolowo university ife" },
    { title: "OAU Admission Guide", path: "/aou", keywords: "oau obafemi awolowo university ife admission" },

    { title: "EBSU Direct Entry Guide", path: "/ebsu_direct_entry/query", keywords: "ebsu direct entry ebonyi state university" },
    { title: "EBSU School Fees", path: "/ebsu_school/fees", keywords: "ebsu school fees ebonyi state university charges" },
    { title: "EBSU Admission Guide", path: "/ebsu", keywords: "ebsu ebonyi state university admission" },

    { title: "UI Admission Guide", path: "/ui", keywords: "ui university of ibadan admission requirements" },
    { title: "UI School Fees", path: "/ui_school_fees/charges", keywords: "ui university of ibadan school fees charges" },
  ];
  RESOURCE_PAGES.forEach((p) => items.push({ type: "Tool / Resource", title: p.title, path: p.path, keywords: p.keywords.toLowerCase() }));

  return items;
}

let cachedIndex = null;
export function getSearchIndex() {
  if (!cachedIndex) cachedIndex = buildSearchIndex();
  return cachedIndex;
}

const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "am", "be", "been", "being",
  "how", "to", "my", "i", "me", "do", "does", "did", "can", "could", "should",
  "would", "will", "shall", "what", "when", "where", "which", "who", "whom",
  "of", "in", "on", "at", "for", "with", "and", "or", "but", "so", "if",
  "it", "its", "this", "that", "these", "those", "as", "by", "from",
]);

/**
 * Scored search: unlike a strict "every word must match" filter (which
 * fails a natural question like "how to correct my jamb name" outright,
 * since "how"/"to"/"my" won't literally appear in an FAQ's keyword string),
 * this strips stop words first, then ranks results by how many of the
 * remaining meaningful words actually match — so partial, natural-language
 * matches still surface instead of returning nothing.
 */
export function searchSite(query, { limit = 30 } = {}) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const allWords = q.split(/\s+/).filter(Boolean);
  const meaningfulWords = allWords.filter((w) => !STOP_WORDS.has(w));
  const words = meaningfulWords.length > 0 ? meaningfulWords : allWords;

  const index = getSearchIndex();
  const scored = [];

  for (const item of index) {
    const haystack = `${item.title.toLowerCase()} ${item.keywords}`;
    const matchCount = words.filter((w) => haystack.includes(w)).length;
    if (matchCount === 0) continue;

    let score = matchCount / words.length;
    if (haystack.includes(q)) score += 2;
    if (item.title.toLowerCase().includes(q)) score += 1;

    scored.push({ ...item, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit);
}
