import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/home.css";

import twoCatsImg from "../assets/images/two-cats.jpg";
import astroloveImg from "../assets/images/astrolove.jpg";
import stickerImg from "../assets/assets/project10.png";
import exerciseAppImg from "../assets/images/exercise-app.jpg";

function Home() {
  const featuredWork = [
    {
      image: astroloveImg,
      title: "Astrolove",
      type: "UI Design",
      link: "/projects",
    },
    {
      image: stickerImg,
      title: "Sticker Commission",
      type: "Illustration",
      link: "/artwork",
    },
    {
      image: exerciseAppImg,
      title: "Exercise App",
      type: "React Native",
      link: "/projects",
    },
  ];

  return (
    <section className="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="home-text">
          <p className="eyebrow">Web • Branding • Art & Illustration</p>
          <h1>Hi, I’m Niah.</h1>
          <p className="intro">
            <p className="intro">
  I’m a digital media designer focused on web design, branding,
  interactive storytelling, and visual art. My work combines
  technology, illustration, and creative problem solving.
</p>
          </p>

         <div className="home-buttons">
            <Link to="/projects" className="btn">
              View Projects
            </Link>
            <Link to="/artwork" className="btn btn-outline">
              View Artwork
            </Link>
          </div>
        </div>

        <div className="home-image">
          <img src={twoCatsImg} alt="Two Cats mixed media painting" />
        </div>
      </motion.div>

      <section className="featured-work">
        <div className="featured-header">
          <p className="eyebrow">Featured Work</p>
          <h2>Recent & Relevant</h2>
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