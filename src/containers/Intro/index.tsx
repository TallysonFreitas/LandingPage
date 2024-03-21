const Intro = () => {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex flex-column text-center">
            <h2 className="fw-bold fs-1">
              Build a client
              <span className="text-primary"> portal custom</span>, in minutes
            </h2>
            <p className="lead text-muted fw-semibold fs-6 my-5">
              Delight your clients and partners with custom, intuitive, and
              secure portals. No code required.
            </p>
            <a href="#" className="btn btn-primary fw-semibold">
              Sign up with email
            </a>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://assets.softr-files.com/applications/8f7af9fb-a550-425d-b327-48195c193a5f/assets/3f971cc3-f10b-4117-8071-69e767258add.png"
              alt="projetos"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
