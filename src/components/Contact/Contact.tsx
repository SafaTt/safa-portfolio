import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [isOpeningMail, setIsOpeningMail] = useState(false);

  const handleContactClick = () => {
    setIsOpeningMail(true);

    setTimeout(() => {
      setIsOpeningMail(false);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__header">
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
            onClick={handleContactClick}
            aria-label="Contact Safa by email"
          >
            <span>
              {isOpeningMail ? "Opening mail…" : "Contact me"}
            </span>

            {!isOpeningMail && (
              <span className="contact__arrow" aria-hidden="true">
                ↗
              </span>
            )}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;