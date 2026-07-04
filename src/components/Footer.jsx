import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <p className="footer-eyebrow">Thanks for Visiting</p>

          <h2>
            Let's build
            <br />
            something
            <br />
            <em>meaningful.</em>
          </h2>

          <p className="footer-text">
            Thanks for taking the time to explore my work. 
            Here are some links to get in touch.
          </p>
        </div>

        <div className="footer-links">
          <a href="mailto:niahsage@gmail.com">Email</a>

          <a
            href="https://github.com/niahsage"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

<a
  href="https://www.linkedin.com/in/niah-mckyton-83ba372a5"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn
</a>

          <a
            href="/Niah-Sage-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Niah Sage</span>

        <span className="footer-signature">
          Designed & developed by me ☼
        </span>
      </div>
    </footer>
  );
}

export default Footer;