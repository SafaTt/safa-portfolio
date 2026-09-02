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
              I turn ideas into reliable web and mobile products.
            </h2>

            <div className="about__text">
              <p>
                I'm a Full-Stack JavaScript Engineer with hands-on experience
                building and delivering production web and mobile applications.
              </p>

              <p>
                I work across the product, from React and React Native
                interfaces to Node.js APIs, backend services, real-time
                features, and deployment workflows.
              </p>

              <p>
                I care about building products that are clear, performant,
                maintainable, and genuinely useful to the people who use them.
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

          <div className="about__highlights">
            <div className="about__highlight">
              <strong>2+</strong>
              <span>Years of experience</span>
            </div>

            <div className="about__highlight">
              <strong>3+</strong>
              <span>Production products delivered</span>
            </div>

            <div className="about__highlight">
              <strong>Full-Stack</strong>
              <span>From interface to backend</span>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default About;
