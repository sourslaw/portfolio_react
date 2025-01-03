import { Button, Card, Col } from "react-bootstrap";

import React from "react";
import classes from './PortfolioItem.module.css';

function PortfolioItem(props) {
  return (

    <Col className={classes.col} xs={12} lg={4}>
      <Card  className={classes.card}>
        <div className={classes.imageParent}>
          <a href={props.link} target="_blank" rel="noreferrer"><Card.Img className={classes.image} variant="top" src={props.image} /></a>
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className={classes.description}>{props.description}</Card.Text>
          <Card.Text className={classes.descriptionTwo}>{props.descriptionTwo}</Card.Text>
          {/* <a href={props.link} target="_blank" rel="noreferrer"><Button className={classes.buttons} variant="outline-secondary">view app</Button></a> */}
          <a href={props.linkTwo} target="_blank" rel="noreferrer"><Button className={classes.buttons} variant="outline-secondary">view GitHub</Button></a>
        </Card.Body>
      </Card>
    </Col>

  );
}

export default PortfolioItem;