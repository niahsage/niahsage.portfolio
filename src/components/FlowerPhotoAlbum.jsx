import { useEffect, useRef, useState } from "react";
import dogPainting from "../assets/artwork/painted-dog-portrait.jpg";
import catPainting from "../assets/artwork/orange-cat-portrait.jpg";
import botanicalArt from "../assets/artwork/botanical-figure-study.jpg";
import wildflowers from "../assets/flower-press/wildflowers.png";
import goldenRoses from "../assets/flower-press/golden-roses.png";
import burgundyDahlia from "../assets/flower-press/burgundy-dahlia.png";
import buttercreamBloom from "../assets/flower-press/buttercream-bloom.png";
import coralZinnia from "../assets/flower-press/coral-zinnia.png";
import goldenTulips from "../assets/flower-press/golden-tulips.png";
import rosePinkBloom from "../assets/flower-press/rose-pink-bloom.png";
import apricotBloom from "../assets/flower-press/apricot-bloom.png";
import pinkVine from "../assets/flower-press/pink-vine.png";
import "../styles/flower-photo-album.css";

const FLOWERS = [
  { id: "wildflowers", label: "Wildflowers", image: wildflowers, width: 37 },
  { id: "roses", label: "Golden roses", image: goldenRoses, width: 34 },
  { id: "burgundy", label: "Burgundy bloom", image: burgundyDahlia, width: 24 },
  { id: "buttercream", label: "Buttercream flower", image: buttercreamBloom, width: 25 },
  { id: "coral", label: "Coral bloom", image: coralZinnia, width: 25 },
  { id: "tulips", label: "Leaf bloom", image: goldenTulips, width: 25 },
  { id: "rosepink", label: "Pink blossom", image: rosePinkBloom, width: 25 },
  { id: "apricot", label: "Apricot bloom", image: apricotBloom, width: 25 },
  { id: "vine", label: "Pink flowering vine", image: pinkVine, width: 46 },
];

const PHOTOS = [
  {
    id: "dog",
    label: "A little portrait",
    image: dogPainting,
    alt: "Hand painted dog portrait by Niah",
  },
  {
    id: "cat",
    label: "Painted with love",
    image: catPainting,
    alt: "Orange cat portrait painted by Niah",
  },
  {
    id: "botanical",
    label: "Something botanical",
    image: botanicalArt,
    alt: "Botanical figure artwork by Niah",
  },

];
// V2 starts with an intentionally blank album rather than retaining flowers from the former click-to-place version.
const STORAGE_KEY = "niah-flower-photo-album-v2";
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function readArrangements() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => item && PHOTOS.some((photo) => photo.id === item.photoId)
      && FLOWERS.some((flower) => flower.id === item.flowerId)
      && Number.isFinite(item.x) && Number.isFinite(item.y))
      .slice(0, 60).map((item) => ({ ...item, x: clamp(item.x, 5, 95), y: clamp(item.y, 5, 95) }));
  } catch { return []; }
}

