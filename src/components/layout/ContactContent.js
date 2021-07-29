import React from "react";
import Iframe from 'react-iframe'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import classes from './HeadingComponent.module.css';
import classesContact from './ContactContent.module.css';

// import * as emailjs from 'emailjs-com';


function ContactContent() {
  return (
  <Container className={classesContact.container}>
		<div className={classes.headingCard}>conatct</div>

    <Row>
			<Iframe src="https://www.google.com/maps/embed/v1/place?q=los+alamos,+nm&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
    </Row>

    <Row className={classesContact.contact}>
			{/* contact shit */}
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

			{/* contact form */}
			<Col>
				<p>how can i help ?</p>

				<Form>
					<Row>
						<Col >
							<Form.Control className="mt-3 mb-3" placeholder="full name" />
							<Form.Control className="mb-3" placeholder="email address" />
							<Form.Control placeholder="subject" />
						</Col>
						<Col>
							<Form.Control
								className="mb-3"
								as="textarea"
								placeholder="message"
								style={{ height: '180px', width: '400px' }}
							/>
						</Col>
					</Row>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>

			</Col>
    </Row>

  </Container>
  );
}

export default ContactContent;