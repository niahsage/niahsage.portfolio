
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import "../styles/interactive-desk.css";
import "../styles/desk-home-links.css";

import deskImage from "../assets/images/niah-desk.png";
import professionalPhoto from "../assets/images/about.jpg";
import greecePhoto from "../assets/images/greece.jpg";
import casualPhoto from "../assets/images/niah-casual.jpeg";


const deskLinks = [
  {
    id: "web",
    title: "Web & UI/UX",
    description: "Websites, apps, and interactive experiences",
    sectionId: "web",
    object: "Laptop",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Social media, campaigns, and digital strategy",
    sectionId: "marketing",
    object: "iPad",
  },
  {
    id: "artwork",
    title: "Artwork",
    description: "Illustrations, paintings, and sketches",
    sectionId: "artwork-preview",
    object: "Sketchbook",
  },
  {
    id: "about",
    title: "About Me",
    description: "Meet the person behind the work",
    sectionId: "about",
    object: "Photographs",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch and create something together",
    sectionId: "contact",
    object: "Phone",
  },
];

const polaroids = [
  { id: "work", image: professionalPhoto, caption: "work me" },
  { id: "greece", image: greecePhoto, caption: "travel ☼" },
  { id: "casual", image: casualPhoto, caption: "just me" },
];

function PolaroidStack() {
  const [frontIndex, setFrontIndex] = useState(0);
  const [moving, setMoving] = useState(false);
  const reduceMotion = useReducedMotion();

  function showNextPhoto() {
    if (moving) return;
    if (reduceMotion) {
      setFrontIndex((index) => (index + 1) % polaroids.length);
    } else {
      setMoving(true);
    }
  }

  return (
    <div className="niah-intro-photo-stack">
      <span className="niah-intro-photo-flower" aria-hidden="true">✳</span>
      <button
        className="niah-photo-stack-button"
        type="button"
        onClick={showNextPhoto}
        aria-label={`Show next photo. Currently showing: ${polaroids[frontIndex].caption}`}
      >
        {polaroids.map((photo, index) => {
          const depth = (index - frontIndex + polaroids.length) % polaroids.length;
          const isTop = depth === 0;
          return (
            <span
              key={photo.id}
              className={`niah-polaroid niah-polaroid--depth-${depth}${isTop && moving ? " is-moving" : ""}`}
              onAnimationEnd={isTop ? (event) => {
                if (event.animationName !== "niah-photo-to-back") return;
                setFrontIndex((current) => (current + 1) % polaroids.length);
                setMoving(false);
              } : undefined}
              aria-hidden="true"
            >
              <span className="niah-polaroid-face niah-polaroid-front">
                <img src={photo.image} alt="" loading="lazy" decoding="async" />
                <span className="niah-polaroid-caption">{photo.caption}</span>
              </span>
            </span>
          );
        })}
      </button>
      <span className="niah-intro-photo-hint" aria-hidden="true">click for the next photo ↗</span>
    </div>
  );
}

export default function InteractiveDesk() {
  const reduceMotion = useReducedMotion();

  // Desk objects and corkboard notes explore THIS homepage.
  // The paper navbar still links to the separate, detailed pages.
  function exploreSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (!target) return;
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <section
      className="niah-desk-section"
      aria-label="Niah's Creative Desk"
    >
      {/* INTERACTIVE DESK PHOTOGRAPH */}

      <div id="interactive-desk" className="niah-desk-scene">
        <img
          className="niah-desk-photo"
          src={deskImage}
          alt="Niah's creative workspace on a balcony with a laptop, iPad, sketchbook, phone, art supplies, and personal photographs."
          fetchPriority="high"
        />

        <nav
          className="niah-desk-hotspots"
          aria-label="Explore the objects on my desk"
        >
          {deskLinks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => exploreSection(item.sectionId)}
              className={`niah-desk-hotspot hotspot-${item.id}`}
              aria-label={`${item.object}: scroll to ${item.title} on this page`}
            >
              <span
                className="niah-desk-tooltip"
                aria-hidden="true"
              >
                {item.title}
                <span>↗</span>
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* A NOTE FROM ME */}

      <div className="niah-desk-explore">
        <div className="niah-corkboard" aria-label="A collection of notes and photographs pinned to a corkboard">
        <motion.div
          className="niah-desk-explore-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* A single clickable stack: the front photo moves to the bottom. */}
          <PolaroidStack />

          <div className="niah-intro-copy">
            <Link to="/about" className="niah-explore-eyebrow niah-intro-about-link">
              A NOTE FROM ME <span aria-hidden="true">↗</span>
            </Link>
            <h1>
              <button
                type="button"
                className="niah-intro-desk-link"
                aria-label="A desk full of ideas. Return to the interactive desk"
                onClick={() => document.getElementById("interactive-desk")?.scrollIntoView({
                  behavior: reduceMotion ? "auto" : "smooth",
                  block: "start",
                })}
              >
                A desk full of <em>ideas.</em>
              </button>
            </h1>
            <p>
              My creative practice has grown across art, design, digital media, and communication. I'm beyond grateful that I've been able to start building a career doing something I'm genuinely passionate about. It's something so many people dream of, and I'm excited to see where it takes me.

Thank you so much for taking the time to explore my little corner of the internet and get to know my work. Every opportunity to share what I create means a lot to me.

I hope we get the chance to connect and create something beautiful together.

 <h2>With love,  </h2>
 <h3>Niah ♡ </h3>
            </p>
          </div>

          <span className="niah-explore-signature" aria-hidden="true">
            built with a passion for growth ♡
          </span>
        </motion.div>

        {/* ACCESSIBLE CATEGORY NAVIGATION */}

        <motion.nav
          className="niah-desk-link-grid"
          aria-label="Browse portfolio sections"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {deskLinks.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => exploreSection(item.sectionId)}
              className={`niah-desk-text-link link-${item.id}`}
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: 0.14 + index * 0.09 }}
            >
              <span
                className="niah-desk-link-number"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="niah-desk-link-copy">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </span>

              <span
                className="niah-desk-link-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </motion.button>
          ))}
        </motion.nav>

        <button
          className="niah-desk-scroll niah-desk-scroll-button"
          type="button"
          onClick={() => document.getElementById("selected-work")?.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start",
          })}
        >
          Continue exploring
          <span aria-hidden="true"> ↓</span>
        </button>
        </div>
      </div>
    </section>
  );
}
