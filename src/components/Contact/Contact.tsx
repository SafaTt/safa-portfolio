import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__header">
          <span className="contact__eyebrow">CONTACT</span>

          <h2 className="contact__title">
            Let's work
            <br />
            together.
          </h2>
        </div>

        <div className="contact__content">
          <p className="contact__description">
            Have a project in mind or want to work together?
            <br />
            Feel free to get in touch.
          </p>

          <div className="contact__links">
            <a
              href="mailto:safa.touil.personal@gmail.com"
              className="contact__link contact__link--primary"
            >
              Email me
            </a>

            <a
              href="https://www.linkedin.com/in/safa-touil-2a5a6a239/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/SafaTt"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;