import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { getCurrentSession } from "../utils/session";
import { getAllArticles } from "../data/articlesLoader";

export default function Articles() {
  const session = getCurrentSession();
  const articles = getAllArticles();

  useDocumentMeta(
    `Student Guides & Articles ${session} | MySearch Query`,
    `In-depth guides on JAMB, WAEC/NECO, admissions, and student funding for the ${session} academic session.`
  );

  const grouped = articles.reduce((acc, a) => {
    (acc[a.category] ||= []).push(a);
    return acc;
  }, {});

  return (
    <Layout>
      <section className="hero">
        <h1>Student Guides &amp; Articles</h1>
        <p>In-depth, practical guides beyond the university directory — JAMB processes, WAEC/NECO, funding, and more.</p>
      </section>

      <div className="container">
        {Object.entries(grouped).map(([category, items]) => (
          <div className="section-txt" key={category}>
            <h2>{category}</h2>
            <ul className="child-ul">
              {items.map((a) => (
                <li key={a.slug}><Link to={`/articles/${a.slug}`}>{a.title}</Link></li>
              ))}
            </ul>
          </div>
        ))}

        {articles.length === 0 && (
          <div className="section-txt" style={{ textAlign: "center" }}>
            <p>No guides published yet.</p>
          </div>
        )}
      </div>

      <HotLinks title="Hot links" links={jambHotLink6} />
    </Layout>
  );
}
