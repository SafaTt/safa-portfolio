import "./ProjectCard.css";

interface Project {
  id: number;
  title: string;
  description: string;
  contribution: string;
  technologies: string[];
  image: string;
  linkLabel?: string;
  linkUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`project-card`}
    >
      <div className="project-card__image">
        <img
          src={project.image}
          alt={`${project.title} project`}
          width="1920"
          height="1080"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__number">
            {String(project.id).padStart(2, "0")}
          </span>

          <span className="project-card__contribution">
            {project.contribution}
          </span>
        </div>

        <h3>{project.title}</h3>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {project.linkUrl && project.linkLabel && (
          <div className="project-card__links">
            <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">
              {project.linkLabel} ↗
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
