import { useEffect } from "react";
import "../styles/scroll-reveals.css";
import "../styles/homepage-finishing.css";

// Adds motion to existing homepage elements without changing their layouts.
// CSS uses the separate `translate` property so the original rotations of
// the paper cards, browser mockups and Polaroids are not overwritten.
const revealTargets = [
  ".web-showcase-heading",
  ".web-feature",
  ".web-progress-heading",
  ".web-progress-sheet",
  ".web-wordpress",
  ".mk-heading",
  ".mk-feature",
  ".mk-reels-heading",
  ".mk-reel-card",
  ".mk-proof-heading",
  ".mk-proof",
  ".sketchbook-heading",
  ".sketchbook-desk",
  ".sketchbook-bottom",
  ".mk-archive-folder",
  ".table-reveal-intro",
  ".table-reveal-frame",
  ".niah-flower-album__intro",
  ".niah-flower-album__tools",
  ".studio-about-visual",
  ".studio-about-copy",
].join(", ");

export default function ScrollReveals() {
  useEffect(() => {
    const root = document.getElementById("main-content");
    if (!root || typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

    const elements = [...root.querySelectorAll(revealTargets)];
    const visibleOnLoad = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.classList.add("is-in-view");
          observer.unobserve(target); // reveal once; don't replay on every scroll
        });
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.06 },
    );

    elements.forEach((element) => {
      // Never hide an element that's already on screen at page load.
      if (visibleOnLoad(element)) return;
      element.classList.add("studio-enter");
      if (element.matches(".web-feature, .mk-proof, .mk-reel-card, .mk-archive-folder, .table-reveal-frame")) {
        element.classList.add("studio-enter--laid-down");
      } else if (element.matches(".sketchbook-desk, .niah-flower-album__tools, .studio-about-visual")) {
        element.classList.add("studio-enter--turned-page");
      }
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("studio-enter", "studio-enter--laid-down", "studio-enter--turned-page", "is-in-view");
      });
    };
  }, []);

  return null;
}
