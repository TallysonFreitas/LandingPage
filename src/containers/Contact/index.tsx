import { useState } from 'react'
import FormContato from '../../components/FormContato'

const Contact = () => {
  return (
    <section className="bg-dark text-white" id="contact">
      <div className="text-center mb-5">
        <h2 className="fs-1 fw-bold">
          Send me a <span className="text-danger">Email</span>.
        </h2>
        <h2 className="fs-1 fw-bold">
          I&apos;m ready to <span className="text-danger">Work</span>.
        </h2>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-lg-6">
            <FormContato />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
