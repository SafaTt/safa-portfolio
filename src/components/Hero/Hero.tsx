import "./Hero.css";
import safaImage from "../../assets/Hero/safaImg.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">FULL-STACK JAVASCRIPT ENGINEER</p>

          <h1 className="hero__title">
            Building software that gets used.
          </h1>

          <p className="hero__description">
            Full-stack engineer with 3 years of experience building and
            shipping production web & mobile applications with React,
            React Native and Node.js.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__button">
              Let's collaborate
              <span className="hero__button-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>

            <div className="hero__stat">
              <strong>150+</strong>
              <span>Google Play Downloads</span>
            </div>

            <div className="hero__stat">
              <strong>2</strong>
              <span>Countries</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src={safaImage}
            alt="Safa Touil"
            width="444"
            height="561"
            className="hero__image"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;