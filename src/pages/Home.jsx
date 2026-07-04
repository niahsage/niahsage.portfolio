import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/home.css";
import greeceImg from "../assets/images/greece.jpg";
import heroImg from "../assets/images/about.jpg";
import astroloveImg from "../assets/images/astrolove.jpg";
import exerciseAppImg from "../assets/images/exercise-app.jpg";
import buddyImg from "../assets/assets/buddy.jpg";
import stickerImg from "../assets/assets/project10.png";
import lightImg from "../assets/images/light.jpg";

function Home() {
  const selectedWork = [
  {
    image: astroloveImg,
    title: "AstroLove",
    category: "UI Design",
    description:
      "A cosmic dating app concept focused on connection, compatibility, and intuitive user experience.",
    link: "https://niahsage.github.io/astrolove/",
    button: "View Case Study",
    external: true,
    className: "work-item work-astro",
  },
  {
    image: exerciseAppImg,
    title: "Move Better, Every Day",
    category: "React Native App",
    description:
      "A fitness tracking app designed to make workouts simple, motivating, and personalized.",
    link: "https://niahsage.github.io/react-native-exercise-app/",
    button: "View Project",
    external: true,
    className: "work-item work-exercise",
  },
  {
    image: buddyImg,
    title: "Pet Portrait Collection",
    category: "Traditional & Digital Art",
    description:
      "Custom paintings that celebrate the bond between pets and the people who love them.",
    link: "/artwork",
    button: "View Gallery",
    external: false,
    className: "work-item work-buddy",
  },
  {
    image: stickerImg,
    title: "Sticker Designs",
    category: "Illustration",
    description:
      "Illustrated stickers inspired by nature, spirituality, and dreamy places.",
    link: "/artwork",
    button: "View Artwork",
    external: false,
    className: "work-item work-sticker",
  },
  {
    image: lightImg,
    title: "LIGHT",
    category: "Interactive Story",
    description:
      "An interactive story about choices, consequences, and finding your way.",
    link: "https://niahsage.itch.io/light",
    button: "Play Story",
    external: true,
    className: "work-item work-light",
  },
  ];

  return (
    <main className="home">
      <section className="hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Hi, I’m Niah.</p>

          <h1>
            I design digital experiences that feel <em>human.</em>
          </h1>

          <p className="intro">
            I blend creativity and code to create thoughtful digital experiences
  that are beautiful, intuitive, and built with intention.
          </p>

          <div className="home-buttons">
            <Link to="/projects" className="btn">
              View My Work
            </Link>
            <Link to="/about" className="text-link">
              About Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <img src={heroImg} alt="Portrait of Niah McKyton" />
        </motion.div>
      </section>

      <section className="selected-work">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
    
        <h2>
  Projects built with
  <br />
  <em>creativity</em>, intention,
  <br />
  and care.
</h2>
        
        </div>

        <div className="flow-line"></div>

<div className="work-flow">
  {selectedWork.map((item) =>
    item.external ? (
      <a
        key={item.title}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={item.className}
      >
        <div className="work-image">
          <img src={item.image} alt={item.title} />
        </div>

        <div className="work-copy">
          <h3>{item.title}</h3>
          <p className="work-category">{item.category}</p>
          <p>{item.description}</p>
          <span>{item.button} →</span>
        </div>
      </a>
    ) : (
      <Link
        key={item.title}
        to={item.link}
        className={item.className}
      >
        <div className="work-image">
          <img src={item.image} alt={item.title} />
        </div>

        <div className="work-copy">
          <h3>{item.title}</h3>
          <p className="work-category">{item.category}</p>
          <p>{item.description}</p>
          <span>{item.button} →</span>
        </div>
      </Link>
    )
  )}
</div>
      </section>

      <section className="what-i-do">
        <p className="eyebrow">What I Do</p>

        <div className="do-grid">
          <div className="do-card">
            <span>1.</span>
            <h3>Illustration</h3>
            <p>Original illustrations that tell stories, evoke feeling, and bring ideas to life.</p>
          </div>

          <div className="do-card">
            <span>2.</span>
            <h3>Brand Identity</h3>
            <p>Thoughtful branding that captures essence and creates lasting connection.</p>
          </div>

          <div className="do-card">
            <span>3.</span>
            <h3>Web Design & Development</h3>
            <p>Clean, responsive websites built with functionality and a human touch.</p>
          </div>
        </div>
      </section>

<section className="about-preview">
  <div className="about-copy">
    <p className="eyebrow">A Little About Me</p>
    <h2>
      Designer,
      <br />
      developer,
      <br />
      and artist.
    </h2>

    <p>
      I'm a digital media designer with a background in art and a passion for
      creating experiences that feel thoughtful and personal. I enjoy combining
      design, illustration, and front end development to build work that's both
      beautiful and functional.
    </p>

    <p>
      Outside of work, you'll usually find me painting, exploring new places,
      or relaxing with my cat, Buddy.
    </p>

    <Link to="/about" className="text-link about-button">
      Get to Know Me →
    </Link>
  </div>

  <div className="about-visual">
    <span className="about-sun">☼</span>
    <span className="about-sparkle sparkle-one">✦</span>
    <span className="about-sparkle sparkle-two">✧</span>

    <div className="about-photo-blob">
      <img src={greeceImg} alt="Niah in Greece" />
    </div>

    <div className="signature-card">
      <p>Niah Sage ♡</p>
      <span>Based in Orlando ☼</span>
    </div>

    <span className="paint-brush">⌇</span>
  </div>
</section>
    </main>
  );
}

export default Home;