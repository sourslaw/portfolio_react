import React from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";
import classes from './PortfolioItem.module.css';


function PortfolioItem(props) {
  return (

    <Col className={classes.col}>
      <Card style={{ width: '35rem' }} className={classes.card}>
        <div className={classes.imageParent}>
          <a href={props.link} target="_blank"><Card.Img className={classes.image}variant="top" src={props.image} /></a>
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <a href={props.link} target="_blank"><Button className={classes.buttons} variant="outline-secondary">view app</Button></a>
          <a href={props.linkTwo} target="_blank"><Button className={classes.buttons} variant="outline-secondary">view GitHub</Button></a>
        </Card.Body>
      </Card>
    </Col>

  );
}

export default PortfolioItem;