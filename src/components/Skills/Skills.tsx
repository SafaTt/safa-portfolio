import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "React Native", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Nest.js", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "Docker", "Agile"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills__header">
          <span className="skills__eyebrow">SKILLS</span>

          <h2 className="skills__title">What I work with</h2>
        </div>

        <div className="skills__list">
          {skillGroups.map((group, index) => (
            <div className="skills__group" key={group.title}>
              <span className="skills__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="skills__group-title">{group.title}</h3>

              <div className="skills__items">
                {group.skills.map((skill) => (
                  <span className="skills__item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;