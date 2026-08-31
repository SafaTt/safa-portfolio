import "./Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__content">
        <p className="hero__eyebrow">
          FULL-STACK JAVASCRIPT ENGINEER
        </p>

        <h1 className="hero__title">
          Building digital experiences with code & creativity.
        </h1>

        <p className="hero__description">
          I build modern web and mobile applications with React,
          React Native and Node.js.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__button hero__button--primary">
            View my work
          </a>

          <a href="#contact" className="hero__button hero__button--secondary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero