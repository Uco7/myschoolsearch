// Several ported pages keep their original inline onclick="..."/onchange="..."
// HTML attributes (rendered via dangerouslySetInnerHTML). Inline event-handler
// attributes like these are wired up by the browser itself as soon as the
// HTML is parsed — they work fine even when the markup was injected via
// innerHTML — as long as the named function exists on `window`. This file
// defines every such function once, globally, so each legacy page's inline
// handlers keep working exactly as they did in the original EJS templates.
//
// Deliberately NOT replicated here: each page's own `window.onscroll` show/hide
// for ".scroll-top" — that's now handled globally (and better) by the
// Footer component's own scroll listener + React state.

export function installLegacyGlobalScripts() {
  // jamb_courses_for_program.ejs + unn_admissionRequirement.ejs:
  // search box filters a <tbody id="courseTable"> by its 2nd <td>.
  window.searchCourse = function () {
    const inputEl = document.getElementById("searchInput");
    const table = document.getElementById("courseTable");
    if (!inputEl || !table) return;
    const input = inputEl.value.toLowerCase();
    const rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      const course = rows[i].getElementsByTagName("td")[1];
      if (course) {
        const textValue = course.textContent || course.innerText;
        rows[i].style.display = textValue.toLowerCase().indexOf(input) > -1 ? "" : "none";
      }
    }
  };

  // Used by several pages' own "↑ Top" buttons (in addition to the
  // site-wide floating scroll-to-top button in Footer.jsx).
  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // high_institution.ejs: institution-type <select onchange="showList(this.value)">
  window.showList = function (value) {
    const lists = document.querySelectorAll(".institution-list");
    lists.forEach((list) => (list.style.display = "none"));
    const selected = document.getElementById(value);
    if (selected) selected.style.display = "block";
  };

  // faculties_corses.ejs: expandable faculty -> course -> course-detail tree
  window.toggleCourses = function (facultyId) {
    const courseList = document.getElementById(facultyId);
    if (!courseList) return;
    const allCourseLists = document.querySelectorAll(".courses");
    allCourseLists.forEach((list) => {
      if (list !== courseList) list.style.display = "none";
    });
    courseList.style.display = courseList.style.display === "block" ? "none" : "block";
  };

  window.toggleCourseDetails = function (courseId) {
    const details = document.getElementById(courseId);
    if (!details) return;
    details.style.display = details.style.display === "block" ? "none" : "block";
  };

  // past_question.ejs: "Select a Download Source" jumps to a section on the page.
  window.navigateToSection = function () {
    const el = document.getElementById("downloadSection");
    if (!el || !el.value) return;
    const target = document.getElementById(el.value);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };
}
