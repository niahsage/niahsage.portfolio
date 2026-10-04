import { useState } from "react";
import professional from "../assets/images/about.jpg";
import greece from "../assets/images/greece.jpg";
import casual from "../assets/images/niah-casual.jpeg";
import "../styles/about-photo-stack.css";

const PHOTOS = [
  { id: "greece", image: greece, alt: "Niah in Greece" },
  { id: "professional", image: professional, alt: "Portrait of Niah" },
  { id: "casual", image: casual,  alt: "Casual photo of Niah" },
];

export default function AboutPhotoStack() {
  const [front, setFront] = useState(0);
  const [moving, setMoving] = useState(false);

  function cycle() {
    if (moving) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFront((current) => (current + 1) % PHOTOS.length);
    } else setMoving(true);
  }

  return (
    <div className="niah-about-photo-stack">
      <div className="niah-about-photo-stack__pile">
        {PHOTOS.map((photo, index) => {
          const depth = (index - front + PHOTOS.length) % PHOTOS.length;
          const isTop = depth === 0;
          return (
            <div key={photo.id}
              className={`niah-about-photo-stack__polaroid depth-${depth}${moving && isTop ? " is-going-back" : ""}`}
              style={{ zIndex: 5 - depth }}
              aria-hidden={!isTop}
              onAnimationEnd={isTop ? (event) => {
                if (event.target !== event.currentTarget || event.animationName !== "niah-about-photo-to-back") return;
                setFront((current) => (current + 1) % PHOTOS.length);
                setMoving(false);
              } : undefined}>
              <img src={photo.image} alt={isTop ? photo.alt : ""} draggable="false" loading="lazy" />
              <span className="niah-about-photo-stack__caption" aria-hidden="true">{photo.label}</span>
              {isTop && <button type="button" className="niah-about-photo-stack__click"
                onClick={cycle} disabled={moving}
                aria-label={`Move ${photo.label} photo to the bottom of the stack and show the next photograph`} />}
            </div>
          );
        })}
      </div>
      <p className="niah-about-photo-stack__hint">click the top photo to shuffle           </p>
    </div>
  );
}
