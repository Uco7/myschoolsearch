import { useEffect } from "react";

/**
 * Sets document.title and the meta description tag on mount, mirroring
 * what each original EJS page did in its own <head> block.
 *
 * Optional `jsonLd` (a plain object or array of objects) is injected as
 * <script type="application/ld+json"> for structured data / rich snippets —
 * used by UniversityProfile.jsx for EducationalOrganization + FAQPage schema.
 */
export default function useDocumentMeta(title, description, jsonLd) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }

    let ldScript;
    if (jsonLd) {
      ldScript = document.createElement("script");
      ldScript.type = "application/ld+json";
      ldScript.text = JSON.stringify(jsonLd);
      ldScript.setAttribute("data-dynamic-jsonld", "true");
      document.head.appendChild(ldScript);
    }

    window.scrollTo(0, 0);

    return () => {
      if (ldScript) document.head.removeChild(ldScript);
    };
  }, [title, description, jsonLd]);
}
