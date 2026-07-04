import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/home.css";

import heroImg from "../assets/images/about.jpg";
import astroloveImg from "../assets/images/astrolove.jpg";
import buddyImg from "../assets/assets/buddy.jpg";
import stickerImg from "../assets/assets/project10.png";
import twoCatsImg from "../assets/images/two-cats.jpg";

function Home() {
  const selectedWork = [
    {
      image: astroloveImg,
      title: "Astrolove",
      type: "UI Design • Branding",
      link: "/projects",
      className: "work-card large",
    },
    {
      image: buddyImg,
      title: "Buddy",
      type: "Pet Portrait • Acrylic",
      link: "/artwork",
      className: "work-card tall",
    },
    {
      image: twoCatsImg,
      title: "Two Cats",
      type: "Mixed Media Painting",
      link: "/artwork",
      className: "work-card wide",
    },
    {
      image: stickerImg,
      title: "Sticker Commission",
      type: "Illustration • Mockup",
      link: "/artwork",
      className: "work-card small",
    },
  ];

  return (
    <main className="home">
      <section className="hero-studio">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Web Design • Branding • Illustration • Front-End</p>

          <h1>
            Building digital worlds that feel human.
          </h1>

          <p className="intro">
            I’m Niah McKyton, a digital media designer creating websites,
            brand identities, illustrations, and interactive experiences rooted
            in warmth, storytelling, and thoughtful design.
          </p>

          <div className="home-buttons">
            <Link to="/projects" className="btn">
              View Design Work
            </Link>
            <Link to="/artwork" className="btn btn-outline">
              View Artwork
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-collage"
          initial={{ opacity: 0, scale: 0.96, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="glass-panel panel-one"></span>
          <span className="glass-panel panel-two"></span>
          <span className="glass-panel panel-three"></span>

          <img src={heroImg} alt="Portrait of Niah McKyton" />

          <div className="floating-label label-one">designer</div>
          <div className="floating-label label-two">artist</div>
          <div className="floating-label label-three">developer</div>
        </motion.div>
      </section>

      <section className="statement-section">
        <p className="statement-kicker">Creative Direction</p>
        <h2>
          I create thoughtful digital experiences inspired by human stories,
          handmade art, and the natural world.
        </h2>
      </section>

      <section className="selected-work">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Recent work across art, design, and code.</h2>
        </div>

        <div className="work-collage">
          {selectedWork.map((item, index) => (
            <Link to={item.link} className={item.className} key={index}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="create-section">
        <div className="create-card">
          <span>01</span>
          <h3>Web Design</h3>
          <p>
            Responsive websites with expressive visuals, clean structure, and
            thoughtful user flow.
          </p>
        </div>

        <div className="create-card">
          <span>02</span>
          <h3>Brand Identity</h3>
          <p>
            Color systems, typography, logos, and visual storytelling for
            memorable brands.
          </p>
        </div>

        <div className="create-card">
          <span>03</span>
          <h3>Illustration</h3>
          <p>
            Pet portraits, character work, and custom visuals with personality
            and warmth.
          </p>
        </div>
      </section>

      <section className="home-cta">
        <p className="eyebrow">Let’s Work Together</p>
        <h2>Have a story that needs a beautiful place to live?</h2>
        <Link to="/contact" className="btn">
          Contact Me
        </Link>
      </section>
    </main>
  );
}

export default Home;