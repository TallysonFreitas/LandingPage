const Header = () => {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand fw-semibold fs-4" href="#">
            <i className="bi bi-code"></i> Tallyson.dev{' '}
            <i className="bi bi-code-slash"></i>
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#containerLinksNav"
            aria-controls="containerLinksNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="containerLinksNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#intro" className="nav-link active fw-semibold">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link fw-semibold">
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link fw-semibold">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link fw-semibold">
                  Contato
                </a>
              </li>
              <button className="btn btn-outline-primary m-2 my-lg-0 fw-semibold">
                Login
              </button>
              <button className="btn btn-warning m-2 my-lg-0 fw-semibold">
                Sign up for free
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
