import "./Navbar.css"

function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar__inner">
        <a href="/" className="navbar__logo">
          SAFA TOUIL
        </a>

        <div className="navbar__links">
          <a href="#about" className="navbar__link">
            About
          </a>

          <a href="#projects" className="navbar__link">
            Projects
          </a>

          <a href="#skills" className="navbar__link">
            Skills
          </a>

          <a href="#contact" className="navbar__link">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar