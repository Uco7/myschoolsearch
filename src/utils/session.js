export function getCurrentSession(date = new Date()) {
  // Convert non-Date values into a Date
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  // Fallback if the conversion failed
  if (isNaN(date.getTime())) {
    date = new Date();
  }

  const year = date.getFullYear();
  const month = date.getMonth(); // October = 9
  const startYear = month >= 9 ? year : year - 1;

  return `${startYear}/${startYear + 1}`;
}

/** Returns the JAMB admission-completion deadlines for the current cycle. */
export function getAdmissionDeadlines(date = new Date()) {
  const session = getCurrentSession(date);
  const endYear = Number(session.split("/")[1]);
  return {
    publicUniversities: `October 31, ${endYear - 1}`,
    privateUniversities: `November 30, ${endYear - 1}`,
    polytechnics: `December 31, ${endYear - 1}`,
  };
}

/** Human-friendly "last checked" timestamp for trust/freshness signals. */
export function getLastUpdatedLabel(date = new Date()) {
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

/** Returns `count` universities other than `excludeSlug`, prioritising same state/category. */
export function getRelatedUniversities(universities, current, count = 6) {
  const others = universities.filter((u) => u.slug !== current.slug);
  const sameState = others.filter((u) => u.state === current.state);
  const sameCategory = others.filter((u) => u.category === current.category && u.state !== current.state);
  const rest = others.filter((u) => u.state !== current.state && u.category !== current.category);
  const combined = [...sameState, ...sameCategory, ...rest];
  return combined.slice(0, count);
}

/**
 * Replaces any literal "YYYY/YYYY" academic-session pattern inside a string
 * with the live-computed current session. This exists because a lot of
 * ported/generated content (legacy HTML blocks, FAQ text, link labels) has
 * a session baked into the prose itself, not just in a dedicated field —
 * running every such string through this function means there is nowhere
 * left for a stale hardcoded year to hide.
 */
export function withLiveSession(text, date = new Date()) {
  if (typeof text !== "string") return text;
  const session = getCurrentSession(date);
  return text.replace(/20\d{2}\/20\d{2}/g, session);
}

export const TRENDING_SLUGS = [
  "unilag", "ui", "unn", "oau", "abu", "uniben", "uniport", "lasu",
  "covenant", "babcock", "unilorin", "unizik",
];
