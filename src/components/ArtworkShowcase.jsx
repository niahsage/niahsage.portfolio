import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "../styles/artwork-showcase.css";

import dogPainting from "../assets/artwork/painted-dog-portrait.jpg";
import catPainting from "../assets/artwork/orange-cat-portrait.jpg";
import botanicalSketch from "../assets/artwork/botanical-figure-study.jpg";
import tablePainting from "../assets/artwork/botanical-table-painted.jpg";
import tableBefore from "../assets/artwork/botanical-table-before.jpg";

const pages = [
  {
    title: "Dog in Blue",
    type: "Painted portrait",
    image: dogPainting,
    alt: "Hand painted brown and white dog resting in a blue folding chair, surrounded by green and gold brushstrokes",
    note: "A little personality, a lot of color. I love finding ways to give animal portraits a feeling of their own.",
    tag: "paint & personality",
  },
  {
    title: "Cat at Rest",
    type: "Acrylic pet portrait",
    image: catPainting,
    alt: "Painting of a relaxed orange tabby curled into a navy cat perch against peach and olive botanical shapes",
    note: "Warm colors, familiar expressions, and the tiny details that make an animal feel like themselves.",
    tag: "warmth in the details",
  },
  {
    title: "Botanical Figure",
    type: "Sketchbook study",
    image: botanicalSketch,
    alt: "Loose black-and-white drawing of a classical figure surrounded by curling vines and botanical shapes",
    note: "An unfinished line can be the interesting part. I like letting drawings grow into something unexpected.",
    tag: "drawn to the organic",
  },
  {
    title: "Botanical Table",
    type: "Furniture painting",
    image: tablePainting,
    alt: "Hand-painted round tabletop with detailed grape leaves, curling vines and a small bunch of grapes",
    before: tableBefore,
    note: "An everyday object became a place to experiment with foliage, texture, and a more personal kind of decoration.",
    tag: "made by hand",
  },
];

const turnVariants = {
  enter: (direction) => ({
    opacity: 0,
    rotateY: direction > 0 ? -68 : 68,
    x: direction > 0 ? 24 : -24,
  }),
  center: { opacity: 1, rotateY: 0, x: 0 },
  exit: (direction) => ({
    opacity: 0,
    rotateY: direction > 0 ? 68 : -68,
    x: direction > 0 ? -24 : 24,
  }),
};

export default function ArtworkShowcase() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const artwork = pages[index];

  function goTo(delta) {
    setDirection(delta);
    setIndex((current) => (current + delta + pages.length) % pages.length);
  }

  return (
    <section id="artwork-preview" className="sketchbook-showcase" aria-labelledby="sketchbook-title">
      <div className="sketchbook-container">
        <div className="sketchbook-heading">
          <div>
            <p className="sketchbook-eyebrow">FILE NO. 04 / FROM MY SKETCHBOOK</p>
            <h2 id="sketchbook-title">Made by <em>hand.</em></h2>
          </div>
          <p>Paintings, small experiments, and ideas that took shape away from a screen.</p>
        </div>

        <div className="sketchbook-desk">
          <span className="sketchbook-asterisk" aria-hidden="true">✳</span>
          <div className="sketchbook-book" role="group" aria-label="Interactive artwork sketchbook" aria-roledescription="sketchbook">
            <div className="sketchbook-binding" aria-hidden="true" />
            <div className="sketchbook-left-page">
              <span className="sketchbook-tape" aria-hidden="true" />
              <div className="sketchbook-photo-window">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.img
                    key={artwork.title}
                    src={artwork.image}
                    alt={artwork.alt}
                    loading="lazy"
                    className="sketchbook-art-image"
                    custom={direction}
                    variants={reduceMotion ? undefined : turnVariants}
                    initial={reduceMotion ? false : "enter"}
                    animate={reduceMotion ? undefined : "center"}
                    exit={reduceMotion ? undefined : "exit"}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
              </div>
              <button
                type="button"
                className="sketchbook-turn-corner"
                aria-label={`Turn page to next artwork after ${artwork.title}`}
                onClick={() => goTo(1)}
                title="Turn the page"
              >
                <span aria-hidden="true">↗</span>
              </button>
            </div>

            <div className="sketchbook-right-page">
              <div className="sketchbook-page-top" aria-live="off">
                <span>ART JOURNAL</span>
                <span>{String(index + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}</span>
              </div>
              <div className="sketchbook-page-copy" aria-live="polite" aria-atomic="true">
                <p className="sketchbook-medium">{artwork.type}</p>
                <h3>{artwork.title}</h3>
                <p className="sketchbook-story">{artwork.note}</p>
                <span className="sketchbook-underlined-note">{artwork.tag} ♡</span>
                {artwork.before && (
                  <figure className="sketchbook-before">
                    <img src={artwork.before} alt="Earlier stage of the hand-painted botanical tabletop" loading="lazy" />
                    <figcaption>Before / in progress</figcaption>
                  </figure>
                )}
              </div>
              <div className="sketchbook-controls" aria-label="Browse artwork">
                <button type="button" onClick={() => goTo(-1)} aria-label="Previous artwork">← <span>prev</span></button>
                <span aria-hidden="true">✿</span>
                <button type="button" onClick={() => goTo(1)} aria-label="Next artwork"><span>next</span> →</button>
              </div>
            </div>
          </div>
          <span className="sketchbook-side-note" aria-hidden="true">a little something<br />from my sketchbook ♡</span>
        </div>

        <div className="sketchbook-bottom">
          <p>There's always something <em>in progress.</em></p>
          <Link to="/artwork" className="sketchbook-all-link">See my full artwork collection <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
