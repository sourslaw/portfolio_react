import React from "react";

import { Container, Row, Card, Col, Image } from "react-bootstrap";
import classes from './HeadingComponent.module.css';

import { experience } from './data/DataBits';


function ResumeContent() {

  return (
  <Container>
		<div className={classes.headingCard}>resuem</div>
		<Row>
			<h1>experience</h1>
		</Row>
		<Row>
			<h1>education</h1>
		</Row>
		<Row>
			<h1>certificates</h1>
		</Row>

		
  </Container>
  );
}

export default ResumeContent;