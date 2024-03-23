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
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email address:
                </label>
                <div className="input-group text-dark mb-4">
                  <span
                    className="input-group-text"
                    id="basic-email"
                    title="email"
                  >
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="e.g. mario@example.com"
                    aria-label="email"
                    aria-describedby="basic-email"
                  />
                  <span
                    className="input-group-text"
                    id="basic-email"
                    title="Set your email here"
                  >
                    <i className="bi bi-question-circle"></i>
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <div className="input-group text-dark mb-4">
                  <span
                    className="input-group-text"
                    id="basic-name"
                    title="name"
                  >
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. mario@example.com"
                    aria-label="name"
                    aria-describedby="basic-name"
                  />
                  <span
                    className="input-group-text"
                    id="basic-name"
                    title="Set your name here"
                  >
                    <i className="bi bi-question-circle"></i>
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="about" className="form-label">
                  About:
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-chat-left-text-fill"></i>
                  </span>
                  <select className="form-select" aria-label="about">
                    <option selected>Message subject</option>
                    <option value="freelance">
                      I want you to do a freelance project
                    </option>
                    <option value="hire">I want to hire you</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  Your message:
                </label>
                <textarea
                  style={{ height: 100 }}
                  className="form-control"
                  aria-label="message"
                  aria-describedby="basic-addon1"
                />
              </div>

              <button
                type="submit"
                className="btn btn-danger  fw-semibold px-3"
              >
                Send <i className="bi bi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
