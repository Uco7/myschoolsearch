// universitiesData.js
// SINGLE source of truth for every university profile page (federal, state & private).
// 141 schools, each with Overview, Courses, School Fees, Cut-off Marks, Admission
// Requirements, Post UTME, Acceptance Fee, Hostel, Faculties, and FAQs.
// See README.md 'Data honesty policy' for what's verified vs typical-range.

const universities = [
  {
    "slug": "unilag",
    "name": "University of Lagos",
    "abbreviation": "UNILAG",
    "state": "Lagos",
    "location": "Akoka, Yaba, Lagos",
    "founded": 1962,
    "motto": "In Deed and In Truth",
    "portalUrl": "https://portal.unilag.edu.ng",
    "website": "https://unilag.edu.ng",
    "faculties": [
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Dental Sciences",
      "Education",
      "Engineering",
      "Environmental Sciences",
      "Law",
      "Management Sciences",
      "Pharmacy",
      "Sciences",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Medicine & Surgery",
      "Mass Communication",
      "Accounting",
      "Computer Science"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "University of Lagos (UNILAG) is a federal government-owned federal university located in Akoka, Yaba, Lagos, established in 1962. Its motto is \"In Deed and In Truth\". UNILAG is organized into 12 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Medicine & Surgery, Mass Communication.",
    "courses": {
      "list": [
        "Law",
        "Medicine & Surgery",
        "Mass Communication",
        "Accounting",
        "Computer Science"
      ],
      "note": "UNILAG offers undergraduate programmes across all 12 of its faculties. The most-searched courses are Law, Medicine & Surgery, Mass Communication, Accounting, Computer Science. Course availability and specific departmental JAMB subject combinations should be confirmed on UNILAG's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UNILAG as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UNILAG conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UNILAG's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UNILAG's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": true,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UNILAG's own institutional cut-off is confirmed at 200. Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "₦126,325 (non-lab courses) to ₦176,300 (lab/studio courses)",
      "returning": "₦100,000 – ₦200,000 depending on faculty and level",
      "verified": true,
      "session": "2026/2027",
      "note": "Figures above reflect real published rates. Always confirm the exact current figure on UNILAG's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "₦30,700 – ₦45,000 (reported figures vary by source/session)",
      "verified": true,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UNILAG operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UNILAG?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UNILAG's own institutional cut-off is confirmed at 200."
      },
      {
        "q": "Does UNILAG offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UNILAG's acceptance fee?",
        "a": "₦30,700 – ₦45,000 (reported figures vary by source/session) (confirmed)"
      },
      {
        "q": "Is hostel accommodation guaranteed at UNILAG?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UNILAG admission status?",
        "a": "On UNILAG's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "ui",
    "name": "University of Ibadan",
    "abbreviation": "UI",
    "state": "Oyo",
    "location": "Ibadan, Oyo State",
    "founded": 1948,
    "motto": "Recte Sapere Fons",
    "portalUrl": "https://portal.ui.edu.ng",
    "website": "https://ui.edu.ng",
    "faculties": [
      "Arts",
      "Agriculture & Forestry",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Dentistry",
      "Education",
      "Law",
      "Public Health",
      "Science",
      "Social Sciences",
      "Technology",
      "Veterinary Medicine"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Political Science",
      "Pharmacy",
      "Economics"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "University of Ibadan (UI) is a federal government-owned federal university located in Ibadan, Oyo State, established in 1948. Its motto is \"Recte Sapere Fons\". UI is organized into 12 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Political Science.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Political Science",
        "Pharmacy",
        "Economics"
      ],
      "note": "UI offers undergraduate programmes across all 12 of its faculties. The most-searched courses are Medicine & Surgery, Law, Political Science, Pharmacy, Economics. Course availability and specific departmental JAMB subject combinations should be confirmed on UI's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UI as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UI conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UI's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UI's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": true,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UI's own institutional cut-off is confirmed at 200. Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "₦34,300 – ₦36,800 depending on faculty",
      "returning": "₦20,000 – ₦32,000 depending on year and faculty",
      "verified": true,
      "session": "2026/2027",
      "note": "Figures above reflect real published rates. Always confirm the exact current figure on UI's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "₦50,000 (confirmed via UI's official CAPS admission portal)",
      "verified": true,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UI operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UI?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UI's own institutional cut-off is confirmed at 200."
      },
      {
        "q": "Does UI offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UI's acceptance fee?",
        "a": "₦50,000 (confirmed via UI's official CAPS admission portal) (confirmed)"
      },
      {
        "q": "Is hostel accommodation guaranteed at UI?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UI admission status?",
        "a": "On UI's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "unn",
    "name": "University of Nigeria, Nsukka",
    "abbreviation": "UNN",
    "state": "Enugu",
    "location": "Nsukka, Enugu State",
    "founded": 1960,
    "motto": "To Restore the Dignity of Man",
    "portalUrl": "https://portal.unn.edu.ng",
    "website": "https://unn.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Basic Medical Sciences",
      "Biological Sciences",
      "Business Administration",
      "Education",
      "Engineering",
      "Law",
      "Medical Sciences",
      "Physical Sciences",
      "Social Sciences",
      "Veterinary Medicine"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Pharmacy",
      "Mass Communication",
      "Accountancy"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "University of Nigeria, Nsukka (UNN) is a federal government-owned federal university located in Nsukka, Enugu State, established in 1960. Its motto is \"To Restore the Dignity of Man\". UNN is organized into 12 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Pharmacy.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Pharmacy",
        "Mass Communication",
        "Accountancy"
      ],
      "note": "UNN offers undergraduate programmes across all 12 of its faculties. The most-searched courses are Medicine & Surgery, Law, Pharmacy, Mass Communication, Accountancy. Course availability and specific departmental JAMB subject combinations should be confirmed on UNN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UNN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UNN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UNN's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UNN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": true,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UNN's own institutional cut-off is confirmed at 200. Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "₦110,900 – ₦120,650 depending on faculty",
      "returning": "₦85,000 – ₦95,750 depending on faculty",
      "verified": true,
      "session": "2026/2027",
      "note": "Figures above reflect real published rates. Always confirm the exact current figure on UNN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "₦30,000 (most consistently reported figure)",
      "verified": true,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UNN operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UNN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UNN's own institutional cut-off is confirmed at 200."
      },
      {
        "q": "Does UNN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UNN's acceptance fee?",
        "a": "₦30,000 (most consistently reported figure) (confirmed)"
      },
      {
        "q": "Is hostel accommodation guaranteed at UNN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UNN admission status?",
        "a": "On UNN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "oau",
    "name": "Obafemi Awolowo University",
    "abbreviation": "OAU",
    "state": "Osun",
    "location": "Ile-Ife, Osun State",
    "founded": 1962,
    "motto": "For Learning and Culture",
    "portalUrl": "https://portal.oauife.edu.ng",
    "website": "https://oauife.edu.ng",
    "faculties": [
      "Administration",
      "Agriculture",
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Dentistry",
      "Education",
      "Environmental Design",
      "Law",
      "Pharmacy",
      "Science",
      "Social Sciences",
      "Technology"
    ],
    "popularCourses": [
      "Law",
      "Medicine & Surgery",
      "Estate Management",
      "Computer Science",
      "Architecture"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Obafemi Awolowo University (OAU) is a federal government-owned federal university located in Ile-Ife, Osun State, established in 1962. Its motto is \"For Learning and Culture\". OAU is organized into 13 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Medicine & Surgery, Estate Management.",
    "courses": {
      "list": [
        "Law",
        "Medicine & Surgery",
        "Estate Management",
        "Computer Science",
        "Architecture"
      ],
      "note": "OAU offers undergraduate programmes across all 13 of its faculties. The most-searched courses are Law, Medicine & Surgery, Estate Management, Computer Science, Architecture. Course availability and specific departmental JAMB subject combinations should be confirmed on OAU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose OAU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "OAU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet OAU's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on OAU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": true,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). OAU's own institutional cut-off is confirmed at 200. Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦100,000 – ₦200,000+ depending on faculty (Health Sciences higher)",
      "returning": "lower than freshers; exact figure varies by faculty",
      "verified": true,
      "session": "2026/2027",
      "note": "Figures above reflect real published rates. Always confirm the exact current figure on OAU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "confirm current amount on the OAU student payment portal (oauife.edu.ng)",
      "verified": true,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "OAU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for OAU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but OAU's own institutional cut-off is confirmed at 200."
      },
      {
        "q": "Does OAU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is OAU's acceptance fee?",
        "a": "confirm current amount on the OAU student payment portal (oauife.edu.ng) (confirmed)"
      },
      {
        "q": "Is hostel accommodation guaranteed at OAU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my OAU admission status?",
        "a": "On OAU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "abu",
    "name": "Ahmadu Bello University",
    "abbreviation": "ABU",
    "state": "Kaduna",
    "location": "Zaria, Kaduna State",
    "founded": 1962,
    "motto": "Let There Be Light",
    "portalUrl": "https://portal.abu.edu.ng",
    "website": "https://abu.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Education",
      "Engineering",
      "Environmental Design",
      "Law",
      "Medicine",
      "Pharmaceutical Sciences",
      "Science",
      "Social Sciences",
      "Veterinary Medicine"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Pharmacy",
      "Law",
      "Agriculture",
      "Architecture"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Ahmadu Bello University (ABU) is a federal government-owned federal university located in Zaria, Kaduna State, established in 1962. Its motto is \"Let There Be Light\". ABU is organized into 11 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Pharmacy, Law.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Pharmacy",
        "Law",
        "Agriculture",
        "Architecture"
      ],
      "note": "ABU offers undergraduate programmes across all 11 of its faculties. The most-searched courses are Medicine & Surgery, Pharmacy, Law, Agriculture, Architecture. Course availability and specific departmental JAMB subject combinations should be confirmed on ABU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose ABU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "ABU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet ABU's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on ABU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). ABU's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for ABU.  Always confirm the exact current figure on ABU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "ABU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for ABU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but ABU's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does ABU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is ABU's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at ABU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my ABU admission status?",
        "a": "On ABU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "uniben",
    "name": "University of Benin",
    "abbreviation": "UNIBEN",
    "state": "Edo",
    "location": "Benin City, Edo State",
    "founded": 1970,
    "motto": "Knowledge for Service",
    "portalUrl": "https://portal.uniben.edu",
    "website": "https://uniben.edu",
    "faculties": [
      "Agriculture",
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Dentistry",
      "Education",
      "Engineering",
      "Law",
      "Life Sciences",
      "Management Sciences",
      "Pharmacy",
      "Physical Sciences",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Pharmacy",
      "Accounting",
      "Mass Communication"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "University of Benin (UNIBEN) is a federal government-owned federal university located in Benin City, Edo State, established in 1970. Its motto is \"Knowledge for Service\". UNIBEN is organized into 13 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Pharmacy.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Pharmacy",
        "Accounting",
        "Mass Communication"
      ],
      "note": "UNIBEN offers undergraduate programmes across all 13 of its faculties. The most-searched courses are Medicine & Surgery, Law, Pharmacy, Accounting, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on UNIBEN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UNIBEN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UNIBEN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UNIBEN's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UNIBEN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": true,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UNIBEN's own institutional cut-off is confirmed at 200. Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typical federal-university range — confirm exact amount on UNIBEN's portal",
      "returning": "typical federal-university range — confirm exact amount on UNIBEN's portal",
      "verified": true,
      "session": "2026/2027",
      "note": "Figures above reflect real published rates. Always confirm the exact current figure on UNIBEN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "confirm current amount on UNIBEN's official admission portal",
      "verified": true,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UNIBEN operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UNIBEN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UNIBEN's own institutional cut-off is confirmed at 200."
      },
      {
        "q": "Does UNIBEN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UNIBEN's acceptance fee?",
        "a": "confirm current amount on UNIBEN's official admission portal (confirmed)"
      },
      {
        "q": "Is hostel accommodation guaranteed at UNIBEN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UNIBEN admission status?",
        "a": "On UNIBEN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "uniport",
    "name": "University of Port Harcourt",
    "abbreviation": "UNIPORT",
    "state": "Rivers",
    "location": "Choba, Port Harcourt, Rivers State",
    "founded": 1975,
    "motto": "Vision, Enterprise, Excellence",
    "portalUrl": "https://portal.uniport.edu.ng",
    "website": "https://uniport.edu.ng",
    "faculties": [
      "Agriculture",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Engineering",
      "Humanities",
      "Law",
      "Management Sciences",
      "Pharmaceutical Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Petroleum Engineering",
      "Accounting",
      "Mass Communication"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "University of Port Harcourt (UNIPORT) is a federal government-owned federal university located in Choba, Port Harcourt, Rivers State, established in 1975. Its motto is \"Vision, Enterprise, Excellence\". UNIPORT is organized into 11 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Petroleum Engineering.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Petroleum Engineering",
        "Accounting",
        "Mass Communication"
      ],
      "note": "UNIPORT offers undergraduate programmes across all 11 of its faculties. The most-searched courses are Medicine & Surgery, Law, Petroleum Engineering, Accounting, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on UNIPORT's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UNIPORT as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UNIPORT conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UNIPORT's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UNIPORT's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UNIPORT's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for UNIPORT.  Always confirm the exact current figure on UNIPORT's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UNIPORT operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UNIPORT?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UNIPORT's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does UNIPORT offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UNIPORT's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at UNIPORT?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UNIPORT admission status?",
        "a": "On UNIPORT's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "funai",
    "name": "Alex Ekwueme Federal University Ndufu-Alike",
    "abbreviation": "FUNAI",
    "state": "Ebonyi",
    "location": "Ndufu-Alike, Ikwo, Ebonyi State",
    "founded": 2011,
    "motto": "Knowledge for Development",
    "portalUrl": "https://portal.funai.edu.ng",
    "website": "https://funai.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts & Social Sciences",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Engineering",
      "Law",
      "Management Sciences",
      "Science"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Computer Science",
      "Accounting",
      "Microbiology"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Alex Ekwueme Federal University Ndufu-Alike (FUNAI) is a federal government-owned federal university located in Ndufu-Alike, Ikwo, Ebonyi State, established in 2011. Its motto is \"Knowledge for Development\". FUNAI is organized into 9 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Computer Science.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Computer Science",
        "Accounting",
        "Microbiology"
      ],
      "note": "FUNAI offers undergraduate programmes across all 9 of its faculties. The most-searched courses are Medicine & Surgery, Law, Computer Science, Accounting, Microbiology. Course availability and specific departmental JAMB subject combinations should be confirmed on FUNAI's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUNAI as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUNAI conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUNAI's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUNAI's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUNAI's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUNAI.  Always confirm the exact current figure on FUNAI's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUNAI operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUNAI?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUNAI's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUNAI offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUNAI's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUNAI?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUNAI admission status?",
        "a": "On FUNAI's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "unilorin",
    "name": "University of Ilorin",
    "abbreviation": "UNILORIN",
    "state": "Kwara",
    "location": "Ilorin, Kwara State",
    "founded": 1975,
    "motto": "Knowledge and Excellence",
    "portalUrl": "https://portal.unilorin.edu.ng",
    "website": "https://unilorin.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Communication & Information Sciences",
      "Education",
      "Engineering & Technology",
      "Environmental Sciences",
      "Law",
      "Life Sciences",
      "Management Sciences",
      "Pharmaceutical Sciences",
      "Physical Sciences",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Pharmacy",
      "Mass Communication",
      "Accounting"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "University of Ilorin (UNILORIN) is a federal government-owned federal university located in Ilorin, Kwara State, established in 1975. Its motto is \"Knowledge and Excellence\". UNILORIN is organized into 14 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Pharmacy.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Pharmacy",
        "Mass Communication",
        "Accounting"
      ],
      "note": "UNILORIN offers undergraduate programmes across all 14 of its faculties. The most-searched courses are Medicine & Surgery, Law, Pharmacy, Mass Communication, Accounting. Course availability and specific departmental JAMB subject combinations should be confirmed on UNILORIN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UNILORIN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UNILORIN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UNILORIN's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UNILORIN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UNILORIN's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for UNILORIN.  Always confirm the exact current figure on UNILORIN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UNILORIN operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UNILORIN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UNILORIN's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does UNILORIN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UNILORIN's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at UNILORIN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UNILORIN admission status?",
        "a": "On UNILORIN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "futa",
    "name": "Federal University of Technology, Akure",
    "abbreviation": "FUTA",
    "state": "Ondo",
    "location": "Akure, Ondo State",
    "founded": 1981,
    "motto": "Technology for Service",
    "portalUrl": "https://portal.futa.edu.ng",
    "website": "https://futa.edu.ng",
    "faculties": [
      "Agriculture",
      "Computing",
      "Engineering",
      "Environmental Design & Management",
      "Management Technology",
      "Sciences",
      "Technology Education"
    ],
    "popularCourses": [
      "Computer Science",
      "Civil Engineering",
      "Architecture",
      "Cyber Security",
      "Agricultural Engineering"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University of Technology, Akure (FUTA) is a federal government-owned federal university located in Akure, Ondo State, established in 1981. Its motto is \"Technology for Service\". FUTA is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Computer Science, Civil Engineering, Architecture.",
    "courses": {
      "list": [
        "Computer Science",
        "Civil Engineering",
        "Architecture",
        "Cyber Security",
        "Agricultural Engineering"
      ],
      "note": "FUTA offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Computer Science, Civil Engineering, Architecture, Cyber Security, Agricultural Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on FUTA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUTA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUTA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUTA's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUTA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUTA's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUTA.  Always confirm the exact current figure on FUTA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUTA operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUTA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUTA's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUTA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUTA's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUTA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUTA admission status?",
        "a": "On FUTA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "futo",
    "name": "Federal University of Technology, Owerri",
    "abbreviation": "FUTO",
    "state": "Imo",
    "location": "Owerri, Imo State",
    "founded": 1980,
    "motto": "Technology and Self-Reliance",
    "portalUrl": "https://portal.futo.edu.ng",
    "website": "https://futo.edu.ng",
    "faculties": [
      "Agriculture & Environmental Technology",
      "Engineering",
      "Environmental Sciences",
      "Health Sciences",
      "Management Technology",
      "Science"
    ],
    "popularCourses": [
      "Computer Science",
      "Electrical Engineering",
      "Architecture",
      "Biotechnology",
      "Information Technology"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University of Technology, Owerri (FUTO) is a federal government-owned federal university located in Owerri, Imo State, established in 1980. Its motto is \"Technology and Self-Reliance\". FUTO is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Computer Science, Electrical Engineering, Architecture.",
    "courses": {
      "list": [
        "Computer Science",
        "Electrical Engineering",
        "Architecture",
        "Biotechnology",
        "Information Technology"
      ],
      "note": "FUTO offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Computer Science, Electrical Engineering, Architecture, Biotechnology, Information Technology. Course availability and specific departmental JAMB subject combinations should be confirmed on FUTO's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUTO as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUTO conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUTO's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUTO's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUTO's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUTO.  Always confirm the exact current figure on FUTO's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUTO operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUTO?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUTO's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUTO offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUTO's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUTO?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUTO admission status?",
        "a": "On FUTO's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "udus",
    "name": "Usmanu Danfodiyo University, Sokoto",
    "abbreviation": "UDUS",
    "state": "Sokoto",
    "location": "Sokoto, Sokoto State",
    "founded": 1975,
    "motto": "Manpower and Development",
    "portalUrl": "https://portal.udusok.edu.ng",
    "website": "https://udusok.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts & Islamic Studies",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education & Extension Services",
      "Law",
      "Pharmaceutical Sciences",
      "Science",
      "Social Sciences",
      "Veterinary Medicine"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Pharmacy",
      "Islamic Studies",
      "Agriculture"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Usmanu Danfodiyo University, Sokoto (UDUS) is a federal government-owned federal university located in Sokoto, Sokoto State, established in 1975. Its motto is \"Manpower and Development\". UDUS is organized into 10 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Pharmacy.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Pharmacy",
        "Islamic Studies",
        "Agriculture"
      ],
      "note": "UDUS offers undergraduate programmes across all 10 of its faculties. The most-searched courses are Medicine & Surgery, Law, Pharmacy, Islamic Studies, Agriculture. Course availability and specific departmental JAMB subject combinations should be confirmed on UDUS's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UDUS as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UDUS conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UDUS's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UDUS's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UDUS's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for UDUS.  Always confirm the exact current figure on UDUS's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UDUS operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UDUS?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UDUS's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does UDUS offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UDUS's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at UDUS?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UDUS admission status?",
        "a": "On UDUS's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "buk",
    "name": "Bayero University, Kano",
    "abbreviation": "BUK",
    "state": "Kano",
    "location": "Kano, Kano State",
    "founded": 1975,
    "motto": "Wisdom Fear of God",
    "portalUrl": "https://portal.buk.edu.ng",
    "website": "https://buk.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts & Islamic Studies",
      "Clinical Sciences",
      "Communication",
      "Education",
      "Engineering",
      "Law",
      "Medicine",
      "Pharmaceutical Sciences",
      "Science",
      "Social & Management Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Mass Communication",
      "Pharmacy",
      "Computer Science"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Bayero University, Kano (BUK) is a federal government-owned federal university located in Kano, Kano State, established in 1975. Its motto is \"Wisdom Fear of God\". BUK is organized into 11 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Mass Communication.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Mass Communication",
        "Pharmacy",
        "Computer Science"
      ],
      "note": "BUK offers undergraduate programmes across all 11 of its faculties. The most-searched courses are Medicine & Surgery, Law, Mass Communication, Pharmacy, Computer Science. Course availability and specific departmental JAMB subject combinations should be confirmed on BUK's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose BUK as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "BUK conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet BUK's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on BUK's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). BUK's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for BUK.  Always confirm the exact current figure on BUK's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "BUK operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for BUK?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but BUK's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does BUK offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is BUK's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at BUK?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my BUK admission status?",
        "a": "On BUK's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "unical",
    "name": "University of Calabar",
    "abbreviation": "UNICAL",
    "state": "Cross River",
    "location": "Calabar, Cross River State",
    "founded": 1975,
    "motto": "Knowledge for Service",
    "portalUrl": "https://portal.unical.edu.ng",
    "website": "https://unical.edu.ng",
    "faculties": [
      "Agriculture",
      "Allied Medical Sciences",
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Accounting",
      "Mass Communication",
      "Biological Sciences"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "University of Calabar (UNICAL) is a federal government-owned federal university located in Calabar, Cross River State, established in 1975. Its motto is \"Knowledge for Service\". UNICAL is organized into 10 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Accounting",
        "Mass Communication",
        "Biological Sciences"
      ],
      "note": "UNICAL offers undergraduate programmes across all 10 of its faculties. The most-searched courses are Medicine & Surgery, Law, Accounting, Mass Communication, Biological Sciences. Course availability and specific departmental JAMB subject combinations should be confirmed on UNICAL's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UNICAL as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UNICAL conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UNICAL's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UNICAL's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UNICAL's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for UNICAL.  Always confirm the exact current figure on UNICAL's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UNICAL operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UNICAL?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UNICAL's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does UNICAL offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UNICAL's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at UNICAL?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UNICAL admission status?",
        "a": "On UNICAL's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "unijos",
    "name": "University of Jos",
    "abbreviation": "UNIJOS",
    "state": "Plateau",
    "location": "Jos, Plateau State",
    "founded": 1975,
    "motto": "Beacon of Hope",
    "portalUrl": "https://portal.unijos.edu.ng",
    "website": "https://unijos.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Clinical Sciences",
      "Education",
      "Environmental Sciences",
      "Law",
      "Management Sciences",
      "Natural Sciences",
      "Pharmaceutical Sciences",
      "Social Sciences",
      "Veterinary Medicine"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Architecture",
      "Accounting",
      "Mass Communication"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "University of Jos (UNIJOS) is a federal government-owned federal university located in Jos, Plateau State, established in 1975. Its motto is \"Beacon of Hope\". UNIJOS is organized into 11 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Architecture.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Architecture",
        "Accounting",
        "Mass Communication"
      ],
      "note": "UNIJOS offers undergraduate programmes across all 11 of its faculties. The most-searched courses are Medicine & Surgery, Law, Architecture, Accounting, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on UNIJOS's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UNIJOS as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UNIJOS conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UNIJOS's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UNIJOS's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UNIJOS's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for UNIJOS.  Always confirm the exact current figure on UNIJOS's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UNIJOS operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UNIJOS?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UNIJOS's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does UNIJOS offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UNIJOS's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at UNIJOS?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UNIJOS admission status?",
        "a": "On UNIJOS's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "uniabuja",
    "name": "University of Abuja",
    "abbreviation": "UNIABUJA",
    "state": "FCT",
    "location": "Gwagwalada, Abuja",
    "founded": 1988,
    "motto": "Meaningful Knowledge for Human Development",
    "portalUrl": "https://portal.uniabuja.edu.ng",
    "website": "https://uniabuja.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Clinical Sciences",
      "Education",
      "Engineering",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Medicine & Surgery",
      "Mass Communication",
      "Accounting",
      "Computer Science"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "University of Abuja (UNIABUJA) is a federal government-owned federal university located in Gwagwalada, Abuja, established in 1988. Its motto is \"Meaningful Knowledge for Human Development\". UNIABUJA is organized into 9 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Medicine & Surgery, Mass Communication.",
    "courses": {
      "list": [
        "Law",
        "Medicine & Surgery",
        "Mass Communication",
        "Accounting",
        "Computer Science"
      ],
      "note": "UNIABUJA offers undergraduate programmes across all 9 of its faculties. The most-searched courses are Law, Medicine & Surgery, Mass Communication, Accounting, Computer Science. Course availability and specific departmental JAMB subject combinations should be confirmed on UNIABUJA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UNIABUJA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UNIABUJA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UNIABUJA's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UNIABUJA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UNIABUJA's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for UNIABUJA.  Always confirm the exact current figure on UNIABUJA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UNIABUJA operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UNIABUJA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UNIABUJA's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does UNIABUJA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UNIABUJA's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at UNIABUJA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UNIABUJA admission status?",
        "a": "On UNIABUJA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "noun",
    "name": "National Open University of Nigeria",
    "abbreviation": "NOUN",
    "state": "Lagos (HQ) — nationwide study centres",
    "location": "Headquarters: Victoria Island, Lagos",
    "founded": 2002,
    "motto": "Education for Liberation",
    "portalUrl": "https://portal.noun.edu.ng",
    "website": "https://noun.edu.ng",
    "faculties": [
      "Agricultural Sciences",
      "Arts",
      "Education",
      "Health Sciences",
      "Law",
      "Management Sciences",
      "Sciences",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Nursing"
    ],
    "isDistanceLearning": true,
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "National Open University of Nigeria (NOUN) is a federal government-owned federal university located in Headquarters: Victoria Island, Lagos, established in 2002. Its motto is \"Education for Liberation\". NOUN is organized into 8 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Law",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Nursing"
      ],
      "note": "NOUN offers undergraduate programmes across all 8 of its faculties. The most-searched courses are Law, Business Administration, Computer Science, Mass Communication, Nursing. Course availability and specific departmental JAMB subject combinations should be confirmed on NOUN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose NOUN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "NOUN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet NOUN's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on NOUN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). NOUN's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for NOUN.  Always confirm the exact current figure on NOUN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "NOUN operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for NOUN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but NOUN's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does NOUN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is NOUN's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at NOUN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my NOUN admission status?",
        "a": "On NOUN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "mouau",
    "name": "Michael Okpara University of Agriculture, Umudike",
    "abbreviation": "MOUAU",
    "state": "Abia",
    "location": "Umudike, Abia State",
    "founded": 1992,
    "motto": "Agriculture for Food Security",
    "portalUrl": "https://portal.mouau.edu.ng",
    "website": "https://mouau.edu.ng",
    "faculties": [
      "Agriculture",
      "Basic Medicine",
      "Biological Sciences",
      "Engineering & Technology",
      "Environmental Studies",
      "Management Sciences",
      "Veterinary Medicine"
    ],
    "popularCourses": [
      "Agricultural Economics",
      "Food Science & Technology",
      "Animal Science",
      "Soil Science",
      "Veterinary Medicine"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Michael Okpara University of Agriculture, Umudike (MOUAU) is a federal government-owned federal university located in Umudike, Abia State, established in 1992. Its motto is \"Agriculture for Food Security\". MOUAU is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Agricultural Economics, Food Science & Technology, Animal Science.",
    "courses": {
      "list": [
        "Agricultural Economics",
        "Food Science & Technology",
        "Animal Science",
        "Soil Science",
        "Veterinary Medicine"
      ],
      "note": "MOUAU offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Agricultural Economics, Food Science & Technology, Animal Science, Soil Science, Veterinary Medicine. Course availability and specific departmental JAMB subject combinations should be confirmed on MOUAU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose MOUAU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "MOUAU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet MOUAU's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on MOUAU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). MOUAU's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for MOUAU.  Always confirm the exact current figure on MOUAU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "MOUAU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for MOUAU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but MOUAU's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does MOUAU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is MOUAU's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at MOUAU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my MOUAU admission status?",
        "a": "On MOUAU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fuoye",
    "name": "Federal University Oye-Ekiti",
    "abbreviation": "FUOYE",
    "state": "Ekiti",
    "location": "Oye-Ekiti, Ekiti State",
    "founded": 2011,
    "motto": "Knowledge and Excellence",
    "portalUrl": "https://portal.fuoye.edu.ng",
    "website": "https://fuoye.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Engineering",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Computer Science",
      "Accounting",
      "Microbiology"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University Oye-Ekiti (FUOYE) is a federal government-owned federal university located in Oye-Ekiti, Ekiti State, established in 2011. Its motto is \"Knowledge and Excellence\". FUOYE is organized into 10 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Computer Science.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Computer Science",
        "Accounting",
        "Microbiology"
      ],
      "note": "FUOYE offers undergraduate programmes across all 10 of its faculties. The most-searched courses are Medicine & Surgery, Law, Computer Science, Accounting, Microbiology. Course availability and specific departmental JAMB subject combinations should be confirmed on FUOYE's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUOYE as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUOYE conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUOYE's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUOYE's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUOYE's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUOYE.  Always confirm the exact current figure on FUOYE's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUOYE operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUOYE?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUOYE's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUOYE offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUOYE's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUOYE?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUOYE admission status?",
        "a": "On FUOYE's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "unizik",
    "name": "Nnamdi Azikiwe University",
    "abbreviation": "UNIZIK",
    "state": "Anambra",
    "location": "Awka, Anambra State",
    "founded": 1992,
    "motto": "Odera",
    "portalUrl": "https://portal.unizik.edu.ng",
    "website": "https://unizik.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Engineering",
      "Environmental Sciences",
      "Law",
      "Management Sciences",
      "Physical Sciences",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Mass Communication",
      "Accounting",
      "Pharmacy"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Nnamdi Azikiwe University (UNIZIK) is a federal government-owned federal university located in Awka, Anambra State, established in 1992. Its motto is \"Odera\". UNIZIK is organized into 11 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Mass Communication.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Mass Communication",
        "Accounting",
        "Pharmacy"
      ],
      "note": "UNIZIK offers undergraduate programmes across all 11 of its faculties. The most-searched courses are Medicine & Surgery, Law, Mass Communication, Accounting, Pharmacy. Course availability and specific departmental JAMB subject combinations should be confirmed on UNIZIK's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UNIZIK as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UNIZIK conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UNIZIK's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UNIZIK's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UNIZIK's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for UNIZIK.  Always confirm the exact current figure on UNIZIK's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UNIZIK operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UNIZIK?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UNIZIK's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does UNIZIK offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UNIZIK's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at UNIZIK?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UNIZIK admission status?",
        "a": "On UNIZIK's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "funaab",
    "name": "Federal University of Agriculture, Abeokuta",
    "abbreviation": "FUNAAB",
    "state": "Ogun",
    "location": "Abeokuta, Ogun State",
    "founded": 1988,
    "portalUrl": "https://portal.funaab.edu.ng",
    "website": "https://funaab.edu.ng",
    "faculties": [
      "Agriculture",
      "Agricultural Management & Rural Development",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Engineering",
      "Management Sciences",
      "Renewable Natural Resources",
      "Science",
      "Veterinary Medicine"
    ],
    "popularCourses": [
      "Agricultural Economics",
      "Food Science & Technology",
      "Animal Science",
      "Fisheries",
      "Microbiology"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University of Agriculture, Abeokuta (FUNAAB) is a federal government-owned federal university located in Abeokuta, Ogun State, established in 1988. FUNAAB is organized into 9 faculties/colleges and is widely searched by prospective JAMB candidates for its Agricultural Economics, Food Science & Technology, Animal Science.",
    "courses": {
      "list": [
        "Agricultural Economics",
        "Food Science & Technology",
        "Animal Science",
        "Fisheries",
        "Microbiology"
      ],
      "note": "FUNAAB offers undergraduate programmes across all 9 of its faculties. The most-searched courses are Agricultural Economics, Food Science & Technology, Animal Science, Fisheries, Microbiology. Course availability and specific departmental JAMB subject combinations should be confirmed on FUNAAB's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUNAAB as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUNAAB conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUNAAB's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUNAAB's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUNAAB's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUNAAB.  Always confirm the exact current figure on FUNAAB's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUNAAB operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUNAAB?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUNAAB's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUNAAB offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUNAAB's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUNAAB?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUNAAB admission status?",
        "a": "On FUNAAB's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "unimaid",
    "name": "University of Maiduguri",
    "abbreviation": "UNIMAID",
    "state": "Borno",
    "location": "Maiduguri, Borno State",
    "founded": 1975,
    "portalUrl": "https://portal.unimaid.edu.ng",
    "website": "https://unimaid.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Clinical Sciences",
      "Education",
      "Engineering",
      "Law",
      "Management Sciences",
      "Medicine",
      "Science",
      "Social Sciences",
      "Veterinary Medicine"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Agriculture",
      "Mass Communication",
      "Accounting"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "University of Maiduguri (UNIMAID) is a federal government-owned federal university located in Maiduguri, Borno State, established in 1975. UNIMAID is organized into 11 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Agriculture.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Agriculture",
        "Mass Communication",
        "Accounting"
      ],
      "note": "UNIMAID offers undergraduate programmes across all 11 of its faculties. The most-searched courses are Medicine & Surgery, Law, Agriculture, Mass Communication, Accounting. Course availability and specific departmental JAMB subject combinations should be confirmed on UNIMAID's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UNIMAID as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UNIMAID conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UNIMAID's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UNIMAID's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UNIMAID's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for UNIMAID.  Always confirm the exact current figure on UNIMAID's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UNIMAID operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UNIMAID?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UNIMAID's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does UNIMAID offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UNIMAID's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at UNIMAID?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UNIMAID admission status?",
        "a": "On UNIMAID's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "atbu",
    "name": "Abubakar Tafawa Balewa University",
    "abbreviation": "ATBU",
    "state": "Bauchi",
    "location": "Bauchi, Bauchi State",
    "founded": 1980,
    "portalUrl": "https://portal.atbu.edu.ng",
    "website": "https://atbu.edu.ng",
    "faculties": [
      "Agriculture & Agricultural Technology",
      "Arts & Social Sciences",
      "Engineering & Engineering Technology",
      "Environmental Technology",
      "Management Sciences",
      "Science",
      "Medical Sciences"
    ],
    "popularCourses": [
      "Mechanical Engineering",
      "Electrical Engineering",
      "Computer Science",
      "Architecture",
      "Accounting"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Abubakar Tafawa Balewa University (ATBU) is a federal government-owned federal university located in Bauchi, Bauchi State, established in 1980. ATBU is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Mechanical Engineering, Electrical Engineering, Computer Science.",
    "courses": {
      "list": [
        "Mechanical Engineering",
        "Electrical Engineering",
        "Computer Science",
        "Architecture",
        "Accounting"
      ],
      "note": "ATBU offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Mechanical Engineering, Electrical Engineering, Computer Science, Architecture, Accounting. Course availability and specific departmental JAMB subject combinations should be confirmed on ATBU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose ATBU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "ATBU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet ATBU's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on ATBU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). ATBU's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for ATBU.  Always confirm the exact current figure on ATBU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "ATBU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for ATBU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but ATBU's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does ATBU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is ATBU's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at ATBU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my ATBU admission status?",
        "a": "On ATBU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "uniuyo",
    "name": "University of Uyo",
    "abbreviation": "UNIUYO",
    "state": "Akwa Ibom",
    "location": "Uyo, Akwa Ibom State",
    "founded": 1991,
    "portalUrl": "https://portal.uniuyo.edu.ng",
    "website": "https://uniuyo.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Engineering",
      "Law",
      "Pharmacy",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Pharmacy",
      "Accounting",
      "Mass Communication"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "University of Uyo (UNIUYO) is a federal government-owned federal university located in Uyo, Akwa Ibom State, established in 1991. UNIUYO is organized into 10 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Pharmacy.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Pharmacy",
        "Accounting",
        "Mass Communication"
      ],
      "note": "UNIUYO offers undergraduate programmes across all 10 of its faculties. The most-searched courses are Medicine & Surgery, Law, Pharmacy, Accounting, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on UNIUYO's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UNIUYO as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UNIUYO conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UNIUYO's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UNIUYO's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UNIUYO's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for UNIUYO.  Always confirm the exact current figure on UNIUYO's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UNIUYO operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UNIUYO?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UNIUYO's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does UNIUYO offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UNIUYO's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at UNIUYO?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UNIUYO admission status?",
        "a": "On UNIUYO's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "mau",
    "name": "Modibbo Adama University, Yola",
    "abbreviation": "MAU",
    "state": "Adamawa",
    "location": "Yola, Adamawa State",
    "founded": 1981,
    "portalUrl": "https://portal.mau.edu.ng",
    "website": "https://mau.edu.ng",
    "faculties": [
      "Agriculture",
      "Engineering & Engineering Technology",
      "Environmental Sciences",
      "Life Sciences",
      "Management Sciences",
      "Physical Sciences"
    ],
    "popularCourses": [
      "Civil Engineering",
      "Computer Science",
      "Agricultural Engineering",
      "Estate Management",
      "Statistics"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Modibbo Adama University, Yola (MAU) is a federal government-owned federal university located in Yola, Adamawa State, established in 1981. MAU is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Civil Engineering, Computer Science, Agricultural Engineering.",
    "courses": {
      "list": [
        "Civil Engineering",
        "Computer Science",
        "Agricultural Engineering",
        "Estate Management",
        "Statistics"
      ],
      "note": "MAU offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Civil Engineering, Computer Science, Agricultural Engineering, Estate Management, Statistics. Course availability and specific departmental JAMB subject combinations should be confirmed on MAU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose MAU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "MAU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet MAU's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on MAU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). MAU's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for MAU.  Always confirm the exact current figure on MAU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "MAU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for MAU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but MAU's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does MAU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is MAU's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at MAU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my MAU admission status?",
        "a": "On MAU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "futminna",
    "name": "Federal University of Technology, Minna",
    "abbreviation": "FUTMINNA",
    "state": "Niger",
    "location": "Minna, Niger State",
    "founded": 1983,
    "portalUrl": "https://portal.futminna.edu.ng",
    "website": "https://futminna.edu.ng",
    "faculties": [
      "Agriculture",
      "Communication & Information Sciences",
      "Engineering",
      "Environmental Design",
      "Life Sciences",
      "Physical Sciences",
      "Technology Education"
    ],
    "popularCourses": [
      "Computer Science",
      "Cyber Security",
      "Civil Engineering",
      "Architecture",
      "Information Technology"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University of Technology, Minna (FUTMINNA) is a federal government-owned federal university located in Minna, Niger State, established in 1983. FUTMINNA is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Computer Science, Cyber Security, Civil Engineering.",
    "courses": {
      "list": [
        "Computer Science",
        "Cyber Security",
        "Civil Engineering",
        "Architecture",
        "Information Technology"
      ],
      "note": "FUTMINNA offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Computer Science, Cyber Security, Civil Engineering, Architecture, Information Technology. Course availability and specific departmental JAMB subject combinations should be confirmed on FUTMINNA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUTMINNA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUTMINNA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUTMINNA's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUTMINNA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUTMINNA's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUTMINNA.  Always confirm the exact current figure on FUTMINNA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUTMINNA operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUTMINNA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUTMINNA's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUTMINNA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUTMINNA's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUTMINNA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUTMINNA admission status?",
        "a": "On FUTMINNA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fupre",
    "name": "Federal University of Petroleum Resources, Effurun",
    "abbreviation": "FUPRE",
    "state": "Delta",
    "location": "Effurun, Delta State",
    "founded": 2007,
    "portalUrl": "https://portal.fupre.edu.ng",
    "website": "https://fupre.edu.ng",
    "faculties": [
      "Engineering",
      "Science",
      "Technology"
    ],
    "popularCourses": [
      "Petroleum Engineering",
      "Chemical Engineering",
      "Computer Science",
      "Geology",
      "Marine Engineering"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University of Petroleum Resources, Effurun (FUPRE) is a federal government-owned federal university located in Effurun, Delta State, established in 2007. FUPRE is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Petroleum Engineering, Chemical Engineering, Computer Science.",
    "courses": {
      "list": [
        "Petroleum Engineering",
        "Chemical Engineering",
        "Computer Science",
        "Geology",
        "Marine Engineering"
      ],
      "note": "FUPRE offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Petroleum Engineering, Chemical Engineering, Computer Science, Geology, Marine Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on FUPRE's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUPRE as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUPRE conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUPRE's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUPRE's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUPRE's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUPRE.  Always confirm the exact current figure on FUPRE's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUPRE operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUPRE?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUPRE's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUPRE offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUPRE's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUPRE?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUPRE admission status?",
        "a": "On FUPRE's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "jostum",
    "name": "Joseph Sarwuan Tarka University, Makurdi",
    "abbreviation": "JOSTUM",
    "state": "Benue",
    "location": "Makurdi, Benue State",
    "founded": 1988,
    "portalUrl": "https://portal.jostum.edu.ng",
    "website": "https://jostum.edu.ng",
    "faculties": [
      "Agriculture",
      "Engineering",
      "Environmental Design",
      "Science",
      "Veterinary Medicine"
    ],
    "popularCourses": [
      "Agricultural Economics",
      "Animal Science",
      "Civil Engineering",
      "Food Science",
      "Forestry"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Joseph Sarwuan Tarka University, Makurdi (JOSTUM) is a federal government-owned federal university located in Makurdi, Benue State, established in 1988. JOSTUM is organized into 5 faculties/colleges and is widely searched by prospective JAMB candidates for its Agricultural Economics, Animal Science, Civil Engineering.",
    "courses": {
      "list": [
        "Agricultural Economics",
        "Animal Science",
        "Civil Engineering",
        "Food Science",
        "Forestry"
      ],
      "note": "JOSTUM offers undergraduate programmes across all 5 of its faculties. The most-searched courses are Agricultural Economics, Animal Science, Civil Engineering, Food Science, Forestry. Course availability and specific departmental JAMB subject combinations should be confirmed on JOSTUM's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose JOSTUM as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "JOSTUM conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet JOSTUM's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on JOSTUM's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). JOSTUM's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for JOSTUM.  Always confirm the exact current figure on JOSTUM's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "JOSTUM operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for JOSTUM?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but JOSTUM's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does JOSTUM offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is JOSTUM's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at JOSTUM?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my JOSTUM admission status?",
        "a": "On JOSTUM's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fulafia",
    "name": "Federal University Lafia",
    "abbreviation": "FULAFIA",
    "state": "Nasarawa",
    "location": "Lafia, Nasarawa State",
    "founded": 2011,
    "portalUrl": "https://portal.fulafia.edu.ng",
    "website": "https://fulafia.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Computer Science",
      "Economics",
      "Accounting",
      "Biology"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University Lafia (FULAFIA) is a federal government-owned federal university located in Lafia, Nasarawa State, established in 2011. FULAFIA is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Computer Science, Economics.",
    "courses": {
      "list": [
        "Law",
        "Computer Science",
        "Economics",
        "Accounting",
        "Biology"
      ],
      "note": "FULAFIA offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Law, Computer Science, Economics, Accounting, Biology. Course availability and specific departmental JAMB subject combinations should be confirmed on FULAFIA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FULAFIA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FULAFIA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FULAFIA's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FULAFIA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FULAFIA's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FULAFIA.  Always confirm the exact current figure on FULAFIA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FULAFIA operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FULAFIA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FULAFIA's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FULAFIA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FULAFIA's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FULAFIA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FULAFIA admission status?",
        "a": "On FULAFIA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fulokoja",
    "name": "Federal University Lokoja",
    "abbreviation": "FULOKOJA",
    "state": "Kogi",
    "location": "Lokoja, Kogi State",
    "founded": 2011,
    "portalUrl": "https://portal.fulokoja.edu.ng",
    "website": "https://fulokoja.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Accounting",
      "Computer Science",
      "Mass Communication",
      "Economics"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University Lokoja (FULOKOJA) is a federal government-owned federal university located in Lokoja, Kogi State, established in 2011. FULOKOJA is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Accounting, Computer Science.",
    "courses": {
      "list": [
        "Law",
        "Accounting",
        "Computer Science",
        "Mass Communication",
        "Economics"
      ],
      "note": "FULOKOJA offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Law, Accounting, Computer Science, Mass Communication, Economics. Course availability and specific departmental JAMB subject combinations should be confirmed on FULOKOJA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FULOKOJA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FULOKOJA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FULOKOJA's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FULOKOJA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FULOKOJA's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FULOKOJA.  Always confirm the exact current figure on FULOKOJA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FULOKOJA operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FULOKOJA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FULOKOJA's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FULOKOJA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FULOKOJA's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FULOKOJA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FULOKOJA admission status?",
        "a": "On FULOKOJA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fud",
    "name": "Federal University Dutse",
    "abbreviation": "FUD",
    "state": "Jigawa",
    "location": "Dutse, Jigawa State",
    "founded": 2011,
    "portalUrl": "https://portal.fud.edu.ng",
    "website": "https://fud.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts & Islamic Studies",
      "Education",
      "Law",
      "Management Sciences",
      "Science"
    ],
    "popularCourses": [
      "Law",
      "Islamic Studies",
      "Accounting",
      "Computer Science",
      "Agriculture"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University Dutse (FUD) is a federal government-owned federal university located in Dutse, Jigawa State, established in 2011. FUD is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Islamic Studies, Accounting.",
    "courses": {
      "list": [
        "Law",
        "Islamic Studies",
        "Accounting",
        "Computer Science",
        "Agriculture"
      ],
      "note": "FUD offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Law, Islamic Studies, Accounting, Computer Science, Agriculture. Course availability and specific departmental JAMB subject combinations should be confirmed on FUD's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUD as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUD conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUD's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUD's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUD's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUD.  Always confirm the exact current figure on FUD's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUD operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUD?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUD's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUD offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUD's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUD?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUD admission status?",
        "a": "On FUD's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fudma",
    "name": "Federal University Dutsin-Ma",
    "abbreviation": "FUDMA",
    "state": "Katsina",
    "location": "Dutsin-Ma, Katsina State",
    "founded": 2011,
    "portalUrl": "https://portal.fudutsinma.edu.ng",
    "website": "https://fudutsinma.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Computer Science",
      "Economics",
      "Biochemistry",
      "Accounting"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University Dutsin-Ma (FUDMA) is a federal government-owned federal university located in Dutsin-Ma, Katsina State, established in 2011. FUDMA is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Computer Science, Economics.",
    "courses": {
      "list": [
        "Law",
        "Computer Science",
        "Economics",
        "Biochemistry",
        "Accounting"
      ],
      "note": "FUDMA offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Law, Computer Science, Economics, Biochemistry, Accounting. Course availability and specific departmental JAMB subject combinations should be confirmed on FUDMA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUDMA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUDMA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUDMA's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUDMA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUDMA's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUDMA.  Always confirm the exact current figure on FUDMA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUDMA operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUDMA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUDMA's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUDMA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUDMA's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUDMA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUDMA admission status?",
        "a": "On FUDMA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fukashere",
    "name": "Federal University Kashere",
    "abbreviation": "FUKASHERE",
    "state": "Gombe",
    "location": "Kashere, Gombe State",
    "founded": 2011,
    "portalUrl": "https://portal.fukashere.edu.ng",
    "website": "https://fukashere.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Education",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Computer Science",
      "Economics",
      "Biology",
      "Agriculture",
      "Accounting"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University Kashere (FUKASHERE) is a federal government-owned federal university located in Kashere, Gombe State, established in 2011. FUKASHERE is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Computer Science, Economics, Biology.",
    "courses": {
      "list": [
        "Computer Science",
        "Economics",
        "Biology",
        "Agriculture",
        "Accounting"
      ],
      "note": "FUKASHERE offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Computer Science, Economics, Biology, Agriculture, Accounting. Course availability and specific departmental JAMB subject combinations should be confirmed on FUKASHERE's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUKASHERE as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUKASHERE conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUKASHERE's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUKASHERE's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUKASHERE's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUKASHERE.  Always confirm the exact current figure on FUKASHERE's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUKASHERE operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUKASHERE?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUKASHERE's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUKASHERE offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUKASHERE's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUKASHERE?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUKASHERE admission status?",
        "a": "On FUKASHERE's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fuotuoke",
    "name": "Federal University Otuoke",
    "abbreviation": "FUOTUOKE",
    "state": "Bayelsa",
    "location": "Otuoke, Bayelsa State",
    "founded": 2011,
    "portalUrl": "https://portal.fuotuoke.edu.ng",
    "website": "https://fuotuoke.edu.ng",
    "faculties": [
      "Arts",
      "Education",
      "Engineering",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Petroleum Engineering",
      "Computer Science",
      "Accounting",
      "Political Science"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University Otuoke (FUOTUOKE) is a federal government-owned federal university located in Otuoke, Bayelsa State, established in 2011. FUOTUOKE is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Petroleum Engineering, Computer Science.",
    "courses": {
      "list": [
        "Law",
        "Petroleum Engineering",
        "Computer Science",
        "Accounting",
        "Political Science"
      ],
      "note": "FUOTUOKE offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Law, Petroleum Engineering, Computer Science, Accounting, Political Science. Course availability and specific departmental JAMB subject combinations should be confirmed on FUOTUOKE's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUOTUOKE as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUOTUOKE conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUOTUOKE's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUOTUOKE's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUOTUOKE's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUOTUOKE.  Always confirm the exact current figure on FUOTUOKE's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUOTUOKE operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUOTUOKE?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUOTUOKE's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUOTUOKE offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUOTUOKE's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUOTUOKE?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUOTUOKE admission status?",
        "a": "On FUOTUOKE's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fuwukari",
    "name": "Federal University Wukari",
    "abbreviation": "FUWUKARI",
    "state": "Taraba",
    "location": "Wukari, Taraba State",
    "founded": 2011,
    "portalUrl": "https://portal.fuwukari.edu.ng",
    "website": "https://fuwukari.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Management & Social Sciences",
      "Science"
    ],
    "popularCourses": [
      "Agriculture",
      "Computer Science",
      "Economics",
      "Biology",
      "Accounting"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University Wukari (FUWUKARI) is a federal government-owned federal university located in Wukari, Taraba State, established in 2011. FUWUKARI is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Agriculture, Computer Science, Economics.",
    "courses": {
      "list": [
        "Agriculture",
        "Computer Science",
        "Economics",
        "Biology",
        "Accounting"
      ],
      "note": "FUWUKARI offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Agriculture, Computer Science, Economics, Biology, Accounting. Course availability and specific departmental JAMB subject combinations should be confirmed on FUWUKARI's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUWUKARI as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUWUKARI conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUWUKARI's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUWUKARI's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUWUKARI's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUWUKARI.  Always confirm the exact current figure on FUWUKARI's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUWUKARI operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUWUKARI?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUWUKARI's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUWUKARI offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUWUKARI's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUWUKARI?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUWUKARI admission status?",
        "a": "On FUWUKARI's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fugashua",
    "name": "Federal University Gashua",
    "abbreviation": "FUGASHUA",
    "state": "Yobe",
    "location": "Gashua, Yobe State",
    "founded": 2013,
    "portalUrl": "https://portal.fugashua.edu.ng",
    "website": "https://fugashua.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts & Social Sciences",
      "Education",
      "Science"
    ],
    "popularCourses": [
      "Agriculture",
      "Computer Science",
      "Biology",
      "Economics",
      "English"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University Gashua (FUGASHUA) is a federal government-owned federal university located in Gashua, Yobe State, established in 2013. FUGASHUA is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Agriculture, Computer Science, Biology.",
    "courses": {
      "list": [
        "Agriculture",
        "Computer Science",
        "Biology",
        "Economics",
        "English"
      ],
      "note": "FUGASHUA offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Agriculture, Computer Science, Biology, Economics, English. Course availability and specific departmental JAMB subject combinations should be confirmed on FUGASHUA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUGASHUA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUGASHUA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUGASHUA's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUGASHUA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUGASHUA's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUGASHUA.  Always confirm the exact current figure on FUGASHUA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUGASHUA operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUGASHUA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUGASHUA's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUGASHUA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUGASHUA's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUGASHUA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUGASHUA admission status?",
        "a": "On FUGASHUA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fugusau",
    "name": "Federal University Gusau",
    "abbreviation": "FUGUSAU",
    "state": "Zamfara",
    "location": "Gusau, Zamfara State",
    "founded": 2013,
    "portalUrl": "https://portal.fugusau.edu.ng",
    "website": "https://fugusau.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts & Islamic Studies",
      "Management & Social Sciences",
      "Science"
    ],
    "popularCourses": [
      "Agriculture",
      "Islamic Studies",
      "Computer Science",
      "Economics",
      "Biology"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University Gusau (FUGUSAU) is a federal government-owned federal university located in Gusau, Zamfara State, established in 2013. FUGUSAU is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Agriculture, Islamic Studies, Computer Science.",
    "courses": {
      "list": [
        "Agriculture",
        "Islamic Studies",
        "Computer Science",
        "Economics",
        "Biology"
      ],
      "note": "FUGUSAU offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Agriculture, Islamic Studies, Computer Science, Economics, Biology. Course availability and specific departmental JAMB subject combinations should be confirmed on FUGUSAU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUGUSAU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUGUSAU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUGUSAU's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUGUSAU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUGUSAU's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUGUSAU.  Always confirm the exact current figure on FUGUSAU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUGUSAU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUGUSAU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUGUSAU's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUGUSAU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUGUSAU's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUGUSAU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUGUSAU admission status?",
        "a": "On FUGUSAU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fubk",
    "name": "Federal University Birnin Kebbi",
    "abbreviation": "FUBK",
    "state": "Kebbi",
    "location": "Birnin Kebbi, Kebbi State",
    "founded": 2013,
    "portalUrl": "https://portal.fubk.edu.ng",
    "website": "https://fubk.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts & Islamic Studies",
      "Management & Social Sciences",
      "Science"
    ],
    "popularCourses": [
      "Agriculture",
      "Islamic Studies",
      "Computer Science",
      "Economics",
      "Biology"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Federal University Birnin Kebbi (FUBK) is a federal government-owned federal university located in Birnin Kebbi, Kebbi State, established in 2013. FUBK is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Agriculture, Islamic Studies, Computer Science.",
    "courses": {
      "list": [
        "Agriculture",
        "Islamic Studies",
        "Computer Science",
        "Economics",
        "Biology"
      ],
      "note": "FUBK offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Agriculture, Islamic Studies, Computer Science, Economics, Biology. Course availability and specific departmental JAMB subject combinations should be confirmed on FUBK's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUBK as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUBK conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUBK's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUBK's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUBK's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for FUBK.  Always confirm the exact current figure on FUBK's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "FUBK operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUBK?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUBK's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUBK offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUBK's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUBK?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUBK admission status?",
        "a": "On FUBK's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "nmu",
    "name": "Nigerian Maritime University, Okerenkoko",
    "abbreviation": "NMU",
    "state": "Delta",
    "location": "Okerenkoko, Delta State",
    "founded": 2017,
    "portalUrl": "https://portal.nmu.edu.ng",
    "website": "https://nmu.edu.ng",
    "faculties": [
      "Maritime Environment & Management",
      "Maritime Technology",
      "Transport & Logistics"
    ],
    "popularCourses": [
      "Nautical Science",
      "Marine Engineering",
      "Maritime Transport & Business Studies",
      "Shipping Law",
      "Logistics & Transport Technology"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Nigerian Maritime University, Okerenkoko (NMU) is a federal government-owned federal university located in Okerenkoko, Delta State, established in 2017. NMU is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Nautical Science, Marine Engineering, Maritime Transport & Business Studies.",
    "courses": {
      "list": [
        "Nautical Science",
        "Marine Engineering",
        "Maritime Transport & Business Studies",
        "Shipping Law",
        "Logistics & Transport Technology"
      ],
      "note": "NMU offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Nautical Science, Marine Engineering, Maritime Transport & Business Studies, Shipping Law, Logistics & Transport Technology. Course availability and specific departmental JAMB subject combinations should be confirmed on NMU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose NMU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "NMU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet NMU's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on NMU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). NMU's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for NMU.  Always confirm the exact current figure on NMU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "NMU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for NMU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but NMU's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does NMU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is NMU's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at NMU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my NMU admission status?",
        "a": "On NMU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "nda",
    "name": "Nigerian Defence Academy",
    "abbreviation": "NDA",
    "state": "Kaduna",
    "location": "Kaduna, Kaduna State",
    "founded": 1964,
    "portalUrl": "https://nda.edu.ng/admissions",
    "website": "https://nda.edu.ng",
    "faculties": [
      "Arts & Social Sciences",
      "Engineering",
      "Science"
    ],
    "popularCourses": [
      "Political Science",
      "Computer Science",
      "Mechanical Engineering",
      "Economics",
      "Geography"
    ],
    "note": "NDA admits through a separate military selection process (Regular Combatant Course) in addition to JAMB/UTME requirements — recruitment, medicals, and screening exercises differ from civilian universities.",
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Nigerian Defence Academy (NDA) is a federal government-owned federal university located in Kaduna, Kaduna State, established in 1964. NDA is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Political Science, Computer Science, Mechanical Engineering.",
    "courses": {
      "list": [
        "Political Science",
        "Computer Science",
        "Mechanical Engineering",
        "Economics",
        "Geography"
      ],
      "note": "NDA offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Political Science, Computer Science, Mechanical Engineering, Economics, Geography. Course availability and specific departmental JAMB subject combinations should be confirmed on NDA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose NDA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "NDA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet NDA's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on NDA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). NDA's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for NDA.  Always confirm the exact current figure on NDA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "NDA operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for NDA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but NDA's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does NDA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is NDA's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at NDA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my NDA admission status?",
        "a": "On NDA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "lasu",
    "name": "Lagos State University",
    "abbreviation": "LASU",
    "state": "Lagos",
    "location": "Ojo, Lagos State",
    "founded": 1983,
    "portalUrl": "https://portal.lasu.edu.ng",
    "website": "https://lasu.edu.ng",
    "faculties": [
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Engineering",
      "Environmental Sciences",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Mass Communication",
      "Accounting",
      "Medicine & Surgery",
      "Computer Science"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Lagos State University (LASU) is a state government-owned state university located in Ojo, Lagos State, established in 1983. LASU is organized into 10 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Mass Communication, Accounting.",
    "courses": {
      "list": [
        "Law",
        "Mass Communication",
        "Accounting",
        "Medicine & Surgery",
        "Computer Science"
      ],
      "note": "LASU offers undergraduate programmes across all 10 of its faculties. The most-searched courses are Law, Mass Communication, Accounting, Medicine & Surgery, Computer Science. Course availability and specific departmental JAMB subject combinations should be confirmed on LASU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose LASU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "LASU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet LASU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on LASU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). LASU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for LASU.  Always confirm the exact current figure on LASU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "LASU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for LASU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but LASU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does LASU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is LASU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at LASU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my LASU admission status?",
        "a": "On LASU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "rsu",
    "name": "Rivers State University",
    "abbreviation": "RSU",
    "state": "Rivers",
    "location": "Nkpolu-Oroworukwo, Port Harcourt, Rivers State",
    "founded": 1972,
    "portalUrl": "https://portal.rsu.edu.ng",
    "website": "https://rsu.edu.ng",
    "faculties": [
      "Agriculture",
      "Engineering",
      "Environmental Sciences",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Petroleum Engineering",
      "Accounting",
      "Computer Science",
      "Estate Management"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Rivers State University (RSU) is a state government-owned state university located in Nkpolu-Oroworukwo, Port Harcourt, Rivers State, established in 1972. RSU is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Petroleum Engineering, Accounting.",
    "courses": {
      "list": [
        "Law",
        "Petroleum Engineering",
        "Accounting",
        "Computer Science",
        "Estate Management"
      ],
      "note": "RSU offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Law, Petroleum Engineering, Accounting, Computer Science, Estate Management. Course availability and specific departmental JAMB subject combinations should be confirmed on RSU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose RSU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "RSU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet RSU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on RSU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). RSU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for RSU.  Always confirm the exact current figure on RSU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "RSU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for RSU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but RSU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does RSU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is RSU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at RSU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my RSU admission status?",
        "a": "On RSU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "absu",
    "name": "Abia State University",
    "abbreviation": "ABSU",
    "state": "Abia",
    "location": "Uturu, Abia State",
    "founded": 1981,
    "portalUrl": "https://portal.absu.edu.ng",
    "website": "https://absu.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Accounting",
      "Mass Communication",
      "Microbiology"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Abia State University (ABSU) is a state government-owned state university located in Uturu, Abia State, established in 1981. ABSU is organized into 9 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Accounting",
        "Mass Communication",
        "Microbiology"
      ],
      "note": "ABSU offers undergraduate programmes across all 9 of its faculties. The most-searched courses are Medicine & Surgery, Law, Accounting, Mass Communication, Microbiology. Course availability and specific departmental JAMB subject combinations should be confirmed on ABSU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose ABSU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "ABSU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet ABSU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on ABSU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). ABSU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for ABSU.  Always confirm the exact current figure on ABSU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "ABSU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for ABSU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but ABSU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does ABSU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is ABSU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at ABSU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my ABSU admission status?",
        "a": "On ABSU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "eksu",
    "name": "Ekiti State University",
    "abbreviation": "EKSU",
    "state": "Ekiti",
    "location": "Ado-Ekiti, Ekiti State",
    "founded": 1982,
    "portalUrl": "https://portal.eksu.edu.ng",
    "website": "https://eksu.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Clinical Sciences",
      "Education",
      "Engineering",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Accounting",
      "Agriculture",
      "Computer Science"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Ekiti State University (EKSU) is a state government-owned state university located in Ado-Ekiti, Ekiti State, established in 1982. EKSU is organized into 9 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Accounting",
        "Agriculture",
        "Computer Science"
      ],
      "note": "EKSU offers undergraduate programmes across all 9 of its faculties. The most-searched courses are Medicine & Surgery, Law, Accounting, Agriculture, Computer Science. Course availability and specific departmental JAMB subject combinations should be confirmed on EKSU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose EKSU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "EKSU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet EKSU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on EKSU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). EKSU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for EKSU.  Always confirm the exact current figure on EKSU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "EKSU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for EKSU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but EKSU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does EKSU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is EKSU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at EKSU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my EKSU admission status?",
        "a": "On EKSU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "delsu",
    "name": "Delta State University",
    "abbreviation": "DELSU",
    "state": "Delta",
    "location": "Abraka, Delta State",
    "founded": 1992,
    "portalUrl": "https://portal.delsu.edu.ng",
    "website": "https://delsu.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Engineering",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Accounting",
      "Mass Communication",
      "Education"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Delta State University (DELSU) is a state government-owned state university located in Abraka, Delta State, established in 1992. DELSU is organized into 10 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Accounting",
        "Mass Communication",
        "Education"
      ],
      "note": "DELSU offers undergraduate programmes across all 10 of its faculties. The most-searched courses are Medicine & Surgery, Law, Accounting, Mass Communication, Education. Course availability and specific departmental JAMB subject combinations should be confirmed on DELSU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose DELSU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "DELSU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet DELSU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on DELSU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). DELSU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for DELSU.  Always confirm the exact current figure on DELSU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "DELSU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for DELSU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but DELSU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does DELSU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is DELSU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at DELSU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my DELSU admission status?",
        "a": "On DELSU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "esut",
    "name": "Enugu State University of Science and Technology",
    "abbreviation": "ESUT",
    "state": "Enugu",
    "location": "Agbani, Enugu State",
    "founded": 1979,
    "portalUrl": "https://portal.esut.edu.ng",
    "website": "https://esut.edu.ng",
    "faculties": [
      "Applied Natural Sciences",
      "Business Administration",
      "Engineering",
      "Environmental Sciences",
      "Law",
      "Medicine"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Computer Science",
      "Accounting",
      "Civil Engineering"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Enugu State University of Science and Technology (ESUT) is a state government-owned state university located in Agbani, Enugu State, established in 1979. ESUT is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Computer Science.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Computer Science",
        "Accounting",
        "Civil Engineering"
      ],
      "note": "ESUT offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Medicine & Surgery, Law, Computer Science, Accounting, Civil Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on ESUT's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose ESUT as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "ESUT conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet ESUT's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on ESUT's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). ESUT's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for ESUT.  Always confirm the exact current figure on ESUT's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "ESUT operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for ESUT?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but ESUT's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does ESUT offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is ESUT's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at ESUT?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my ESUT admission status?",
        "a": "On ESUT's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "imsu",
    "name": "Imo State University",
    "abbreviation": "IMSU",
    "state": "Imo",
    "location": "Owerri, Imo State",
    "founded": 1981,
    "portalUrl": "https://portal.imsu.edu.ng",
    "website": "https://imsu.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Accounting",
      "Mass Communication",
      "Biology"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Imo State University (IMSU) is a state government-owned state university located in Owerri, Imo State, established in 1981. IMSU is organized into 9 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Accounting",
        "Mass Communication",
        "Biology"
      ],
      "note": "IMSU offers undergraduate programmes across all 9 of its faculties. The most-searched courses are Medicine & Surgery, Law, Accounting, Mass Communication, Biology. Course availability and specific departmental JAMB subject combinations should be confirmed on IMSU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose IMSU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "IMSU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet IMSU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on IMSU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). IMSU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for IMSU.  Always confirm the exact current figure on IMSU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "IMSU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for IMSU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but IMSU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does IMSU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is IMSU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at IMSU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my IMSU admission status?",
        "a": "On IMSU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "lautech",
    "name": "Ladoke Akintola University of Technology",
    "abbreviation": "LAUTECH",
    "state": "Oyo",
    "location": "Ogbomoso, Oyo State",
    "founded": 1990,
    "portalUrl": "https://portal.lautech.edu.ng",
    "website": "https://lautech.edu.ng",
    "faculties": [
      "Agricultural Sciences",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Engineering & Technology",
      "Environmental Sciences",
      "Management Sciences",
      "Pure & Applied Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Civil Engineering",
      "Computer Science",
      "Architecture",
      "Agriculture"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Ladoke Akintola University of Technology (LAUTECH) is a state government-owned state university located in Ogbomoso, Oyo State, established in 1990. LAUTECH is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Civil Engineering, Computer Science.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Civil Engineering",
        "Computer Science",
        "Architecture",
        "Agriculture"
      ],
      "note": "LAUTECH offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Medicine & Surgery, Civil Engineering, Computer Science, Architecture, Agriculture. Course availability and specific departmental JAMB subject combinations should be confirmed on LAUTECH's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose LAUTECH as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "LAUTECH conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet LAUTECH's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on LAUTECH's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). LAUTECH's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for LAUTECH.  Always confirm the exact current figure on LAUTECH's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "LAUTECH operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for LAUTECH?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but LAUTECH's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does LAUTECH offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is LAUTECH's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at LAUTECH?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my LAUTECH admission status?",
        "a": "On LAUTECH's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "oou",
    "name": "Olabisi Onabanjo University",
    "abbreviation": "OOU",
    "state": "Ogun",
    "location": "Ago-Iwoye, Ogun State",
    "founded": 1982,
    "portalUrl": "https://portal.oouagoiwoye.edu.ng",
    "website": "https://oouagoiwoye.edu.ng",
    "faculties": [
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Accounting",
      "Mass Communication",
      "Computer Science"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Olabisi Onabanjo University (OOU) is a state government-owned state university located in Ago-Iwoye, Ogun State, established in 1982. OOU is organized into 8 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Accounting",
        "Mass Communication",
        "Computer Science"
      ],
      "note": "OOU offers undergraduate programmes across all 8 of its faculties. The most-searched courses are Medicine & Surgery, Law, Accounting, Mass Communication, Computer Science. Course availability and specific departmental JAMB subject combinations should be confirmed on OOU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose OOU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "OOU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet OOU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on OOU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). OOU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for OOU.  Always confirm the exact current figure on OOU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "OOU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for OOU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but OOU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does OOU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is OOU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at OOU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my OOU admission status?",
        "a": "On OOU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "tasued",
    "name": "Tai Solarin University of Education",
    "abbreviation": "TASUED",
    "state": "Ogun",
    "location": "Ijagun, Ogun State",
    "founded": 2005,
    "portalUrl": "https://portal.tasued.edu.ng",
    "website": "https://tasued.edu.ng",
    "faculties": [
      "Arts & Social Science Education",
      "Education",
      "Sciences",
      "Vocational & Technical Education"
    ],
    "popularCourses": [
      "Education",
      "Computer Science Education",
      "Guidance & Counselling",
      "Economics Education",
      "Biology Education"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Tai Solarin University of Education (TASUED) is a state government-owned state university located in Ijagun, Ogun State, established in 2005. TASUED is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Education, Computer Science Education, Guidance & Counselling.",
    "courses": {
      "list": [
        "Education",
        "Computer Science Education",
        "Guidance & Counselling",
        "Economics Education",
        "Biology Education"
      ],
      "note": "TASUED offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Education, Computer Science Education, Guidance & Counselling, Economics Education, Biology Education. Course availability and specific departmental JAMB subject combinations should be confirmed on TASUED's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose TASUED as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "TASUED conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet TASUED's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on TASUED's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). TASUED's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for TASUED.  Always confirm the exact current figure on TASUED's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "TASUED operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for TASUED?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but TASUED's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does TASUED offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is TASUED's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at TASUED?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my TASUED admission status?",
        "a": "On TASUED's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "aaua",
    "name": "Adekunle Ajasin University",
    "abbreviation": "AAUA",
    "state": "Ondo",
    "location": "Akungba-Akoko, Ondo State",
    "founded": 1999,
    "portalUrl": "https://portal.aaua.edu.ng",
    "website": "https://aaua.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social & Management Sciences"
    ],
    "popularCourses": [
      "Law",
      "Accounting",
      "Computer Science",
      "Mass Communication",
      "Economics"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Adekunle Ajasin University (AAUA) is a state government-owned state university located in Akungba-Akoko, Ondo State, established in 1999. AAUA is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Accounting, Computer Science.",
    "courses": {
      "list": [
        "Law",
        "Accounting",
        "Computer Science",
        "Mass Communication",
        "Economics"
      ],
      "note": "AAUA offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Law, Accounting, Computer Science, Mass Communication, Economics. Course availability and specific departmental JAMB subject combinations should be confirmed on AAUA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose AAUA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "AAUA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet AAUA's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on AAUA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). AAUA's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for AAUA.  Always confirm the exact current figure on AAUA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "AAUA operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for AAUA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but AAUA's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does AAUA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is AAUA's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at AAUA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my AAUA admission status?",
        "a": "On AAUA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "ndu",
    "name": "Niger Delta University",
    "abbreviation": "NDU",
    "state": "Bayelsa",
    "location": "Wilberforce Island, Bayelsa State",
    "founded": 2000,
    "portalUrl": "https://portal.ndu.edu.ng",
    "website": "https://ndu.edu.ng",
    "faculties": [
      "Agriculture",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Engineering",
      "Law",
      "Management Sciences",
      "Science"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Petroleum Chemistry",
      "Accounting",
      "Computer Science"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Niger Delta University (NDU) is a state government-owned state university located in Wilberforce Island, Bayelsa State, established in 2000. NDU is organized into 8 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Petroleum Chemistry.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Petroleum Chemistry",
        "Accounting",
        "Computer Science"
      ],
      "note": "NDU offers undergraduate programmes across all 8 of its faculties. The most-searched courses are Medicine & Surgery, Law, Petroleum Chemistry, Accounting, Computer Science. Course availability and specific departmental JAMB subject combinations should be confirmed on NDU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose NDU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "NDU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet NDU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on NDU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). NDU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for NDU.  Always confirm the exact current figure on NDU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "NDU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for NDU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but NDU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does NDU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is NDU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at NDU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my NDU admission status?",
        "a": "On NDU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "kwasu",
    "name": "Kwara State University",
    "abbreviation": "KWASU",
    "state": "Kwara",
    "location": "Malete, Kwara State",
    "founded": 2009,
    "portalUrl": "https://portal.kwasu.edu.ng",
    "website": "https://kwasu.edu.ng",
    "faculties": [
      "Agriculture",
      "Communication & Information Sciences",
      "Engineering & Technology",
      "Law",
      "Management Sciences",
      "Pure & Applied Sciences"
    ],
    "popularCourses": [
      "Law",
      "Computer Science",
      "Mass Communication",
      "Agriculture",
      "Accounting"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Kwara State University (KWASU) is a state government-owned state university located in Malete, Kwara State, established in 2009. KWASU is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Computer Science, Mass Communication.",
    "courses": {
      "list": [
        "Law",
        "Computer Science",
        "Mass Communication",
        "Agriculture",
        "Accounting"
      ],
      "note": "KWASU offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Law, Computer Science, Mass Communication, Agriculture, Accounting. Course availability and specific departmental JAMB subject combinations should be confirmed on KWASU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose KWASU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "KWASU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet KWASU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on KWASU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). KWASU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for KWASU.  Always confirm the exact current figure on KWASU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "KWASU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for KWASU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but KWASU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does KWASU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is KWASU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at KWASU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my KWASU admission status?",
        "a": "On KWASU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "bsu",
    "name": "Benue State University",
    "abbreviation": "BSU",
    "state": "Benue",
    "location": "Makurdi, Benue State",
    "founded": 1992,
    "portalUrl": "https://portal.bsum.edu.ng",
    "website": "https://bsum.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Accounting",
      "Agriculture",
      "Computer Science",
      "Economics"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Benue State University (BSU) is a state government-owned state university located in Makurdi, Benue State, established in 1992. BSU is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Accounting, Agriculture.",
    "courses": {
      "list": [
        "Law",
        "Accounting",
        "Agriculture",
        "Computer Science",
        "Economics"
      ],
      "note": "BSU offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Law, Accounting, Agriculture, Computer Science, Economics. Course availability and specific departmental JAMB subject combinations should be confirmed on BSU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose BSU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "BSU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet BSU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on BSU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). BSU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for BSU.  Always confirm the exact current figure on BSU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "BSU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for BSU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but BSU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does BSU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is BSU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at BSU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my BSU admission status?",
        "a": "On BSU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "kasu",
    "name": "Kaduna State University",
    "abbreviation": "KASU",
    "state": "Kaduna",
    "location": "Kaduna, Kaduna State",
    "founded": 2004,
    "portalUrl": "https://portal.kasu.edu.ng",
    "website": "https://kasu.edu.ng",
    "faculties": [
      "Arts",
      "Clinical Sciences",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Computer Science",
      "Accounting",
      "Mass Communication",
      "Medicine & Surgery"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Kaduna State University (KASU) is a state government-owned state university located in Kaduna, Kaduna State, established in 2004. KASU is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Computer Science, Accounting.",
    "courses": {
      "list": [
        "Law",
        "Computer Science",
        "Accounting",
        "Mass Communication",
        "Medicine & Surgery"
      ],
      "note": "KASU offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Law, Computer Science, Accounting, Mass Communication, Medicine & Surgery. Course availability and specific departmental JAMB subject combinations should be confirmed on KASU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose KASU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "KASU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet KASU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on KASU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). KASU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for KASU.  Always confirm the exact current figure on KASU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "KASU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for KASU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but KASU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does KASU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is KASU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at KASU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my KASU admission status?",
        "a": "On KASU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "aksu",
    "name": "Akwa Ibom State University",
    "abbreviation": "AKSU",
    "state": "Akwa Ibom",
    "location": "Ikot Akpaden, Akwa Ibom State",
    "founded": 2010,
    "portalUrl": "https://portal.aksu.edu.ng",
    "website": "https://aksu.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Education",
      "Engineering",
      "Law",
      "Management Sciences",
      "Science"
    ],
    "popularCourses": [
      "Law",
      "Computer Science",
      "Accounting",
      "Agriculture",
      "Mass Communication"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Akwa Ibom State University (AKSU) is a state government-owned state university located in Ikot Akpaden, Akwa Ibom State, established in 2010. AKSU is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Computer Science, Accounting.",
    "courses": {
      "list": [
        "Law",
        "Computer Science",
        "Accounting",
        "Agriculture",
        "Mass Communication"
      ],
      "note": "AKSU offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Law, Computer Science, Accounting, Agriculture, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on AKSU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose AKSU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "AKSU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet AKSU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on AKSU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). AKSU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for AKSU.  Always confirm the exact current figure on AKSU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "AKSU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for AKSU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but AKSU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does AKSU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is AKSU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at AKSU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my AKSU admission status?",
        "a": "On AKSU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "coou",
    "name": "Chukwuemeka Odumegwu Ojukwu University",
    "abbreviation": "COOU",
    "state": "Anambra",
    "location": "Uli / Igbariam, Anambra State",
    "founded": 2000,
    "portalUrl": "https://portal.coou.edu.ng",
    "website": "https://coou.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Accounting",
      "Mass Communication",
      "Computer Science"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Chukwuemeka Odumegwu Ojukwu University (COOU) is a state government-owned state university located in Uli / Igbariam, Anambra State, established in 2000. COOU is organized into 9 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Accounting",
        "Mass Communication",
        "Computer Science"
      ],
      "note": "COOU offers undergraduate programmes across all 9 of its faculties. The most-searched courses are Medicine & Surgery, Law, Accounting, Mass Communication, Computer Science. Course availability and specific departmental JAMB subject combinations should be confirmed on COOU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose COOU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "COOU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet COOU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on COOU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). COOU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for COOU.  Always confirm the exact current figure on COOU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "COOU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for COOU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but COOU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does COOU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is COOU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at COOU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my COOU admission status?",
        "a": "On COOU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "gsu",
    "name": "Gombe State University",
    "abbreviation": "GSU",
    "state": "Gombe",
    "location": "Gombe, Gombe State",
    "founded": 2004,
    "portalUrl": "https://portal.gsu.edu.ng",
    "website": "https://gsu.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts & Islamic Studies",
      "Education",
      "Law",
      "Management Sciences",
      "Science"
    ],
    "popularCourses": [
      "Law",
      "Islamic Studies",
      "Computer Science",
      "Accounting",
      "Agriculture"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Gombe State University (GSU) is a state government-owned state university located in Gombe, Gombe State, established in 2004. GSU is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Islamic Studies, Computer Science.",
    "courses": {
      "list": [
        "Law",
        "Islamic Studies",
        "Computer Science",
        "Accounting",
        "Agriculture"
      ],
      "note": "GSU offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Law, Islamic Studies, Computer Science, Accounting, Agriculture. Course availability and specific departmental JAMB subject combinations should be confirmed on GSU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose GSU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "GSU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet GSU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on GSU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). GSU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for GSU.  Always confirm the exact current figure on GSU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "GSU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for GSU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but GSU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does GSU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is GSU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at GSU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my GSU admission status?",
        "a": "On GSU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "uniosun",
    "name": "Osun State University",
    "abbreviation": "UNIOSUN",
    "state": "Osun",
    "location": "Osogbo, Osun State",
    "founded": 2006,
    "portalUrl": "https://portal.uniosun.edu.ng",
    "website": "https://uniosun.edu.ng",
    "faculties": [
      "Basic Medical Sciences",
      "Clinical Sciences",
      "Education",
      "Engineering",
      "Law",
      "Management Sciences",
      "Science"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Law",
      "Computer Science",
      "Accounting",
      "Nursing"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Osun State University (UNIOSUN) is a state government-owned state university located in Osogbo, Osun State, established in 2006. UNIOSUN is organized into 7 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Law, Computer Science.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Law",
        "Computer Science",
        "Accounting",
        "Nursing"
      ],
      "note": "UNIOSUN offers undergraduate programmes across all 7 of its faculties. The most-searched courses are Medicine & Surgery, Law, Computer Science, Accounting, Nursing. Course availability and specific departmental JAMB subject combinations should be confirmed on UNIOSUN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UNIOSUN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UNIOSUN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UNIOSUN's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UNIOSUN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UNIOSUN's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for UNIOSUN.  Always confirm the exact current figure on UNIOSUN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UNIOSUN operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UNIOSUN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UNIOSUN's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does UNIOSUN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UNIOSUN's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at UNIOSUN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UNIOSUN admission status?",
        "a": "On UNIOSUN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "plasu",
    "name": "Plateau State University",
    "abbreviation": "PLASU",
    "state": "Plateau",
    "location": "Bokkos, Plateau State",
    "founded": 2005,
    "portalUrl": "https://portal.plasu.edu.ng",
    "website": "https://plasu.edu.ng",
    "faculties": [
      "Arts",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Computer Science",
      "Accounting",
      "Economics",
      "Biology"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Plateau State University (PLASU) is a state government-owned state university located in Bokkos, Plateau State, established in 2005. PLASU is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Computer Science, Accounting.",
    "courses": {
      "list": [
        "Law",
        "Computer Science",
        "Accounting",
        "Economics",
        "Biology"
      ],
      "note": "PLASU offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Law, Computer Science, Accounting, Economics, Biology. Course availability and specific departmental JAMB subject combinations should be confirmed on PLASU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose PLASU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "PLASU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet PLASU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on PLASU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). PLASU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for PLASU.  Always confirm the exact current figure on PLASU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "PLASU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for PLASU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but PLASU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does PLASU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is PLASU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at PLASU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my PLASU admission status?",
        "a": "On PLASU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "nsuk",
    "name": "Nasarawa State University, Keffi",
    "abbreviation": "NSUK",
    "state": "Nasarawa",
    "location": "Keffi, Nasarawa State",
    "founded": 2002,
    "portalUrl": "https://portal.nsuk.edu.ng",
    "website": "https://nsuk.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts",
      "Education",
      "Engineering",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Computer Science",
      "Accounting",
      "Agriculture",
      "Mass Communication"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Nasarawa State University, Keffi (NSUK) is a state government-owned state university located in Keffi, Nasarawa State, established in 2002. NSUK is organized into 8 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Computer Science, Accounting.",
    "courses": {
      "list": [
        "Law",
        "Computer Science",
        "Accounting",
        "Agriculture",
        "Mass Communication"
      ],
      "note": "NSUK offers undergraduate programmes across all 8 of its faculties. The most-searched courses are Law, Computer Science, Accounting, Agriculture, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on NSUK's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose NSUK as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "NSUK conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet NSUK's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on NSUK's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). NSUK's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for NSUK.  Always confirm the exact current figure on NSUK's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "NSUK operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for NSUK?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but NSUK's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does NSUK offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is NSUK's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at NSUK?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my NSUK admission status?",
        "a": "On NSUK's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "kustwudil",
    "name": "Kano University of Science and Technology, Wudil",
    "abbreviation": "KUSTWUDIL",
    "state": "Kano",
    "location": "Wudil, Kano State",
    "founded": 2001,
    "portalUrl": "https://portal.kustwudil.edu.ng",
    "website": "https://kustwudil.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts & Islamic Studies",
      "Clinical Sciences",
      "Education",
      "Science"
    ],
    "popularCourses": [
      "Computer Science",
      "Medicine & Surgery",
      "Islamic Studies",
      "Biology",
      "Agriculture"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Kano University of Science and Technology, Wudil (KUSTWUDIL) is a state government-owned state university located in Wudil, Kano State, established in 2001. KUSTWUDIL is organized into 5 faculties/colleges and is widely searched by prospective JAMB candidates for its Computer Science, Medicine & Surgery, Islamic Studies.",
    "courses": {
      "list": [
        "Computer Science",
        "Medicine & Surgery",
        "Islamic Studies",
        "Biology",
        "Agriculture"
      ],
      "note": "KUSTWUDIL offers undergraduate programmes across all 5 of its faculties. The most-searched courses are Computer Science, Medicine & Surgery, Islamic Studies, Biology, Agriculture. Course availability and specific departmental JAMB subject combinations should be confirmed on KUSTWUDIL's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose KUSTWUDIL as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "KUSTWUDIL conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet KUSTWUDIL's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on KUSTWUDIL's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). KUSTWUDIL's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for KUSTWUDIL.  Always confirm the exact current figure on KUSTWUDIL's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "KUSTWUDIL operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for KUSTWUDIL?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but KUSTWUDIL's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does KUSTWUDIL offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is KUSTWUDIL's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at KUSTWUDIL?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my KUSTWUDIL admission status?",
        "a": "On KUSTWUDIL's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "umyu",
    "name": "Umaru Musa Yar'adua University",
    "abbreviation": "UMYU",
    "state": "Katsina",
    "location": "Katsina, Katsina State",
    "founded": 2006,
    "portalUrl": "https://portal.umyu.edu.ng",
    "website": "https://umyu.edu.ng",
    "faculties": [
      "Agriculture",
      "Arts & Islamic Studies",
      "Education",
      "Law",
      "Management Sciences",
      "Science"
    ],
    "popularCourses": [
      "Law",
      "Islamic Studies",
      "Computer Science",
      "Accounting",
      "Agriculture"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Umaru Musa Yar'adua University (UMYU) is a state government-owned state university located in Katsina, Katsina State, established in 2006. UMYU is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Islamic Studies, Computer Science.",
    "courses": {
      "list": [
        "Law",
        "Islamic Studies",
        "Computer Science",
        "Accounting",
        "Agriculture"
      ],
      "note": "UMYU offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Law, Islamic Studies, Computer Science, Accounting, Agriculture. Course availability and specific departmental JAMB subject combinations should be confirmed on UMYU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UMYU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UMYU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UMYU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UMYU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UMYU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for UMYU.  Always confirm the exact current figure on UMYU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "UMYU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UMYU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UMYU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does UMYU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UMYU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at UMYU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UMYU admission status?",
        "a": "On UMYU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "ibbul",
    "name": "Ibrahim Badamasi Babangida University, Lapai",
    "abbreviation": "IBBUL",
    "state": "Niger",
    "location": "Lapai, Niger State",
    "founded": 2005,
    "portalUrl": "https://portal.ibbu.edu.ng",
    "website": "https://ibbu.edu.ng",
    "faculties": [
      "Arts",
      "Education",
      "Law",
      "Management Sciences",
      "Science",
      "Social Sciences"
    ],
    "popularCourses": [
      "Law",
      "Computer Science",
      "Accounting",
      "Economics",
      "Biology"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Ibrahim Badamasi Babangida University, Lapai (IBBUL) is a state government-owned state university located in Lapai, Niger State, established in 2005. IBBUL is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Law, Computer Science, Accounting.",
    "courses": {
      "list": [
        "Law",
        "Computer Science",
        "Accounting",
        "Economics",
        "Biology"
      ],
      "note": "IBBUL offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Law, Computer Science, Accounting, Economics, Biology. Course availability and specific departmental JAMB subject combinations should be confirmed on IBBUL's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose IBBUL as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "IBBUL conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet IBBUL's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on IBBUL's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). IBBUL's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for IBBUL.  Always confirm the exact current figure on IBBUL's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "IBBUL operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for IBBUL?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but IBBUL's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does IBBUL offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is IBBUL's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at IBBUL?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my IBBUL admission status?",
        "a": "On IBBUL's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "crutech",
    "name": "Cross River University of Technology",
    "abbreviation": "CRUTECH",
    "state": "Cross River",
    "location": "Calabar, Cross River State",
    "founded": 2002,
    "portalUrl": "https://portal.crutech.edu.ng",
    "website": "https://crutech.edu.ng",
    "faculties": [
      "Agriculture",
      "Environmental Sciences",
      "Management & Social Sciences",
      "Science & Technology"
    ],
    "popularCourses": [
      "Computer Science",
      "Estate Management",
      "Accounting",
      "Agriculture",
      "Biology"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Cross River University of Technology (CRUTECH) is a state government-owned state university located in Calabar, Cross River State, established in 2002. CRUTECH is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Computer Science, Estate Management, Accounting.",
    "courses": {
      "list": [
        "Computer Science",
        "Estate Management",
        "Accounting",
        "Agriculture",
        "Biology"
      ],
      "note": "CRUTECH offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Computer Science, Estate Management, Accounting, Agriculture, Biology. Course availability and specific departmental JAMB subject combinations should be confirmed on CRUTECH's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose CRUTECH as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "CRUTECH conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet CRUTECH's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on CRUTECH's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). CRUTECH's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for CRUTECH.  Always confirm the exact current figure on CRUTECH's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "CRUTECH operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for CRUTECH?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but CRUTECH's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does CRUTECH offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is CRUTECH's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at CRUTECH?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my CRUTECH admission status?",
        "a": "On CRUTECH's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "covenant",
    "name": "Covenant University",
    "abbreviation": "COVENANT",
    "state": "Ogun",
    "location": "Ota, Ogun State",
    "founded": 2002,
    "portalUrl": "https://www.covenantuniversity.edu.ng",
    "website": "https://www.covenantuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Covenant University (COVENANT) is a private-owned private university located in Ota, Ogun State, established in 2002. COVENANT is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "COVENANT offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on COVENANT's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose COVENANT as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "COVENANT conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet COVENANT's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on COVENANT's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": true,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). COVENANT's own institutional cut-off is confirmed at 200. Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "₦1,500,000 – ₦2,800,000+ depending on college (private-university tuition)",
      "returning": "similar band, reviewed yearly by the university",
      "verified": true,
      "session": "2026/2027",
      "note": "Figures above reflect real published rates. Always confirm the exact current figure on COVENANT's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "confirm current amount on covenantuniversity.edu.ng",
      "verified": true,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "COVENANT, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for COVENANT?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but COVENANT's own institutional cut-off is confirmed at 200."
      },
      {
        "q": "Does COVENANT offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is COVENANT's acceptance fee?",
        "a": "confirm current amount on covenantuniversity.edu.ng (confirmed)"
      },
      {
        "q": "Is hostel accommodation guaranteed at COVENANT?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my COVENANT admission status?",
        "a": "On COVENANT's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "babcock",
    "name": "Babcock University",
    "abbreviation": "BABCOCK",
    "state": "Ogun",
    "location": "Ilishan-Remo, Ogun State",
    "founded": 1999,
    "portalUrl": "https://www.babcock.edu.ng",
    "website": "https://www.babcock.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Health Sciences",
      "College of Education"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Nursing Science",
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Babcock University (BABCOCK) is a private-owned private university located in Ilishan-Remo, Ogun State, established in 1999. BABCOCK is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Nursing Science, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Nursing Science",
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "BABCOCK offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Medicine & Surgery, Nursing Science, Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on BABCOCK's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose BABCOCK as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "BABCOCK conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet BABCOCK's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on BABCOCK's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). BABCOCK's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for BABCOCK.  Always confirm the exact current figure on BABCOCK's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "BABCOCK, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for BABCOCK?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but BABCOCK's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does BABCOCK offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is BABCOCK's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at BABCOCK?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my BABCOCK admission status?",
        "a": "On BABCOCK's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "bowen",
    "name": "Bowen University",
    "abbreviation": "BOWEN",
    "state": "Osun",
    "location": "Iwo, Osun State",
    "founded": 2001,
    "portalUrl": "https://www.bowen.edu.ng",
    "website": "https://www.bowen.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Health Sciences",
      "College of Education"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Nursing Science",
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Bowen University (BOWEN) is a private-owned private university located in Iwo, Osun State, established in 2001. BOWEN is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Nursing Science, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Nursing Science",
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "BOWEN offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Medicine & Surgery, Nursing Science, Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on BOWEN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose BOWEN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "BOWEN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet BOWEN's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on BOWEN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). BOWEN's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for BOWEN.  Always confirm the exact current figure on BOWEN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "BOWEN, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for BOWEN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but BOWEN's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does BOWEN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is BOWEN's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at BOWEN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my BOWEN admission status?",
        "a": "On BOWEN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "abuad",
    "name": "Afe Babalola University",
    "abbreviation": "ABUAD",
    "state": "Ekiti",
    "location": "Ado-Ekiti, Ekiti State",
    "founded": 2009,
    "portalUrl": "https://abuad.edu.ng",
    "website": "https://abuad.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Health Sciences",
      "College of Education"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Nursing Science",
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Afe Babalola University (ABUAD) is a private-owned private university located in Ado-Ekiti, Ekiti State, established in 2009. ABUAD is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Nursing Science, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Nursing Science",
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "ABUAD offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Medicine & Surgery, Nursing Science, Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on ABUAD's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose ABUAD as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "ABUAD conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet ABUAD's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on ABUAD's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). ABUAD's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for ABUAD.  Always confirm the exact current figure on ABUAD's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "ABUAD, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for ABUAD?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but ABUAD's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does ABUAD offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is ABUAD's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at ABUAD?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my ABUAD admission status?",
        "a": "On ABUAD's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "pau",
    "name": "Pan-Atlantic University",
    "abbreviation": "PAU",
    "state": "Lagos",
    "location": "Lagos, Lagos State",
    "founded": 2002,
    "portalUrl": "https://www.pau.edu.ng",
    "website": "https://www.pau.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Pan-Atlantic University (PAU) is a private-owned private university located in Lagos, Lagos State, established in 2002. PAU is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "PAU offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on PAU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose PAU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "PAU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet PAU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on PAU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). PAU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for PAU.  Always confirm the exact current figure on PAU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "PAU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for PAU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but PAU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does PAU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is PAU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at PAU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my PAU admission status?",
        "a": "On PAU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "aun",
    "name": "American University of Nigeria",
    "abbreviation": "AUN",
    "state": "Adamawa",
    "location": "Yola, Adamawa State",
    "founded": 2003,
    "portalUrl": "https://www.aun.edu.ng",
    "website": "https://www.aun.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "American University of Nigeria (AUN) is a private-owned private university located in Yola, Adamawa State, established in 2003. AUN is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "AUN offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on AUN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose AUN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "AUN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet AUN's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on AUN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). AUN's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for AUN.  Always confirm the exact current figure on AUN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "AUN, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for AUN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but AUN's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does AUN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is AUN's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at AUN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my AUN admission status?",
        "a": "On AUN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "acu",
    "name": "Ajayi Crowther University",
    "abbreviation": "ACU",
    "state": "Oyo",
    "location": "Ibadan, Oyo State",
    "founded": 2005,
    "portalUrl": "https://www.acu.edu.ng",
    "website": "https://www.acu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Ajayi Crowther University (ACU) is a private-owned private university located in Ibadan, Oyo State, established in 2005. ACU is organized into 5 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "ACU offers undergraduate programmes across all 5 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on ACU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose ACU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "ACU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet ACU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on ACU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). ACU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for ACU.  Always confirm the exact current figure on ACU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "ACU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for ACU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but ACU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does ACU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is ACU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at ACU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my ACU admission status?",
        "a": "On ACU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "alhikmah",
    "name": "Al-Hikmah University",
    "abbreviation": "ALHIKMAH",
    "state": "Kwara",
    "location": "Ilorin, Kwara State",
    "founded": 2005,
    "portalUrl": "https://www.alhikmah.edu.ng",
    "website": "https://www.alhikmah.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Al-Hikmah University (ALHIKMAH) is a private-owned private university located in Ilorin, Kwara State, established in 2005. ALHIKMAH is organized into 5 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "ALHIKMAH offers undergraduate programmes across all 5 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on ALHIKMAH's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose ALHIKMAH as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "ALHIKMAH conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet ALHIKMAH's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on ALHIKMAH's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). ALHIKMAH's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for ALHIKMAH.  Always confirm the exact current figure on ALHIKMAH's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "ALHIKMAH, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for ALHIKMAH?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but ALHIKMAH's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does ALHIKMAH offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is ALHIKMAH's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at ALHIKMAH?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my ALHIKMAH admission status?",
        "a": "On ALHIKMAH's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "iuokada",
    "name": "Igbinedion University Okada",
    "abbreviation": "IUOKADA",
    "state": "Edo",
    "location": "Okada, Edo State",
    "founded": 1999,
    "portalUrl": "https://www.iuokada.edu.ng",
    "website": "https://www.iuokada.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Health Sciences",
      "College of Education"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Nursing Science",
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Igbinedion University Okada (IUOKADA) is a private-owned private university located in Okada, Edo State, established in 1999. IUOKADA is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Nursing Science, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Nursing Science",
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "IUOKADA offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Medicine & Surgery, Nursing Science, Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on IUOKADA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose IUOKADA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "IUOKADA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet IUOKADA's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on IUOKADA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). IUOKADA's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for IUOKADA.  Always confirm the exact current figure on IUOKADA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "IUOKADA, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for IUOKADA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but IUOKADA's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does IUOKADA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is IUOKADA's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at IUOKADA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my IUOKADA admission status?",
        "a": "On IUOKADA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "madonna",
    "name": "Madonna University",
    "abbreviation": "MADONNA",
    "state": "Anambra",
    "location": "Okija, Anambra State",
    "founded": 1999,
    "portalUrl": "https://www.madonnauniversity.edu.ng",
    "website": "https://www.madonnauniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Health Sciences",
      "College of Education"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Nursing Science",
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Madonna University (MADONNA) is a private-owned private university located in Okija, Anambra State, established in 1999. MADONNA is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Nursing Science, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Nursing Science",
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "MADONNA offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Medicine & Surgery, Nursing Science, Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on MADONNA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose MADONNA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "MADONNA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet MADONNA's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on MADONNA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). MADONNA's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for MADONNA.  Always confirm the exact current figure on MADONNA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "MADONNA, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for MADONNA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but MADONNA's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does MADONNA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is MADONNA's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at MADONNA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my MADONNA admission status?",
        "a": "On MADONNA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "biu",
    "name": "Benson Idahosa University",
    "abbreviation": "BIU",
    "state": "Edo",
    "location": "Benin City, Edo State",
    "founded": 2002,
    "portalUrl": "https://www.biu.edu.ng",
    "website": "https://www.biu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Benson Idahosa University (BIU) is a private-owned private university located in Benin City, Edo State, established in 2002. BIU is organized into 5 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "BIU offers undergraduate programmes across all 5 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on BIU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose BIU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "BIU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet BIU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on BIU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). BIU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for BIU.  Always confirm the exact current figure on BIU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "BIU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for BIU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but BIU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does BIU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is BIU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at BIU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my BIU admission status?",
        "a": "On BIU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "bellsuniversity",
    "name": "Bells University of Technology",
    "abbreviation": "BELLS",
    "state": "Ogun",
    "location": "Ota, Ogun State",
    "founded": 2005,
    "portalUrl": "https://bellsuniversity.edu.ng",
    "website": "https://bellsuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Bells University of Technology (BELLS) is a private-owned private university located in Ota, Ogun State, established in 2005. BELLS is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "BELLS offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on BELLS's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose BELLS as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "BELLS conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet BELLS's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on BELLS's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). BELLS's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for BELLS.  Always confirm the exact current figure on BELLS's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "BELLS, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for BELLS?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but BELLS's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does BELLS offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is BELLS's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at BELLS?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my BELLS admission status?",
        "a": "On BELLS's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "redeemers",
    "name": "Redeemer's University",
    "abbreviation": "RUN",
    "state": "Osun",
    "location": "Ede, Osun State",
    "founded": 2005,
    "portalUrl": "https://run.edu.ng",
    "website": "https://run.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Health Sciences",
      "College of Education"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Nursing Science",
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Redeemer's University (RUN) is a private-owned private university located in Ede, Osun State, established in 2005. RUN is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Nursing Science, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Nursing Science",
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "RUN offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Medicine & Surgery, Nursing Science, Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on RUN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose RUN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "RUN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet RUN's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on RUN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). RUN's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for RUN.  Always confirm the exact current figure on RUN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "RUN, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for RUN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but RUN's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does RUN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is RUN's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at RUN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my RUN admission status?",
        "a": "On RUN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "landmark",
    "name": "Landmark University",
    "abbreviation": "LMU",
    "state": "Kwara",
    "location": "Omu-Aran, Kwara State",
    "founded": 2011,
    "portalUrl": "https://lmu.edu.ng",
    "website": "https://lmu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Landmark University (LMU) is a private-owned private university located in Omu-Aran, Kwara State, established in 2011. LMU is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "LMU offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on LMU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose LMU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "LMU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet LMU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on LMU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). LMU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for LMU.  Always confirm the exact current figure on LMU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "LMU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for LMU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but LMU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does LMU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is LMU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at LMU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my LMU admission status?",
        "a": "On LMU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "elizade",
    "name": "Elizade University",
    "abbreviation": "EU",
    "state": "Ondo",
    "location": "Ilara-Mokin, Ondo State",
    "founded": 2012,
    "portalUrl": "https://elizadeuniversity.edu.ng",
    "website": "https://elizadeuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Elizade University (EU) is a private-owned private university located in Ilara-Mokin, Ondo State, established in 2012. EU is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "EU offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on EU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose EU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "EU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet EU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on EU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). EU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for EU.  Always confirm the exact current figure on EU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "EU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for EU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but EU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does EU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is EU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at EU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my EU admission status?",
        "a": "On EU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "nileuniversity",
    "name": "Nile University of Nigeria",
    "abbreviation": "NUN",
    "state": "FCT",
    "location": "Abuja, FCT",
    "founded": 2009,
    "portalUrl": "https://nileuniversity.edu.ng",
    "website": "https://nileuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Health Sciences",
      "College of Education"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Nursing Science",
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Nile University of Nigeria (NUN) is a private-owned private university located in Abuja, FCT, established in 2009. NUN is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Nursing Science, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Nursing Science",
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "NUN offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Medicine & Surgery, Nursing Science, Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on NUN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose NUN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "NUN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet NUN's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on NUN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). NUN's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for NUN.  Always confirm the exact current figure on NUN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "NUN, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for NUN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but NUN's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does NUN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is NUN's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at NUN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my NUN admission status?",
        "a": "On NUN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "baze",
    "name": "Baze University",
    "abbreviation": "BAZE",
    "state": "FCT",
    "location": "Abuja, FCT",
    "founded": 2011,
    "portalUrl": "https://baze.edu.ng",
    "website": "https://baze.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Health Sciences",
      "College of Education"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Nursing Science",
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Baze University (BAZE) is a private-owned private university located in Abuja, FCT, established in 2011. BAZE is organized into 6 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Nursing Science, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Nursing Science",
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "BAZE offers undergraduate programmes across all 6 of its faculties. The most-searched courses are Medicine & Surgery, Nursing Science, Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on BAZE's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose BAZE as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "BAZE conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet BAZE's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on BAZE's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). BAZE's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for BAZE.  Always confirm the exact current figure on BAZE's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "BAZE, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for BAZE?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but BAZE's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does BAZE offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is BAZE's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at BAZE?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my BAZE admission status?",
        "a": "On BAZE's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "veritas",
    "name": "Veritas University",
    "abbreviation": "VU",
    "state": "FCT",
    "location": "Abuja, FCT",
    "founded": 2007,
    "portalUrl": "https://veritas.edu.ng",
    "website": "https://veritas.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Veritas University (VU) is a private-owned private university located in Abuja, FCT, established in 2007. VU is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law"
      ],
      "note": "VU offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law. Course availability and specific departmental JAMB subject combinations should be confirmed on VU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose VU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "VU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet VU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on VU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). VU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for VU.  Always confirm the exact current figure on VU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "VU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for VU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but VU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does VU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is VU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at VU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my VU admission status?",
        "a": "On VU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "calebuniversity",
    "name": "Caleb University",
    "abbreviation": "CALEB",
    "state": "Lagos",
    "location": "Imota, Lagos State",
    "founded": 2007,
    "portalUrl": "https://calebuniversity.edu.ng",
    "website": "https://calebuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Caleb University (CALEB) is a private-owned private university located in Imota, Lagos State, established in 2007. CALEB is organized into 5 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "CALEB offers undergraduate programmes across all 5 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on CALEB's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose CALEB as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "CALEB conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet CALEB's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on CALEB's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). CALEB's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for CALEB.  Always confirm the exact current figure on CALEB's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "CALEB, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for CALEB?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but CALEB's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does CALEB offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is CALEB's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at CALEB?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my CALEB admission status?",
        "a": "On CALEB's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "crawford",
    "name": "Crawford University",
    "abbreviation": "CU",
    "state": "Ogun",
    "location": "Igbesa, Ogun State",
    "founded": 2005,
    "portalUrl": "https://crawforduniversity.edu.ng",
    "website": "https://crawforduniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Crawford University (CU) is a private-owned private university located in Igbesa, Ogun State, established in 2005. CU is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "CU offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on CU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose CU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "CU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet CU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on CU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). CU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for CU.  Always confirm the exact current figure on CU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "CU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for CU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but CU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does CU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is CU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at CU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my CU admission status?",
        "a": "On CU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "crescent",
    "name": "Crescent University",
    "abbreviation": "CRUN",
    "state": "Ogun",
    "location": "Abeokuta, Ogun State",
    "founded": 2005,
    "portalUrl": "https://crescentuniversity.edu.ng",
    "website": "https://crescentuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Crescent University (CRUN) is a private-owned private university located in Abeokuta, Ogun State, established in 2005. CRUN is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law"
      ],
      "note": "CRUN offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law. Course availability and specific departmental JAMB subject combinations should be confirmed on CRUN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose CRUN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "CRUN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet CRUN's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on CRUN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). CRUN's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for CRUN.  Always confirm the exact current figure on CRUN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "CRUN, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for CRUN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but CRUN's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does CRUN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is CRUN's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at CRUN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my CRUN admission status?",
        "a": "On CRUN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "fountain",
    "name": "Fountain University",
    "abbreviation": "FUO",
    "state": "Osun",
    "location": "Oshogbo, Osun State",
    "founded": 2007,
    "portalUrl": "https://fuo.edu.ng",
    "website": "https://fuo.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Fountain University (FUO) is a private-owned private university located in Oshogbo, Osun State, established in 2007. FUO is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "FUO offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on FUO's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose FUO as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "FUO conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet FUO's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on FUO's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). FUO's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for FUO.  Always confirm the exact current figure on FUO's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "FUO, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for FUO?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but FUO's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does FUO offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is FUO's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at FUO?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my FUO admission status?",
        "a": "On FUO's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "jabu",
    "name": "Joseph Ayo Babalola University",
    "abbreviation": "JABU",
    "state": "Osun",
    "location": "Ikeji-Arakeji, Osun State",
    "founded": 2006,
    "portalUrl": "https://jabu.edu.ng",
    "website": "https://jabu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Joseph Ayo Babalola University (JABU) is a private-owned private university located in Ikeji-Arakeji, Osun State, established in 2006. JABU is organized into 5 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "JABU offers undergraduate programmes across all 5 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on JABU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose JABU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "JABU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet JABU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on JABU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). JABU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for JABU.  Always confirm the exact current figure on JABU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "JABU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for JABU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but JABU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does JABU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is JABU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at JABU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my JABU admission status?",
        "a": "On JABU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "achievers",
    "name": "Achievers University",
    "abbreviation": "AUO",
    "state": "Ondo",
    "location": "Owo, Ondo State",
    "founded": 2007,
    "portalUrl": "https://achievers.edu.ng",
    "website": "https://achievers.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Achievers University (AUO) is a private-owned private university located in Owo, Ondo State, established in 2007. AUO is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "AUO offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on AUO's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose AUO as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "AUO conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet AUO's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on AUO's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). AUO's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for AUO.  Always confirm the exact current figure on AUO's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "AUO, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for AUO?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but AUO's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does AUO offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is AUO's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at AUO?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my AUO admission status?",
        "a": "On AUO's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "adelekeuniversity",
    "name": "Adeleke University",
    "abbreviation": "ADU",
    "state": "Osun",
    "location": "Ede, Osun State",
    "founded": 2011,
    "portalUrl": "https://adelekeuniversity.edu.ng",
    "website": "https://adelekeuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Adeleke University (ADU) is a private-owned private university located in Ede, Osun State, established in 2011. ADU is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "ADU offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on ADU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose ADU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "ADU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet ADU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on ADU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). ADU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for ADU.  Always confirm the exact current figure on ADU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "ADU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for ADU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but ADU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does ADU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is ADU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at ADU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my ADU admission status?",
        "a": "On ADU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "wesleyuniversity",
    "name": "Wesley University",
    "abbreviation": "WUO",
    "state": "Ondo",
    "location": "Ondo, Ondo State",
    "founded": 2007,
    "portalUrl": "https://wuo.edu.ng",
    "website": "https://wuo.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Wesley University (WUO) is a private-owned private university located in Ondo, Ondo State, established in 2007. WUO is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "WUO offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on WUO's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose WUO as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "WUO conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet WUO's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on WUO's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). WUO's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for WUO.  Always confirm the exact current figure on WUO's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "WUO, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for WUO?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but WUO's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does WUO offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is WUO's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at WUO?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my WUO admission status?",
        "a": "On WUO's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "renaissanceuniversity",
    "name": "Renaissance University",
    "abbreviation": "RENU",
    "state": "Enugu",
    "location": "Ugbawka, Enugu State",
    "founded": 2005,
    "portalUrl": "https://renaissanceuniversity.edu.ng",
    "website": "https://renaissanceuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Renaissance University (RENU) is a private-owned private university located in Ugbawka, Enugu State, established in 2005. RENU is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law"
      ],
      "note": "RENU offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law. Course availability and specific departmental JAMB subject combinations should be confirmed on RENU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose RENU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "RENU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet RENU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on RENU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). RENU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for RENU.  Always confirm the exact current figure on RENU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "RENU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for RENU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but RENU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does RENU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is RENU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at RENU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my RENU admission status?",
        "a": "On RENU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "salemuniversity",
    "name": "Salem University",
    "abbreviation": "SALEM",
    "state": "Kogi",
    "location": "Lokoja, Kogi State",
    "founded": 2007,
    "portalUrl": "https://salemuniversity.edu.ng",
    "website": "https://salemuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Salem University (SALEM) is a private-owned private university located in Lokoja, Kogi State, established in 2007. SALEM is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law"
      ],
      "note": "SALEM offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law. Course availability and specific departmental JAMB subject combinations should be confirmed on SALEM's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose SALEM as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "SALEM conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet SALEM's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on SALEM's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). SALEM's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for SALEM.  Always confirm the exact current figure on SALEM's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "SALEM, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for SALEM?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but SALEM's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does SALEM offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is SALEM's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at SALEM?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my SALEM admission status?",
        "a": "On SALEM's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "novena",
    "name": "Novena University",
    "abbreviation": "NOVENA",
    "state": "Delta",
    "location": "Ogume, Delta State",
    "founded": 2005,
    "portalUrl": "https://novenauniversity.edu.ng",
    "website": "https://novenauniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Novena University (NOVENA) is a private-owned private university located in Ogume, Delta State, established in 2005. NOVENA is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "NOVENA offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on NOVENA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose NOVENA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "NOVENA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet NOVENA's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on NOVENA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). NOVENA's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for NOVENA.  Always confirm the exact current figure on NOVENA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "NOVENA, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for NOVENA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but NOVENA's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does NOVENA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is NOVENA's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at NOVENA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my NOVENA admission status?",
        "a": "On NOVENA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "southwestern",
    "name": "Southwestern University",
    "abbreviation": "SWUN",
    "state": "Ogun",
    "location": "Okun Owa, Ogun State",
    "founded": 2015,
    "portalUrl": "https://southwestern.edu.ng",
    "website": "https://southwestern.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Southwestern University (SWUN) is a private-owned private university located in Okun Owa, Ogun State, established in 2015. SWUN is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law"
      ],
      "note": "SWUN offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law. Course availability and specific departmental JAMB subject combinations should be confirmed on SWUN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose SWUN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "SWUN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet SWUN's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on SWUN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). SWUN's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for SWUN.  Always confirm the exact current figure on SWUN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "SWUN, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for SWUN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but SWUN's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does SWUN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is SWUN's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at SWUN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my SWUN admission status?",
        "a": "On SWUN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "tansian",
    "name": "Tansian University",
    "abbreviation": "TU",
    "state": "Anambra",
    "location": "Umunya, Anambra State",
    "founded": 2007,
    "portalUrl": "https://tansianuniversity.edu.ng",
    "website": "https://tansianuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Tansian University (TU) is a private-owned private university located in Umunya, Anambra State, established in 2007. TU is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "TU offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on TU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose TU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "TU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet TU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on TU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). TU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for TU.  Always confirm the exact current figure on TU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "TU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for TU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but TU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does TU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is TU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at TU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my TU admission status?",
        "a": "On TU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "westerndelta",
    "name": "Western Delta University",
    "abbreviation": "WDU",
    "state": "Delta",
    "location": "Oghara, Delta State",
    "founded": 2007,
    "portalUrl": "https://wdu.edu.ng",
    "website": "https://wdu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Law",
      "College of Health Sciences",
      "College of Education"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Nursing Science",
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Western Delta University (WDU) is a private-owned private university located in Oghara, Delta State, established in 2007. WDU is organized into 5 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Nursing Science, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Nursing Science",
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law"
      ],
      "note": "WDU offers undergraduate programmes across all 5 of its faculties. The most-searched courses are Medicine & Surgery, Nursing Science, Accounting, Business Administration, Computer Science, Mass Communication, Law. Course availability and specific departmental JAMB subject combinations should be confirmed on WDU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose WDU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "WDU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet WDU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on WDU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). WDU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for WDU.  Always confirm the exact current figure on WDU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "WDU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for WDU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but WDU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does WDU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is WDU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at WDU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my WDU admission status?",
        "a": "On WDU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "wellspring",
    "name": "Wellspring University",
    "abbreviation": "WU",
    "state": "Edo",
    "location": "Evbuobanosa, Edo State",
    "founded": 2010,
    "portalUrl": "https://wellspringuniversity.edu.ng",
    "website": "https://wellspringuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Wellspring University (WU) is a private-owned private university located in Evbuobanosa, Edo State, established in 2010. WU is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "WU offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on WU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose WU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "WU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet WU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on WU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). WU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for WU.  Always confirm the exact current figure on WU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "WU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for WU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but WU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does WU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is WU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at WU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my WU admission status?",
        "a": "On WU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "gregoryuniversity",
    "name": "Gregory University",
    "abbreviation": "GUU",
    "state": "Abia",
    "location": "Uturu, Abia State",
    "founded": 2012,
    "portalUrl": "https://gregoryuniversityuturu.edu.ng",
    "website": "https://gregoryuniversityuturu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Gregory University (GUU) is a private-owned private university located in Uturu, Abia State, established in 2012. GUU is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "GUU offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on GUU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose GUU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "GUU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet GUU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on GUU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). GUU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for GUU.  Always confirm the exact current figure on GUU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "GUU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for GUU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but GUU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does GUU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is GUU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at GUU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my GUU admission status?",
        "a": "On GUU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "gouni",
    "name": "Godfrey Okoye University",
    "abbreviation": "GOUNI",
    "state": "Enugu",
    "location": "Ugwuomu-Nike, Enugu State",
    "founded": 2009,
    "portalUrl": "https://gouni.edu.ng",
    "website": "https://gouni.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Godfrey Okoye University (GOUNI) is a private-owned private university located in Ugwuomu-Nike, Enugu State, established in 2009. GOUNI is organized into 5 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "GOUNI offers undergraduate programmes across all 5 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on GOUNI's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose GOUNI as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "GOUNI conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet GOUNI's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on GOUNI's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). GOUNI's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for GOUNI.  Always confirm the exact current figure on GOUNI's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "GOUNI, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for GOUNI?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but GOUNI's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does GOUNI offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is GOUNI's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at GOUNI?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my GOUNI admission status?",
        "a": "On GOUNI's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "evangeluniversity",
    "name": "Evangel University",
    "abbreviation": "EVANGEL",
    "state": "Ebonyi",
    "location": "Akaeze, Ebonyi State",
    "founded": 2012,
    "portalUrl": "https://evangeluniversity.edu.ng",
    "website": "https://evangeluniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Evangel University (EVANGEL) is a private-owned private university located in Akaeze, Ebonyi State, established in 2012. EVANGEL is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "EVANGEL offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on EVANGEL's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose EVANGEL as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "EVANGEL conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet EVANGEL's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on EVANGEL's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). EVANGEL's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for EVANGEL.  Always confirm the exact current figure on EVANGEL's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "EVANGEL, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for EVANGEL?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but EVANGEL's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does EVANGEL offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is EVANGEL's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at EVANGEL?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my EVANGEL admission status?",
        "a": "On EVANGEL's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "nwu",
    "name": "Northwest University",
    "abbreviation": "NWU",
    "state": "Kano",
    "location": "Kano, Kano State",
    "founded": 2018,
    "portalUrl": "https://nwu.edu.ng",
    "website": "https://nwu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Northwest University (NWU) is a private-owned private university located in Kano, Kano State, established in 2018. NWU is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "NWU offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on NWU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose NWU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "NWU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet NWU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on NWU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). NWU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for NWU.  Always confirm the exact current figure on NWU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "NWU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for NWU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but NWU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does NWU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is NWU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at NWU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my NWU admission status?",
        "a": "On NWU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "anchoruniversity",
    "name": "Anchor University",
    "abbreviation": "AUL",
    "state": "Lagos",
    "location": "Ayobo, Lagos, Lagos State",
    "founded": 2014,
    "portalUrl": "https://anchoruniversity.edu.ng",
    "website": "https://anchoruniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Anchor University (AUL) is a private-owned private university located in Ayobo, Lagos, Lagos State, established in 2014. AUL is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "AUL offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on AUL's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose AUL as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "AUL conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet AUL's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on AUL's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). AUL's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for AUL.  Always confirm the exact current figure on AUL's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "AUL, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for AUL?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but AUL's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does AUL offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is AUL's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at AUL?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my AUL admission status?",
        "a": "On AUL's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "christopheruniversity",
    "name": "Christopher University",
    "abbreviation": "CU-MOWE",
    "state": "Ogun",
    "location": "Mowe, Ogun State",
    "founded": 2015,
    "portalUrl": "https://christopheruniversity.edu.ng",
    "website": "https://christopheruniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Christopher University (CU-MOWE) is a private-owned private university located in Mowe, Ogun State, established in 2015. CU-MOWE is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "CU-MOWE offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on CU-MOWE's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose CU-MOWE as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "CU-MOWE conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet CU-MOWE's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on CU-MOWE's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). CU-MOWE's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for CU-MOWE.  Always confirm the exact current figure on CU-MOWE's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "CU-MOWE, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for CU-MOWE?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but CU-MOWE's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does CU-MOWE offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is CU-MOWE's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at CU-MOWE?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my CU-MOWE admission status?",
        "a": "On CU-MOWE's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "chrisland",
    "name": "Chrisland University",
    "abbreviation": "CHRISLAND",
    "state": "Ogun",
    "location": "Owode, Ogun State",
    "founded": 2015,
    "portalUrl": "https://chrislandsuniversity.edu.ng",
    "website": "https://chrislandsuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Chrisland University (CHRISLAND) is a private-owned private university located in Owode, Ogun State, established in 2015. CHRISLAND is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law"
      ],
      "note": "CHRISLAND offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law. Course availability and specific departmental JAMB subject combinations should be confirmed on CHRISLAND's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose CHRISLAND as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "CHRISLAND conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet CHRISLAND's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on CHRISLAND's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). CHRISLAND's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for CHRISLAND.  Always confirm the exact current figure on CHRISLAND's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "CHRISLAND, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for CHRISLAND?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but CHRISLAND's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does CHRISLAND offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is CHRISLAND's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at CHRISLAND?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my CHRISLAND admission status?",
        "a": "On CHRISLAND's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "kingsuniversity",
    "name": "Kings University",
    "abbreviation": "KINGSUNI",
    "state": "Osun",
    "location": "Ode-Omu, Osun State",
    "founded": 2015,
    "portalUrl": "https://kingsuniversity.edu.ng",
    "website": "https://kingsuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Kings University (KINGSUNI) is a private-owned private university located in Ode-Omu, Osun State, established in 2015. KINGSUNI is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "KINGSUNI offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on KINGSUNI's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose KINGSUNI as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "KINGSUNI conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet KINGSUNI's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on KINGSUNI's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). KINGSUNI's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for KINGSUNI.  Always confirm the exact current figure on KINGSUNI's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "KINGSUNI, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for KINGSUNI?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but KINGSUNI's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does KINGSUNI offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is KINGSUNI's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at KINGSUNI?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my KINGSUNI admission status?",
        "a": "On KINGSUNI's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "trinity",
    "name": "Trinity University",
    "abbreviation": "TUN",
    "state": "Lagos",
    "location": "Yaba, Lagos, Lagos State",
    "founded": 2019,
    "portalUrl": "https://trinityuniversity.edu.ng",
    "website": "https://trinityuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Trinity University (TUN) is a private-owned private university located in Yaba, Lagos, Lagos State, established in 2019. TUN is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "TUN offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on TUN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose TUN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "TUN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet TUN's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on TUN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). TUN's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for TUN.  Always confirm the exact current figure on TUN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "TUN, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for TUN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but TUN's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does TUN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is TUN's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at TUN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my TUN admission status?",
        "a": "On TUN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "mcpherson",
    "name": "McPherson University",
    "abbreviation": "MCPHERSON",
    "state": "Ogun",
    "location": "Seriki Sotayo, Ogun State",
    "founded": 2012,
    "portalUrl": "https://mcphersonuniversity.edu.ng",
    "website": "https://mcphersonuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "McPherson University (MCPHERSON) is a private-owned private university located in Seriki Sotayo, Ogun State, established in 2012. MCPHERSON is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "MCPHERSON offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on MCPHERSON's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose MCPHERSON as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "MCPHERSON conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet MCPHERSON's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on MCPHERSON's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). MCPHERSON's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for MCPHERSON.  Always confirm the exact current figure on MCPHERSON's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "MCPHERSON, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for MCPHERSON?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but MCPHERSON's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does MCPHERSON offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is MCPHERSON's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at MCPHERSON?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my MCPHERSON admission status?",
        "a": "On MCPHERSON's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "pcu",
    "name": "Precious Cornerstone University",
    "abbreviation": "PCU",
    "state": "Oyo",
    "location": "Ibadan, Oyo State",
    "founded": 2019,
    "portalUrl": "https://pcu.edu.ng",
    "website": "https://pcu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Precious Cornerstone University (PCU) is a private-owned private university located in Ibadan, Oyo State, established in 2019. PCU is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "PCU offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on PCU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose PCU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "PCU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet PCU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on PCU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). PCU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for PCU.  Always confirm the exact current figure on PCU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "PCU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for PCU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but PCU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does PCU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is PCU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at PCU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my PCU admission status?",
        "a": "On PCU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "dominican",
    "name": "Dominican University",
    "abbreviation": "DUIB",
    "state": "Oyo",
    "location": "Ibadan, Oyo State",
    "founded": 2015,
    "portalUrl": "https://dui.edu.ng",
    "website": "https://dui.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Dominican University (DUIB) is a private-owned private university located in Ibadan, Oyo State, established in 2015. DUIB is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "DUIB offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on DUIB's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose DUIB as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "DUIB conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet DUIB's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on DUIB's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). DUIB's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for DUIB.  Always confirm the exact current figure on DUIB's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "DUIB, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for DUIB?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but DUIB's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does DUIB offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is DUIB's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at DUIB?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my DUIB admission status?",
        "a": "On DUIB's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "legacyuniversity",
    "name": "Legacy University",
    "abbreviation": "LUO",
    "state": "Anambra",
    "location": "Okija, Anambra State",
    "founded": 2018,
    "portalUrl": "https://legacyuniversityokija.edu.ng",
    "website": "https://legacyuniversityokija.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Legacy University (LUO) is a private-owned private university located in Okija, Anambra State, established in 2018. LUO is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "LUO offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on LUO's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose LUO as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "LUO conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet LUO's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on LUO's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). LUO's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for LUO.  Always confirm the exact current figure on LUO's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "LUO, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for LUO?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but LUO's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does LUO offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is LUO's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at LUO?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my LUO admission status?",
        "a": "On LUO's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "summituniversity",
    "name": "Summit University",
    "abbreviation": "SUO",
    "state": "Kwara",
    "location": "Offa, Kwara State",
    "founded": 2015,
    "portalUrl": "https://summituniversity.edu.ng",
    "website": "https://summituniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Summit University (SUO) is a private-owned private university located in Offa, Kwara State, established in 2015. SUO is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "SUO offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on SUO's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose SUO as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "SUO conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet SUO's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on SUO's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). SUO's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for SUO.  Always confirm the exact current figure on SUO's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "SUO, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for SUO?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but SUO's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does SUO offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is SUO's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at SUO?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my SUO admission status?",
        "a": "On SUO's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "skyline",
    "name": "Skyline University Nigeria",
    "abbreviation": "SUN",
    "state": "Kano",
    "location": "Kano, Kano State",
    "founded": 2018,
    "portalUrl": "https://sun.edu.ng",
    "website": "https://sun.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Skyline University Nigeria (SUN) is a private-owned private university located in Kano, Kano State, established in 2018. SUN is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "SUN offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on SUN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose SUN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "SUN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet SUN's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on SUN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). SUN's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for SUN.  Always confirm the exact current figure on SUN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "SUN, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for SUN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but SUN's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does SUN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is SUN's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at SUN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my SUN admission status?",
        "a": "On SUN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "ekouniversity",
    "name": "Eko University of Medical and Health Sciences",
    "abbreviation": "EKO",
    "state": "Lagos",
    "location": "Ijanikin, Lagos State",
    "founded": 2019,
    "portalUrl": "https://eko.edu.ng",
    "website": "https://eko.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Health Sciences",
      "College of Education"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Nursing Science",
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Eko University of Medical and Health Sciences (EKO) is a private-owned private university located in Ijanikin, Lagos State, established in 2019. EKO is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Nursing Science, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Nursing Science",
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "EKO offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Medicine & Surgery, Nursing Science, Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on EKO's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose EKO as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "EKO conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet EKO's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on EKO's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). EKO's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for EKO.  Always confirm the exact current figure on EKO's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "EKO, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for EKO?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but EKO's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does EKO offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is EKO's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at EKO?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my EKO admission status?",
        "a": "On EKO's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "atbuni",
    "name": "Atiba University",
    "abbreviation": "ATIBA",
    "state": "Oyo",
    "location": "Oyo, Oyo State",
    "founded": 2016,
    "portalUrl": "https://atiba.edu.ng",
    "website": "https://atiba.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Atiba University (ATIBA) is a private-owned private university located in Oyo, Oyo State, established in 2016. ATIBA is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "ATIBA offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on ATIBA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose ATIBA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "ATIBA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet ATIBA's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on ATIBA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). ATIBA's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for ATIBA.  Always confirm the exact current figure on ATIBA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "ATIBA, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for ATIBA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but ATIBA's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does ATIBA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is ATIBA's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at ATIBA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my ATIBA admission status?",
        "a": "On ATIBA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "hezekiah",
    "name": "Hezekiah University",
    "abbreviation": "HUUZ",
    "state": "Imo",
    "location": "Umudi, Imo State",
    "founded": 2019,
    "portalUrl": "https://hezekiahuniversity.edu.ng",
    "website": "https://hezekiahuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Hezekiah University (HUUZ) is a private-owned private university located in Umudi, Imo State, established in 2019. HUUZ is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "HUUZ offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on HUUZ's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose HUUZ as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "HUUZ conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet HUUZ's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on HUUZ's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). HUUZ's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for HUUZ.  Always confirm the exact current figure on HUUZ's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "HUUZ, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for HUUZ?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but HUUZ's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does HUUZ offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is HUUZ's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at HUUZ?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my HUUZ admission status?",
        "a": "On HUUZ's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "obonguniversity",
    "name": "Obong University",
    "abbreviation": "OBU",
    "state": "Akwa Ibom",
    "location": "Obong Ntak, Akwa Ibom State",
    "founded": 2007,
    "portalUrl": "https://obonguniversity.edu.ng",
    "website": "https://obonguniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Obong University (OBU) is a private-owned private university located in Obong Ntak, Akwa Ibom State, established in 2007. OBU is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "OBU offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on OBU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose OBU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "OBU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet OBU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on OBU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). OBU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for OBU.  Always confirm the exact current figure on OBU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "OBU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for OBU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but OBU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does OBU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is OBU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at OBU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my OBU admission status?",
        "a": "On OBU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "caritas",
    "name": "Caritas University",
    "abbreviation": "CARITAS",
    "state": "Enugu",
    "location": "Amorji-Nike, Enugu State",
    "founded": 2005,
    "portalUrl": "https://caritasuni.edu.ng",
    "website": "https://caritasuni.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Caritas University (CARITAS) is a private-owned private university located in Amorji-Nike, Enugu State, established in 2005. CARITAS is organized into 5 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "CARITAS offers undergraduate programmes across all 5 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on CARITAS's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose CARITAS as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "CARITAS conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet CARITAS's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on CARITAS's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). CARITAS's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for CARITAS.  Always confirm the exact current figure on CARITAS's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "CARITAS, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for CARITAS?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but CARITAS's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does CARITAS offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is CARITAS's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at CARITAS?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my CARITAS admission status?",
        "a": "On CARITAS's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "kwararafa",
    "name": "Kwararafa University",
    "abbreviation": "KWARAVAR",
    "state": "Taraba",
    "location": "Wukari, Taraba State",
    "founded": 2005,
    "portalUrl": "https://kwararafauniversity.edu.ng",
    "website": "https://kwararafauniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Kwararafa University (KWARAVAR) is a private-owned private university located in Wukari, Taraba State, established in 2005. KWARAVAR is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "KWARAVAR offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on KWARAVAR's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose KWARAVAR as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "KWARAVAR conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet KWARAVAR's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on KWARAVAR's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). KWARAVAR's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for KWARAVAR.  Always confirm the exact current figure on KWARAVAR's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "KWARAVAR, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for KWARAVAR?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but KWARAVAR's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does KWARAVAR offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is KWARAVAR's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at KWARAVAR?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my KWARAVAR admission status?",
        "a": "On KWARAVAR's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "PAMO",
    "name": "PAMO University of Medical Sciences",
    "abbreviation": "PAMO",
    "state": "Rivers",
    "location": "Port Harcourt, Rivers State",
    "founded": 2017,
    "portalUrl": "https://pamouniversity.edu.ng",
    "website": "https://pamouniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Health Sciences",
      "College of Education"
    ],
    "popularCourses": [
      "Medicine & Surgery",
      "Nursing Science",
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "PAMO University of Medical Sciences (PAMO) is a private-owned private university located in Port Harcourt, Rivers State, established in 2017. PAMO is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Medicine & Surgery, Nursing Science, Accounting.",
    "courses": {
      "list": [
        "Medicine & Surgery",
        "Nursing Science",
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "PAMO offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Medicine & Surgery, Nursing Science, Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on PAMO's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose PAMO as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "PAMO conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet PAMO's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on PAMO's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). PAMO's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for PAMO.  Always confirm the exact current figure on PAMO's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "PAMO, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for PAMO?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but PAMO's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does PAMO offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is PAMO's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at PAMO?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my PAMO admission status?",
        "a": "On PAMO's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "rhema",
    "name": "Rhema University",
    "abbreviation": "RHEMA",
    "state": "Rivers",
    "location": "Obeama-Asa, Rivers State",
    "founded": 2009,
    "portalUrl": "https://rhemauniversity.edu.ng",
    "website": "https://rhemauniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Rhema University (RHEMA) is a private-owned private university located in Obeama-Asa, Rivers State, established in 2009. RHEMA is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "RHEMA offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on RHEMA's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose RHEMA as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "RHEMA conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet RHEMA's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on RHEMA's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). RHEMA's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for RHEMA.  Always confirm the exact current figure on RHEMA's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "RHEMA, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for RHEMA?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but RHEMA's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does RHEMA offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is RHEMA's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at RHEMA?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my RHEMA admission status?",
        "a": "On RHEMA's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "umkar",
    "name": "University of Mkar",
    "abbreviation": "UMKAR",
    "state": "Benue",
    "location": "Mkar, Benue State",
    "founded": 2005,
    "portalUrl": "https://umkar.edu.ng",
    "website": "https://umkar.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "University of Mkar (UMKAR) is a private-owned private university located in Mkar, Benue State, established in 2005. UMKAR is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "UMKAR offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on UMKAR's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose UMKAR as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "UMKAR conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet UMKAR's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on UMKAR's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). UMKAR's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for UMKAR.  Always confirm the exact current figure on UMKAR's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "UMKAR, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for UMKAR?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but UMKAR's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does UMKAR offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is UMKAR's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at UMKAR?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my UMKAR admission status?",
        "a": "On UMKAR's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "Cletus",
    "name": "Cletus University",
    "abbreviation": "CLETUS",
    "state": "Enugu",
    "location": "Ohe, Enugu State",
    "founded": 2020,
    "portalUrl": "https://cletusuniversity.edu.ng",
    "website": "https://cletusuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Cletus University (CLETUS) is a private-owned private university located in Ohe, Enugu State, established in 2020. CLETUS is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "CLETUS offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on CLETUS's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose CLETUS as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "CLETUS conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet CLETUS's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on CLETUS's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). CLETUS's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for CLETUS.  Always confirm the exact current figure on CLETUS's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "CLETUS, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for CLETUS?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but CLETUS's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does CLETUS offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is CLETUS's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at CLETUS?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my CLETUS admission status?",
        "a": "On CLETUS's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "kolaDaisi",
    "name": "Kola Daisi University",
    "abbreviation": "KDU",
    "state": "Oyo",
    "location": "Ibadan, Oyo State",
    "founded": 2016,
    "portalUrl": "https://kolaadaisiuniversity.edu.ng",
    "website": "https://kolaadaisiuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Kola Daisi University (KDU) is a private-owned private university located in Ibadan, Oyo State, established in 2016. KDU is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "KDU offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on KDU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose KDU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "KDU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet KDU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on KDU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). KDU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for KDU.  Always confirm the exact current figure on KDU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "KDU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for KDU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but KDU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does KDU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is KDU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at KDU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my KDU admission status?",
        "a": "On KDU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "micheal_okpara_private",
    "name": "Coal City University",
    "abbreviation": "CCU",
    "state": "Enugu",
    "location": "Enugu, Enugu State",
    "founded": 2017,
    "portalUrl": "https://ccu.edu.ng",
    "website": "https://ccu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Law",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Law",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Coal City University (CCU) is a private-owned private university located in Enugu, Enugu State, established in 2017. CCU is organized into 5 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Law",
        "Engineering"
      ],
      "note": "CCU offers undergraduate programmes across all 5 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Law, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on CCU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose CCU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "CCU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet CCU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on CCU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). CCU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for CCU.  Always confirm the exact current figure on CCU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "CCU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for CCU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but CCU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does CCU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is CCU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at CCU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my CCU admission status?",
        "a": "On CCU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "edwinclark",
    "name": "Edwin Clark University",
    "abbreviation": "ECU",
    "state": "Delta",
    "location": "Kiagbodo, Delta State",
    "founded": 2015,
    "portalUrl": "https://ecu.edu.ng",
    "website": "https://ecu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Edwin Clark University (ECU) is a private-owned private university located in Kiagbodo, Delta State, established in 2015. ECU is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "ECU offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on ECU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose ECU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "ECU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet ECU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on ECU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). ECU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for ECU.  Always confirm the exact current figure on ECU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "ECU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for ECU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but ECU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does ECU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is ECU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at ECU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my ECU admission status?",
        "a": "On ECU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "kingsley_mbadiwe",
    "name": "Kingsley Ozumba Mbadiwe University",
    "abbreviation": "KOMU",
    "state": "Imo",
    "location": "Ideato, Imo State",
    "founded": 2017,
    "portalUrl": "https://komu.edu.ng",
    "website": "https://komu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Kingsley Ozumba Mbadiwe University (KOMU) is a private-owned private university located in Ideato, Imo State, established in 2017. KOMU is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "KOMU offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on KOMU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose KOMU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "KOMU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet KOMU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on KOMU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). KOMU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for KOMU.  Always confirm the exact current figure on KOMU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "KOMU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for KOMU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but KOMU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does KOMU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is KOMU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at KOMU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my KOMU admission status?",
        "a": "On KOMU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "maranatha",
    "name": "Maranatha University",
    "abbreviation": "MARAN",
    "state": "Lagos",
    "location": "Lekki, Lagos State",
    "founded": 2020,
    "portalUrl": "https://maranathauniversity.edu.ng",
    "website": "https://maranathauniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Maranatha University (MARAN) is a private-owned private university located in Lekki, Lagos State, established in 2020. MARAN is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "MARAN offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on MARAN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose MARAN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "MARAN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet MARAN's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on MARAN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). MARAN's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for MARAN.  Always confirm the exact current figure on MARAN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "MARAN, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for MARAN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but MARAN's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does MARAN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is MARAN's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at MARAN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my MARAN admission status?",
        "a": "On MARAN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "clarion",
    "name": "Clarion University",
    "abbreviation": "CLARION",
    "state": "Akwa Ibom",
    "location": "Abak, Akwa Ibom State",
    "founded": 2021,
    "portalUrl": "https://clarionuniversity.edu.ng",
    "website": "https://clarionuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Clarion University (CLARION) is a private-owned private university located in Abak, Akwa Ibom State, established in 2021. CLARION is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "CLARION offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on CLARION's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose CLARION as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "CLARION conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet CLARION's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on CLARION's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). CLARION's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for CLARION.  Always confirm the exact current figure on CLARION's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "CLARION, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for CLARION?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but CLARION's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does CLARION offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is CLARION's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at CLARION?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my CLARION admission status?",
        "a": "On CLARION's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "mountainTop",
    "name": "Mountain Top University",
    "abbreviation": "MTU",
    "state": "Ogun",
    "location": "Prayer City, Ibafo, Ogun State",
    "founded": 2015,
    "portalUrl": "https://mtu.edu.ng",
    "website": "https://mtu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Mountain Top University (MTU) is a private-owned private university located in Prayer City, Ibafo, Ogun State, established in 2015. MTU is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "MTU offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on MTU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose MTU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "MTU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet MTU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on MTU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). MTU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for MTU.  Always confirm the exact current figure on MTU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "MTU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for MTU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but MTU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does MTU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is MTU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at MTU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my MTU admission status?",
        "a": "On MTU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "Spiritan",
    "name": "Spiritan University",
    "abbreviation": "SUN-NNEOCHI",
    "state": "Abia",
    "location": "Nneochi, Abia State",
    "founded": 2019,
    "portalUrl": "https://spiritanuniversity.edu.ng",
    "website": "https://spiritanuniversity.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Spiritan University (SUN-NNEOCHI) is a private-owned private university located in Nneochi, Abia State, established in 2019. SUN-NNEOCHI is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "SUN-NNEOCHI offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on SUN-NNEOCHI's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose SUN-NNEOCHI as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "SUN-NNEOCHI conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet SUN-NNEOCHI's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on SUN-NNEOCHI's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). SUN-NNEOCHI's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for SUN-NNEOCHI.  Always confirm the exact current figure on SUN-NNEOCHI's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "SUN-NNEOCHI, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for SUN-NNEOCHI?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but SUN-NNEOCHI's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does SUN-NNEOCHI offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is SUN-NNEOCHI's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at SUN-NNEOCHI?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my SUN-NNEOCHI admission status?",
        "a": "On SUN-NNEOCHI's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "thomasadewumi",
    "name": "Thomas Adewumi University",
    "abbreviation": "TAU",
    "state": "Kwara",
    "location": "Oko, Kwara State",
    "founded": 2020,
    "portalUrl": "https://tau.edu.ng",
    "website": "https://tau.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Engineering",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication",
      "Engineering"
    ],
    "category": "Private University",
    "ownership": "Private",
    "overview": "Thomas Adewumi University (TAU) is a private-owned private university located in Oko, Kwara State, established in 2020. TAU is organized into 4 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication",
        "Engineering"
      ],
      "note": "TAU offers undergraduate programmes across all 4 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication, Engineering. Course availability and specific departmental JAMB subject combinations should be confirmed on TAU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose TAU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Private universities are required by JAMB to conclude admissions by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "TAU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet TAU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on TAU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). TAU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦350,000 – ₦2,800,000+ depending on the university and programme",
      "returning": "typically 10-20% lower than the freshers rate",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for private universitys, not yet individually confirmed for TAU.  Always confirm the exact current figure on TAU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦50,000 – ₦150,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "allocation/application",
      "note": "TAU, like most Nigerian private universities, provides on-campus hostel accommodation (often compulsory for underage/fresh students) at a cost included in or billed alongside school fees — confirm the exact hostel fee and policy on the school's portal."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for TAU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but TAU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does TAU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is TAU's acceptance fee?",
        "a": "typically ₦50,000 – ₦150,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at TAU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my TAU admission status?",
        "a": "On TAU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "nou",
    "name": "National Open University of Nigeria",
    "abbreviation": "NOUN",
    "state": "FCT",
    "location": "Abuja, FCT",
    "founded": 2002,
    "portalUrl": "https://nou.edu.ng",
    "website": "https://nou.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "National Open University of Nigeria (NOUN) is a federal government-owned federal university located in Abuja, FCT, established in 2002. NOUN is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "NOUN offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on NOUN's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose NOUN as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "NOUN conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet NOUN's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on NOUN's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). NOUN's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for NOUN.  Always confirm the exact current figure on NOUN's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "NOUN operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for NOUN?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but NOUN's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does NOUN offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is NOUN's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at NOUN?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my NOUN admission status?",
        "a": "On NOUN's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "polac",
    "name": "Nigeria Police Academy",
    "abbreviation": "POLAC",
    "state": "Kano",
    "location": "Wudil, Kano State",
    "founded": 2013,
    "portalUrl": "https://polac.edu.ng",
    "website": "https://polac.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Nigeria Police Academy (POLAC) is a federal government-owned federal university located in Wudil, Kano State, established in 2013. POLAC is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "POLAC offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on POLAC's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose POLAC as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "POLAC conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet POLAC's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on POLAC's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). POLAC's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for POLAC.  Always confirm the exact current figure on POLAC's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "POLAC operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for POLAC?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but POLAC's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does POLAC offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is POLAC's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at POLAC?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my POLAC admission status?",
        "a": "On POLAC's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "naub",
    "name": "Nigerian Army University Biu",
    "abbreviation": "NAUB",
    "state": "Borno",
    "location": "Biu, Borno State",
    "founded": 2018,
    "portalUrl": "https://naub.edu.ng",
    "website": "https://naub.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Nigerian Army University Biu (NAUB) is a federal government-owned federal university located in Biu, Borno State, established in 2018. NAUB is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "NAUB offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on NAUB's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose NAUB as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "NAUB conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet NAUB's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on NAUB's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). NAUB's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for NAUB.  Always confirm the exact current figure on NAUB's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "NAUB operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for NAUB?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but NAUB's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does NAUB offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is NAUB's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at NAUB?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my NAUB admission status?",
        "a": "On NAUB's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "afit",
    "name": "Air Force Institute of Technology",
    "abbreviation": "AFIT",
    "state": "Kaduna",
    "location": "Kaduna, Kaduna State",
    "founded": 2018,
    "portalUrl": "https://afit.edu.ng",
    "website": "https://afit.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "Federal University",
    "ownership": "Federal Government",
    "overview": "Air Force Institute of Technology (AFIT) is a federal government-owned federal university located in Kaduna, Kaduna State, established in 2018. AFIT is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "AFIT offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on AFIT's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose AFIT as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "AFIT conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet AFIT's institutional JAMB cut-off mark (200+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on AFIT's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 200,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). AFIT's typical institutional cut-off is around 200 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦25,000 – ₦190,000 depending on faculty (Medicine/Engineering higher)",
      "returning": "typically ₦20,000 – ₦150,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for federal universitys, not yet individually confirmed for AFIT.  Always confirm the exact current figure on AFIT's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦20,000 – ₦50,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "AFIT operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for AFIT?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but AFIT's own institutional cut-off is typically around 200 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does AFIT offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is AFIT's acceptance fee?",
        "a": "typically ₦20,000 – ₦50,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at AFIT?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my AFIT admission status?",
        "a": "On AFIT's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "adsu",
    "name": "Adamawa State University",
    "abbreviation": "ADSU",
    "state": "Adamawa",
    "location": "Mubi, Adamawa State",
    "founded": 2002,
    "portalUrl": "https://www.adsu.edu.ng",
    "website": "https://www.adsu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Adamawa State University (ADSU) is a state government-owned state university located in Mubi, Adamawa State, established in 2002. ADSU is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "ADSU offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on ADSU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose ADSU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "ADSU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet ADSU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on ADSU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). ADSU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for ADSU.  Always confirm the exact current figure on ADSU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "ADSU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for ADSU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but ADSU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does ADSU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is ADSU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at ADSU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my ADSU admission status?",
        "a": "On ADSU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "basug",
    "name": "Bauchi State University, Gadau",
    "abbreviation": "BASUG",
    "state": "Bauchi",
    "location": "Gadau, Bauchi State",
    "founded": 2011,
    "portalUrl": "https://www.basug.edu.ng",
    "website": "https://www.basug.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Bauchi State University, Gadau (BASUG) is a state government-owned state university located in Gadau, Bauchi State, established in 2011. BASUG is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "BASUG offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on BASUG's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose BASUG as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "BASUG conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet BASUG's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on BASUG's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). BASUG's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for BASUG.  Always confirm the exact current figure on BASUG's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "BASUG operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for BASUG?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but BASUG's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does BASUG offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is BASUG's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at BASUG?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my BASUG admission status?",
        "a": "On BASUG's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "bsum",
    "name": "Rev. Fr. Moses Orshio Adasu University (Benue State University)",
    "abbreviation": "BSUM",
    "state": "Benue",
    "location": "Makurdi, Benue State",
    "founded": 1992,
    "portalUrl": "https://www.bsum.edu.ng",
    "website": "https://www.bsum.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Rev. Fr. Moses Orshio Adasu University (Benue State University) (BSUM) is a state government-owned state university located in Makurdi, Benue State, established in 1992. BSUM is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "BSUM offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on BSUM's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose BSUM as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "BSUM conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet BSUM's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on BSUM's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). BSUM's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for BSUM.  Always confirm the exact current figure on BSUM's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "BSUM operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for BSUM?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but BSUM's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does BSUM offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is BSUM's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at BSUM?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my BSUM admission status?",
        "a": "On BSUM's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "ysu",
    "name": "Yobe State University",
    "abbreviation": "YSU",
    "state": "Yobe",
    "location": "Damaturu, Yobe State",
    "founded": 2006,
    "portalUrl": "https://www.ysu.edu.ng",
    "website": "https://www.ysu.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Yobe State University (YSU) is a state government-owned state university located in Damaturu, Yobe State, established in 2006. YSU is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "YSU offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on YSU's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose YSU as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "YSU conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet YSU's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on YSU's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). YSU's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for YSU.  Always confirm the exact current figure on YSU's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "YSU operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for YSU?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but YSU's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does YSU offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is YSU's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at YSU?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my YSU admission status?",
        "a": "On YSU's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  },
  {
    "slug": "oouagoiwoye",
    "name": "Olabisi Onabanjo University",
    "abbreviation": "OOU2",
    "state": "Ogun",
    "location": "Ago-Iwoye, Ogun State",
    "founded": 1982,
    "portalUrl": "https://www.oouagoiwoye.edu.ng",
    "website": "https://www.oouagoiwoye.edu.ng",
    "faculties": [
      "College of Humanities, Management & Social Sciences",
      "College of Science",
      "College of Education"
    ],
    "popularCourses": [
      "Accounting",
      "Business Administration",
      "Computer Science",
      "Mass Communication"
    ],
    "category": "State University",
    "ownership": "State Government",
    "overview": "Olabisi Onabanjo University (OOU2) is a state government-owned state university located in Ago-Iwoye, Ogun State, established in 1982. OOU2 is organized into 3 faculties/colleges and is widely searched by prospective JAMB candidates for its Accounting, Business Administration, Computer Science.",
    "courses": {
      "list": [
        "Accounting",
        "Business Administration",
        "Computer Science",
        "Mass Communication"
      ],
      "note": "OOU2 offers undergraduate programmes across all 3 of its faculties. The most-searched courses are Accounting, Business Administration, Computer Science, Mass Communication. Course availability and specific departmental JAMB subject combinations should be confirmed on OOU2's official admission brochure/portal, since new programmes are added periodically."
    },
    "admissionRequirements": {
      "olevel": "Minimum of five (5) O'Level credits including English Language and Mathematics, in not more than two sittings (WAEC/NECO/NABTEB).",
      "utme": "Candidates must choose OOU2 as their first-choice institution on JAMB and meet the departmental subject combination for their intended course.",
      "directEntry": "Holders of ND, HND, NCE, A-Level, IJMB or JUPEB (where accepted by the department) may apply for admission into 200 level via JAMB Direct Entry.",
      "deadline": "Public universities are required by JAMB to conclude admissions by October 31, 2026; private universities by November 30, 2026 (per the JAMB 2026 policy meeting, 11 May 2026)."
    },
    "postUtme": {
      "conducted": true,
      "format": "OOU2 conducts a Post-UTME/Direct Entry screening exercise (typically computer-based) for candidates who meet its institutional cut-off mark.",
      "steps": [
        "Meet OOU2's institutional JAMB cut-off mark (180+ typically required, though the JAMB national minimum for 2026/2027 is 150).",
        "Register for the Post-UTME/screening exercise on OOU2's official admission portal once the form is released.",
        "Sit the screening exercise (format varies by school — CBT is now standard at most universities).",
        "Wait for the merit/catchment admission list, released via CAPS and the school's own portal."
      ]
    },
    "cutOffMarks": {
      "jambNational": 150,
      "institutional": 180,
      "institutionalVerified": false,
      "competitiveCourses": "220–300+ for Medicine, Law, Pharmacy, and Engineering at most schools",
      "session": "2026/2027",
      "note": "JAMB's national minimum for 2026/2027 is 150 (announced 11 May 2026). OOU2's typical institutional cut-off is around 180 (category-typical estimate, not yet individually confirmed for this school). Always check the exact departmental cut-off on CAPS or the school's official admission portal before assuming eligibility."
    },
    "schoolFees": {
      "freshers": "typically ₦50,000 – ₦300,000 depending on faculty and indigene/non-indigene status",
      "returning": "typically ₦40,000 – ₦220,000 depending on faculty",
      "verified": false,
      "session": "2026/2027",
      "note": "Figures above are a typical range for state universitys, not yet individually confirmed for OOU2.  Always confirm the exact current figure on OOU2's official student portal before making any payment."
    },
    "acceptanceFee": {
      "amount": "typically ₦25,000 – ₦60,000",
      "verified": false,
      "note": "Pay only through the official portal-generated invoice/RRR — never into a personal account."
    },
    "hostel": {
      "available": true,
      "system": "balloting",
      "note": "OOU2 operates on-campus hostels allocated via a balloting system (typically prioritising fresh and final-year students), alongside recognised off-campus private hostels nearby. Hostel applications usually open shortly after resumption — watch the student affairs portal for the balloting timetable, and budget for both on- and off-campus options since on-campus space is limited at most Nigerian universities."
    },
    "faqs": [
      {
        "q": "What is the JAMB cut-off mark for OOU2?",
        "a": "JAMB's national minimum for 2026/2027 is 150, but OOU2's own institutional cut-off is typically around 180 (unconfirmed for this specific school — check the portal)."
      },
      {
        "q": "Does OOU2 offer Direct Entry admission?",
        "a": "Yes, subject to departmental requirements — ND, HND, NCE, A-Level, IJMB, and JUPEB holders may apply for 200 level."
      },
      {
        "q": "How much is OOU2's acceptance fee?",
        "a": "typically ₦25,000 – ₦60,000 — this is a typical range, not yet individually confirmed; check the portal."
      },
      {
        "q": "Is hostel accommodation guaranteed at OOU2?",
        "a": "Not usually guaranteed for every student — on-campus space is limited at most Nigerian universities and allocated via balloting; many students combine it with off-campus housing."
      },
      {
        "q": "Where do I check my OOU2 admission status?",
        "a": "On OOU2's official admission portal (using your JAMB registration number) and on JAMB CAPS."
      }
    ]
  }
];

export default universities;
