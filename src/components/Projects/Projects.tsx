import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import demoImg from "../../assets/Projects/demoImg.png";

const projects = [
  {
    id: 1,
    title: "Project One",
    description:
      "A mobile application designed to help users organize their day at their own pace.",
    technologies: ["React Native", "Expo", "TypeScript"],
    image: demoImg,
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "A modern web application focused on providing a simple and intuitive user experience.",
    technologies: ["React", "TypeScript", "Node.js"],
    image: demoImg,
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A full-stack application built around a practical business use case.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: demoImg,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <span className="projects__label">PROJECTS</span>

          <h2>Selected work</h2>
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