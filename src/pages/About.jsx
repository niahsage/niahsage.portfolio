import "../styles/about.css";
import "../styles/inner-pages-upgrade.css";
import InnerPageFooter from "../components/InnerPageFooter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AboutPhotoStack from "../components/AboutPhotoStack";
import CreativeJourney from "../components/CreativeJourney";

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
      className="about-page niah-dossier"
      id="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section className="about-hero-page">
        <div className="about-intro">
          <p className="niah-dossier__index">FIELD NOTES 04 / GET TO KNOW THE MAKER</p>

          <h1>
            Designer,
            <br />
            developer,
            <br />
            and <em>artist</em>.
          </h1>

          <h2>
            I’m a Digital Media student in my last year at UCF focused on web design, branding,
            illustration, and interactive experiences. I like building work that
            feels intentional, polished, and personal, from visual concepts to
            responsive front end websites.
          </h2>

          <p>
            <p>My background in art helps me approach digital work with a strong
            eye for composition, color, texture, and storytelling.
</p>

<p>
  I'm beyond grateful to start building a career in something I'm genuinely passionate about.
Thank you so much for taking the time to explore my little corner of the internet and get to know my work. 

I hope we get the chance to connect and create something beautiful together.
</p>
 <h3>With love,  </h3>
 <h4>Niah ♡ </h4>
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

          <AboutPhotoStack />

          <div className="about-signature">
            <p>Niah Sage ♡</p>
            <span>Based in Orlando ☼</span>
          </div>
        </div>
      </section>

      <CreativeJourney />

      <section className="about-details">
        <div className="about-note">
          <p className="eyebrow">What I Bring</p>
          <h2>
            Creative visuals
            <br />
            backed by clean code.
          </h2>
          <p>
            I enjoy combining design, illustration, and front end
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

      <section className="niah-about-souvenirs" aria-labelledby="niah-about-souvenirs-title">
        <div className="niah-about-souvenirs__title">
          <span className="niah-dossier__index">THE LITTLE THINGS / WHAT GUIDES ME</span>
          <h2 id="niah-about-souvenirs-title">Part art, part <em> constant improvement.</em></h2>
          <p>There isn't one box for what I like making. That's the fun of it.</p>
        </div>
        <div className="niah-about-souvenirs__notes">
          <Link to="/artwork"><span aria-hidden="true">✿</span><strong>Made by hand</strong><small>Painting, illustration and things that start away from a screen.</small><b>Look closer ↗</b></Link>
          <Link to="/projects"><span aria-hidden="true">⌘</span><strong>Made to explore</strong><small>Interfaces, interactive ideas and the little decisions behind them.</small><b>Open a project ↗</b></Link>
          <Link to="/marketing"><span aria-hidden="true">✳</span><strong>Made to connect</strong><small>Campaigns and creative stories for very different audiences.</small><b>Pull a file ↗</b></Link>
        </div>
      </section>
      <section className="about-looking">
        <p className="eyebrow">Currently</p>
        <h2>
          Looking for creative opportunities where design and development meet.
        </h2>
        <p>
          I’m interested in internships, freelance projects, and collaborative
          work involving web design, UI design, branding, social media, illustration, and
          front end development.
        </p>
        <a href="#/projects">View My Work →</a>
      </section>
      <InnerPageFooter current="/about" />
    </motion.main>
  );
}

export default About;