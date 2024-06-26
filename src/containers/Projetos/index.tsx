import webmotorsHomePage from '../../assets/images/WebMotors-homePage-compress.jpg'
import webmotorsSellPage from '../../assets/images/Webmotors-sellPage-compress.jpg'
import toDoLight from '../../assets/images/ToDoApp-light-compress.jpg'
import toDoDark from '../../assets/images/ToDoApp-dark-compress.jpg'
import loginPageCA from '../../assets/images/loginPage-CreateAccount-compress.jpg'
import loginPageSI from '../../assets/images/loginPage-singIn-compress.jpg'
import financessHome from '../../assets/images/Financess-HomePage-min.png'
import financessAnalytics from '../../assets/images/Financess-AnalyticsPage-min.png'
import eplayHome from '../../assets/images/EPlay-home-min.jpg'
import efoodHome from '../../assets/images/EFood-home.png'
import efoodStore from '../../assets/images/EFood-Store.png'

import * as S from './style'

export type ProjectType = {
  name: string
  id: number
  defaultSelect: boolean
  projectColor: string
  target: string
  body: {
    description: string
    deploy: string
    repository: string
    date: string
    imgs: string[]
    tecnologies: string
  }
}

const Projetos = () => {
  const projetos: ProjectType[] = [
    {
      name: 'EGames',
      id: 1,
      defaultSelect: true,
      projectColor: 'lightDark',
      target: 'egames',
      body: {
        tecnologies:
          'EPlay é uma loja online que possui como objetivo criar um ambiente propicio para a venda de jogos digitais. O projeto consiste em uma loja online de jogos com design responsivo, que possui um sistema de compras, carrinho e formulário de pagamento. EPlay foi desenvolvido com React.js na criação dos componentes, React-Router-DOM na navegação, Typescript como linguagem padrão, Styled-components na estilização, Redux na centralização do Carrinho e na implementação de informações vindas do backend e validação de formulário com Yup e Formik.',
        repository: 'https://github.com/TallysonFreitas/Loja-jogos',
        deploy: 'https://loja-jogos.vercel.app/',
        description:
          'Discover incredible adventures in our online game store. Join now and dive into limitless fun!',
        date: '24, April, 2024',
        imgs: [eplayHome, financessAnalytics]
      }
    },
    {
      name: 'EFood',
      id: 2,
      defaultSelect: false,
      projectColor: 'altSalmon',
      target: 'efood',
      body: {
        tecnologies:
          'EFood é um site onde cliente e restaurante se encontram e dão “match”. O projeto consiste em uma plataforma de restaurantes e seus respectivos pratos que visa facilitar o encontro do restaurante e cliente. EFood possui design responsivo, sistema de compras, carrinho e formulário de pagamento, foi desenvolvido com React.js na criação dos componentes, React-Router-DOM na navegação, Typescript como linguagem padrão, Styled-components na estilização, Redux na centralização do Carrinho e na implementação de informações vindas do backend e validação de formulário com Yup e Formik.',
        repository: 'https://github.com/TallysonFreitas/Efood',
        deploy: 'https://efood-three-nu.vercel.app/',
        description:
          'Discover the path to a more prosperous financial life. Visit our website now and transform your finances forever!',
        date: '18, April, 2024',
        imgs: [efoodHome, efoodStore]
      }
    },
    {
      name: 'Financess',
      id: 3,
      defaultSelect: false,
      projectColor: 'success',
      target: 'financess',
      body: {
        tecnologies:
          'O projeto foi implementado usando a bibliteca React.js, usando tambem usando a linguagem de programacao Typescript, para a criacao de componentes estilizados foi feita com Styled-components e para facilitar e padronizar o estilos CSS foi utilizada a biblioteca Bootstrap.',
        repository: 'https://github.com/TallysonFreitas/Financess',
        deploy: 'https://financess.vercel.app/',
        description:
          'Discover the path to a more prosperous financial life. Visit our website now and transform your finances forever!',
        date: '03, April, 2024',
        imgs: [financessHome, financessAnalytics]
      }
    },
    {
      name: 'WebMotors',
      id: 4,
      defaultSelect: false,
      projectColor: 'danger',
      target: 'webmotors',
      body: {
        tecnologies:
          'WebMotors é um projeto no qual é facilitado a análise doo veículo pelo comprador, por meio de selos como o de super preço, comparação entre valores médio, tabela Fipe e a média anunciada no site, possui sistema de favoritos e de busca de veículos para encontrar e salvar os carros mais desejados. WebMotors possui design responsivo, sistema de buscas e formulário para contato, foi desenvolvido com React.js na criação dos componentes, React-Router-DOM na navegação, Typescript como linguagem padrão, Styled-components na estilização, Redux na centralização das informações para busca e favoritos e na implementação de informações vindas foi utilizada a função Fetch em um arquivo JSON.',
        repository: 'https://github.com/TallysonFreitas/webmotors',
        deploy: 'https://webmotors-clone.vercel.app/',
        description:
          'Explore our extensive collection of top-tier vehicles and discover the perfect ride for you at our online car dealership today. Browse now and experience excellence!',
        date: '29, February, 2024',
        imgs: [webmotorsHomePage, webmotorsSellPage]
      }
    },
    {
      name: 'Login Page',
      id: 5,
      defaultSelect: false,
      projectColor: 'altdark',
      target: 'loginpage',
      body: {
        tecnologies:
          'O projeto foi implementado usando a bibliteca React.js, usando tambem usando a linguagem de programacao Typescript e para a criacao de componentes estilizados foi feita com Styled-components.',
        repository: 'https://github.com/TallysonFreitas/Login-Page',
        deploy: 'https://login-page-two-sand.vercel.app/',
        description:
          'Explore our website and experience seamless access with our login feature. Join us to unlock exclusive content and personalized experiences!',
        date: '11, November, 2023',
        imgs: [loginPageCA, loginPageSI]
      }
    },
    {
      name: 'To Do App',

      id: 6,
      defaultSelect: false,
      projectColor: 'primary',
      target: 'todoapp',
      body: {
        tecnologies:
          'O projeto foi implementado usando a bibliteca React.js, usando tambem usando a linguagem de programacao Typescript e para a criacao de componentes estilizados foi feita com Styled-components.',
        repository: 'https://github.com/TallysonFreitas/Lista-De-Afazeres',
        deploy: 'https://github.com/TallysonFreitas/Lista-De-Afazeres',
        description:
          'Discover efficiency with our to-do list website! Organize tasks, set reminders, and boost productivity. Visit us today for a seamless experience!',
        date: '27, Octuber, 2023',
        imgs: [toDoDark, toDoLight]
      }
    }
  ]

  return (
    <S.Container id="projects">
      <div className="container">
        <div className="text-center mb-5 text-whited">
          <S.Title className="fw-bold fs-1">
            My <span className="text-danger">projects</span>
          </S.Title>
          <S.Title className="fw-bold fs-1">
            and <span className="text-danger">challenges in TI.</span>
          </S.Title>
        </div>
        <div className="row">
          {/* Tabs */}
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {projetos.map((project) => (
              <li className="nav-item" role="presentation" key={project.id}>
                <button
                  className={`nav-link text-${
                    project.projectColor
                  } fw-semibold ${
                    project.defaultSelect === true ? 'active' : ''
                  } bg-dark`}
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target={`#${project.target}`}
                  type="button"
                  role="tab"
                  aria-controls={`${project.target}`}
                  aria-selected={project.defaultSelect}
                >
                  {project.name}
                </button>
              </li>
            ))}
          </ul>
          {/* Conteudo das Tabs */}
          <div className="tab-content" id="myTabContent">
            {projetos.map((project) => (
              <>
                <div
                  className={`tab-pane fade show ${
                    project.defaultSelect ? 'active' : ''
                  }`}
                  id={project.target}
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex={0}
                  data-aos="flip-right"
                >
                  <div className="container py-2">
                    <div className="row align-items-center justify-content-center text-center">
                      <div className="col-lg-6">
                        <S.SubTitle className="mt-3 mt-md-0">
                          <span
                            className={`text-${project.projectColor} fw-bold  `}
                          >
                            {project.name}
                          </span>
                        </S.SubTitle>
                        <p className="lead text-whited fw-semibold my-3">
                          {project.body.description}
                        </p>

                        <div className="d-flex justify-content-center column-gap-3">
                          <a
                            target="_blank"
                            href={project.body.deploy}
                            className={`btn btn-outline-${project.projectColor} fw-semibold`}
                            rel="noreferrer"
                          >
                            {project.name}
                          </a>
                          <a
                            target="_blank"
                            href={project.body.repository}
                            className={`btn btn-${project.projectColor} fw-semibold`}
                            rel="noreferrer"
                          >
                            Repository
                          </a>
                        </div>
                        <small className="my-3 d-block fw-semibold text-whited">
                          <time dateTime="2024-29-02">{project.body.date}</time>
                        </small>
                      </div>
                      {/* Carousel */}
                      <div className="col-lg-6 my-4">
                        <div
                          id={`carousel${project.target}`}
                          className="carousel carousel-dark shadow slide"
                        >
                          <div className="carousel-indicators">
                            <button
                              type="button"
                              data-bs-target={`#carousel${project.target}`}
                              data-bs-slide-to="0"
                              className="active"
                              aria-current="true"
                              aria-label="Slide 1"
                            ></button>
                            <button
                              type="button"
                              data-bs-target={`#carousel${project.target}`}
                              data-bs-slide-to="1"
                              aria-label="Slide 2"
                            ></button>
                          </div>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img
                                className="img-fluid rounded shadow"
                                src={project.body.imgs[0]}
                                alt={`main page of the website ${project.name}`}
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                className="img-fluid rounded shadow"
                                src={project.body.imgs[1]}
                                alt={`secondary page of the website: ${project.name}`}
                              />
                            </div>
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target={`#carousel${project.target}`}
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
                            data-bs-target={`#carousel${project.target}`}
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
                          id={`accordion${project.target}parent`}
                        >
                          {/* Accordion Item Main Tecnologies */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed fw-semibold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#accordion${project.target}technologies`}
                                aria-expanded="false"
                                aria-controls={`accordion${project.target}technologies`}
                              >
                                <i className="bi bi-file-code me-2"></i>Main
                                technologies
                              </button>
                            </h2>
                            <div
                              id={`accordion${project.target}technologies`}
                              className="accordion-collapse collapse"
                              data-bs-parent={`#accordion${project.target}parent`}
                            >
                              <div className="accordion-body">
                                <div className="d-flex column-gap-5 fw-normal flex-wrap">
                                  <p>{project.body.tecnologies}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Accordion Item Challenges */}
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed fw-semibold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#accordion${project.target}challenges`}
                                aria-expanded="false"
                                aria-controls="accordionchallenges"
                              >
                                <i className="bi bi-file-code me-2"></i>
                                Challenges
                              </button>
                            </h2>
                            <div
                              id={`accordion${project.target}challenges`}
                              className="accordion-collapse collapse"
                              data-bs-parent={`#accordion${project.target}parent`}
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
                                    , to learn how to use it to retrieve data
                                    coming from the link headers and use it to
                                    render the correct sales page for each car.
                                  </li>
                                  <li>
                                    Creating responsiveness without any
                                    assistance was a big challenge, since with
                                    each new implementation I had to test each
                                    version of the site in order to discover new
                                    instabilities.
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
              </>
            ))}
          </div>
        </div>
      </div>
    </S.Container>
  )
}

export default Projetos
