import ImgIntroLg from '../../assets/images/sapiens-lg.png'
import ImgIntroMn from '../../assets/images/sapiens-mn.png'

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
            <p
              className="lead text-muted fw-semibold fs-6 my-5"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              passionate about solving and creating. Message me, I&apos;m always
              here! Counter strike player since 2018. Fan of palmeiras - 1951
              club world cup
            </p>
            <a
              href="#contact"
              className="btn btn-warning fw-semibold"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Send a message
            </a>
          </div>
          <div className="col-md-6">
            <picture>
              <source
                className="img-fluid"
                media="(max-width:767px)"
                srcSet={ImgIntroLg}
                data-aos="fade-left"
                data-aos-duration="1000"
              />
              <img
                className="img-fluid"
                src={ImgIntroLg}
                alt="projetos"
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
