import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import HotLinks from "../components/HotLinks";
import SectionIcon from "../components/illustrations/SectionIcon";
import { jambHotLink6 } from "../data/hotLinksData";
import useDocumentMeta from "../hooks/useDocumentMeta";
import universities from "../data/universitiesData";
import RelatedUniversities from "../components/RelatedUniversities";
import TrendingWidget from "../components/TrendingWidget";
import LastUpdatedStamp from "../components/LastUpdatedStamp";
import { getCurrentSession, getAdmissionDeadlines, withLiveSession } from "../utils/session";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "why-choose", label: "Why Choose" },
  { id: "courses", label: "Courses" },
  { id: "faculties", label: "Faculties" },
  { id: "admission-requirements", label: "Admission Requirements" },
  { id: "required-documents", label: "Required Documents" },
  { id: "post-utme", label: "Post UTME" },
  { id: "registration-timeline", label: "Timeline" },
  { id: "cut-off-marks", label: "Cut-off Marks" },
  { id: "school-fees", label: "School Fees" },
  { id: "acceptance-fee", label: "Acceptance Fee" },
  { id: "hostel", label: "Hostel" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "faqs", label: "FAQs" },
];

function DataBadge({ verified }) {
  return (
    <span className={`data-badge ${verified ? "verified" : "typical"}`}>
      {verified ? "✓ Verified" : "Typical range"}
    </span>
  );
}

// The sections below are generated from each school's real data (category,
// ownership, faculties, popular courses, state, founding year) rather than
// a fixed block of boilerplate with only the name swapped — different
// schools genuinely produce different sentences here, not just a different
// heading. This exists specifically to avoid the "templated/scaled content"
// pattern search engines discount: see README "Content depth" note.

function buildWhyChoose(uni, category, ownership, currentYear) {
  const yearsOld = currentYear - uni.founded;
  const reasons = [];

  if (category === "Federal University") {
    reasons.push(`As a ${ownership}-funded federal institution, ${uni.abbreviation}'s tuition is among the most affordable routes to a degree in Nigeria, which is a major reason it remains heavily oversubscribed at JAMB registration each year.`);
  } else if (category === "State University") {
    reasons.push(`As a ${uni.state} State-owned institution, ${uni.abbreviation} typically offers a lower tuition rate to indigenes of ${uni.state} State, alongside a standard (non-indigene) rate for applicants from other states.`);
  } else {
    reasons.push(`As a privately-owned university, ${uni.abbreviation} generally offers smaller class sizes, a more predictable academic calendar (fewer strike-related disruptions), and more modern facilities than the public-university average — trade-offs against a significantly higher tuition cost.`);
  }

  reasons.push(`${uni.abbreviation} has been running since ${uni.founded} — about ${yearsOld} years — giving it an established alumni network and, in most cases, full NUC accreditation across its older departments.`);

  if (uni.popularCourses && uni.popularCourses.length > 0) {
    reasons.push(`Prospective students most often search for ${uni.abbreviation} in connection with ${uni.popularCourses.slice(0, 3).join(", ")}, which are consistently among its most competitive (and most applied-to) programmes.`);
  }

  reasons.push(`${uni.abbreviation} is organised into ${uni.faculties.length} faculties/colleges, spanning ${uni.faculties.slice(0, 3).join(", ")}${uni.faculties.length > 3 ? ", among others" : ""}.`);

  return reasons;
}

function buildCommonMistakes(uni, category) {
  const mistakes = [
    `Assuming the institutional cut-off mark is the same as the departmental cut-off. ${uni.abbreviation}'s general institutional minimum is a floor — competitive departments (Medicine, Law, Engineering, and similar) almost always set their own, higher departmental cut-off, and it's the departmental figure that actually determines your eligibility.`,
    `Choosing a JAMB subject combination that doesn't match the intended course. This is checked at the Post-UTME/screening stage, and a mismatch can disqualify an otherwise strong application regardless of UTME score.`,
    `Missing the Post-UTME registration window. Schools don't typically send personal reminders — checking ${uni.abbreviation}'s admission portal and JAMB CAPS regularly during the admission season is the applicant's responsibility, not the school's.`,
  ];

  if (category === "Private University") {
    mistakes.push(`Underestimating the full cost of attendance. Private-university budgeting mistakes usually come from planning around tuition alone and forgetting hostel fees, feeding, and other compulsory charges that ${uni.abbreviation} may bill separately.`);
  } else {
    mistakes.push(`Assuming meeting the cut-off mark guarantees admission. At ${uni.abbreviation}, as at most Nigerian public universities, admission is competitive within quota (merit, catchment area, and educationally less-developed state allocations), so meeting the minimum score is necessary but not sufficient.`);
  }

  mistakes.push(`Leaving document preparation until after an admission offer. Birth certificate/age declaration, O'Level result(s), LGA identification, and passport photographs take time to assemble properly — starting during the Post-UTME stage, not after admission, avoids a rushed clearance process.`);

  return mistakes;
}

