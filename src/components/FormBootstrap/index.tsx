import { useState } from 'react'
import { FloatingLabel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'

function FormBootstrap() {
  const [email, setEmail] = useState({
    email: '',
    firstName: '',
    lastName: '',
    about: '',
    message: ''
  })

  // Form
  const [validated, setValidated] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  const handleSubmit = (event: any) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      handleShow()
      setMessageSent(true)
      fetch('')
    }

    setValidated(true)
  }

  // Modal

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      {messageSent === false ? (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                value={email.firstName}
                onChange={(e) => {
                  setEmail({ ...email, firstName: e.target.value })
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                value={email.lastName}
                onChange={(e) => {
                  setEmail({ ...email, lastName: e.target.value })
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Your email"
                value={email.email}
                onChange={(e) => {
                  setEmail({ ...email, email: e.target.value })
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationAbout">
              <Form.Label>About</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={email.about}
                onChange={(e) => {
                  setEmail({ ...email, about: e.target.value })
                }}
              >
                <option>Open this select menu</option>
                <option value="freelance">
                  I want you to do a freelance project
                </option>
                <option value="hire">I want to hire you</option>
                <option value="other">Other</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationAbout">
              <FloatingLabel
                controlId="textareaMessage"
                label="Your message"
                className="mb-3 text-muted"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '120px' }}
                  required
                  minLength={20}
                  value={email.message}
                  onChange={(e) => {
                    setEmail({ ...email, message: e.target.value })
                  }}
                />
              </FloatingLabel>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" className="btn-danger fw-semibold">
            Send message
          </Button>
        </Form>
      ) : (
        <div className="text-center mt-5">
          <h2>Thank you!</h2>
          <h2>Your message was sent!</h2>
        </div>
      )}
      <div className="row">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Thank you for de message!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will send you an email shortly with all the information needed to
            proceed with your request.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              className="fw-semibold"
              onClick={handleClose}
            >
              Understood
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default FormBootstrap
