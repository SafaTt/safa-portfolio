import "./ProjectCard.css";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-card__content">
        <span className="project-card__number">
          PROJECT {String(project.id).padStart(2, "0")}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-card__links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
          )}

          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;