// Original, hand-authored SVG illustration (not sourced from any external
// image) — safe to use anywhere on the site with no licensing concerns.
// A simple graduation-cap-and-book motif in the site's green palette.
export default function GraduationIllustration({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 240 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Graduation cap and open book illustration"
    >
      <ellipse cx="120" cy="160" rx="90" ry="10" fill="#000" opacity="0.06" />

      {/* Open book */}
      <path d="M40 120 L120 105 L200 120 L200 135 L120 120 L40 135 Z" fill="#ffffff" stroke="#4CAF50" strokeWidth="2" />
      <path d="M120 105 L120 120 L200 135 L200 120 Z" fill="#e9f7ee" />
      <path d="M40 120 L120 105 L120 120 L40 135 Z" fill="#f4fbf6" />

      {/* Graduation cap */}
      <polygon points="120,40 195,70 120,100 45,70" fill="#4CAF50" />
      <polygon points="120,40 195,70 120,80 45,70" fill="#5fbf63" />
      <rect x="112" y="70" width="16" height="34" fill="#3d8b40" />
      <circle cx="120" cy="104" r="6" fill="#ffcc00" />
      <line x1="176" y1="76" x2="176" y2="108" stroke="#3d8b40" strokeWidth="3" />
      <circle cx="176" cy="112" r="4" fill="#3d8b40" />
    </svg>
  );
}
