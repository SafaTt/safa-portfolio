import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";

import clictoeatImg from "../../assets/Projects/clictoeat.png";
import coachupImg from "../../assets/Projects/coachup.png";
import clicclaimImg from "../../assets/Projects/cliclaim.png";
import rugbyappImg from "../../assets/Projects/rugbyapp.png";

const projects = [
  {
    id: 1,
    title: "ClicToEat",
    description:
      "Restaurant management and ordering platform built for real-world business operations.",
    contribution: "Full-Stack Web Development",
    technologies: ["React", "Node.js", "JavaScript", "MongoDB"],
    image: clictoeatImg,
    linkLabel: "View live",
    linkUrl: "https://clictoeat.com",
  },
  {
    id: 2,
    title: "CoachUp",
    description:
      "Educational mobile application designed for multilingual and offline learning experiences.",
    contribution: "Mobile Development",
    technologies: ["React Native", "TypeScript", "Expo"],
    image: coachupImg,
    linkLabel: "Google Play",
    linkUrl:
      "https://play.google.com/store/apps/details?id=org.trickleup.coachup&pcampaignid=web_share",
  },
  {
    id: 3,
    title: "CliClaim",
    description:
      "Mobile application for managing institutional claims and related workflows.",
    contribution: "Mobile & Backend Development",
    technologies: ["React Native", "Node.js", "Nest.js"],
    image: clicclaimImg,
    linkLabel: "Google Play",
    linkUrl:
      "https://play.google.com/store/apps/details?id=com.CliClaim.Client&hl=fr",
  },
  {
    id: 4,
    title: "RugbyApp",
    description:
      "Real-time mobile application built around interactive sports experiences.",
    contribution: "Full-Stack Development",
    technologies: ["React Native", "Node.js", "WebSockets"],
    image: rugbyappImg,
    linkLabel: "View demo",
    linkUrl: "https://drive.google.com/file/d/1gWuA2EBJdhfbx7kJmMV9TUbYodGo-0lY/view?usp=sharing",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <span className="projects__label">PROJECTS</span>

          <div className="projects__heading">
            <h2>Selected work</h2>

            <p>
              A selection of web and mobile products I've contributed to across
              different domains and technologies.
            </p>
          </div>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