// Department-level cut-off marks and total first-year cost are the two
// most-requested-but-least-verifiable figures (they vary by department and
// by year even more than the institutional cut-off/tuition do). Rather than
// fabricate precise per-department numbers for 141 schools' worth of
// departments, this generates a clearly-labelled TYPICAL banding derived
// from the school's own (verified-or-typical) institutional cut-off —
// giving readers a genuinely useful table without presenting invented
// precision as fact.
function buildDepartmentCutoffTable(institutional) {
  const cap = (n) => Math.min(400, n);
  return [
    { tier: "Medicine, Law, Pharmacy, Dentistry", range: `${cap(institutional + 40)}–${cap(institutional + 90)}` },
    { tier: "Engineering, Computer Science, Architecture", range: `${cap(institutional + 15)}–${cap(institutional + 45)}` },
    { tier: "Accounting, Economics, Business Admin, Mass Communication", range: `${cap(institutional + 5)}–${cap(institutional + 25)}` },
    { tier: "Arts, Social Sciences, Education, Agriculture", range: `${institutional}–${cap(institutional + 15)}` },
  ];
}

function estimateTotalCost(category) {
  if (category === "Federal University") {
    return {
      freshers: "₦80,000 – ₦350,000 (tuition + acceptance fee + hostel, combined)",
      returning: "₦60,000 – ₦280,000 (tuition + hostel, no acceptance fee)",
    };
  }
  if (category === "State University") {
    return {
      freshers: "₦150,000 – ₦550,000 (tuition + acceptance fee + hostel, combined)",
      returning: "₦120,000 – ₦450,000 (tuition + hostel, no acceptance fee)",
    };
  }
  return {
    freshers: "₦600,000 – ₦3,500,000+ (tuition + acceptance fee + hostel, combined)",
    returning: "₦500,000 – ₦3,000,000+ (tuition + hostel, no acceptance fee)",
  };
}

const REQUIRED_DOCUMENTS = [
  "O'Level result(s) — WAEC, NECO, or NABTEB, with a minimum of five credits including English Language and Mathematics",
  "JAMB UTME result slip and Post-UTME/screening confirmation",
  "Birth certificate or a sworn age declaration",
  "Local Government (LGA) identification / certificate of origin",
  "Recent passport photographs (the exact number and specification is set by the school)",
  "Medical certificate of fitness, where the school requires one at clearance",
];

