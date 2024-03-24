import projetoCarros from '../../assets/images/tallyson-3d.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <h2 className="fw-bold fs-1">
              Hello, my name is
              <span className="text-primary"> Tallyson Freitas </span>
              and i&apos;m{' '}
              <span className="text-warning">frontend developer</span>
            </h2>
            <p className="lead text-muted fw-semibold fs-6 my-5">
              passionate about solving and creating. Message me, I&apos;m always
              here! Counter strike player since 2018. Fan of palmeiras - 1951
              club world cup
            </p>
            <a href="#contact" className="btn btn-warning fw-semibold">
              Send a message
            </a>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={projetoCarros} alt="projetos" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
