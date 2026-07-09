// Link lists ported 1:1 from the original includeFolder partials.

export const hotLink1 = [
  { href: "/ui_school_fees/charges", label: "Federal University of Ibadan school fees charges" },
  { href: "/calculate/cgpa/app", label: "Calculate GPA and CGPA" },
  { href: "/schools/grading/system", label: "Universities Grading System" },
  { href: "/unn-courses/dept", label: "Federal University of Nigeria Nsukka(UNN) courses and Department" },
  { href: "/funai-homePage/admission", label: "Funai general cut-off marks for all departments" },
];

export const hotLink2 = [
  { href: "/unn-jamb/courses/programs", label: "Unn Jamb and departmental requirements" },
  { href: "/unn-admission/requirement", label: "UNN Admission Requirements" },
  { href: "/funai-admissionprocedures", label: "Funai Federal University Admission Procedure/requirements" },
  { href: "/funai-faculties-dept", label: "Funai Federal University facaulties and department" },
  { href: "/aou/admission-requirement", label: "Obafemi Awolowo University(OAU) Admission requirements" },
  { href: "/uni-lag/cut-of-marks", label: "University of Lagos Cut-Off Marks" },
];

export const jambHotLink6 = [
  { href: "/jamb/syllabus", label: "jamb 2025/2026 syllabus" },
  { href: "/jamb/data/correction/page", label: "Various jamb data corrections" },
  { href: "/jamb-reg-date/page", label: "2025/2026 jamb registration date" },
  { href: "/jamb-data/corrections/guide/page", label: "jamb data corrections guide" },
  { href: "/jamb-reg/deadline/page", label: "jamb 2025/2026 registration deadline" },
  { href: "/jamb-reprinting/date", label: "jamb2025/2026 reprinting date" },
  { href: "/jamb-reg/requirements/page", label: "jamb 2025/2026 registration requirements" },
  { href: "/most-demanding/courses", label: "most demanding courses(JOB) in Nigeraia" },
  { href: "/schools/grading/system", label: "grading system in Nigeria universities" },
  { href: "/career/page", label: "Careers and their prospects" },
  { href: "/funai-admissionprocedures", label: "funai admission requirements" },
  { href: "/unn-admission/requirement", label: "Unn admission requirement" },
  { href: "/aou/admission-requirement", label: "AOU 2025/2026 admission requirement" },
];

export const unnHotLink = [
  { href: "/ui_school_fees/charges", label: "Federal University of Ibadan school fees charges" },
  { href: "/calculate/cgpa/app", label: "Calculate GP and CGPA" },
  { href: "/schools/grading/system", label: "Universities Grading System" },
  { href: "/unn-courses/dept", label: "Federal University of Nigeria Nsukka(UNN) courses and Department" },
  { href: "/unn-fees", label: "UNN school fees charges" },
];

export const unnJambHotLink = [
  { href: "/ui_school_fees/charges", label: "Federal University of Ibadan school fees charges" },
  { href: "/unn-reg/courses", label: "UNN course registrations approach" },
  { href: "/schools/grading/system", label: "Universities Grading System" },
  { href: "/unn-courses/dept", label: "Federal University of Nigeria Nsukka(UNN) admission requirements" },
  { href: "/nigeria/list-of-institution/page", label: "List of institutions in Nigeria" },
  { href: "/jamb-reg/requirements/page", label: "Jamb registrations requirements" },
  { href: "/courses/page", label: "Lists of courses offered in Nigeria institutions" },
  { href: "/waec-neco/freq/questions", label: "Check out WAEC and NECO frequently asked questions" },
  { href: "/career/page", label: "Careers and jobs opportunities for different courses" },
  { href: "/calculate/cgpa/app", label: "GPA and CGPA calculator" },
];

/** Merges multiple hot-link lists into one, de-duplicated by href, so a
 *  page that used to stack 3 separate <HotLinks/> blocks (which skewed the
 *  content-to-navigation ratio hard toward navigation) can show one
 *  consolidated, non-repetitive block instead. */
export function mergeHotLinks(...lists) {
  const seen = new Set();
  const merged = [];
  for (const list of lists) {
    for (const link of list) {
      if (seen.has(link.href)) continue;
      seen.add(link.href);
      merged.push(link);
    }
  }
  return merged;
}
