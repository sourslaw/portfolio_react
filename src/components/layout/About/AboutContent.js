import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import classes from './AboutContent.module.css';


function AboutContent() {
  return (
    <Container className={classes.container}>

      <Row className={classes.row}>

        <Col xs lg="4" className={classes.col1}>
          <Image className={classes.image} src="https://images.unsplash.com/photo-1626881255770-2397375aad8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1232&q=80/" alt="of self" />
        </Col>

        <Col xs lg="6" className={classes.col2}>
          <div>full stack developer</div>
          <h1>scott lawan</h1>
          <p>I am a creative and passionate information professional and software developer. I am seeking to grow my skill set through new challenges and the creation of thoughtful tools for thoughtful use.</p>
          <Button variant="outline-secondary">download CV</Button>
          <Button variant="outline-secondary">contact</Button>
        </Col>

      </Row>

    </Container>
  );
}

export default AboutContent;