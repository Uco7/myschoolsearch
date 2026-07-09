import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import HotLinks from "../components/HotLinks";
import LastUpdatedStamp from "../components/LastUpdatedStamp";
import { jambHotLink6 } from "../data/hotLinksData";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { getCurrentSession, withLiveSession } from "../utils/session";
import { getArticleBySlug } from "../data/articlesLoader";

export default function Article() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const session = getCurrentSession();

  const title = article ? `${withLiveSession(article.title)} | MySearch Query` : "Article not found | MySearch Query";
  const description = article ? withLiveSession(article.description) : "";

  const jsonLd = article
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((f) => ({
          "@type": "Question",
          name: withLiveSession(f.q),
          acceptedAnswer: { "@type": "Answer", text: withLiveSession(f.a) },
        })),
      }
    : undefined;

  useDocumentMeta(title, description, jsonLd);

  if (!article) {
    return (
      <Layout>
        <div className="container section-txt">
          <h2>Article not found</h2>
          <p>Try the <Link to="/nigeria/list-of-institution/page">university directory</Link> or the <Link to="/jamb-data-correction/faq">JAMB FAQ</Link> instead.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <Link to="/">Home</Link> &rsaquo; <Link to="/articles">Guides</Link> &rsaquo; <span>{article.category}</span>
      </nav>

      <section className="hero">
        <h1>{withLiveSession(article.title)}</h1>
        <p>{article.category}</p>
      </section>

      <div className="container">
        <LastUpdatedStamp />

        {article.sections.map((s, i) => (
          <section key={i} className="section-txt">
            <h2>{withLiveSession(s.heading)}</h2>
            <p>{withLiveSession(s.body)}</p>
          </section>
        ))}

        <section className="section-txt profile-faq">
          <h2>Frequently Asked Questions</h2>
          {article.faqs.map((f, i) => (
            <details key={i}>
              <summary>{withLiveSession(f.q)}</summary>
              <p>{withLiveSession(f.a)}</p>
            </details>
          ))}
        </section>
      </div>

      <HotLinks title="Hot links" links={jambHotLink6} />
    </Layout>
  );
}
