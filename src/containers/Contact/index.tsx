import FormBootstrap from '../../components/FormBootstrap'

import * as S from './style'

const Contact = () => {
  return (
    <section className="bg-dark text-white" id="contact">
      <div className="text-center mb-5">
        <S.Title className="fs-1 fw-bold text-whited">
          Send me a <span className="text-danger">Email</span>
        </S.Title>
        <S.Title className="fs-1 fw-bold text-whited">
          I&apos;m ready to <span className="text-danger">Work</span>
        </S.Title>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-lg-6">
            <FormBootstrap />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
