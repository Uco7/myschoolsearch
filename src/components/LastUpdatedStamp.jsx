import { getLastUpdatedLabel, getCurrentSession } from "../utils/session";

/**
 * Small "last checked" / session stamp. Computed live from the visitor's
 * clock on every render — there is nothing here to manually update, ever.
 */
export default function LastUpdatedStamp({ prefix = "Guide updated for the" }) {
  return (
    <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>
      {prefix} {getCurrentSession()} admission session &middot; Page last checked {getLastUpdatedLabel()}
    </p>
  );
}
