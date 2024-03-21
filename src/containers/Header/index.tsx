const Header = () => {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="#">
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
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contato
                </a>
              </li>
              <button className="btn btn-outline-primary m-2 my-lg-0">
                Login
              </button>
              <button className="btn btn-primary m-2 my-lg-0">
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
