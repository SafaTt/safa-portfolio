import "./Hero.css";
import safaImage from "../../assets/Hero/safaImg.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">FULL-STACK JAVASCRIPT ENGINEER</p>

          <h1 className="hero__title">
            Building scalable web & mobile experiences.
          </h1>

          <p className="hero__description">
            Full-stack engineer with 2+ years of experience building
            production-ready applications with React, React Native and Node.js.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__button">
              Let's collaborate
              <span className="hero__button-arrow" aria-hidden="true">
                →
              </span>
            </a>
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
