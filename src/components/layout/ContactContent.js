import React from 'react';
// import * as emailjs from 'emailjs-com';
import Iframe from 'react-iframe'
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import classes from './HeadingComponent.module.css';
import classesContact from './ContactContent.module.css';


const initialFormData = Object.freeze({
  username: "",
  email: "",
  subject: "",
  message: ""
});

export const ContactForm = (props) => {
  const [formData, updateFormData] = React.useState(initialFormData);

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
      serviceID, templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
      .catch(err => console.error('There has been an Error.', err))
  }

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for your message. Your query has been forwarded.`);
    const templateId = 'template_95qae99';
    const serviceID = "service_d1gtf6k";
    sendFeedback(serviceID, templateId, { from_name: formData.name, subject: formData.subject, message: formData.message, email: formData.email })

    console.log(formData);
  };

  return (
    <Container fluid className={classes.container}>
      <div className={classes.headingCard}>contact</div>
      <Container>
        <Row className={classesContact.map}>
          <Iframe src="https://www.google.com/maps/embed/v1/place?q=los+alamos,+nm&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
        </Row>
        <Row className={classesContact.contact}>
          <Col xs lg="3">
            <div>
              <i class="fas fa-pager"></i>
              <p>number</p>
            </div>
            <div>
              <i class="far fa-compass"></i>
              <p>location</p>
            </div>
            <div>
              <i class="far fa-envelope"></i>
              <p>email</p>
            </div>
          </Col>
          <Col className={classesContact.bottomSpace}>
            <p>how can i help ?</p>
            <Form>
              <Row>
                <Col>
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Control className="mt-3 mb-3" onChange= {handleChange} name="name" type="name" placeholder="full name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control className="mb-3" onChange= {handleChange} name="email" type="email" placeholder="email" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridMobile">
                    <Form.Control onChange= {handleChange} name="subject" placeholder="subject" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} id="formGridQuery">
                    <Form.Control className="mb-3" onChange= {handleChange} name="message" as="textarea" placeholder="message" style={{ height: '180px', width: '400px' }} />
                  </Form.Group>
                </Col>
              </Row>
              <Button onClick={handleSubmit} variant="outline-secondary" type="submit">submit</Button>
            </Form >

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactForm;