import { useEffect, useRef } from "react";
import "../styles/inner-page-polish.css";

/** An accessible native modal: Escape closes it, and focus returns to the trigger. */
export default function PortfolioLightbox({ items, index, onChange, onClose, label = "Portfolio image preview" }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);
  const item = index === null ? null : items[index];
  const go = (change) => {
    if (!items.length) return;
    onChange((index + change + items.length) % items.length);
  };
  const handleKey = (event) => {
    if (index === null) return;
    if (event.key === "ArrowRight") { event.preventDefault(); go(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); go(-1); }
  };
  return (
    <dialog ref={dialogRef} className="niah-art-viewer" aria-label={label}
      onClose={onClose} onKeyDown={handleKey}
      onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
      {item && (
        <div className="niah-art-viewer__inside">
          <div className="niah-art-viewer__top">
            <span>THE ORIGINAL / {String(index + 1).padStart(2, "0")} OF {String(items.length).padStart(2, "0")}</span>
            <button type="button" className="niah-art-viewer__close" onClick={() => dialogRef.current?.close()} aria-label="Close image preview">Close ×</button>
          </div>
          <img src={item.image} alt={item.alt || item.title} />
          <div className="niah-art-viewer__caption">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
          {items.length > 1 && <div className="niah-art-viewer__pager">
            <button type="button" onClick={() => go(-1)}>← Previous</button>
            <button type="button" onClick={() => go(1)}>Next →</button>
          </div>}
        </div>
      )}
    </dialog>
  );
}
