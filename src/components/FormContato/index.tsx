import { useState } from 'react'

const FormContato = () => {
  const [mensagem, setMensagem] = useState({
    email: '',
    name: '',
    about: '',
    message: ''
  })
  return (
    <form className="needs-validation" noValidate>
      {/* Email address */}
      <div className="mb-4">
        <label htmlFor="email" className="form-label">
          Email address:
        </label>
        <div className="input-group text-dark mb-4">
          <span className="input-group-text" id="basic-email" title="email">
            <i className="bi bi-envelope-fill"></i>
          </span>
          <input
            value={mensagem.email}
            onChange={(e) => {
              setMensagem({ ...mensagem, email: e.target.value })
            }}
            type="email"
            className="form-control"
            placeholder="e.g. mario@example.com"
            aria-label="email"
            aria-describedby="basic-email"
            id="email"
            required
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
      {/* Name */}
      <div className="mb-4">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <div className="input-group text-dark mb-4">
          <span className="input-group-text" id="basic-name" title="name">
            <i className="bi bi-person-fill"></i>
          </span>
          <input
            value={mensagem.name}
            onChange={(e) => {
              setMensagem({ ...mensagem, name: e.target.value })
            }}
            type="text"
            className="form-control"
            placeholder="e.g. mario@example.com"
            aria-label="name"
            aria-describedby="basic-name"
            id="name"
            required
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
      {/* About */}
      <div className="mb-4">
        <label htmlFor="about" className="form-label">
          About:
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-chat-left-text-fill"></i>
          </span>
          <select
            className="form-select"
            aria-label="about"
            required
            value={mensagem.about}
            onChange={(e) => {
              setMensagem({ ...mensagem, about: e.target.value })
            }}
          >
            <option selected>Message subject</option>
            <option value="freelance">
              I want you to do a freelance project
            </option>
            <option value="hire">I want to hire you</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      {/* message */}
      <div className="mb-4">
        <label htmlFor="message" className="form-label">
          Your message:
        </label>
        <textarea
          value={mensagem.message}
          onChange={(e) => {
            setMensagem({ ...mensagem, message: e.target.value })
          }}
          style={{ height: 100 }}
          className="form-control"
          aria-label="message"
          aria-describedby="basic-addon1"
          id="message"
          required
        />
      </div>
      <button type="submit" className="btn btn-danger  fw-semibold px-3">
        Send <i className="bi bi-arrow-right"></i>
      </button>
      {mensagem.email},{mensagem.name},{mensagem.about},{mensagem.message}
    </form>
  )
}

export default FormContato
