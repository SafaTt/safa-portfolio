import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__container">
        <div className="about__label">
          <span>ABOUT</span>
        </div>

        <div className="about__content">
          <div className="about__intro">
            <h2 className="about__title">
              I build products from idea to production.
            </h2>

            <div className="about__text">
              <p>
                I'm a Full-Stack JavaScript Engineer with 3 years of hands-on
                experience building web and mobile applications for real-world
                use.
              </p>

              <p>
                I work across the full product lifecycle, from understanding
                requirements and designing the architecture to building
                interfaces, APIs, real-time features, testing, deployment, and
                maintenance.
              </p>

              <p>
                What matters to me is not just writing code, but building
                software that is reliable, maintainable, and useful to the
                people who use it.
              </p>
            </div>
          </div>

          <div className="about__stack">
            <span>React</span>
            <span>React Native</span>
            <span>Node.js</span>
            <span>TypeScript</span>
            <span>REST APIs</span>
            <span>WebSockets</span>
            <span>MongoDB</span>
            <span>CI/CD</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;