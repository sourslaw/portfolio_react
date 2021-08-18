import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import classes from './AboutContent.module.css';


function AboutContent() {
  return (
    <Container className={classes.container}>
      <Row className={classes.row}>

        <Col xs lg="4" className={classes.col1}>
          <div className={classes.imageParent}> 
            <Image className={classes.image} src="https://images.unsplash.com/photo-1626881255770-2397375aad8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1232&q=80/" alt="of self" />
          </div>
        </Col>

        <Col xs lg="6" className={classes.col2}>
          <div>full stack developer</div>
          <h1 className={classes.font}>scott lawan</h1>
          <p>Full stack web developer. Graduate degree and professional experience in information science and data management. Proven track record in team-building, mentorship, and project management. Passionate about problem solving, collaboration, and continuous learning.</p>
          <a href="https://drive.google.com/file/d/12NNTVp1QhOEINZRFQ2smujnbTpq2hhE9/view?usp=sharing" target="blank"><Button variant="outline-secondary" className={classes.button}>download CV</Button></a>
          <a href='/contact'><Button variant="outline-secondary" className={classes.button}>contact</Button></a>
        </Col>

      </Row>
    </Container>
  );
}

export default AboutContent;