import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Ported from includeFolder/_headers.ejs — same 3-slide auto-typing
// hero slider, same nav links, same mobile toggle behaviour.
const slideData = [
  {
    title: "Welcome to UC Tech Hub",
    text: "Your one-stop platform for exploring universities, programs, scholarships, and more.",
  },
  {
    title: "Find the Right School for You",
    text: "Discover institutions across Nigeria and beyond that match your dreams and goals.",
  },
  {
    title: "Stay Informed, Stay Ahead",
    text: "Get updates on scholarships, entrance exams, and education tips tailored for students.",
  },
];

function TypedSlide({ active, title, text }) {
  const [typedTitle, setTypedTitle] = useState("");
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!active) {
      setTypedTitle("");
      setTypedText("");
      return;
    }
    let titleIndex = 0;
    setTypedTitle("");
    setTypedText("");
    const titleInterval = setInterval(() => {
      titleIndex++;
      setTypedTitle(title.slice(0, titleIndex));
      if (titleIndex >= title.length) {
        clearInterval(titleInterval);
        let textIndex = 0;
        const textInterval = setInterval(() => {
          textIndex++;
          setTypedText(text.slice(0, textIndex));
          if (textIndex >= text.length) clearInterval(textInterval);
        }, 30);
      }
    }, 50);
    return () => clearInterval(titleInterval);
  }, [active, title, text]);

  return (
    <div className={`slide${active ? " active" : ""}`}>
      <div className="slide-text">
        <h2 style={{ color: "yellow" }}>{typedTitle}</h2>
        <p style={{ color: "yellow", textAlign: "center" }}>{typedText}</p>
      </div>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [headerQuery, setHeaderQuery] = useState("");
  const navigate = useNavigate();

  const runHeaderSearch = (e) => {
    e.preventDefault();
    if (!headerQuery.trim()) return;
    navigate(`/search?q=${encodeURIComponent(headerQuery.trim())}`);
    setMenuOpen(false);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((i) => (i + 1) % slideData.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <header className="nav-header">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.jpg" alt="MySearch Query logo" />
          </Link>
        </div>
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          role="button"
          aria-label="Toggle navigation"
          tabIndex={0}
        >
          &#9776;
        </div>
        <ul className={`header-nav-links${menuOpen ? " active" : ""}`}>
          <li className="header-nav-li"><Link to="/">Home</Link></li>
          <li className="header-nav-li"><Link to="/nigeria/list-of-institution/page">Universities</Link></li>
          <li className="header-nav-li"><Link to="/jamb-data-correction/faq">JAMB FAQ</Link></li>
          <li className="header-nav-li"><Link to="/articles">Guides</Link></li>
          <li className="header-nav-li"><Link to="/about-us/page">About Us</Link></li>
          <li className="contact-link"><Link to="/contact-us/page">Contact Us</Link></li>
          <li className="header-nav-li">
            <form onSubmit={runHeaderSearch} className="header-search-form" role="search">
              <input
                type="text"
                value={headerQuery}
                onChange={(e) => setHeaderQuery(e.target.value)}
                placeholder="Search schools, JAMB..."
                aria-label="Search the site"
                className="header-search-input"
              />
              <button type="submit" className="header-search-button" aria-label="Search">🔍</button>
            </form>
          </li>
        </ul>
      </header>

      <div className="slider">
        <div className="slides">
          {slideData.map((s, i) => (
            <TypedSlide key={i} active={i === currentSlide} title={s.title} text={s.text} />
          ))}
        </div>
      </div>
    </>
  );
}
