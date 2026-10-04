import { motion } from "framer-motion";
import { useState } from "react";
import PortfolioLightbox from "../components/PortfolioLightbox";
import InnerPageFooter from "../components/InnerPageFooter";
import "../styles/inner-pages-upgrade.css";
import "../styles/projects.css";
import "../styles/inner-frames-refined.css";
import WildPrototype from "../components/WildPrototype";

import astroloveImg from "../assets/images/astrolove.jpg";
import oldPortfolioImg from "../assets/images/portfolio-v1.png";
import exerciseAppImg from "../assets/images/exercise-app.jpg";
import daylistImg from "../assets/images/daylist.jpg";
import vinylImg from "../assets/images/vinyl.jpg";
import lightImg from "../assets/images/light.jpg";

function Projects() {
  const [category, setCategory] = useState("all");
  const [previewIndex, setPreviewIndex] = useState(null);
  const projects = [
    {
      category: "web",
      number: "01",
      image: oldPortfolioImg,
      title: "Old Portfolio",
      type: "Web Design • Frontend Development",
      description:
        "My earlier portfolio site, now part of the story of how my visual and frontend work has grown.",
      tools: ["Web Design", "Frontend", "Responsive Layout"],
      link: "https://niahsage.github.io/portfolio.v2/",
      button: "View Original Portfolio",
      featured: true,
    },
    {
      category: "web",
      number: "02",
      image: astroloveImg,
      title: "AstroLove",
      type: "UI Design • Branding",
      description:
        "A cosmic dating app concept built around compatibility, connection, and a distinct visual identity.",
      tools: ["Figma", "Illustrator", "UI Design", "Branding"],
      link: "https://niahsage.github.io/astrolove/",
      button: "View Live Site",
    },
    {
      category: "web",
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
      category: "design",
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
      category: "interactive",
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

  const visibleProjects = projects.filter((project) => category === "all" || project.category === category);
  return (
    <motion.main
      className="work-page niah-dossier"
      id="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section className="work-hero">
        <span className="work-sun">☼</span>
<p className="niah-dossier__index">CASE FILE 01 / WEB, UI & EXPERIMENTS</p>

        <h1>
          Digital experiences
          <br />
          built with <em>intention</em>.
        </h1>

        <p>
          A collection of web, branding, design, and interactive
          projects shaped through visual storytelling, thoughtful systems, and
          front end development.
        </p>
      </section>

      <div className="niah-dossier__controls" role="group" aria-label="Filter projects">
        {[
          ["all", "All projects"],
          ["web", "Web & apps"],
          ["design", "Visual design"],
          ["interactive", "Interactive stories"],
        ].map(([key, text]) => <button type="button" key={key}
          aria-pressed={category === key}
          onClick={() => { setCategory(key); setPreviewIndex(null); }}>{text}</button>)}
      </div>
      <section className={`work-showcase${category !== "all" ? " is-filtered" : ""}`} aria-label="Selected projects">
        {visibleProjects.map((project, index) => (
          <article
            className={`work-project ${project.featured ? "featured" : ""} ${
              index % 2 === 1 ? "reverse" : ""
            }`}
            key={project.title}
          >
            <div className="project-number">{project.number}</div>

            <button type="button" className="project-image niah-project-preview"
              aria-label={`Enlarge ${project.title} preview`}
              onClick={() => setPreviewIndex(index)}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <span className="niah-project-preview__label" aria-hidden="true">click to look closer ↗</span>
            </button>

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

      <PortfolioLightbox items={visibleProjects} index={previewIndex}
        onChange={setPreviewIndex} onClose={() => setPreviewIndex(null)}
        label="Web and design project preview" />
      <WildPrototype />

      <section className="work-cta">
        <p className="eyebrow">Next</p>
        <h2>
          Want to see the more
          <br />
          illustrative side?
        </h2>
        <a href="#/artwork">View Artwork →</a>
      </section>
      <InnerPageFooter current="/projects" />
    </motion.main>
  );
}

export default Projects;