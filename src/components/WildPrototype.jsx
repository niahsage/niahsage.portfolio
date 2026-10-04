import { useReducedMotion, motion } from "framer-motion";
import prototypeVideo from "../assets/wild/wild-figma-walkthrough.mp4";
import prototypePoster from "../assets/wild/wild-prototype-poster.jpg";
import "../styles/wild-preview.css";

/** WILD is a prototype walkthrough, not a deployed or functional garden planner. */
export default function WildPrototype() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="wild-casefile" aria-labelledby="wild-heading">
      <div className="wild-casefile-topline">
        <span className="wild-casefile-mark" aria-hidden="true">✳</span>
        <p className="wild-casefile-eyebrow">IN THE WORKS / INTERACTIVE CONCEPTS</p>
      </div>

      <motion.div
        className="wild-casefile-paper"
        initial={reduceMotion ? false : { opacity: 0, y: 25, rotate: -0.7 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="wild-casefile-copy">
          <span className="wild-casefile-status">✿ Project manager · programmer </span>
          <h2 id="wild-heading">WILD <span>↗</span></h2>
          <p className="wild-casefile-subtitle">Bring life to your space.</p>
          <p>
            A pixel style garden planning concept for turning a yard, patio,
            or balcony into a friendlier space for local wildlife. The Figma
            prototype explores uploading a space, entering a ZIP code, placing
            native plants and habitat features, and viewing a personal wildlife plan.
          </p>
          <div className="wild-casefile-tags" aria-label="Project areas">
            <span>Figma prototype</span>
            <span>UI / UX</span>
            <span>Team manager</span>
            <span>Florida based</span>
          </div>
          <p className="wild-casefile-handwriting">a little nature and some pixel magic ♡</p>
        </div>

        <figure className="wild-casefile-player">
          <span className="wild-casefile-tape" aria-hidden="true" />
          <div className="wild-casefile-screen">
            <video
              controls
              playsInline
              loop
              preload="metadata"
              poster={prototypePoster}
              aria-describedby="wild-walkthrough-caption"
            >
              <source src={prototypeVideo} type="video/mp4" />
              Your browser does not support this video preview.
            </video>
          </div>
          <figcaption id="wild-walkthrough-caption">
            <strong>Watch the prototype ↗</strong>
            <span>Simple visual Figma prototype walkthrough · 1 min 12 sec · no audio</span>
          </figcaption>
        </figure>
      </motion.div>

      <div className="wild-casefile-next">
        <div>
          <span className="wild-casefile-mini-label">ALSO IN PROGRESS</span>
          <h3>Orlando Adventure Planner</h3>
          <p>
            An interactive local discovery concept focused on pop ups,
            independent businesses, small events, and hidden spots around Orlando.
            The team is exploring map based planning around time, budget, and interests.
          </p>
        </div>
        <span className="wild-casefile-doodle" aria-hidden="true">✳</span>
      </div>
    </section>
  );
}
