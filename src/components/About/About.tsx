import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__container">
        <div className="about__label">
          <span>ABOUT</span>
        </div>

        <div className="about__content">
          <h2 className="about__title">
            I build digital products with a focus on clarity, performance and
            user experience.
          </h2>

          <div className="about__text">
            <p>
              I'm a Full-Stack JavaScript Engineer passionate about building
              modern web and mobile applications.
            </p>

            <p>
              My main stack includes React, React Native, Node.js and
              TypeScript. I enjoy working across the entire product, from
              interface and user experience to APIs and backend architecture.
            </p>

            <p>
              I like turning ideas into useful, reliable and maintainable
              products while continuously learning and improving my craft.
            </p>
          </div>

          <div className="about__highlights">
            <div className="about__highlight">
              <strong>3</strong>
              <span>Years of experience</span>
            </div>

            <div className="about__highlight">
              <strong>Web</strong>
              <span>Development</span>
            </div>

            <div className="about__highlight">
              <strong>Mobile</strong>
              <span>React Native</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;