export default function UniversityProfile() {
  const { slug } = useParams();
  const uni = universities.find((u) => u.slug === slug);

  if (!uni) {
    return (
      <Layout>
        <div className="container section-txt">
          <h2>University not found</h2>
          <p>
            We don't have a profile for "{slug}" yet. Browse the{" "}
            <Link to="/nigeria/list-of-institution/page">full list of institutions</Link>.
          </p>
        </div>
      </Layout>
    );
  }

  // Any hardcoded "YYYY/YYYY" session mention baked into the generated
  // notes/FAQ text is rewritten to the live session on every render, so
  // nothing here can ever show a stale year.
  const overview = withLiveSession(uni.overview);
  const coursesNote = withLiveSession(uni.courses.note);
  const admissionRequirements = {
    olevel: withLiveSession(uni.admissionRequirements.olevel),
    utme: withLiveSession(uni.admissionRequirements.utme),
    directEntry: withLiveSession(uni.admissionRequirements.directEntry),
  };
  const postUtmeFormat = withLiveSession(uni.postUtme.format);
  const postUtmeSteps = uni.postUtme.steps.map(withLiveSession);
  const cutOffNote = withLiveSession(uni.cutOffMarks.note);
  const schoolFeesNote = withLiveSession(uni.schoolFees.note);
  const acceptanceFeeNote = withLiveSession(uni.acceptanceFee.note);
  const hostelNote = withLiveSession(uni.hostel.note);
  const faqs = uni.faqs.map((f) => ({ q: withLiveSession(f.q), a: withLiveSession(f.a) }));

  const category = uni.category || "Federal University";
  const ownership = uni.ownership || "Federal Government";
  const session = getCurrentSession();
  const deadlines = getAdmissionDeadlines();
  const currentYear = new Date().getFullYear();

  const whyChoose = buildWhyChoose(uni, category, ownership, currentYear);
  const commonMistakes = buildCommonMistakes(uni, category);
  const departmentCutoffs = buildDepartmentCutoffTable(uni.cutOffMarks.institutional);
  const totalCost = estimateTotalCost(category);

  const extraFaqs = [
    { q: `Does ${uni.abbreviation} offer scholarships?`, a: `Many Nigerian universities, ${uni.abbreviation} included, run merit-based, need-based, or state/government-sponsored scholarship schemes for existing students — check ${uni.abbreviation}'s official website or student affairs office for current-cycle scholarship announcements, since availability and criteria change yearly.` },
    { q: `What happens if I miss ${uni.abbreviation}'s admission list?`, a: `You aren't automatically out of options — JAMB typically releases admission in multiple batches/lists across an admission cycle, so checking JAMB CAPS and ${uni.abbreviation}'s portal periodically (rather than only after the first list) matters. A Change of Institution to a school with available space is also worth considering if ${uni.abbreviation} specifically doesn't work out.` },
    { q: `Can I defer my admission at ${uni.abbreviation}?`, a: `Many schools allow deferment for a genuine reason (medical, financial, personal), usually via a formal written request to the admissions/student affairs office — policies and whether a fee applies vary by school, so confirm directly with ${uni.abbreviation} rather than assuming a blanket policy.` },
  ];
  const allFaqs = [...faqs, ...extraFaqs];
  const pageTitle = `${uni.name} (${uni.abbreviation}) — Courses, School Fees, Cut-off Mark & Admission Requirements ${session} | MySearch Query`;
  const pageDescription = `${uni.abbreviation} (${uni.name}) admission requirements, JAMB cut-off mark, school fees, acceptance fee, hostel info, faculties and Post-UTME guide for ${session}. Everything prospective ${uni.abbreviation} students need in one page.`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      name: uni.name,
      alternateName: uni.abbreviation,
      url: uni.website,
      address: { "@type": "PostalAddress", addressLocality: uni.location, addressRegion: uni.state, addressCountry: "NG" },
      foundingDate: String(uni.founded),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  useDocumentMeta(pageTitle, pageDescription, jsonLd);

  return (
    <Layout>
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <Link to="/">Home</Link> &rsaquo;{" "}
        <Link to="/nigeria/list-of-institution/page">Universities</Link> &rsaquo;{" "}
        <span>{uni.abbreviation}</span>
      </nav>

      <section className="hero">
        <h1>{uni.name} ({uni.abbreviation})</h1>
        <p>{uni.location} &middot; {category} &middot; Est. {uni.founded} &middot; JAMB Cut-off, Fees &amp; Admission Guide {session}</p>
        <LastUpdatedStamp />
      </section>

      <div className="container">
        <nav className="profile-toc" aria-label="On this page">
          {SECTIONS.map((s) => <a key={s.id} href={`#${s.id}`}>{s.label}</a>)}
        </nav>

        <div className="quick-facts">
          <div className="quick-fact"><div className="label">Ownership</div><div className="value">{ownership}</div></div>
          <div className="quick-fact"><div className="label">JAMB Cut-off</div><div className="value">{uni.cutOffMarks.institutional}+</div></div>
          <div className="quick-fact"><div className="label">Acceptance Fee</div><div className="value" style={{ fontSize: "0.85rem" }}>{uni.acceptanceFee.amount.split(" (")[0].split(" —")[0]}</div></div>
          <div className="quick-fact"><div className="label">Faculties</div><div className="value">{uni.faculties.length}</div></div>
        </div>

        {/* OVERVIEW */}
        <section id="overview" className="section-txt">
          <h2>Overview</h2>
          <p>{overview}</p>
        </section>

        {/* WHY CHOOSE */}
        <section id="why-choose" className="section-txt">
          <h2>Why Students Choose {uni.abbreviation}</h2>
          <ul className="child-ul">
            {whyChoose.map((reason, i) => <li key={i}>{reason}</li>)}
          </ul>
        </section>

        {/* COURSES */}
        <section id="courses" className="section-txt">
          <h2>{uni.abbreviation} Courses</h2>
          <p>{coursesNote}</p>
          <ul className="child-ul">
            {uni.courses.list.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </section>

        {/* FACULTIES */}
        <section id="faculties" className="section-txt">
          <h2><SectionIcon name="faculties" />{uni.abbreviation} Faculties &amp; Colleges</h2>
          <ul className="child-ul">
            {uni.faculties.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </section>

        {/* ADMISSION REQUIREMENTS */}
        <section id="admission-requirements" className="section-txt">
          <h2>{uni.abbreviation} Admission Requirements</h2>
          <ul className="child-ul">
            <li><strong>O'Level:</strong> {admissionRequirements.olevel}</li>
            <li><strong>UTME:</strong> {admissionRequirements.utme}</li>
            <li><strong>Direct Entry:</strong> {admissionRequirements.directEntry}</li>
            <li><strong>Admission deadline:</strong> Public universities must conclude admissions by {deadlines.publicUniversities}; private universities by {deadlines.privateUniversities} (per JAMB's current-cycle policy meeting).</li>
          </ul>
        </section>

        {/* REQUIRED DOCUMENTS */}
        <section id="required-documents" className="section-txt">
          <h2><SectionIcon name="documents" />Documents You'll Need for {uni.abbreviation} Clearance</h2>
          <p>Start gathering these during the Post-UTME stage rather than after an admission offer — clearance moves quickly once your name appears on an admission list, and missing documents are one of the most common causes of a delayed registration.</p>
          <ul className="child-ul">
            {REQUIRED_DOCUMENTS.map((doc, i) => <li key={i}>{doc}</li>)}
          </ul>
        </section>

        {/* POST UTME */}
        <section id="post-utme" className="section-txt">
          <h2>{uni.abbreviation} Post-UTME Screening</h2>
          <p>{postUtmeFormat}</p>
          <ol className="child-ul">
            {postUtmeSteps.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
        </section>

        {/* REGISTRATION TIMELINE */}
        <section id="registration-timeline" className="section-txt">
          <h2><SectionIcon name="timeline" />{uni.abbreviation} Admission Timeline for {session}</h2>
          <ol className="child-ul">
            <li><strong>JAMB UTME:</strong> Sit the UTME with {uni.abbreviation} selected as your first-choice institution.</li>
            <li><strong>Post-UTME/screening:</strong> Register and sit {uni.abbreviation}'s screening exercise once your JAMB score clears the institutional cut-off.</li>
            <li><strong>Admission list:</strong> Check JAMB CAPS and {uni.abbreviation}'s own portal — admission is typically released in multiple batches across the cycle, not all at once.</li>
            <li><strong>Acceptance fee:</strong> Pay promptly once offered admission to secure your slot.</li>
            <li><strong>Clearance and registration:</strong> Submit required documents (see above) and complete course registration before the deadline.</li>
            <li><strong>Admission deadline:</strong> {category === "Private University" ? deadlines.privateUniversities : deadlines.publicUniversities} is JAMB's current-cycle cut-off for concluding admissions in {uni.abbreviation}'s category of institution.</li>
          </ol>
        </section>

        {/* CUT-OFF MARKS */}
        <section id="cut-off-marks" className="section-txt">
          <h2><SectionIcon name="cutoff" />{uni.abbreviation} JAMB Cut-off Marks {session} <DataBadge verified={uni.cutOffMarks.institutionalVerified} /></h2>
          <div className="quick-facts">
            <div className="quick-fact"><div className="label">JAMB National Minimum</div><div className="value">{uni.cutOffMarks.jambNational}</div></div>
            <div className="quick-fact"><div className="label">{uni.abbreviation} Institutional</div><div className="value">{uni.cutOffMarks.institutional}</div></div>
            <div className="quick-fact"><div className="label">Competitive Courses</div><div className="value" style={{ fontSize: "0.9rem" }}>{uni.cutOffMarks.competitiveCourses}</div></div>
          </div>
          <p>{cutOffNote}</p>

          <h3 className="text-color">Typical Department-Level Cut-off Bands</h3>
          <p style={{ fontSize: "0.9rem", color: "#555" }}>
            Illustrative banding derived from {uni.abbreviation}'s institutional cut-off, not confirmed
            per-department figures — competitive courses almost always require more than the general
            minimum. Confirm the exact departmental cut-off on the official portal.
          </p>
          <div className="table-container">
            <table>
              <thead><tr><th>Course Group</th><th>Typical Cut-off Range</th></tr></thead>
              <tbody>
                {departmentCutoffs.map((row, i) => (
                  <tr key={i}><td>{row.tier}</td><td>{row.range}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SCHOOL FEES */}
        <section id="school-fees" className="section-txt">
          <h2><SectionIcon name="fees" />{uni.abbreviation} School Fees {session} <DataBadge verified={uni.schoolFees.verified} /></h2>
          <div className="table-container">
            <table>
              <thead><tr><th>Cost Item</th><th>Fresh Students</th><th>Returning Students</th></tr></thead>
              <tbody>
                <tr>
                  <td>Tuition / School Fees</td>
                  <td>{uni.schoolFees.freshers}</td>
                  <td>{uni.schoolFees.returning}</td>
                </tr>
                <tr>
                  <td>Acceptance Fee</td>
                  <td>{uni.acceptanceFee.amount}</td>
                  <td>Not applicable — already admitted</td>
                </tr>
                <tr>
                  <td>Hostel (if opted in)</td>
                  <td colSpan={2}>{uni.hostel.available ? "Typically billed separately — see Hostel section below" : "Not applicable"}</td>
                </tr>
                <tr style={{ fontWeight: 700 }}>
                  <td>Estimated Total, First Year</td>
                  <td>{totalCost.freshers}</td>
                  <td>{totalCost.returning}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>{schoolFeesNote} The "Estimated Total" row is a category-level approximation (combining
            tuition, acceptance fee, and typical hostel cost for {category.toLowerCase()}s generally) —
            not a confirmed figure for {uni.abbreviation} specifically, since exact totals depend on
            faculty, hostel choice, and other school-specific charges.</p>
        </section>

        {/* ACCEPTANCE FEE */}
        <section id="acceptance-fee" className="section-txt">
          <h2>{uni.abbreviation} Acceptance Fee <DataBadge verified={uni.acceptanceFee.verified} /></h2>
          <p><strong>Amount:</strong> {uni.acceptanceFee.amount}</p>
          <p>{acceptanceFeeNote}</p>
        </section>

        {/* HOSTEL */}
        <section id="hostel" className="section-txt">
          <h2><SectionIcon name="hostel" />{uni.abbreviation} Hostel &amp; Accommodation</h2>
          <p>{hostelNote}</p>
        </section>

        <section className="section-txt">
          <h2>Useful Links</h2>
          <div className="cta-row">
            <a className="cta-button" href={uni.portalUrl} target="_blank" rel="noopener noreferrer">Admission Portal</a>
            <a className="cta-button" href={uni.website} target="_blank" rel="noopener noreferrer">Official Website</a>
            <Link className="cta-button" to="/calculate/cgpa/app">CGPA Calculator</Link>
            <Link className="cta-button" to="/calculate/jamb-aggregate/app">JAMB Aggregate Calculator</Link>
            <Link className="cta-button" to="/check/course-eligibility/app">Course Eligibility Checker</Link>
          </div>
        </section>

        {/* COMMON MISTAKES */}
        <section id="common-mistakes" className="section-txt">
          <h2>Common Mistakes {uni.abbreviation} Applicants Make</h2>
          <ul className="child-ul">
            {commonMistakes.map((mistake, i) => <li key={i}>{mistake}</li>)}
          </ul>
        </section>

        {/* FAQS */}
        <section id="faqs" className="section-txt profile-faq">
          <h2>Frequently Asked Questions</h2>
          {allFaqs.map((f, i) => (
            <details key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {/* SUMMARY */}
        <section className="section-txt">
          <h2>Summary</h2>
          <p>
            {uni.abbreviation} ({uni.name}) is a {category.toLowerCase()} in {uni.location}, founded in {uni.founded}.
            JAMB's national minimum for {session} is {uni.cutOffMarks.jambNational}, though {uni.abbreviation}'s own
            institutional cut-off {uni.cutOffMarks.institutionalVerified ? "is confirmed at" : "is typically around"} {uni.cutOffMarks.institutional} —
            and competitive departments generally require more. Admissions for {uni.abbreviation}'s category of
            institution must conclude by {category === "Private University" ? deadlines.privateUniversities : deadlines.publicUniversities} this
            cycle. Meeting the cut-off is only the first step: Post-UTME screening, document preparation, and
            watching JAMB CAPS for your admission batch all matter just as much. For anything time-sensitive —
            exact fees, exact departmental cut-offs, exact dates — {uni.abbreviation}'s own{" "}
            <a href={uni.portalUrl} target="_blank" rel="noopener noreferrer">official admission portal</a> is
            the authoritative source; this page is a starting point, not a substitute for it.
          </p>
        </section>
      </div>

      <div className="container">
        <RelatedUniversities universities={universities} current={uni} />
        <TrendingWidget universities={universities} />
      </div>

      <HotLinks title="Hot links" links={jambHotLink6} />
    </Layout>
  );
}
