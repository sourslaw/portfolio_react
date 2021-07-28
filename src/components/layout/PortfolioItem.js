import React from "react";
// import Iframe from 'react-iframe'
import { Card, Button } from "react-bootstrap";
import classesPort from './PortfolioContent.module.css';


function PortfolioItem(props) {
  return (
    <li>
      <Card style={{ width: '30rem' }} className={classesPort.card}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <a href={props.link}><Button variant="primary">go to app . . .</Button></a>
        </Card.Body>
      </Card>

      {/* <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.image}</p>
      <p>{props.link}</p> */}

    </li>
  );
}

export default PortfolioItem;