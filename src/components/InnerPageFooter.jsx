import { Link } from "react-router-dom";
import "../styles/inner-page-polish.css";

const pages = [
  { to: "/projects", label: "Web & UI/UX", no: "01" },
  { to: "/marketing", label: "Marketing", no: "02" },
  { to: "/artwork", label: "Artwork", no: "03" },
  { to: "/about", label: "About me", no: "04" },
  { to: "/contact", label: "Say hello", no: "05" },
];

export default function InnerPageFooter({ current }) {
  const otherPages = pages.filter((page) => page.to !== current);
  return (
    <aside className="niah-inner-tail" aria-label="Continue exploring the portfolio">
      <span className="niah-inner-tail__tape" aria-hidden="true" />
      <div className="niah-inner-tail__heading">
        <p>ONE MORE PAGE? / NIAH'S LITTLE INDEX</p>
        <h2>There's more to <em>explore.</em></h2>
        <span aria-hidden="true">✳</span>
      </div>
      <nav className="niah-inner-tail__links" aria-label="Other portfolio pages">
        {otherPages.map((page) => (
          <Link to={page.to} key={page.to}>
            <small>{page.no}</small><span>{page.label}</span><span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
      <Link className="niah-inner-tail__desk" to="/">← Back to Niah's desk</Link>
    </aside>
  );
}
