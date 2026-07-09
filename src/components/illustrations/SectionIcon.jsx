// Original, hand-authored SVG icon set (simple line icons, not sourced from
// any external image library) — used next to section headings across the
// site for quick visual scanning.
const iconPaths = {
  fees: (
    <>
      <rect x="4" y="7" width="24" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="4" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  cutoff: (
    <>
      <path d="M6 24 L12 14 L18 18 L26 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="20,6 26,6 26,12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  faculties: (
    <>
      <rect x="5" y="12" width="22" height="14" fill="none" stroke="currentColor" strokeWidth="2" />
      <polygon points="16,4 28,12 4,12" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="16" x2="16" y2="26" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  documents: (
    <>
      <path d="M8 4 H20 L24 8 V28 H8 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="12" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="19" x2="20" y2="19" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="24" x2="17" y2="24" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  timeline: (
    <>
      <line x1="4" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="16" r="3" fill="currentColor" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      <circle cx="24" cy="16" r="3" fill="currentColor" />
    </>
  ),
  hostel: (
    <>
      <path d="M6 16 L16 6 L26 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <rect x="9" y="16" width="14" height="11" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="20" width="4" height="7" fill="currentColor" />
    </>
  ),
};

export default function SectionIcon({ name, size = 28, color = "#4CAF50" }) {
  const path = iconPaths[name];
  if (!path) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ color, verticalAlign: "middle", marginRight: 8 }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
