import WebmotorsImg1 from '../../assets/extencoes-configuradas.png'
import WebmotorsImg2 from '../../assets/pagina 21 Isolated Tablet- Laptop and Smartphone Composition.png'
import ToDoLight from '../../assets/ToDoApp-light.png'
import ToDoDark from '../../assets/ToDoApp-dark.png'
import LoginPageCA from '../../assets/loginPage-CreateAccount.png'
import LoginPageSI from '../../assets/loginPage-singIn.png'

const Projetos = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="fw-bold fs-1">My personal projects</h2>
        </div>
        <div className="row">
          {/* Tabs */}
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-danger fw-semibold active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#webmotors"
                type="button"
                role="tab"
                aria-controls="webmotors"
                aria-selected="true"
              >
                WebMotors - clone
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-success fw-semibold"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#loginpage"
                type="button"
                role="tab"
                aria-controls="loginpage"
                aria-selected="false"
              >
                Login Page
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-primary fw-semibold"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#todoapp"
                type="button"
                role="tab"
                aria-controls="todoapp"
                aria-selected="false"
              >
                To Do App
              </button>
            </li>
          </ul>
          {/* Conteudo das Tabs */}
          <div className="tab-content" id="myTabContent">
            {/* Container WebMotors */}
            <div
              className="tab-pane fade show active"
              id="webmotors"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex={0}
            >
              <div className="container py-2">
                <div className="row align-items-center justify-content-center text-center">
                  <div className="col-lg-6">
                    <h2 className="mt-3 mt-md-0">
                      <span className="text-danger fw-bold">WebMotors</span>
                    </h2>
                    <p className="lead text-muted fw-semibold my-3">
                      Explore our extensive collection of top-tier vehicles and
                      discover the perfect ride for you at our online car
                      dealership today. Browse now and experience excellence!
                    </p>

                    <div className="d-flex justify-content-center column-gap-3">
                      <a
                        href="#"
                        className="btn btn-outline-danger fw-semibold"
                      >
                        WebMotors
                      </a>
                      <a href="#" className="btn btn-danger fw-semibold">
                        Repository
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {/* Carousel */}
                    <div
                      id="carouselwebmotors"
                      className="carousel carousel-dark shadow slide"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselwebmotors"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselwebmotors"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="img-fluid rounded shadow"
                            src={WebmotorsImg1}
                            alt=""
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="shadow bg-white rounded p-2">
                              Home
                            </h5>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            className="img-fluid rounded shadow"
                            src={WebmotorsImg2}
                            alt=""
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="shadow bg-white rounded p-2">
                              Pagina de Venda
                            </h5>
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselwebmotors"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselwebmotors"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Container Login Page */}
            <div
              className="tab-pane fade"
              id="loginpage"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex={0}
            >
              <div className="container py-2">
                <div className="row align-items-center justify-content-center text-center">
                  <div className="col-lg-6">
                    <h2 className="mt-3 mt-md-0">
                      <span className="text-success fw-bold">Login Page</span>
                    </h2>
                    <p className="lead text-muted fw-semibold my-3">
                      Explore our extensive collection of top-tier vehicles and
                      discover the perfect ride for you at our online car
                      dealership today. Browse now and experience excellence!
                    </p>

                    <div className="d-flex justify-content-center column-gap-3">
                      <a
                        href="#"
                        className="btn btn-outline-success fw-semibold"
                      >
                        Login Page
                      </a>
                      <a href="#" className="btn btn-success fw-semibold">
                        Repository
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {/* Carousel */}
                    <div
                      id="carouselloginpage"
                      className="carousel carousel-dark shadow slide"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselloginpage"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselloginpage"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="img-fluid rounded shadow"
                            src={LoginPageCA}
                            alt=""
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="shadow bg-white rounded p-2">
                              Create Account
                            </h5>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            className="img-fluid rounded shadow"
                            src={LoginPageSI}
                            alt=""
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="shadow bg-white rounded p-2">
                              Sing In
                            </h5>
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselloginpage"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselloginpage"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Container To Do App */}
            <div
              className="tab-pane fade"
              id="todoapp"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabIndex={0}
            >
              <div className="container py-2">
                <div className="row align-items-center justify-content-center text-center">
                  <div className="col-lg-6">
                    <h2 className="mt-3 mt-md-0">
                      <span className="text-primary fw-bold">To Do App</span>
                    </h2>
                    <p className="lead text-muted fw-semibold my-3">
                      Explore our extensive collection of top-tier vehicles and
                      discover the perfect ride for you at our online car
                      dealership today. Browse now and experience excellence!
                    </p>

                    <div className="d-flex justify-content-center column-gap-3">
                      <a
                        href="#"
                        className="btn btn-outline-primary fw-semibold"
                      >
                        To Do App
                      </a>
                      <a href="#" className="btn btn-primary fw-semibold">
                        Repository
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {/* Carousel */}
                    <div
                      id="carouseltodo"
                      className="carousel carousel-dark shadow slide"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouseltodo"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouseltodo"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="img-fluid rounded shadow"
                            src={ToDoLight}
                            alt=""
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="shadow bg-white rounded p-2">
                              Light Mode
                            </h5>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            className="img-fluid rounded shadow"
                            src={ToDoDark}
                            alt=""
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="shadow bg-white rounded p-2">
                              Dark Mode
                            </h5>
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouseltodo"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouseltodo"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="disabled-tab-pane"
              role="tabpanel"
              aria-labelledby="disabled-tab"
              tabIndex={0}
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projetos
