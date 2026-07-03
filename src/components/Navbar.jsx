import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logoImg from "../assets/images/niah-sage-logo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo" aria-label="Niah Sage home">
        <img src={logoImg} alt="Niah Sage logo" />
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/artwork">Artwork</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;