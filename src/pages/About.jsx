import "../styles/about.css";
import { motion } from "framer-motion";
import greeceImg from "../assets/images/greece.jpg";

function About() {
  const skills = [
    "Web Design",
    "Front-End Development",
    "UI / App Design",
    "Brand Identity",
    "Illustration",
    "Visual Storytelling",
    "Responsive Design",
    "Creative Direction",
  ];

  const tools = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Figma",
    "Illustrator",
    "Photoshop",
    "GitHub",
    "Twine",
  ];

  return (
    <motion.main
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section className="about-hero-page">
        <div className="about-intro">
          <p className="eyebrow">More About Me</p>

          <h1>
            Designer,
            <br />
            developer,
            <br />
            and <em>artist</em>.
          </h1>

          <p>
            I’m a Digital Media student at UCF focused on web design, branding,
            illustration, and interactive experiences. I like building work that
            feels intentional, polished, and personal, from visual concepts to
            responsive front end websites.
          </p>

          <p>
            My background in art helps me approach digital work with a strong
            eye for composition, color, texture, and storytelling.
          </p>

          <div className="about-actions">
            <a href="/Niah-Sage-Resume.pdf" className="about-btn">
              Resume →
            </a>
            <a href="#/contact" className="about-btn secondary">
              Contact Me →
            </a>
          </div>
        </div>

        <div className="about-photo-wrap">
          <span className="about-sunmark">☼</span>
          <span className="about-star one">✦</span>
          <span className="about-star two">✧</span>

          <div className="about-photo-blob-page">
            <img src={greeceImg} alt="Niah in Greece" />
          </div>

          <div className="about-signature">
            <p>Niah Sage ♡</p>
            <span>Based in Orlando ☼</span>
          </div>
        </div>
      </section>

      <section className="about-details">
        <div className="about-note">
          <p className="eyebrow">What I Bring</p>
          <h2>
            Creative visuals
            <br />
            backed by clean code.
          </h2>
          <p>
            I enjoy combining design thinking, illustration, and front end
            development to create digital experiences that are easy to use,
            visually memorable, and full of personality.
          </p>
        </div>

        <div className="about-pill-section">
          <div>
            <h3>Skills</h3>
            <div className="about-pills">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <h3>Tools</h3>
            <div className="about-pills tools">
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-looking">
        <p className="eyebrow">Currently</p>
        <h2>
          Looking for creative opportunities where design and development meet.
        </h2>
        <p>
          I’m interested in internships, freelance projects, and collaborative
          work involving web design, UI design, branding, illustration, and
          front end development.
        </p>
        <a href="#/work">View My Work →</a>
      </section>
    </motion.main>
  );
}

export default About;