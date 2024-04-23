import ImgSapiensMaleMn from '../../assets/images/sapiens-man-mn.png'
import ImgSapiensMaleLg from '../../assets/images/sapiens-man-lg.png'
import SapiensFemaleMn from '../../assets/images/sapiens-woman-mn.png'
import SapiensFemaleLg from '../../assets/images/sapiens-woman-lg.png'

const About = () => {
  return (
    <section className="bg-light" id="about">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-1">
            <span className="text-success">Tallyson</span>
          </h2>
          <h2 className="fw-bold fs-1">a little closer.</h2>
        </div>
        {/* Who i am column */}
        <div className="row mb-5 align-items-center">
          <div className="col-lg-8 text-center">
            <h3 className="fw-semibold mb-3">Who I am</h3>
            <p className="lead fs-6 text-muted fw-semibold" data-aos="fade-up">
              If you are visiting this page, nice to see! my name is Tallyson,
              I&apos;m 21 years old and I&apos;m a street cleaner. I entered the
              profession when I was 18 and since So I stayed here. I&apos;m a
              big football fan and supporter of{' '}
              <span className="text-success">Palmeiras Futebol Club</span>. I
              like training and dieting. My life is based on{' '}
              <span className="text-success">routine and consistency</span>.
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
    </section>
  )
}

export default About
