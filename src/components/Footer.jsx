import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentSession } from "../utils/session";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const currentYear = new Date().getFullYear();
  const session = getCurrentSession();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div
        className="scroll-top"
        style={{ display: showScrollTop ? "block" : "none" }}
        onClick={scrollToTop}
      >
        ⬆ Scroll to Top
      </div>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <h3>School Search</h3>
              <p>Stay informed with trusted updates on Nigeria's education system.</p>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about-us/page">About Us</Link></li>
                <li><Link to="/privacy/policy/page">Privacy &amp; Policy</Link></li>
                <li><Link to="/contact-us/page">Contact</Link></li>
                <li><Link to="/disclaimer/page">Disclaimer</Link></li>
              </ul>
            </div>

            <div className="footer-social">
              <h4>Share Our Site</h4>
              <div className="social-icons">
                <a href="https://twitter.com/MySchoolGist" target="_blank" rel="noopener noreferrer" title="Share on Twitter"><i className="fab fa-twitter"></i></a>
                <a href="https://facebook.com/MySchoolGist" target="_blank" rel="noopener noreferrer" title="Share on Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="mailto:?subject=Check%20this%20out&body=https://mysearch-query.onrender.com" title="Share via Email"><i className="fas fa-envelope"></i></a>
                <a href="https://wa.me/?text=https://mysearch-query.onrender.com" target="_blank" rel="noopener noreferrer" title="Share on WhatsApp"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {currentYear} ({session} session) Students Search. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
