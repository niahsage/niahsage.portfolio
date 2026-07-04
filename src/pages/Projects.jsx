import { motion } from "framer-motion";
import "../styles/projects.css";

import astroloveImg from "../assets/images/astrolove.jpg";
import exerciseAppImg from "../assets/images/exercise-app.jpg";
import daylistImg from "../assets/images/daylist.jpg";
import vinylImg from "../assets/images/vinyl.jpg";
import lightImg from "../assets/images/light.jpg";

function Projects() {
  const projects = [
    {
      number: "01",
      image: astroloveImg,
      title: "AstroLove",
      type: "UI Design • Branding",
      description:
        "A cosmic dating app concept built around compatibility, connection, and a polished visual identity.",
      tools: ["Figma", "Illustrator", "UI Design", "Branding"],
      link: "https://niahsage.github.io/astrolove/",
      button: "View Live Site",
      featured: true,
    },
    {
      number: "02",
      image: exerciseAppImg,
      title: "Move Better, Every Day",
      type: "React Native App",
      description:
        "A fitness app project with interactive screens and exercise tracking features, designed to feel simple and motivating.",
      tools: ["React Native", "JavaScript", "UI Design"],
      link: "https://niahsage.github.io/react-native-exercise-app/",
      button: "View Live Site",
    },
    {
      number: "03",
      image: daylistImg,
      title: "Daylist",
      type: "Productivity App Concept",
      description:
        "A calm productivity app concept with login, task management, adding tasks, and confirmation states.",
      tools: ["UI Design", "App Design", "Branding", "Layout"],
      link: "https://niahsage.github.io/expo-todo-list/",
      button: "View Web Version",
    },
    {
      number: "04",
      image: vinylImg,
      title: "Vinyl Packaging",
      type: "Graphic Design",
      description:
        "A vinyl packaging design exploring typography, album identity, imagery, and layout.",
      tools: ["Illustrator", "Photoshop", "Packaging"],
      link: "",
      button: "",
    },
    {
      number: "05",
      image: lightImg,
      title: "LIGHT",
      type: "Interactive Narrative",
      description:
        "A short Twine story exploring choice, attention, and mood through minimal text and branching decisions.",
      tools: ["Twine", "Story Design", "Interaction"],
      link: "https://niahsage.itch.io/light",
      button: "Play Experience",
    },
  ];

  return (
    <motion.main
      className="work-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section className="work-hero">
        <span className="work-sun">☼</span>
        <p className="eyebrow">Selected Work</p>

        <h1>
          Digital experiences
          <br />
          built with <em>intention</em>.
        </h1>

        <p>
          A collection of web, app, branding, graphic design, and interactive
          projects shaped through visual storytelling, thoughtful systems, and
          front-end development.
        </p>
      </section>

      <section className="work-showcase">
        {projects.map((project, index) => (
          <article
            className={`work-project ${project.featured ? "featured" : ""} ${
              index % 2 === 1 ? "reverse" : ""
            }`}
            key={project.title}
          >
            <div className="project-number">{project.number}</div>

            <a
              className="project-image"
              href={project.link || "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              aria-label={project.title}
            >
              <img src={project.image} alt={project.title} />
            </a>

            <div className="project-copy">
              <p className="project-type">{project.type}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="tool-pills">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              {project.link && (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.button} →
                </a>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="work-cta">
        <p className="eyebrow">Next</p>
        <h2>
          Want to see the more
          <br />
          illustrative side?
        </h2>
        <a href="#/artwork">View Artwork →</a>
      </section>
    </motion.main>
  );
}

export default Projects;