export default function FlowerPhotoAlbum() {
  const [frontIndex, setFrontIndex] = useState(0);
  const [cycling, setCycling] = useState(false);
  const [selectedFlower, setSelectedFlower] = useState(FLOWERS[0].id);
  const [arrangements, setArrangements] = useState(readArrangements);
  const [ghost, setGhost] = useState(null);
  const [hint, setHint] = useState("Press and drag a flower off its backing, then release it on a photo.");
  const printRef = useRef(null);
  const dragRef = useRef(null);
  const clearGhostTimer = useRef(null);
  const photo = PHOTOS[frontIndex];
  const placed = arrangements.filter((item) => item.photoId === photo.id);
  const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(arrangements)); } catch { /* Optional storage */ }
  }, [arrangements]);
  useEffect(() => () => window.clearTimeout(clearGhostTimer.current), []);

  function cyclePhotos() {
    if (cycling || dragRef.current) return;
    if (prefersReducedMotion()) setFrontIndex((index) => (index + 1) % PHOTOS.length);
    else setCycling(true);
  }

  function addFlower(flowerId, x, y) {
    if (arrangements.length >= 60 || placed.length >= 15) {
      setHint("This picture is blooming! Rearrange or remove flowers to make space.");
      return;
    }
    setArrangements((previous) => [...previous, {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      photoId: photo.id, flowerId, x: clamp(x, 8, 92), y: clamp(y, 8, 92),
      angle: Math.round(Math.random() * 16 - 8),
    }]);
    setHint("Stuck! Lift it again to move it. Click the top photo to see the next one.");
  }

  function moveFlower(id, x, y) {
    setArrangements((items) => items.map((item) => item.id === id
      ? { ...item, x: clamp(x, 7, 93), y: clamp(y, 7, 93) } : item));
  }

  function startNewFlower(event, flower) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    window.clearTimeout(clearGhostTimer.current);
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { mode: "new", pointer: event.pointerId, flowerId: flower.id, startX: event.clientX, startY: event.clientY };
    setSelectedFlower(flower.id);
    setGhost({ flowerId: flower.id, x: event.clientX, y: event.clientY, status: "lifting" });
    setHint(`Lift ${flower.label} from the paper and drop it on the photograph.`);
  }

  function moveNewFlower(event) {
    const drag = dragRef.current;
    if (!drag || drag.mode !== "new" || drag.pointer !== event.pointerId) return;
    setGhost({ flowerId: drag.flowerId, x: event.clientX, y: event.clientY, status: "carrying" });
  }

  function finishNewFlower(event) {
    const drag = dragRef.current;
    if (!drag || drag.mode !== "new" || drag.pointer !== event.pointerId) return;
    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    const bounds = printRef.current?.getBoundingClientRect();
    const inside = bounds && event.clientX >= bounds.left && event.clientX <= bounds.right
      && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
    if (inside) {
      addFlower(drag.flowerId, (event.clientX - bounds.left) / bounds.width * 100,
        (event.clientY - bounds.top) / bounds.height * 100);
      setGhost(null);
    } else {
      const tapped = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < 7;
      setGhost((old) => old ? { ...old, status: "returning" } : null);
      clearGhostTimer.current = window.setTimeout(() => setGhost(null), 180);
      if (tapped) setHint(`${FLOWERS.find((f) => f.id === drag.flowerId)?.label} chosen. Drag it to the photo, or use “Place selected” with a keyboard.`);
      else setHint("Not stuck yet—try dropping it directly on the picture.");
    }
  }

  function startMove(event, item) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.focus({ preventScroll: true });
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { mode: "placed", pointer: event.pointerId, id: item.id };
  }

  function movePlaced(event) {
    const drag = dragRef.current;
    if (!drag || drag.mode !== "placed" || drag.pointer !== event.pointerId) return;
    const bounds = printRef.current?.getBoundingClientRect();
    if (!bounds) return;
    moveFlower(drag.id, (event.clientX - bounds.left) / bounds.width * 100,
      (event.clientY - bounds.top) / bounds.height * 100);
  }

  function finishPlaced(event) {
    const drag = dragRef.current;
    if (!drag || drag.mode !== "placed" || drag.pointer !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    dragRef.current = null;
  }

  function onPlacedKey(event, item) {
    const step = event.shiftKey ? 8 : 2;
    const directions = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    if (directions[event.key]) {
      event.preventDefault();
      moveFlower(item.id, item.x + directions[event.key][0], item.y + directions[event.key][1]);
    } else if (event.key === "Delete" || event.key === "Backspace") {
      event.preventDefault();
      setArrangements((items) => items.filter((flower) => flower.id !== item.id));
    }
  }

  function undoLast() {
    setArrangements((items) => {
      const last = items.findLastIndex((item) => item.photoId === photo.id);
      return last < 0 ? items : items.filter((_, index) => index !== last);
    });
  }

  return (
    <section className="niah-flower-album" aria-labelledby="niah-flower-album-title">
      <div className="niah-flower-album__inner">
        <header className="niah-flower-album__intro">
          <p className="niah-flower-album__eyebrow">A LITTLE FLOWER PRESS / 03</p>
          <h2 id="niah-flower-album-title">Leave a little <em>bloom.</em></h2>
          <p>Peel a flower from its paper. Move it onto a photograph. Let it stick wherever you like.</p>
        </header>
        <div className="niah-flower-album__desk">
          <div className="niah-flower-album__stack-area">
            <div className="niah-flower-album__photo-stack" role="group" aria-label="A stack of three photographs of Niah">
              {PHOTOS.map((entry, index) => {
                const depth = (index - frontIndex + PHOTOS.length) % PHOTOS.length;
                const isFront = depth === 0;
                return (
                  <div key={entry.id}
                    className={`niah-flower-album__sheet depth-${depth}${isFront && cycling ? " is-going-back" : ""}`}
                    style={{ zIndex: 4 - depth }} aria-hidden={!isFront}
                    onAnimationEnd={isFront ? (event) => {
                      if (event.target !== event.currentTarget || event.animationName !== "flower-photo-to-back") return;
                      setFrontIndex((current) => (current + 1) % PHOTOS.length);
                      setCycling(false);
                    } : undefined}>
                    <div className="niah-flower-album__print" ref={isFront ? printRef : undefined}>
                      <img src={entry.image} alt={isFront ? entry.alt : ""} draggable="false" loading="lazy" />
                      {isFront && <button type="button" className="niah-flower-album__next-photo"
                        onClick={cyclePhotos} disabled={cycling}
                        aria-label={`Move ${entry.label} photo to bottom of the stack. Show next photo.`}
                        title="Click to put this photograph at the bottom" />}
                      {isFront && placed.map((item) => {
                        const flower = FLOWERS.find((f) => f.id === item.flowerId);
                        return <button type="button" key={item.id}
                          className="niah-flower-album__placed"
                          style={{ left: `${item.x}%`, top: `${item.y}%`, width: `${flower.width}%`, "--angle": `${item.angle}deg` }}
                          onPointerDown={(event) => startMove(event, item)}
                          onPointerMove={movePlaced} onPointerUp={finishPlaced} onPointerCancel={finishPlaced}
                          onKeyDown={(event) => onPlacedKey(event, item)}
                          aria-label={`${flower.label} on ${entry.label}. Drag to rearrange. Arrow keys to move, Delete to remove.`}>
                          <img src={flower.image} alt="" draggable="false" />
                        </button>;
                      })}
                    </div>
                    <span className="niah-flower-album__caption" aria-hidden="true">{entry.label} ♡</span>
                  </div>
                );
              })}
            </div>
            <p className="niah-flower-album__flip-note">click the top Polaroid to put it underneath ↗</p>
          </div>
          <div className="niah-flower-album__tools">
            <p className="niah-flower-album__tools-title">Place some stickers <span aria-hidden="true">✳</span></p>
            <div className="niah-flower-album__picker" role="group" aria-label="Peelable flowers">
              {FLOWERS.map((flower) => <button key={flower.id} type="button"
                className={`niah-flower-album__choice ${selectedFlower === flower.id ? "is-selected" : ""}${ghost?.flowerId === flower.id ? " is-peeling" : ""}`}
                aria-pressed={selectedFlower === flower.id}
                onPointerDown={(event) => startNewFlower(event, flower)}
                onPointerMove={moveNewFlower} onPointerUp={finishNewFlower} onPointerCancel={finishNewFlower}
                onClick={() => setSelectedFlower(flower.id)}
                aria-label={`Pick up ${flower.label} and drag it onto the photograph`}>
                <span className="niah-flower-album__backing"><img src={flower.image} alt="" draggable="false" /></span>
                <span>{flower.label}</span>
              </button>)}
            </div>
            <p className="niah-flower-album__help" aria-live="polite">{hint}</p>
            <button type="button" className="niah-flower-album__keyboard-place"
              onClick={() => addFlower(selectedFlower, 50, 50)}>
              Place selected flower in center ↗
            </button>
            <p className="niah-flower-album__tiny">For keyboard users: select a flower, place it in the center, then use arrow keys to move it. Shift + arrows move farther; Delete removes it.</p>
            <div className="niah-flower-album__actions">
              <button type="button" onClick={undoLast} disabled={!placed.length}>Undo last</button>
              <button type="button" onClick={() => setArrangements((items) => items.filter((item) => item.photoId !== photo.id))} disabled={!placed.length}>Clear this photo</button>
            </div>
            <p className="niah-flower-album__tiny">Your flowers stay in this browser, and only you see your arrangement.</p>
          </div>
        </div>
      </div>
      {ghost && (() => {
        const flower = FLOWERS.find((item) => item.id === ghost.flowerId);
        return <div className={`niah-flower-album__floating ${ghost.status}`} aria-hidden="true"
          style={{ left: ghost.x, top: ghost.y }}><img src={flower.image} alt="" /></div>;
      })()}
    </section>
  );
}
