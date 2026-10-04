import { useState } from "react";
import PortfolioLightbox from "../components/PortfolioLightbox";
import InnerPageFooter from "../components/InnerPageFooter";
import "../styles/inner-pages-upgrade.css";
import "../styles/artwork.css";
import "../styles/inner-frames-refined.css";
import { motion } from "framer-motion";
import twoCatsImg from "../assets/images/two-cats.jpg";
import blackTabbyImg from "../assets/images/black-tabby.jpg";
import huskyImg from "../assets/images/husky.jpg";
import buddyImg from "../assets/assets/buddy.jpg";
import freefallImg from "../assets/assets/project6.png";
import structureImg from "../assets/assets/project7.jpg";
import birdhouseImg from "../assets/assets/project9.png";
import stickerImg from "../assets/assets/project10.png";
import skeletonImg from "../assets/assets/project2.jpg";
import faceImg from "../assets/assets/project3.jpg";
import botanicalSketchImg from "../assets/artwork/botanical-figure-study.jpg";
import paintedDogImg from "../assets/artwork/painted-dog-portrait.jpg";
import paintedCatImg from "../assets/artwork/orange-cat-portrait.jpg";
import paintedTableImg from "../assets/artwork/botanical-table-painted.jpg";
import tableBeforeImg from "../assets/artwork/botanical-table-before.jpg";


function Artwork() {
  const [filter, setFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const artworks = [
    {
      image: twoCatsImg,
      title: "Two Cats",
      description:
        "Mixed media pet portrait with expressive color, texture, and botanical details.",
      tools: "Acrylic, mixed media, animal portraiture",
    },
    {
      image: blackTabbyImg,
      title: "Black Cat and Tabby",
      description:
        "A layered pet portrait scene combining animal portraiture, environment, and abstract texture.",
      tools: "Acrylic, mixed media, composition",
    },
    {
      image: huskyImg,
      title: "Husky Portrait",
      description:
        "A stylized animal portrait focused on contrast, texture, and expressive background color.",
      tools: "Acrylic painting, portrait study",
    },
    {
      image: buddyImg,
      title: "Buddy",
      description:
        "Acrylic painting of my cat Buddy, included as part of my ongoing pet portrait work.",
      tools: "Acrylic painting, pet portrait",
    },
    {
      image: paintedDogImg,
      title: "Dog in Blue",
      description: "A painted dog portrait combining expressive color, foliage, and an everyday moment.",
      tools: "Painting, pet portrait, color",
    },
    {
      image: paintedCatImg,
      title: "Cat at Rest",
      description: "A warm orange-cat painting with layered brushwork and botanical details.",
      tools: "Painting, animal portrait, texture",
    },
    {
      image: botanicalSketchImg,
      title: "Botanical Figure Study",
      description: "A loose figure drawing with winding organic lines and decorative plant forms.",
      tools: "Figure drawing, sketching, botanical illustration",
    },
    {
      image: paintedTableImg,
      title: "Botanical Table Refresh",
      description: "A furniture painting project with detailed grape leaves, delicate vines, and layered color.",
      tools: "Furniture painting, botanical design, hand painting",
    },
    {
      image: tableBeforeImg,
      title: "Botanical Table: Earlier Stage",
      description: "A look at the same table during an earlier stage of its decorative painting process.",
      tools: "Process documentation, furniture painting",
    },
    {
      image: stickerImg,
      title: "Sticker Commission",
      description:
        "Character-based sticker illustration exploring stylized figures, accessories, and product mockups.",
      tools: "Illustration, character design, sticker design",
    },
    {
  image: skeletonImg,
  title: "Skeleton Concept 2",
  description:
    "An anatomical study exploring skeletal structure, proportion, and form.",
  tools: "Anatomy study, figure drawing",
},
{
  image: faceImg,
  title: "Facial Structure 2",
  description:
    "A facial structure study focused on proportion, planes of the face, and observational drawing.",
  tools: "Portrait study, anatomy, graphite drawing",
},
    {
      image: birdhouseImg,
      title: "Birdhouse Concept to Model",
      description:
        "A concept-to-model project showing sketching, planning, and physical design development.",
      tools: "Concept art, model making, visual development",
    },
    {
  image: structureImg,
  title: "6ft Structure & Business Cards",
  description:
    "A design project connecting physical structure concepts with branding and business card presentation.",
  tools: "Concept design, branding, presentation layout",
},
    {
      image: freefallImg,
      title: "Freefall",
      description:
        "A photo editing piece focused on mood, typography, and emotional visual storytelling.",
      tools: "Photo editing, typography, digital composition",
    },
  ];

  const works = artworks.map((art, index) => ({
    ...art,
    category: index < 6 ? "paintings" : [6, 10, 11].includes(index) ? "studies" : "objects",
  }));
  const shown = works.filter((art) => filter === "all" || art.category === filter);
return (
  <motion.main
    className="artwork-page niah-dossier"
    id="main-content"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    <section className="art-hero">
      <p className="niah-dossier__index">ART JOURNAL 03 / DRAWN, PAINTED & MADE</p>
      <h1>
        Artwork shaped by
        <br />
        <em>texture</em>, story,
        <br />
        and feeling.
      </h1>
      <p>
        A curated collection of pet portraits, illustration, concept studies,
        and visual experiments created through traditional and digital media.
      </p>
    </section>

    <div className="niah-dossier__controls" role="group" aria-label="Filter artwork">
      {[["all","Everything"],["paintings","Paintings"],["studies","Drawings & studies"],["objects","Objects & experiments"]].map(([value,label]) =>
        <button type="button" key={value} aria-pressed={filter === value}
          onClick={() => {setFilter(value);setSelectedIndex(null);}}>{label}</button>)}
    </div>
    <section className={`art-gallery${filter !== "all" ? " is-filtered" : ""}`} aria-label="Artwork collection">
      {shown.map((art, index) => (
        <article
          className={`art-piece art-piece-${index + 1}`}
          key={art.title}
        >
          <div className="art-number">
            {String(index + 1).padStart(2, "0")}
          </div>

          <button type="button" className="art-image-wrap niah-art-open"
            aria-label={`View ${art.title} full size`} onClick={() => setSelectedIndex(index)}>
            <img src={art.image} alt={art.title} loading="lazy" />
            <span aria-hidden="true" className="niah-art-open__hint">take a closer look ↗</span>
          </button>

          <div className="art-copy">
            <p className="art-type">{art.tools.split(",")[0]}</p>
            <h2>{art.title}</h2>
            <p>{art.description}</p>
            <span>{art.tools}</span>
          </div>
        </article>
      ))}
    </section>

    <PortfolioLightbox items={shown} index={selectedIndex} onChange={setSelectedIndex}
      onClose={() => setSelectedIndex(null)} label="Artwork print viewer" />
    <section className="art-cta">
      <p className="eyebrow">Creative Work</p>
    
      <a href="#/contact">Start a Project →</a>
    </section>
    <InnerPageFooter current="/artwork" />
  </motion.main>
);
}

export default Artwork;