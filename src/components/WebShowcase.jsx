import { useEffect, useRef, useState } from "react";
import "../styles/web-showcase.css";
import "../styles/tactile-projects.css";

import astroloveImg from "../assets/images/astrolove.jpg";
import portfolioV1Img from "../assets/images/portfolio-v1.png";

/** Mouse-only tactile effect: keep the existing browser frame and dialog intact. */
function movePaperPreview(event) {
  if (event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 821px)").matches) return;

  const frame = event.currentTarget;
  const rect = frame.getBoundingClientRect();
  const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
  frame.style.setProperty("--tactile-x", `${(x * 100).toFixed(1)}%`);
  frame.style.setProperty("--tactile-y", `${(y * 100).toFixed(1)}%`);
  frame.style.setProperty("--tactile-rotate-y", `${((x - 0.5) * 4).toFixed(2)}deg`);
  frame.style.setProperty("--tactile-rotate-x", `${((0.5 - y) * 4).toFixed(2)}deg`);
}

function resetPaperPreview(event) {
  const style = event.currentTarget.style;
  for (const name of ["--tactile-x", "--tactile-y", "--tactile-rotate-x", "--tactile-rotate-y"]) {
    style.removeProperty(name);
  }
}

export default function WebShowcase() {
  const [preview, setPreview] = useState(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const previews = {
    portfolio: {
      title: "Old Portfolio",
      image: portfolioV1Img,
      alt: "Expanded screenshot of Niah's original portfolio website",
    },
    astrolove: {
      title: "AstroLove",
      image: astroloveImg,
      alt: "Expanded screenshot of the AstroLove app design",
    },
  };

  function openPreview(name, event) {
    triggerRef.current = event.currentTarget;
    setPreview(name);
  }

  function closePreview() {
    dialogRef.current?.close();
  }

  useEffect(() => {
    if (preview && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [preview]);

  function onPreviewClosed() {
    setPreview(null);
    triggerRef.current?.focus();
  }

  return (
    <section
      id="web"
      className="web-showcase"
      aria-labelledby="web-showcase-title"
    >
      <span
        id="selected-work"
        className="web-scroll-anchor"
        aria-hidden="true"
      />

      <div className="web-showcase-inner">
        <header className="web-showcase-heading">
          <div>
            <p className="web-showcase-eyebrow">
              FROM MY LAPTOP / 01
            </p>

            <h2 id="web-showcase-title">
              Web & <em>UI/UX.</em>
            </h2>
          </div>

          <p className="web-showcase-intro">
            A collection of websites, interfaces,
            and interactive ideas. Built
            with attention to
            how people experience design.
          </p>
        </header>

        {/* PROJECT 001 — ORIGINAL PORTFOLIO */}
        <article className="web-feature web-feature-archive">
          <div
            className="web-browser tactile-browser"
            onPointerMove={movePaperPreview}
            onPointerLeave={resetPaperPreview}
            onPointerCancel={resetPaperPreview}
          >
            <div className="web-browser-bar" aria-hidden="true">
              <span className="web-browser-dots"><i /><i /><i /></span>
              <span className="web-browser-address">Niah Sage / Portfolio v1</span>
            </div>
            <div className="web-browser-screen web-browser-screen-portfolio">
              <button
                type="button"
                className="web-preview-trigger"
                aria-label="Enlarge the Old Portfolio screenshot"
                onClick={(event) => openPreview("portfolio", event)}
              >
                <img
                  src={portfolioV1Img}
                  alt="Screenshot of Niah's original portfolio website design"
                  loading="lazy"
                />
                <span className="web-preview-hint" aria-hidden="true">
                  <span>↗</span> take a closer look
                </span>
              </button>
            </div>
          </div>
          <div className="web-project-note">
            <span className="web-note-label">PROJECT 001 / WEB DEVELOPMENT</span>
            <h3>Old Portfolio</h3>
            <p>
              Previous version of my web portfolio,
              showing how my design and development have grown over time.
            </p>
            <a
              href="https://niahsage.github.io/portfolio.v2/"
              target="_blank" rel="noopener noreferrer"
              className="web-project-link"
            >
              View the original <span aria-hidden="true">↗</span>
              <span className="web-new-tab">(opens in new tab)</span>
            </a>
          </div>
        </article>

        {/* PROJECT 002 — ASTROLOVE */}
        <article className="web-feature web-feature-alternate">
          <div className="web-mobile-note">
            <span className="web-note-label">PROJECT 002 / UI DESIGN</span>
            <h3>AstroLove</h3>
            <p>
              A cosmic dating app concept exploring connection, compatibility,
              and an intuitive user experience through astrology.
            </p>
            <a
              href="https://niahsage.github.io/astrolove/"
              target="_blank" rel="noopener noreferrer"
              className="web-project-link"
            >
              Explore AstroLove <span aria-hidden="true">↗</span>
              <span className="web-new-tab">(opens in new tab)</span>
            </a>
          </div>
          <div
            className="web-browser web-browser-astro tactile-browser"
            onPointerMove={movePaperPreview}
            onPointerLeave={resetPaperPreview}
            onPointerCancel={resetPaperPreview}
          >
            <div className="web-browser-bar" aria-hidden="true">
              <span className="web-browser-dots"><i /><i /><i /></span>
              <span className="web-browser-address">AstroLove / UI Design</span>
            </div>
            <div className="web-browser-screen">
              <button
                type="button"
                className="web-preview-trigger"
                aria-label="Enlarge the AstroLove design screenshot"
                onClick={(event) => openPreview("astrolove", event)}
              >
                <img
                  src={astroloveImg}
                  alt="Screenshots of the purple AstroLove dating app design"
                  loading="lazy"
                />
                <span className="web-preview-hint" aria-hidden="true">
                  <span>↗</span> take a closer look
                </span>
              </button>
            </div>
          </div>
        </article>

        {/* PROJECTS IN PROGRESS */}

        <div className="web-progress-heading">
          <span aria-hidden="true">✳</span>

          <div>
            <p className="web-showcase-eyebrow">
              ON THE DRAWING BOARD
            </p>
            <h3>Currently creating...</h3>
          </div>
        </div>

        <div className="web-progress-grid">
          <article className="web-progress-sheet wild-sheet">
            <span className="web-paper-clip" aria-hidden="true">
              ✿
            </span>

            <span className="web-progress-status">
              In progress
            </span>

            <p className="web-sheet-category">
              INTERACTIVE DESIGN
            </p>

            <h4>WILD</h4>

            <p>
              A pixel style garden planning
              concept that helps people imagine
              outdoor spaces using plants and
              features that support local wildlife.
            </p>

            <div className="web-sheet-drawing" aria-hidden="true">
              <span>✿</span>
              <span>☼</span>
              <span>❀</span>
            </div>
          </article>

          <article className="web-progress-sheet adventure-sheet">
            <span className="web-paper-clip" aria-hidden="true">
              ✳
            </span>

            <span className="web-progress-status">
              In progress
            </span>

            <p className="web-sheet-category">
              WEB & INTERACTIVE MEDIA
            </p>

            <h4>Orlando Adventure Planner</h4>

            <p>
              A Orlando based discovery concept
              for finding local experiences,
              pop ups, and small businesses
              around Orlando.
            </p>

            <div className="web-sheet-route" aria-hidden="true">
              <span>○</span>
              <span>········</span>
              <span>✦</span>
            </div>
          </article>
        </div>

        {/* WORDPRESS */}

        <article className="web-wordpress">
          <div className="web-wordpress-symbol" aria-hidden="true">
            W
          </div>

          <div>
            <p className="web-sheet-category">
              PROFESSIONAL WEB WORK
            </p>

            <h3>WordPress & Website Maintenance</h3>

            <p>
              Website content updates, page layout
              work, maintenance, and accessibility
              considerations across professional
              WordPress projects.
            </p>
          </div>

          <span className="web-wordpress-stamp" aria-hidden="true">
            behind the scenes ✳
          </span>
        </article>
      </div>

      {/* Screenshot preview uses a native dialog for keyboard and Escape support. */}
      <dialog
        ref={dialogRef}
        className="web-preview-dialog"
        aria-labelledby="web-preview-dialog-title"
        onClose={onPreviewClosed}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePreview();
        }}
      >
        {preview && (
          <div className="web-preview-paper">
            <header className="web-preview-header">
              <div>
                <span className="web-preview-kicker">A CLOSER LOOK / ✳</span>
                <h3 id="web-preview-dialog-title">{previews[preview].title}</h3>
              </div>
              <button
                type="button"
                className="web-preview-close"
                onClick={closePreview}
                aria-label="Close enlarged project screenshot"
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>
            <div className="web-preview-image-wrap">
              <img
                src={previews[preview].image}
                alt={previews[preview].alt}
              />
            </div>
            <p className="web-preview-caption">from my digital scrapbook ♡</p>
          </div>
        )}
      </dialog>
    </section>
  );
}
