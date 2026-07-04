import ProjectCard from "../components/ProjectCard";
import "../styles/artwork.css";
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

function Artwork() {
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

return (
  <motion.main
    className="artwork-page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    <section className="art-hero">
      <p className="eyebrow">Art & Illustration</p>
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

    <section className="art-gallery">
      {artworks.map((art, index) => (
        <article
          className={`art-piece art-piece-${index + 1}`}
          key={art.title}
        >
          <div className="art-number">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="art-image-wrap">
            <img src={art.image} alt={art.title} />
          </div>

          <div className="art-copy">
            <p className="art-type">{art.tools.split(",")[0]}</p>
            <h2>{art.title}</h2>
            <p>{art.description}</p>
            <span>{art.tools}</span>
          </div>
        </article>
      ))}
    </section>

    <section className="art-cta">
      <p className="eyebrow">Creative Work</p>
      <h2>
        Paint, pixels,
        <br />
        and personal details.
      </h2>
      <a href="#/contact">Start a Project →</a>
    </section>
  </motion.main>
);
}

export default Artwork;