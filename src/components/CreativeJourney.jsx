import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import buddyArt from "../assets/assets/buddy.jpg";
import oldPortfolio from "../assets/images/portfolio-v1.png";
import vglobalPost from "../assets/marketing/vgt-website-called.jpg";
import "../styles/creative-journey.css";

const chapters = [
  {
    id: "art",
    index: "01",
    tab: "The artist",
    label: "Drawn to creating",
    title: "It started with making things.",
    copy: "Drawing, painting, and illustration taught me to look closely at colors, shapes, textures, and the little details that make something feel personal.",
    detail: "Painting · Illustration · Visual storytelling",
    image: buddyArt,
    alt: "An original animal painting from Niah's artwork collection",
    color: "#eee7d3",
    link: "/artwork",
    linkText: "Explore my artwork",
    handwritten: "always an artist ♡",
  },
  {
    id: "web",
    index: "02",
    tab: "The builder",
    label: "Making it interactive",
    title: "Then I wanted people to explore my ideas.",
    copy: "Studying Digital Media at UCF brought together my love of design and technology. I build interfaces and interactive experiences, thinking about both the feeling of a website and how people actually use it.",
    detail: "React · Figma · Accessible interfaces",
image: oldPortfolio,
alt: "Screenshot of Niah's original web design portfolio",
    color: "#dce7d8",
    link: "/projects",
    linkText: "Explore Web & UI/UX",
    handwritten: "ideas into experiences ✳",
  },
  {
    id: "marketing",
    index: "03",
    tab: "The storyteller",
    label: "Connecting with people",
    title: "Now I bring those ideas to an audience.",
    copy: "Through social content, brand communication, and digital marketing, I've learned to adapt my creative decisions to different brands while keeping the message clear and engaging.",
    detail: "Social media · Campaign design · Digital strategy",
    image: vglobalPost,
    alt: "VGlobalTech Your Website Called social media graphic",
    color: "#f1ddcf",
    link: "/marketing",
    linkText: "Explore my marketing",
    handwritten: "still growing ↗",
  },
];

export default function CreativeJourney() {
  const [frontIndex, setFrontIndex] = useState(0);
  const [moving, setMoving] = useState(false);
  const stageRef = useRef(null);
  const active = chapters[frontIndex];

  function shuffle() {
    if (moving) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFrontIndex((index) => (index + 1) % chapters.length);
    } else {
      setMoving(true);
    }
  }

  function finishShuffle(event) {
    if (event.target !== event.currentTarget ||
        event.animationName !== "niah-journey-to-back") return;
    setFrontIndex((index) => (index + 1) % chapters.length);
    setMoving(false);
  }

  function handleMouseMove(event) {
    if (event.pointerType === "touch" || !stageRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = stageRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stageRef.current.style.setProperty("--cx", `${(x * 7).toFixed(2)}px`);
    stageRef.current.style.setProperty("--cy", `${(y * 7).toFixed(2)}px`);
  }

  function resetMousePosition() {
    if (!stageRef.current) return;
    stageRef.current.style.setProperty("--cx", "0px");
    stageRef.current.style.setProperty("--cy", "0px");
  }

  return (
    <section className="niah-journey" aria-labelledby="niah-journey-title">
      <div className="niah-journey-heading">
        <span className="niah-journey-spark" aria-hidden="true">✳</span>
        <div>
          <p className="niah-journey-overline">a few pages from my story</p>
          <h2 id="niah-journey-title">How I got <em>here.</em></h2>
          <p>Click the top card to shuffle it underneath. Every piece of my work grew from what came before it.</p>
        </div>
      </div>

      <div className="niah-journey-layout">
        <div className="niah-journey-pocket" ref={stageRef} onPointerMove={handleMouseMove} onPointerLeave={resetMousePosition}>
          <div className="niah-journey-pocket-label" aria-hidden="true">NIAH'S LITTLE COLLECTION ♡</div>
          <div className="niah-journey-cards" role="group" aria-label="Choose a chapter from my creative journey">
            {chapters.map((chapter, i) => {
              const relative = (i - frontIndex + chapters.length) % chapters.length;
              const selected = relative === 0;
              return (
                <button
                  key={chapter.id}
                  type="button"
                  className={`niah-journey-card ${selected ? "is-selected" : ""} ${selected && moving ? "is-shuffling" : ""}`}
                  style={{
                    "--paper": chapter.color,
                    "--card-depth": relative,
                    zIndex: selected ? 10 : 8 - relative,
                  }}
                  aria-pressed={selected}
                  aria-hidden={!selected}
                  tabIndex={selected ? 0 : -1}
                  disabled={moving || !selected}
                  aria-label={selected ? `Move ${chapter.tab} to the bottom of the stack to reveal the next chapter` : undefined}
                  onClick={selected ? shuffle : undefined}
                  onAnimationEnd={selected ? finishShuffle : undefined}
                >
                  <span className="niah-journey-card-number">{chapter.index} / 03</span>
                  <span className="niah-journey-card-photo"><img src={chapter.image} alt="" loading="lazy" /></span>
                  <span className="niah-journey-card-name">{chapter.tab}</span>
                  <span className="niah-journey-card-tape" aria-hidden="true" />
                </button>
              );
            })}
          </div>
          <span className="niah-journey-doodle" aria-hidden="true">↗<small>click to shuffle!</small></span>
        </div>

        <div className="niah-journey-letter" key={active.id} aria-live="polite" aria-atomic="true">
          <div className="niah-journey-letter-top"><span>FILE NO. {active.index}</span><span>♡ NIAH SAGE</span></div>
          <p className="niah-journey-kicker">{active.label}</p>
          <h3>{active.title}</h3>
          <p className="niah-journey-description">{active.copy}</p>
          <p className="niah-journey-tags">{active.detail}</p>
          <Link to={active.link} className="niah-journey-link">{active.linkText} <span aria-hidden="true">↗</span></Link>
          <div className="niah-journey-letter-bottom"><span aria-hidden="true">✿</span><span>{active.handwritten}</span></div>
        </div>
      </div>
    </section>
  );
}
