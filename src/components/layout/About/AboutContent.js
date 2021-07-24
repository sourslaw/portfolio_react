import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import classes from './AboutContent.module.css';


function AboutContent() {

  return (
    <Container>
      <Row>
        <Col>
          <Image className={classes.image} src="https://images.unsplash.com/photo-1626881255770-2397375aad8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1232&q=80/" alt="of self" />
        </Col>

        <Col>
          <div>about stuff</div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutContent;