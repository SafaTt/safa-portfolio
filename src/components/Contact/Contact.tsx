import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__header">
          {/* <span className="contact__eyebrow">CONTACT</span> */}

          <h2 className="contact__title">
            Have an idea in mind?
          </h2>
        </div>

        <div className="contact__content">
          <p className="contact__description">
            Together, we can build something clear and impactful.
            <br />
            Let's bring your idea to life.
          </p>

          <a
            href="mailto:safa.touil.personal@gmail.com"
            className="contact__link"
          >
            <span>Contact me</span>
            <span className="contact__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;