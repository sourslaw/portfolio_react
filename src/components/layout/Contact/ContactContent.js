import React from 'react';
import Iframe from 'react-iframe'
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import classes from '../HeadingComponent.module.css';
import classesContact from './ContactContent.module.css';


const initialFormData = Object.freeze({
  name: "",
  email: "",
  subject: "",
  message: ""
});

export const ContactForm = (props) => {
  // gets form by id to be reset after handleSubmit. maybe not the react way . . .
  const formBad = document.getElementById("form");

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
    alert(`thank you for your message. your query has been forwarded.`);
    formBad.reset();

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
					<Col xs lg={3}>
						<Row>
							<Col lg={2}>
								<span className={classesContact.icons}>
									<i class="far fa-compass"></i>
								</span>
							</Col>
							<Col className={classesContact.col1B}>
								<p>united states, mountain time</p>
							</Col>
						</Row>
						<Row>
							<Col lg={2}>
								<span className={classesContact.icons}>
									<i class="far fa-envelope"></i>
								</span>
							</Col>
							<Col className={classesContact.col1B}>
								<p><a className={classesContact.link} href="mailto:lawanscott@gmail.com" alt="">Lawanscott@gmail.com</a></p>
							</Col>
						</Row>
					</Col>
					
					<Col className={classesContact.bottomSpace}>
						<Form id="form">
							<Row>
								<Col xs={12} lg={5}>
								<p>please reach out . . .</p>
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
										<Form.Control className="mb-3" onChange= {handleChange} name="message" as="textarea" placeholder="message" style={{ height: '175px', marginTop: '1rem' }}  />
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