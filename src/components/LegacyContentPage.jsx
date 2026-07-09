import { useEffect, useRef } from "react";
import Layout from "./Layout";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { withLiveSession } from "../utils/session";

/**
 * Renders a page whose content was ported straight from its original EJS
 * file's HTML (inline styles, tables, etc. all preserved exactly).
 * Any hardcoded "YYYY/YYYY" session mentions baked into that original HTML
 * are rewritten to the live-computed current session on every render — see
 * withLiveSession in utils/session.js. `scriptEffect`, if given, replicates
 * that page's original inline <script> behaviour (search filters, dropdown
 * toggles, etc.) using the same vanilla DOM calls the EJS page used — just
 * run from a React effect instead of a raw <script> tag (dangerouslySetInnerHTML
 * doesn't execute embedded scripts).
 */
export default function LegacyContentPage({ title, description, html, scriptEffect, children }) {
  useDocumentMeta(withLiveSession(title), withLiveSession(description));
  const containerRef = useRef(null);
  const liveHtml = withLiveSession(html);

  useEffect(() => {
    if (scriptEffect) {
      const cleanup = scriptEffect(containerRef.current);
      return cleanup;
    }
  }, [scriptEffect]);

  return (
    <Layout>
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: liveHtml }} />
      {children}
    </Layout>
  );
}
