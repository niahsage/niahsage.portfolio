
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import MarketingShowcase from "../components/MarketingShowcase";
import ArtworkShowcase from "../components/ArtworkShowcase";
import TableBeforeAfter from "../components/TableBeforeAfter";
import FlowerPhotoAlbum from "../components/FlowerPhotoAlbum";
import "../styles/home.css";
import WebShowcase from "../components/WebShowcase";
import InteractiveDesk from "../components/InteractiveDesk";
import ScrollReveals from "../components/ScrollReveals";
import BotanicalSeam from "../components/BotanicalSeam";
import greeceImg from "../assets/images/greece.jpg";
import portraitImg from "../assets/images/about.jpg";
import astroloveImg from "../assets/images/astrolove.jpg";
import exerciseAppImg from "../assets/images/exercise-app.jpg";
import buddyImg from "../assets/assets/buddy.jpg";
import stickerImg from "../assets/assets/project10.png";
import lightImg from "../assets/images/light.jpg";
import "../styles/home-finale.css";

const featuredProjects = [
  {
    title: "AstroLove",
    category: "UI/UX Design",
    description:
      "A cosmic dating app concept exploring connection, compatibility, and intuitive design.",
    image: astroloveImg,
    alt: "Preview of the AstroLove app concept",
    url: "https://niahsage.github.io/astrolove/",
    external: true,
    style: "lavender",
  },
  {
    title: "Move Better",
    category: "React Native",
    description:
      "A fitness tracking experience designed to make everyday movement approachable.",
    image: exerciseAppImg,
    alt: "Preview of the exercise tracking application",
    url: "https://niahsage.github.io/react-native-exercise-app/",
    external: true,
    style: "sage",
  },
  {
    title: "Pet Portraits",
    category: "Illustration",
    description:
      "Expressive artwork inspired by the personalities of the animals we love.",
    image: buddyImg,
    alt: "Pet portrait artwork",
    url: "/artwork",
    external: false,
    style: "peach",
  },
  {
    title: "Sticker Illustrations",
    category: "Artwork",
    description:
      "Playful original illustrations inspired by nature, spirituality, and curiosity.",
    image: stickerImg,
    alt: "Original illustrated sticker design",
    url: "/artwork",
    external: false,
    style: "butter",
  },
  {
    title: "LIGHT",
    category: "Interactive Story",
    description:
      "An interactive narrative exploring choices, consequences, and finding your way.",
    image: lightImg,
    alt: "Artwork from the interactive story LIGHT",
    url: "https://niahsage.itch.io/light",
    external: true,
    style: "rose",
  },
];

