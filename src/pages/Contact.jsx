import { useState } from "react";
import Layout from "../components/Layout";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";
import useDocumentMeta from "../hooks/useDocumentMeta";

// Ported from contact.ejs. The original form posted to "/register" on the
// Express server (enctype="text/plain") — that endpoint doesn't exist on a
// static host, so this now builds a mailto: link instead. If you want real
// form submissions without a backend, swap handleSubmit for a service like
// Formspree or EmailJS.
export default function Contact() {
  useDocumentMeta("Contact Us | MySearch Query", "Get in touch with MySearch Query — send feedback, suggestions, or questions about the site.");

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `From: ${form.name} (${form.email})\n\n${form.message}`;
    const mailto = `mailto:ucnodemailer@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <Layout>
      <div className="container section-txt" style={{ maxWidth: 700, margin: "2rem auto" }}>
        <h1 style={{ color: "#0073e6" }}>Contact Us</h1>
        <p>Suggestions, feedback, or questions regarding this site are always welcome. Please fill out the form below — we value all MySchoolGist readers and we'll try to get in touch with you as soon as possible.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={labelStyle}>Your Name *</label>
          <input type="text" id="name" required value={form.name} onChange={update("name")} style={inputStyle} />

          <label htmlFor="email" style={labelStyle}>Your Email *</label>
          <input type="email" id="email" required value={form.email} onChange={update("email")} style={inputStyle} />

          <label htmlFor="subject" style={labelStyle}>Subject *</label>
          <input type="text" id="subject" required value={form.subject} onChange={update("subject")} style={inputStyle} />

          <label htmlFor="message" style={labelStyle}>Your Message *</label>
          <textarea id="message" rows="6" required value={form.message} onChange={update("message")} style={inputStyle} />

          <button type="submit" style={btnStyle}>Send Message</button>
          {sent && <p style={{ color: "#2e7d32", marginTop: "0.8rem" }}>Opening your email client to send this message…</p>}
        </form>

        <div style={{ marginTop: "2rem", background: "#f0f0f0", padding: "1rem", borderRadius: 6 }}>
          <p><strong>Email:</strong> <a href="mailto:ucnodemailer@gmail.com">ucnodemailer@gmail.com</a> – There's a real person behind that email address, so be nice!</p>
          <p><strong>Address:</strong> Osun State, Nigeria</p>
          <p><strong>Twitter:</strong> <a href="https://x.com/UcheUc189405" target="_blank" rel="noopener noreferrer">@MySearch-query.onrender</a></p>
          <p><strong>Facebook:</strong> <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Like us on Facebook</a></p>
          <p style={{ marginTop: "1rem" }}><em>Note: If you don't hear back from us within a week, your message may have gotten lost in cyberspace — feel free to resend.</em></p>
        </div>
      </div>

      <HotLinks title="Hot links" links={jambHotLink6} />
    </Layout>
  );
}

const labelStyle = { display: "block", marginTop: "1rem", fontWeight: "bold" };
const inputStyle = { width: "100%", padding: "0.7rem", marginTop: "0.3rem", border: "1px solid #ccc", borderRadius: 4, boxSizing: "border-box" };
const btnStyle = { marginTop: "1.5rem", padding: "0.8rem 1.5rem", backgroundColor: "#0073e6", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer" };
