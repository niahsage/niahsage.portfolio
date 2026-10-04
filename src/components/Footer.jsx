import "../styles/footer.css";
import "../styles/footer-polish.css";

export default function Footer() {
  return (
    <footer className="footer footer--postcard">
      <div className="footer-top">
        <div>
          <p className="footer-eyebrow">LOOSE ENDS ✳</p>
          <h2>Keep in <em>touch.</em></h2>
          <p className="footer-text">Find me on Linkedin, or send a note about something you'd like to make together.</p>
        </div>
        <nav className="footer-links" aria-label="Elsewhere and contact links">
          <a href="mailto:niahsage@gmail.com">Email ↗</a>
          <a href="https://github.com/niahsage" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/niah-mckyton-83ba372a5" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="/Niah-Sage-Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Niah Sage</span>
        <span className="footer-signature">designed, developed & made with an idea of constant improvement ♡</span>
      </div>
    </footer>
  );
}
