import "../styles/about.css";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="about-image">
        <img src={aboutImage} alt="Creative work by Niah Mckyton" />
      </div>

      <div className="about-text">
        <h2>About Me</h2>
        <p>
        I'm a Digital Media student at UCF with a focus on web design, branding, illustration, and interactive experiences. My work ranges from React applications and UI design to traditional painting, pet portraiture, and visual storytelling.
        </p>

        <h3>Skills</h3>
        <ul>
          <li>Web Design</li>
          <li>Front-End Development</li>
          <li>Branding & Visual Design</li>
          <li>UI / App Design</li>
          <li>Interactive Storytelling</li>
          <li>Illustration & Traditional Media</li>
        </ul>

        <h3>Tools</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>Figma</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Twine</li>
        </ul>
      </div>
    </motion.section>
  );
}

export default About;