// jambDataCorrectionFaqData.js
// 100 real, distinct answers to the highest-searched JAMB data-correction
// questions, grouped into the 18 categories that map to how candidates
// actually search. Session-specific figures (fees, windows) are kept
// general and pointed at the official portal, consistent with this
// project's data-honesty policy — see README "Data honesty policy".
//
// Any "YYYY/YYYY" mention below is rewritten live by withLiveSession()
// wherever this data is rendered — never hardcode a fix year here.

const CATEGORIES = [
  {
    category: "Personal Information Corrections",
    items: [
      { q: "How do I correct my JAMB date of birth?", a: "Log in to your JAMB profile (or use the correction portal/CBT centre when the correction window opens), select 'Date of Birth' under data correction, and enter the correct date. Significant changes (more than a year or two off) usually require an age declaration or birth certificate as supporting evidence." },
      { q: "How do I change my name on JAMB?", a: "Name changes are done through the JAMB correction portal or an accredited CBT centre. Minor spelling fixes are usually processed instantly, while a full name change (e.g. after marriage, or correcting a completely different name) typically requires a supporting affidavit." },
      { q: "Can I correct my gender on JAMB?", a: "Yes, gender is one of the standard correctable fields on the JAMB portal. Because it's a sensitive field, JAMB may flag it for manual review rather than an instant update, especially if it doesn't match your NIN record." },
      { q: "How do I change my state of origin on JAMB?", a: "State of origin can be corrected via the data correction portal, but JAMB cross-checks this against your NIN and LGA of origin, so make sure your National Identity Management Commission (NIMC) record is correct first — mismatches are the most common reason this correction gets rejected." },
      { q: "Can I change my local government area (LGA) on JAMB?", a: "Yes. LGA correction is usually done alongside a state-of-origin correction (since LGA is nested under state), and is likewise checked against your NIN record for consistency." },
      { q: "How do I correct my nationality on JAMB?", a: "Nationality correction is available on the portal but is treated as a high-sensitivity field — expect it to go through manual verification rather than an instant self-service update." },
      { q: "Can I update my phone number on JAMB?", a: "Yes — phone number is a low-sensitivity field and can usually be updated directly from your JAMB profile without a formal 'correction' fee, since it doesn't affect your official biodata record." },
      { q: "How do I change my email address on JAMB?", a: "You can update your email from your JAMB profile settings. If you no longer have access to your registered email and can't log in, you'll need to use JAMB's profile-recovery process (via your registered phone number or in person at a CBT centre) before you can change it." },
      { q: "How do I fix a spelling mistake in my name?", a: "A simple spelling fix (a letter or two, not a full name change) is the most common and most straightforward correction — apply through the correction portal or CBT centre, and it's typically processed faster than a substantial name change since it doesn't need an affidavit." },
      { q: "Can I correct my passport photograph on JAMB?", a: "Photo correction is possible where the uploaded image is unclear, doesn't match the candidate, or fails verification — this is usually handled at an accredited CBT centre in person rather than purely online, since it involves re-capturing your image." },
    ],
  },
  {
    category: "NIN Corrections",
    items: [
      { q: "How do I link my NIN to my JAMB profile?", a: "Enter your 11-digit NIN in the designated field on your JAMB profile; JAMB verifies it directly against the NIMC database and auto-populates or cross-checks your biodata against it." },
      { q: "My NIN details are different from my JAMB details. What should I do?", a: "Correct whichever record is wrong at the source: if your NIN is wrong, fix it with NIMC first (JAMB can't override NIMC data); if your JAMB entry is the mistake, correct it on the JAMB portal so it matches your verified NIN." },
      { q: "How do I correct my NIN before JAMB registration?", a: "NIN corrections are handled entirely through NIMC (via their portal or an NIMC enrollment centre) — this needs to be resolved before you register for JAMB, since JAMB pulls and validates against your NIN at registration." },
      { q: "Can I change my NIN after registering for JAMB?", a: "You can't change your NIN number itself once used, but if the underlying NIN record was wrong and you've since corrected it with NIMC, you can ask JAMB to re-verify/refresh your profile against the updated NIN data." },
      { q: "Why is my NIN not verifying on JAMB?", a: "This is usually caused by a mismatch between the name, date of birth, or gender on your NIN versus what you entered on JAMB, or a temporary NIMC database sync issue. Double-check both records match exactly before trying again, and retry after some hours if it's a system-side delay." },
    ],
  },
  {
    category: "Date of Birth Issues",
    items: [
      { q: "Can I change my date of birth after writing JAMB?", a: "Yes, date of birth correction remains available after the exam, through the same correction portal/CBT centre process — it isn't locked once you've sat the UTME." },
      { q: "How many times can I correct my date of birth?", a: "JAMB doesn't publish a fixed universal limit, but repeated changes to the same sensitive field increase scrutiny and the likelihood of a manual review or rejection — treat it as a one-time correction to get right, not something to adjust repeatedly." },
      { q: "What documents are needed to change my date of birth?", a: "For anything beyond a minor typo, expect to need a birth certificate or age declaration (sworn affidavit), and often your NIN slip showing the correct date, as supporting evidence at the CBT centre." },
      { q: "How long does JAMB date of birth correction take?", a: "Straightforward corrections can reflect within a few days; ones requiring manual review (large date changes, document verification) can take longer — check your profile or CAPS periodically rather than assuming an instant update." },
      { q: "How much does JAMB date of birth correction cost?", a: "There's a standard correction fee per data field, but the exact current amount should be confirmed on the official JAMB correction portal before paying, since fees are reviewed periodically." },
    ],
  },
  {
    category: "Name Corrections",
    items: [
      { q: "Can I change my surname on JAMB?", a: "Yes, surname changes are permitted (common after marriage or to fix a registration error) but, unlike a minor spelling fix, typically require an affidavit or supporting legal document since it's a bigger change to your official identity record." },
      { q: "Can I add a middle name to my JAMB record?", a: "Yes — adding a missing middle name is one of the more routine name corrections, generally processed without needing the heavier documentation a full surname change would require." },
      { q: "Can I remove my middle name from JAMB?", a: "Yes, this is possible through the same name-correction process, though you should make sure the resulting name still matches your NIN and O'Level result names to avoid a mismatch flag later." },
      { q: "Can I rearrange my names on JAMB?", a: "Yes — reordering first/middle/surname is a recognised correction type, useful when your name was entered in the wrong sequence at registration, but it should still end up matching your NIN and certificate name order." },
      { q: "Can I correct a typo in my name?", a: "Yes, a straightforward typo (one or two wrong letters) is the simplest name correction to make and is usually processed quickly through the portal or CBT centre without needing extra documentation." },
    ],
  },
  {
    category: "Course and Institution Corrections",
    items: [
      { q: "How do I change my course in JAMB?", a: "Log in to your JAMB profile once the 'Change of Course' window opens (typically after results are released), select your new course, confirm it matches your subject combination, and pay the applicable correction fee." },
      { q: "Can I change my institution after JAMB?", a: "Yes, this is JAMB's 'Change of Institution' service, available in the same window as change of course, letting you move your application to a different school if you haven't been admitted yet." },
      { q: "How many times can I change my institution?", a: "JAMB typically limits candidates to a small number of institution/course changes per admission cycle (commonly cited as up to two) — treat each change as a decision to get right rather than something to repeat freely." },
      { q: "Can I change both institution and course together?", a: "Yes, JAMB allows changing institution and course in the same transaction, which is often more convenient than doing them separately if you're switching to an entirely different school and programme." },
      { q: "When does JAMB change of course start?", a: "This window typically opens shortly after JAMB releases UTME results for the admission cycle and stays open for several weeks — watch your JAMB profile and JAMB's official announcements for the exact opening date." },
    ],
  },
  {
    category: "Subject Combination Corrections",
    items: [
      { q: "Can I change my UTME subject combination?", a: "Subject combination corrections are more restricted than biodata corrections since your subjects were tied to the exam you already sat — check with JAMB's correction portal for what's currently permitted, as this is one of the more tightly controlled correction types." },
      { q: "I selected the wrong subjects during registration. What should I do?", a: "Raise it as a subject-combination correction as early as possible, ideally before your exam date, since changes get harder (or impossible) to process once you've already sat the UTME with the wrong subjects recorded." },
      { q: "Can I correct my subjects after the exam?", a: "This depends on JAMB's current-cycle policy — subject corrections are generally handled before the exam, and post-exam changes (if allowed at all) are far more restricted, so don't assume it's guaranteed." },
      { q: "How do I know if my subject combination is correct?", a: "Cross-check your four UTME subjects against the current JAMB UTME brochure's required combination for your intended course — a mismatch there is the single most common (and most avoidable) subject-combination mistake." },
      { q: "Will the wrong subject combination affect my admission?", a: "Yes, potentially significantly — most departments will not admit a candidate whose UTME subjects don't match their required combination, regardless of how high the overall score is, so this is worth fixing before it becomes an admission-stage problem." },
    ],
  },
  {
    category: "Bio-data Corrections",
    items: [
      { q: "How do I correct my profile details on JAMB?", a: "Log in to your JAMB profile, go to the data-correction/'Change of Data' section, select the specific field you need to fix, and follow the prompts — most biodata fields are grouped under this single correction flow." },
      { q: "Can I edit my biodata online?", a: "Yes for most fields (phone, email, minor spelling fixes); more sensitive fields (name, date of birth, state of origin) are typically still routed through an accredited CBT centre for verification even when initiated online." },
      { q: "Where can I correct my JAMB details?", a: "Through your JAMB profile on the official portal (jamb.gov.ng) for online-eligible fields, or at any JAMB-accredited CBT centre for corrections that need in-person verification." },
      { q: "Can I correct my data at any CBT centre?", a: "No — only JAMB-accredited centres are authorised to process data corrections; using an unaccredited centre risks your correction not being recognised, or worse, being a scam." },
      { q: "Do I need to visit a JAMB office for correction?", a: "Usually not — an accredited CBT centre or the online portal covers most correction needs. A JAMB zonal/state office visit is typically only needed for complex disputes that a CBT centre can't resolve." },
    ],
  },
  {
    category: "Profile and Account Issues",
    items: [
      { q: "How do I recover my JAMB profile code?", a: "Use the 'Forgot Profile Code' option on the JAMB portal, which sends a recovery code to your registered phone number or email — this only works if you still have access to at least one of those." },
      { q: "How do I recover my JAMB password?", a: "Use the password-reset option on the login page, which similarly sends a reset link or code to your registered phone/email — keep those contact details current specifically so this stays possible." },
      { q: "I forgot the email used for JAMB. What should I do?", a: "Try recovering via your registered phone number instead, since most JAMB profiles are tied to a phone number as well as an email. If neither works, you'll need to visit an accredited CBT centre with your NIN and any past JAMB documents for manual profile recovery." },
      { q: "How do I recover my JAMB profile?", a: "Start with the automated recovery options (profile code/password reset via phone or email); if those fail because your contact details are also outdated, an accredited CBT centre can verify your identity and restore access." },
      { q: "Can I create a new JAMB profile?", a: "No — JAMB ties one profile to one NIN, so creating a second profile isn't a legitimate workaround for a lost account and can actually cause registration problems. Recovering your existing profile is the correct path." },
    ],
  },
  {
    category: "Result and Admission Issues",
    items: [
      { q: "My name is different on JAMB and WAEC. What should I do?", a: "Correct whichever record has the error so both match exactly — a mismatch between your JAMB and WAEC names is one of the most common causes of admission delays, so it's worth resolving before your school's clearance stage." },
      { q: "My date of birth is different on JAMB and WAEC. Will it affect admission?", a: "It can — schools cross-check your JAMB, WAEC/NECO, and NIN records during clearance, and a date-of-birth mismatch can hold up your admission until you provide a correction or an affidavit reconciling the difference." },
      { q: "Can I still gain admission if my details are incorrect?", a: "You may be admitted provisionally, but most schools will require the discrepancy resolved (via JAMB correction and/or an affidavit) before or during clearance — it's safer to fix it as early as possible rather than assume it won't matter." },
      { q: "How do I correct my admission letter details?", a: "Admission letter details are usually pulled directly from your JAMB record, so correcting the underlying JAMB data (and having your school re-sync or reissue the letter) is the right path, rather than trying to edit the letter itself." },
      { q: "How do I correct my JAMB registration number?", a: "The registration number itself generally can't be changed since it's your unique exam identifier — if it was recorded incorrectly somewhere else (like your school's records), that's what needs correcting to match your real JAMB number, not the other way around." },
    ],
  },
  {
    category: "CBT Centre Questions",
    items: [
      { q: "Which CBT centres can process JAMB data correction?", a: "Only centres that JAMB has specifically accredited for data correction (not every CBT centre that conducts registration is automatically authorised for this) — check the official JAMB list of accredited correction centres for your state before visiting one." },
      { q: "How much do CBT centres charge for JAMB corrections?", a: "Beyond JAMB's own official correction fee, some centres add a service charge for facilitating the process — this varies by centre, so it's worth asking upfront and comparing the JAMB-stated fee against what you're being asked to pay." },
      { q: "Can someone else do the correction for me?", a: "In-person biometric/identity verification generally requires you to be physically present, so sending someone else to a CBT centre on your behalf isn't reliable for corrections that need that verification step." },
      { q: "Do I need biometric verification for data correction?", a: "For sensitive fields (name, date of birth, gender), yes — biometric or in-person identity verification at an accredited centre is typically required precisely because these fields are more prone to fraud if left to pure self-service." },
      { q: "How long does correction take at a CBT centre?", a: "The in-person part is usually quick (same-day), but the backend update to your official JAMB record can take longer, especially for corrections routed for manual review — don't expect an instant reflect the same day you visit." },
    ],
  },
  {
    category: "Payment Questions",
    items: [
      { q: "How much is JAMB data correction?", a: "JAMB charges a standard fee per correction, but the exact current amount changes periodically — always confirm it on the official JAMB portal or with an accredited CBT centre rather than relying on an old figure you've seen elsewhere." },
      { q: "How do I pay for JAMB correction?", a: "Payment is typically made directly through the JAMB portal (card or bank transfer) or at the CBT centre facilitating your correction — avoid paying anyone who isn't an accredited centre or the official portal itself." },
      { q: "Can I pay online?", a: "Yes, for corrections initiated through the JAMB portal, online payment (card/bank transfer) is usually supported directly within the correction flow." },
      { q: "Can I pay at the CBT centre?", a: "Yes, most accredited CBT centres accept payment on-site for the corrections they process, in addition to (or instead of) paying via the portal first." },
      { q: "Will I get a receipt after payment?", a: "Yes — always insist on and keep a payment receipt or confirmation slip, since you may need to show proof of payment if a correction doesn't reflect promptly or is disputed later." },
    ],
  },
  {
    category: "Status and Tracking",
    items: [
      { q: "How do I know if my correction has been approved?", a: "Check your JAMB profile — approved corrections typically show updated biodata immediately in your profile; you can also reprint your slip/result to confirm the change has taken effect." },
      { q: "How long does JAMB take to update corrected details?", a: "Simple corrections can reflect within days; ones needing manual review or supporting documents can take longer. If it's been an unusually long wait, contacting JAMB support or the CBT centre that processed it is reasonable." },
      { q: "Why is my correction still pending?", a: "Pending status usually means it's routed for manual review (common for sensitive fields like name or date of birth) or that supporting documents are still being verified — this isn't unusual, but persistent delays are worth following up on." },
      { q: "How do I print my updated JAMB slip?", a: "Log in to your JAMB profile and use the print/reprint option, which will generate your slip with your current (corrected) details once the update has been applied." },
      { q: "How do I check my correction status?", a: "Your JAMB profile is the primary place to check — updated fields display directly there once processed. Some correction types also let you track status through the CBT centre that submitted the request on your behalf." },
    ],
  },
  {
    category: "Common Problems",
    items: [
      { q: "JAMB correction portal is not working. What should I do?", a: "Try again after some time (portal load is often highest right after a window opens), clear your browser cache or try a different browser/device, and if it persists, use an accredited CBT centre as an alternative route to submit the same correction." },
      { q: "My payment was successful but correction wasn't updated.", a: "Keep your payment receipt/reference and contact JAMB support (or the CBT centre you used) with it — a successful payment that hasn't reflected is usually a processing delay or a sync issue, not a lost payment, but it does need to be followed up rather than left." },
      { q: "I corrected my details but they're still showing the old information.", a: "Give it a few days for the update to propagate, then check again — if it's still unchanged after that, it likely needs manual follow-up with JAMB support, since some correction types require a second review step before the change is finalised." },
      { q: "My NIN correction is not reflecting on JAMB.", a: "JAMB pulls NIN data from NIMC, so there can be a sync delay between the two systems — if a NIMC-side correction still isn't showing on JAMB after a reasonable wait, you may need to ask JAMB to manually re-verify against your updated NIN record." },
      { q: "My institution cannot see my corrected details.", a: "Schools typically only see what's on your JAMB record as of when they last pulled it (often at admission or clearance) — if you corrected something after that point, ask your school's admissions office to re-sync or re-check your JAMB record rather than assuming it will update automatically on their end." },
    ],
  },
  {
    category: "Admission-Related Questions",
    items: [
      { q: "Can I correct my details after accepting admission?", a: "It's still possible in principle, but it becomes more sensitive the further along you are in the admission process — check with both JAMB and your school, since your school's records may need to be updated too, not just your JAMB profile." },
      { q: "Can I correct my details after printing my admission letter?", a: "Yes, but you should notify your school as well as correcting it on JAMB, since your admission letter and school records were generated from the pre-correction data and won't update automatically." },
      { q: "Will correction affect my admission status?", a: "A biodata correction on its own shouldn't reverse a valid admission, but unresolved mismatches between your JAMB, WAEC, and school records can cause delays at clearance — resolving discrepancies promptly is the safer path." },
      { q: "Can I make corrections after matriculation?", a: "Corrections become progressively harder to make (and less relevant to JAMB itself) once you've matriculated, since your academic record is then primarily managed by your institution rather than JAMB — at that stage, correcting your details is mostly a school-records matter." },
      { q: "Can I correct my details after NYSC registration?", a: "By this stage, JAMB correction is largely moot — your NYSC records are drawn from your degree certificate and school records, so any discrepancy needs to be resolved with your institution and/or NYSC directly, not through the JAMB portal." },
    ],
  },
  {
    category: "Frequently Asked \"How To\" Searches",
    items: [
      { q: "How to correct JAMB date of birth using NIMC", a: "First correct your date of birth with NIMC (via their portal or an enrollment centre) so your NIN record is accurate, then use JAMB's data-correction service to sync your JAMB profile to match the corrected NIN." },
      { q: "How to change JAMB email address", a: "From your JAMB profile settings, select the email field and enter your new address — if you can't log in because you've lost access to the old email, use JAMB's profile-recovery route via phone number instead." },
      { q: "How to change JAMB phone number", a: "Phone number can typically be updated directly from your JAMB profile without going through the heavier 'data correction' process, since it's a contact detail rather than an official biodata field." },
      { q: "How to change JAMB course and institution", a: "Wait for the 'Change of Course/Institution' window to open (usually after results), log in to your profile, select your new choices, confirm your new subject combination matches the new course, and pay the applicable fee." },
      { q: "How to fix a name mismatch between JAMB and NIN", a: "Determine which record is actually correct, then fix the wrong one at its source — NIMC for a NIN error, or JAMB's correction portal for a JAMB-entry error — rather than trying to reconcile them by editing a third document." },
      { q: "How to fix a name mismatch between JAMB and WAEC", a: "If your WAEC name is correct and JAMB is wrong, correct it on JAMB's portal; if JAMB is correct and WAEC is wrong, you'll need to go through WAEC's own name-correction process, since JAMB can't alter WAEC's records." },
      { q: "How to correct JAMB registration mistakes", a: "Identify the specific field that's wrong (name, DOB, course, etc.) and use the matching correction type on the JAMB portal or at an accredited CBT centre — JAMB groups corrections by field rather than offering one blanket 'fix everything' option." },
      { q: "How to print JAMB correction slip", a: "Log in to your JAMB profile after your correction has been processed and use the print/reprint option — this generates a slip reflecting your updated details as proof of the change." },
      { q: "How to check JAMB correction status online", a: "Log in to your JAMB profile — most corrections show as updated directly in your biodata once processed; there's no separate 'status tracker' beyond checking whether the field itself has changed." },
      { q: "How to contact JAMB support for data correction", a: "Use JAMB's official support channels listed on jamb.gov.ng (helpdesk phone lines, official social media, or a physical JAMB office) — avoid unofficial 'agents' who claim to speed up corrections for a fee." },
    ],
  },
  {
    category: "Cost and Eligibility Questions",
    items: [
      { q: "Is JAMB data correction free?", a: "No, most correction types carry a standard JAMB fee, though the exact current amount should be confirmed on the official portal since it's reviewed periodically. Low-sensitivity contact fields (like phone number) are sometimes free to update." },
      { q: "Who is eligible for JAMB data correction?", a: "Any registered JAMB candidate with a valid profile can apply for a correction on their own record — it's not restricted to a specific admission stage, though what's correctable narrows as you move further into admission and matriculation." },
      { q: "Can I correct my details more than once?", a: "For most fields, yes, though JAMB may scrutinise a field that's been corrected repeatedly. There isn't one universal hard limit across all fields — course/institution changes specifically do have a stated cap (commonly two changes)." },
      { q: "What corrections are allowed by JAMB?", a: "Name, date of birth, gender, state/LGA of origin, phone, email, course, institution, and (within limits) subject combination are all recognised correction categories on the JAMB portal." },
      { q: "What corrections are not allowed by JAMB?", a: "JAMB doesn't allow changing your UTME score, your registration number, or fabricating an entirely different identity — corrections are meant to fix genuine data-entry errors, not to alter your actual exam outcome or create a new candidate record." },
    ],
  },
  {
    category: "Document Questions",
    items: [
      { q: "What documents are required for JAMB data correction?", a: "This depends on the field: NIN slip for most corrections, birth certificate or age declaration for date-of-birth changes, and a sworn affidavit for significant name changes — bring your JAMB registration slip as baseline identification regardless of which correction you're making." },
      { q: "Do I need my birth certificate?", a: "For a date-of-birth correction, yes, typically — it's the standard supporting document CBT centres request to verify the correct date." },
      { q: "Is an affidavit required for name correction?", a: "For a minor spelling fix, usually not; for a substantial name change (different surname, added/removed name), an affidavit is commonly required to establish that the correction is legitimate rather than an attempt to alter identity." },
      { q: "Do I need my NIN slip?", a: "Yes, bringing your NIN slip is standard practice for most corrections, since JAMB cross-verifies your biodata against your NIN record." },
      { q: "Do I need my JAMB registration slip?", a: "Yes — your registration slip is your baseline proof of JAMB registration and is typically requested alongside whichever correction-specific document (birth certificate, affidavit, NIN slip) applies to your case." },
    ],
  },
  {
    category: "Time-Related Questions",
    items: [
      { q: "When does JAMB data correction start?", a: "JAMB typically opens a correction window shortly after the UTME exam period, though exact opening dates are announced by JAMB each cycle rather than fixed to a specific calendar date — check JAMB's official announcements for the current cycle's date." },
      { q: "When does JAMB data correction end?", a: "The correction window has a defined closing date each cycle, usually well before the admission deadline, so corrections don't stay open indefinitely — check the current cycle's official closing date rather than assuming it matches a previous year." },
      { q: "Can I correct my details after the admission deadline?", a: "It becomes significantly harder, and in many cases isn't possible in the ordinary correction flow once admissions for the cycle have closed — this is exactly why correcting errors early, rather than waiting, matters." },
      { q: "How many days does JAMB data correction take?", a: "Simple corrections often reflect within a few days; ones requiring manual review or physical document verification can take longer — there's no single fixed turnaround time across all correction types." },
      { q: "What is the deadline for JAMB corrections?", a: "This is set by JAMB each admission cycle and announced officially — always check the current cycle's specific deadline on jamb.gov.ng rather than relying on a previous year's date, since it does shift." },
    ],
  },
];

export default CATEGORIES;
