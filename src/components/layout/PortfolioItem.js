import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import classesPort from './PortfolioContent.module.css';


function PortfolioItem(props) {
  return (

    // <Col className={classesPort.col}>
      <Card style={{ width: '35rem' }} className={classesPort.card}>
        <Card.Img className={classesPort.image}variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <a href={props.link}><Button variant="primary">go to app . . .</Button></a>
        </Card.Body>
      </Card>
    // </Col>

  );
}

export default PortfolioItem;