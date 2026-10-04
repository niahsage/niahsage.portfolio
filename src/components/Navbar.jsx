
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/paper-pocket-nav.css";

import logoImg from "../assets/images/niah-sage-logo-transparent.png";

const workLinks = [
  { label: "Web & UI/UX", path: "/projects", number: "01" },
  { label: "Marketing", path: "/marketing", number: "02" },
  { label: "Artwork", path: "/artwork", number: "03" },
];

const personalLinks = [
  { label: "About me", path: "/about" },
  { label: "Say hello", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);
  const [homeScrolled, setHomeScrolled] = useState(false);
  const quickMenuRef = useRef(null);
  const quickToggleRef = useRef(null);
  const location = useLocation();
  const menuButtonRef = useRef(null);
  const menuPanelRef = useRef(null);
  const wasMenuOpen = useRef(false);

  // Close the mobile menu when navigating.
  useEffect(() => {
    setMenuOpen(false);
    setQuickOpen(false);
  }, [location.pathname, location.hash]);

  // Escape closes the menu and returns keyboard focus.
  useEffect(() => {
    if (!menuOpen) return;

    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  // Avoid leaving keyboard focus inside a closed menu.
  useEffect(() => {
    if (wasMenuOpen.current && !menuOpen) {
      const focusedElement = document.activeElement;

      if (menuPanelRef.current?.contains(focusedElement)) {
        menuButtonRef.current?.focus();
      }
    }

    wasMenuOpen.current = menuOpen;
  }, [menuOpen]);

  // The full torn-paper header belongs to the photo. Once it scrolls out,
  // the smaller paper tab stays within reach; nothing moves the desk hotspots.
  useEffect(() => {
    if (location.pathname !== "/") {
      setHomeScrolled(false);
      return;
    }
    function update() {
      // Swap just as the large top-right paper starts leaving the viewport.
      // Viewport-aware threshold also works at mobile widths and 400% zoom.
      setHomeScrolled(window.scrollY > Math.min(380, Math.max(220, window.innerHeight * 0.38)));
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!quickOpen) return;
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setQuickOpen(false);
        quickToggleRef.current?.focus();
      }
    }
    function onPointerDown(event) {
      if (!quickMenuRef.current?.contains(event.target)) setQuickOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [quickOpen]);

  function closeQuickMenu() { setQuickOpen(false); }
  function scrollToDesk() {
    setQuickOpen(false);
    const desk = document.getElementById("interactive-desk");
    if (desk) desk.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  }
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-to-content" href="#main-content">
        Skip to main content
      </a>

      <header className={`site-header${location.pathname !== "/" ? " site-header--inner" : ""}${location.pathname === "/" && homeScrolled ? " site-header--compact" : ""}`} >
        <nav className="desk-nav" aria-label="Main navigation">

{/* BRAND ROW */}
<div className="desk-nav-top">
  {location.pathname === "/" ? (
    <div className="desk-brand">
      <img
        src={logoImg}
        alt="Niah Sage"
        className="desk-brand-image"
      />
    </div>
  ) : (
    <Link
      to="/"
      className="desk-brand"
      aria-label="Return to homepage"
      onClick={closeMenu}
    >
      <img
        src={logoImg}
        alt=""
        className="desk-brand-image"
      />
    </Link>
  )}

            <div className="desk-nav-note" aria-hidden="true">
              <span className="desk-note-star">✳</span>

              <span className="desk-note-copy">
                designing, making,
                <br />
                and continuing to grow.
              </span>
            </div>

            {/* DESKTOP PERSONAL LINKS */}
            <div className="desk-nav-personal">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `desk-utility-link ${
                    isActive ? "is-active" : ""
                  }`
                }
              >
                About me
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `desk-utility-link desk-hello ${
                    isActive ? "is-active" : ""
                  }`
                }
              >
                Say hello <span aria-hidden="true">↗</span>
              </NavLink>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              ref={menuButtonRef}
              type="button"
              className={`desk-menu-toggle ${
                menuOpen ? "is-open" : ""
              }`}
              aria-expanded={menuOpen}
              aria-controls="desk-navigation-links"
              aria-label={
                menuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              onClick={() => {
                setMenuOpen((open) => !open);
              }}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>

          {/* PAPER-TAB NAVIGATION */}
          <div
            ref={menuPanelRef}
            id="desk-navigation-links"
            className={`desk-nav-bottom ${
              menuOpen ? "is-open" : ""
            }`}
          >
            <span className="desk-explore-label">
              <span aria-hidden="true">✳</span>
              Explore my work
            </span>

            <div className="desk-category-links">
              {workLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `desk-category ${
                      isActive ? "is-active" : ""
                    }`
                  }
                >
                  <span
                    className="desk-category-number"
                    aria-hidden="true"
                  >
                    {link.number}
                  </span>

                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>

            {/* ONLY SHOWN INSIDE MOBILE MENU */}
            <div className="desk-mobile-personal">
              <Link
                to="/"
                className="desk-mobile-link"
                onClick={closeMenu}
              >
                Home
              </Link>

              {personalLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `desk-mobile-link ${
                      isActive ? "is-active" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <span
              className="desk-nav-decoration"
              aria-hidden="true"
            >
              a little of everything ♡
            </span>
          </div>
        </nav>

        {/* A small folded paper tab, visible after the desk or on inner pages. */}
        <div className="paper-pocket" ref={quickMenuRef}>
          <div className="paper-pocket__top">
            {location.pathname === "/" ? (
              <button type="button" className="paper-pocket__home" onClick={scrollToDesk}>
                Niah's desk <span aria-hidden="true">↥</span>
              </button>
            ) : (
              <Link to="/" className="paper-pocket__home" onClick={closeQuickMenu}>
                Niah's desk <span aria-hidden="true">↖</span>
              </Link>
            )}
            <button
              type="button"
              className={`paper-pocket__toggle${quickOpen ? " is-open" : ""}`}
              aria-label={quickOpen ? "Close portfolio menu" : "Open portfolio menu"}
              aria-expanded={quickOpen}
              aria-controls="paper-pocket-links"
              ref={quickToggleRef}
              onClick={() => setQuickOpen((value) => !value)}
            >
              <span className="paper-pocket__stroke" aria-hidden="true" />
              <span className="paper-pocket__stroke" aria-hidden="true" />
              <span className="paper-pocket__stroke" aria-hidden="true" />
            </button>
          </div>
          {quickOpen && (
            <nav id="paper-pocket-links" className="paper-pocket__menu" aria-label="Quick portfolio navigation">
              <span className="paper-pocket__label">✳ flip to a page</span>
              <Link to="/" onClick={closeQuickMenu}>Home / The desk <span aria-hidden="true">↖</span></Link>
              {workLinks.map((link) => (
                <NavLink key={link.path} to={link.path} onClick={closeQuickMenu}>
                  {link.label} <span aria-hidden="true">↗</span>
                </NavLink>
              ))}
              {personalLinks.map((link) => (
                <NavLink key={link.path} to={link.path} onClick={closeQuickMenu}>
                  {link.label} <span aria-hidden="true">↗</span>
                </NavLink>
              ))}
              {location.pathname === "/" && (
                <button type="button" className="paper-pocket__back" onClick={scrollToDesk}>
                  ↑ Back to the interactive desk
                </button>
              )}
            </nav>
          )}
        </div>
      </header>
    </>
  );
  
}
