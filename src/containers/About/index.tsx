import TorcidaPalmeiras from '../../assets/images/Torcida-palmeiras-compress.jpg'
import DesktopImg from '../../assets/images/Desktop-compress.jpg'
const About = () => {
  return (
    <section className="bg-white">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-1">Presentation</h2>
        </div>
        {/* Who i am column */}
        <div className="row mb-5 align-items-center">
          <div className="col-lg-8 text-center">
            <h3 className="fw-semibold mb-3">Who I am</h3>
            <p className="lead fs-6 text-muted fw-semibold">
              If you are visiting this page, nice to see my name is Tallyson,
              I&apos;m 21 years old and I&apos;m a street cleaner. I entered the
              profession when I was 18 and since So I stayed here. However,
              recently, I became interested in the programming area and started
              an ead course - Analysis and Systems development. Since then
              I&apos;ve been interested increasingly across the area.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="img-fluid rounded shadow"
              src={TorcidaPalmeiras}
              alt="gari"
            />
          </div>
        </div>
        {/* My academic journey column */}
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-8 text-center">
            <h3 className="fw-semibold mb-3">My academic journey</h3>
            <p className="lead fs-6 text-muted fw-semibold">
              When I started studying programming at my college - Systems
              Analysis and Development - in 2023 I became fascinated with the
              area of information technology, so much so that I looked for new
              ways to implement myself in the market through free courses - Full
              Stack Python EBAC
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="img-fluid rounded shadow"
              src={DesktopImg}
              alt="desktop"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
