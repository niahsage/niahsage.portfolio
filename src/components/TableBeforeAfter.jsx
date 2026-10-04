import { useState } from "react";
import beforePhoto from "../assets/artwork/botanical-table-before.jpg";
import afterPhoto from "../assets/artwork/botanical-table-painted.jpg";
import "../styles/table-before-after.css";

/**
 * Two real photos of the same hand-painted table.
 * A native range input supports mouse, touch, and keyboard interaction.
 */
export default function TableBeforeAfter() {
  const [reveal, setReveal] = useState(50);

  return (
    <section
      className="table-reveal-section"
      aria-labelledby="table-reveal-title"
    >
      <div className="table-reveal-inner">
        <div className="table-reveal-intro">
          <p className="table-reveal-eyebrow">EVEN SMALL TRANSFORMATIONS ARE MEANINGFUL / 01</p>
          <h2 id="table-reveal-title">
            A second <em>life.</em>
          </h2>
          <p className="table-reveal-story">
            One old tabletop, and carefully placed paint.
            Drag the paper tab to fully view the before and after.
          </p>
          <span className="table-reveal-handwritten" aria-hidden="true">
            made by hand, with love 
          </span>
        </div>

        <div className="table-reveal-frame">
          <span className="table-reveal-tape table-reveal-tape-one" aria-hidden="true" />
          <span className="table-reveal-tape table-reveal-tape-two" aria-hidden="true" />

          <div className="table-reveal-stage">
            <img
              className="table-reveal-image table-reveal-image-before"
              src={beforePhoto}
              alt=""
              loading="lazy"
              draggable="false"
            />
            <img
              className="table-reveal-image table-reveal-image-after"
              src={afterPhoto}
              alt=""
              loading="lazy"
              draggable="false"
              style={{ clipPath: `inset(0 0 0 ${reveal}%)` }}
            />

            <span className="table-reveal-photo-label table-reveal-label-before" aria-hidden="true">
              before
            </span>
            <span className="table-reveal-photo-label table-reveal-label-after" aria-hidden="true">
              after
            </span>

            <div
              className="table-reveal-divider"
              style={{ left: `${reveal}%` }}
              aria-hidden="true"
            >
              <span className="table-reveal-handle">‹ <span>✿</span> ›</span>
            </div>

            <input
              className="table-reveal-range"
              type="range"
              min="0"
              max="100"
              step="1"
              value={reveal}
              onChange={(event) => setReveal(Number(event.target.value))}
              aria-label="Reveal before or after painting the botanical table"
              aria-valuetext={`${reveal}% before image visible, ${100 - reveal}% finished painting visible`}
            />
          </div>
          <div className="table-reveal-caption">
            <span>01 / the original</span>
            <span>pull to reveal <span aria-hidden="true">↔</span></span>
            <span>02 / hand painted</span>
          </div>
        </div>

        <p className="table-reveal-footnote">
          Same table photographed from different angles. The comparison shows the
          change rather than an exact image alignment.
        </p>
      </div>
    </section>
  );
}
