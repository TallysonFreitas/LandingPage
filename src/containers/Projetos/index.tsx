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
                        target="_blank"
                        href="https://webmotors-clone.vercel.app/"
                        className="btn btn-outline-danger fw-semibold"
                        rel="noreferrer"
                      >
                        WebMotors
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/TallysonFreitas/webmotors/tree/main"
                        className="btn btn-danger fw-semibold"
                        rel="noreferrer"
                      >
                        Repository
                      </a>
                    </div>
                    <small className="mt-2 d-block fw-semibold text-muted">
                      <time dateTime="2024-29-02">29, February, 2024</time>
                    </small>
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
                {/* Acordion */}
                <div className="row mt-2">
                  <div className="col">
                    <div
                      className="accordion accordion-flush"
                      id="accordionwebmotorsparent"
                    >
                      {/* Accordion Item */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed fw-semibold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordiontecnologies"
                            aria-expanded="false"
                            aria-controls="accordiontecnologies"
                          >
                            <i className="bi bi-file-code me-2"></i>Main
                            technologies
                          </button>
                        </h2>
                        <div
                          id="accordiontecnologies"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionwebmotorsparent"
                        >
                          <div className="accordion-body">
                            <ul className="d-flex column-gap-5 fw-semibold flex-wrap">
                              <li>
                                <i className="bi bi-filetype-jsx"></i> React.js
                              </li>
                              <li>
                                <i className="bi bi-filetype-tsx"></i>{' '}
                                TypeScript
                              </li>
                              <li>
                                <i className="bi bi-filetype-scss"></i> Styled
                                Components
                              </li>
                              <li>
                                <i className="bi bi-archive"></i> Redux.js
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Accordion Item */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed fw-semibold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordionchallenges"
                            aria-expanded="false"
                            aria-controls="accordionchallenges"
                          >
                            <i className="bi bi-file-code me-2"></i>Challenges
                          </button>
                        </h2>
                        <div
                          id="accordionchallenges"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionwebmotorsparent"
                        >
                          <div className="accordion-body">
                            <ol>
                              <li>
                                Using and handling data through the{' '}
                                <span className="text-danger">
                                  Fetch function
                                </span>
                                , which I knew very little about. I managed,{' '}
                                <span className="text-danger">
                                  only by studying a lot
                                </span>
                                , to learn how to use it to retrieve data coming
                                from the link headers and use it to render the
                                correct sales page for each car.
                              </li>
                              <li>
                                Creating responsiveness without any assistance
                                was a big challenge, since with each new
                                implementation I had to test each version of the
                                site in order to discover new instabilities.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
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
                      Explore our website and experience seamless access with
                      our login feature. Join us to unlock exclusive content and
                      personalized experiences!
                    </p>

                    <div className="d-flex justify-content-center column-gap-3">
                      <a
                        target="_blank"
                        href="https://lista-de-afazeres-alpha.vercel.app/"
                        className="btn btn-outline-success fw-semibold"
                        rel="noreferrer"
                      >
                        Login Page
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/TallysonFreitas/Lista-De-Afazeres/tree/main"
                        className="btn btn-success fw-semibold"
                        rel="noreferrer"
                      >
                        Repository
                      </a>
                    </div>
                    <small className="mt-2 d-block fw-semibold text-muted">
                      <time dateTime="2023-02-11">11, November, 2023</time>
                    </small>
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
                {/* Acordion */}
                <div className="row mt-2">
                  <div className="col">
                    <div
                      className="accordion accordion-flush"
                      id="accordionloginparent"
                    >
                      {/* Accordion Item */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed fw-semibold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordiontecnologies"
                            aria-expanded="false"
                            aria-controls="accordiontecnologies"
                          >
                            <i className="bi bi-file-code me-2"></i>Main
                            technologies
                          </button>
                        </h2>
                        <div
                          id="accordiontecnologies"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionloginparent"
                        >
                          <div className="accordion-body">
                            <ul className="d-flex column-gap-5 fw-semibold flex-wrap">
                              <li>
                                <i className="bi bi-filetype-jsx"></i> React.js
                              </li>
                              <li>
                                <i className="bi bi-filetype-tsx"></i>{' '}
                                TypeScript
                              </li>
                              <li>
                                <i className="bi bi-filetype-scss"></i> Styled
                                Components
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Accordion Item */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed fw-semibold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordionchallenges"
                            aria-expanded="false"
                            aria-controls="accordionchallenges"
                          >
                            <i className="bi bi-file-code me-2"></i>Challenges
                          </button>
                        </h2>
                        <div
                          id="accordionchallenges"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionloginparent"
                        >
                          <div className="accordion-body">
                            <ol>
                              <li>
                                While still learning about{' '}
                                <span className="text-success">
                                  styled components
                                </span>
                                , I had many problems integrating it with
                                typescript, problems that I had to learn to
                                solve on my own.
                              </li>
                              <li>
                                Creating{' '}
                                <span className="text-success">
                                  responsiveness
                                </span>{' '}
                                without any assistance was a big challenge,
                                since with each new implementation I had to test
                                each version of the site in order to discover
                                new instabilities.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
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
                      Discover efficiency with our to-do list website! Organize
                      tasks, set reminders, and boost productivity. Visit us
                      today for a seamless experience!
                    </p>

                    <div className="d-flex justify-content-center column-gap-3">
                      <a
                        target="_blank"
                        href="https://lista-de-afazeres-alpha.vercel.app/"
                        className="btn btn-outline-primary fw-semibold"
                        rel="noreferrer"
                      >
                        To Do App
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/TallysonFreitas/Lista-De-Afazeres/tree/main"
                        className="btn btn-primary fw-semibold"
                        rel="noreferrer"
                      >
                        Repository
                      </a>
                    </div>
                    <small className="mt-2 d-block fw-semibold text-muted">
                      <time dateTime="2023-27-10">27, Octuber, 2023</time>
                    </small>
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
                {/* Acordion */}
                <div className="row mt-2">
                  <div className="col">
                    <div
                      className="accordion accordion-flush"
                      id="accordiontodoparent"
                    >
                      {/* Accordion Item */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed fw-semibold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordiontecnologies"
                            aria-expanded="false"
                            aria-controls="accordiontecnologies"
                          >
                            <i className="bi bi-file-code me-2"></i>Main
                            technologies
                          </button>
                        </h2>
                        <div
                          id="accordiontecnologies"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordiontodoparent"
                        >
                          <div className="accordion-body">
                            <ul className="d-flex column-gap-5 fw-semibold flex-wrap">
                              <li>
                                <i className="bi bi-filetype-jsx"></i> React.js
                              </li>
                              <li>
                                <i className="bi bi-filetype-tsx"></i>{' '}
                                TypeScript
                              </li>
                              <li>
                                <i className="bi bi-filetype-scss"></i> Styled
                                Components
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Accordion Item */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed fw-semibold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordionchallenges"
                            aria-expanded="false"
                            aria-controls="accordionchallenges"
                          >
                            <i className="bi bi-file-code me-2"></i>Challenges
                          </button>
                        </h2>
                        <div
                          id="accordionchallenges"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordiontodoparent"
                        >
                          <div className="accordion-body">
                            <ol>
                              <li>
                                my little experience in{' '}
                                <span className="text-primary">React.js</span>{' '}
                                made things difficult in this project. Having to
                                go back to researching solutions to problems
                                that I consider{' '}
                                <span className="text-primary">
                                  simple today
                                </span>
                                .
                              </li>
                              <li>
                                I had to learn a lot about{' '}
                                <span className="text-primary">Typescript</span>{' '}
                                here, how to type functions, variables,
                                components. It was a{' '}
                                <span className="text-primary">
                                  decisive moment
                                </span>{' '}
                                and one of the most important so far.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projetos
