import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/home.css";

import heroImg from "../assets/images/about.jpg";
import astroloveImg from "../assets/images/astrolove.jpg";
import buddyImg from "../assets/assets/buddy.jpg";
import stickerImg from "../assets/assets/project10.png";
import exerciseAppImg from "../assets/images/exercise-app.jpg";

function Home() {
  const featuredWork = [
    {
      image: buddyImg,
      title: "Buddy",
      type: "Pet Portrait",
      link: "/artwork",
    },
    {
      image: astroloveImg,
      title: "Astrolove",
      type: "UI Design",
      link: "/projects",
    },
    {
      image: exerciseAppImg,
      title: "Exercise App",
      type: "React Native",
      link: "/projects",
    },
    {
      image: stickerImg,
      title: "Sticker Commission",
      type: "Illustration",
      link: "/artwork",
    },
  ];

  return (
    <section className="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="home-text">
          <p className="eyebrow">
            Web Design • Branding • Illustration • Front-End
          </p>

          <h1>Creating digital spaces that feel warm, human, and memorable.</h1>

          <p className="intro">
            I’m Niah McKyton, a digital media designer blending web design,
            branding, illustration, and front-end development to build
            story-driven work with personality and purpose.
          </p>

          <div className="home-buttons">
            <Link to="/projects" className="btn">
              View Design Work
            </Link>
            <Link to="/artwork" className="btn btn-outline">
              View Artwork
            </Link>
          </div>
        </div>

        <div className="home-portrait">
          <div className="portrait-glass glass-one"></div>
          <div className="portrait-glass glass-two"></div>
          <div className="portrait-glass glass-three"></div>
          <img src={heroImg} alt="Portrait of Niah McKyton" />
        </div>
      </motion.div>

      <section className="featured-work">
        <div className="featured-header">
          <p className="eyebrow">Selected Work</p>
          <h2>Recent pieces across art, design, and code.</h2>
        </div>

        <div className="featured-grid">
          {featuredWork.map((item, index) => (
            <Link to={item.link} className="featured-card" key={index}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Home;