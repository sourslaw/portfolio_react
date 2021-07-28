import React from "react";
import Iframe from 'react-iframe'
import { Container, Row, Col } from "react-bootstrap";
import classes from './HeadingComponent.module.css';


function ContactContent() {
  return (
  <Container>
		<div className={classes.headingCard}>conatct</div>

    <Row>
			<Iframe src="https://www.google.com/maps/embed/v1/place?q=los+alamos,+nm&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
    </Row>

    <Row>
			{/* contact shit */}
			<Col>
				<ul>
					<li>
						number
					</li>
					<li>
						location
					</li>
					<li>
						email
					</li>
				</ul>
			</Col>
			{/* contact form */}
			{/* <Col>
				<p>how can i help ?</p>
				<form>

				</form>
			</Col> */}
    </Row>

  </Container>
  );
}

export default ContactContent;