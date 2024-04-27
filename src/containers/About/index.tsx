import ImgSapiensMaleMn from '../../assets/images/sapiens-man-mn.png'
import ImgSapiensMaleLg from '../../assets/images/sapiens-man-lg.png'
import * as S from './style'

const About = () => {
  return (
    <S.Container className="bg-light" id="about">
      <div className="container text-whited">
        {/* Title */}
        <div className="text-center mb-5">
          <S.Title className="fw-bold">
            <span className="text-warning">Tallyson</span>
          </S.Title>
          <S.Title className="fw-bold">a little closer</S.Title>
        </div>
        {/* Who i am column */}
        <div className="row mb-5 align-items-center ">
          <div className="col-lg-8 text-center">
            <S.SubTitle className="mb-3">Who I am</S.SubTitle>
            <p className="lead fs-6 text-whited fw-normal" data-aos="fade-up">
              If you are visiting this page, good to see you! My name is
              Tallyson, I&apos;m 21 years old and I&apos;m a programming
              student. Since I was 10 I have been immensely interested in the
              area. I&apos;m currently learning Front-end, but recently I
              started introducing myself to Back-end languages like Python.
              Follow my personal page to see my evolution as a programmer!
            </p>
            <p
              className="lead fs-6 text-whited fw-normal mt-2"
              data-aos="fade-up"
            >
              Currently studying systems analysis and development - Estácio
            </p>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <picture>
              <source
                className="img-fluid"
                media="(max-width:992px)"
                srcSet={ImgSapiensMaleMn}
                data-aos="fade-right"
                data-aos-duration="1000"
              />
              <img
                className="img-fluid"
                src={ImgSapiensMaleLg}
                alt="about me"
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </picture>
          </div>
        </div>
      </div>
    </S.Container>
  )
}

export default About