function FeaturedCard({ project, index }) {
  const content = (
    <>
      <div className="studio-project-image">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
        />
      </div>

      <div className="studio-project-info">
        <span className="studio-project-number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>

        <p className="studio-project-category">
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <span className="studio-project-more" aria-hidden="true">
          Explore project ↗
        </span>
      </div>
    </>
  );

  const className =
    `studio-project-card project-${project.style}`;

  if (project.external) {
    return (
      <a
        className={className}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title}, ${project.category}. Opens in a new tab`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={className} to={project.url}>
      {content}
    </Link>
  );
}

function Laptop() {
  return (
    <Link
      to="/projects"
      className="studio-object studio-laptop"
      aria-label="Explore Web and UI/UX projects"
    >
      <span className="studio-laptop-art" aria-hidden="true">
        <span className="studio-laptop-screen">
          <span className="studio-screen-toolbar">
            <span className="studio-screen-dots">
              <i />
              <i />
              <i />
            </span>
            <span>niahsage.com</span>
          </span>

          <span className="studio-screen-content">
            <span className="studio-screen-sun">☼</span>
            <span className="studio-screen-eyebrow">
              THE DIGITAL STUDIO
            </span>
            <span className="studio-screen-heading">
              Made with
              <br />
              intention.
            </span>
            <span className="studio-screen-button">
              View projects ↗
            </span>
          </span>
        </span>

        <span className="studio-laptop-keyboard">
          <span className="studio-keyboard-lines" />
          <span className="studio-trackpad" />
        </span>
      </span>

      <span className="studio-object-label laptop-label">
        <span className="studio-object-label-small">
          01 / THE DIGITAL SIDE
        </span>
        <strong>Web & UI/UX ↗</strong>
      </span>
    </Link>
  );
}

function MarketingFolder() {
  return (
    <Link
      to="/marketing"
      className="studio-object studio-marketing"
      aria-label="Explore marketing campaigns and social media work"
    >
      <span className="studio-folder-art" aria-hidden="true">
        <span className="studio-folder-back" />

        <span className="studio-campaign-sheet sheet-one">
          <span className="campaign-sheet-top">
            SOCIAL / DIGITAL
          </span>
          <span className="campaign-sheet-shape">✳</span>
          <span className="campaign-sheet-lines">
            <i />
            <i />
            <i />
          </span>
        </span>

        <span className="studio-campaign-sheet sheet-two">
          <span className="campaign-sheet-top">
            CREATIVE IDEAS
          </span>
          <span className="campaign-sheet-heart">♡</span>
        </span>

        <span className="studio-folder-front">
          <span className="folder-front-title">
            FROM
            <br />
            THE
            <br />
            SOCIALS
          </span>
          <span className="folder-front-symbol">✳</span>
        </span>
      </span>

      <span className="studio-object-label folder-label">
        <span className="studio-object-label-small">
          02 / IDEAS IN MOTION
        </span>
        <strong>Marketing ↗</strong>
      </span>
    </Link>
  );
}

function ArtSketchbook() {
  return (
    <Link
      to="/artwork"
      className="studio-object studio-artwork"
      aria-label="Explore paintings, illustrations, and artwork"
    >
      <span className="studio-book-art" aria-hidden="true">
        <span className="studio-book-left">
          <span className="studio-book-heading">
            little things
            <br />
            I've made
          </span>

          <span className="studio-book-flower">✿</span>

          <span className="studio-book-note">
            sketches
            <br />
             & ideas
          </span>
        </span>

        <span className="studio-book-spine" />

        <span className="studio-book-right">
          <span className="studio-book-artwork">
            <img src={stickerImg} alt="" loading="lazy" />
          </span>

          <span className="studio-book-caption">
            a collection of work ♡
          </span>
        </span>
      </span>

      <span className="studio-object-label book-label">
        <span className="studio-object-label-small">
          03 / THE ARTISTIC SIDE
        </span>
        <strong>Artwork ↗</strong>
      </span>
    </Link>
  );
}

function PortraitPolaroid() {
  return (
    <Link
      to="/about"
      className="studio-object studio-polaroid"
      aria-label="Get to know Niah"
    >
      <span className="studio-polaroid-art">
        <span className="studio-polaroid-photo">
          <img
            src={portraitImg}
            alt=""
            loading="lazy"
          />
        </span>

        <span className="studio-polaroid-writing">
          that's me! ♡
        </span>
      </span>

      <span className="studio-object-label polaroid-label">
        <span className="studio-object-label-small">
          04 / THE PERSON BEHIND IT
        </span>
        <strong>About Me ↗</strong>
      </span>
    </Link>
  );
}

function ContactEnvelope() {
  return (
    <Link
      to="/contact"
      className="studio-object studio-envelope"
      aria-label="Visit my contact page"
    >
      <span className="studio-envelope-art" aria-hidden="true">
        <span className="studio-envelope-letter">
          <span>dear you,</span>
          <span>let's create</span>
          <span>something ♡</span>
        </span>

        <span className="studio-envelope-body">
          <span className="studio-envelope-flap" />
          <span className="studio-envelope-seal">✿</span>
        </span>
      </span>

      <span className="studio-object-label envelope-label">
        <span className="studio-object-label-small">
          05 / A LITTLE HELLO
        </span>
        <strong>Contact ↗</strong>
      </span>
    </Link>
  );
}

function CreativeDesk() {
  return (
    <section
      className="studio-hero"
      aria-labelledby="studio-title"
    >
      <div className="studio-heading">
        <div className="studio-heading-copy">
          <p className="studio-kicker">
            <span aria-hidden="true">✳</span>
            WELCOME TO MY LITTLE CORNER
          </p>

          <h1 id="studio-title">
            Niah's
            <br />
            <em>Creative Desk.</em>
          </h1>

          <p className="studio-intro">
            Hi, I'm Niah! Designer, developer,
            digital marketer, and artist.
            Take a look around and see what
            I've been making.
          </p>
        </div>

        <div className="studio-heading-aside">
          <span className="studio-aside-sparkle" aria-hidden="true">
            ✦
          </span>
          <p>
            A little bit of
            <br />
            everything,
            <br />
            made with love.
          </p>
          <span className="studio-aside-arrow" aria-hidden="true">
            
          </span>
        </div>
      </div>

      <div className="studio-desk">
        <span
          className="studio-desk-grain"
          aria-hidden="true"
        />

        <span
          className="studio-desk-paper"
          aria-hidden="true"
        />

        <span
          className="studio-desk-washi washi-one"
          aria-hidden="true"
        />

        <span
          className="studio-desk-washi washi-two"
          aria-hidden="true"
        />

        <span
          className="studio-desk-sun"
          aria-hidden="true"
        >
          ☼
        </span>

        <span
          className="studio-desk-pencil"
          aria-hidden="true"
        />

        <span
          className="studio-desk-note"
          aria-hidden="true"
        >
          currently
          <br />
          creating...
          <span>♡</span>
        </span>

        <Laptop />
        <MarketingFolder />
        <ArtSketchbook />
        <PortraitPolaroid />
        <ContactEnvelope />
      </div>

      <div className="studio-desk-footer">
        <p>
          <span aria-hidden="true">✳ </span>
          Little corners of my creative world.
          Choose something to explore.
        </p>

        <a href="#selected-work">
          Or browse below ↓
        </a>
      </div>
    </section>
  );
}

function Home() {
  const reduceMotion = useReducedMotion();

return (
  <main id="main-content" className="home studio-home">
    <ScrollReveals />
    <InteractiveDesk />

    <WebShowcase />

    <BotanicalSeam kind="hanging" />

    <MarketingShowcase />

    <BotanicalSeam kind="orange" />

    <ArtworkShowcase />

    <TableBeforeAfter />

    <section
      id="about"
      className="studio-about"
      aria-labelledby="studio-about-title"
    >
        <div className="studio-about-visual">
          <div className="studio-about-photo">
            <img
              src={greeceImg}
              alt="Niah outdoors in Greece"
              loading="lazy"
            />
          </div>

          <span className="studio-about-sticker" aria-hidden="true">
            artist
            <br />
            at heart ♡
          </span>

          <span className="studio-about-flower" aria-hidden="true">
            ✿
          </span>
        </div>

        <div className="studio-about-copy">
          <p className="studio-section-eyebrow">
            A POSTCARD FROM ME / 02
          </p>

          <h2 id="studio-about-title">
            A maker of
            <br />
            <em>many things.</em>
          </h2>
          <p className="studio-about-handnote">part artist, part designer, always growing ♡</p>

          <p>
            I've always loved finding new ways
            to create. Whether it's
            designing a website, creating social media posts,
            painting a portrait, or dreaming up
            an entirely new idea.
          </p>

          <p>
            My favorite work lives somewhere
            between art, technology, and
            thoughtful design. I want everything
            I make to feel personal, expressive,
            and accessible.
          </p>

          <Link to="/about" className="studio-about-link">
            A little more about me ↗
          </Link>
        </div>
      </section>

      <FlowerPhotoAlbum />

<section
  id="contact"
  className="studio-goodbye"
  aria-labelledby="studio-goodbye-title"
>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
          }}
        >
          <span className="studio-goodbye-star" aria-hidden="true">✳</span>
          <p className="studio-goodbye-eyebrow">ONE LAST NOTE / 05</p>
          <h2 id="studio-goodbye-title">Thanks for <em>stopping by.</em></h2>
          <p className="studio-goodbye-message">
            Every idea begins somewhere. Thanks for viewing some of mine.
            Have something in mind? I'd love to hear about it.
          </p>
          <div className="studio-goodbye-actions">
            <Link to="/contact" className="studio-goodbye-button">Leave me a note <span aria-hidden="true">↗</span></Link>
            <button
              type="button"
              className="studio-goodbye-return"
              onClick={() => document.getElementById("interactive-desk")?.scrollIntoView({
                behavior: reduceMotion ? "auto" : "smooth",
                block: "start",
              })}
            >
              ↖ Back to the desk
            </button>
          </div>
          <span className="studio-goodbye-signature">built with a passion for growth ♡</span>
        </motion.div>
      </section>
    </main>
  );
}

export default Home;
