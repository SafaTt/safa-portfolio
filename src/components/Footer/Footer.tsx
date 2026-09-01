import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__identity">
          <span className="footer__name">SAFA TOUIL</span>
          <span className="footer__role">
            Full-Stack JavaScript Engineer
          </span>
        </div>

        <div className="footer__links">
          <a
            href="https://www.linkedin.com/in/safa-touil-2a5a6a239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/SafaTt"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:safa.touil.personal@gmail.com">
            Email
          </a>

         <button
  type="button"
  className="footer__top"
  aria-label="Back to top"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  ↑
</button>
        </div>

        <span className="footer__copyright">
          © {currentYear} Safa Touil
        </span>
      </div>
    </footer>
  );
}

export default Footer;