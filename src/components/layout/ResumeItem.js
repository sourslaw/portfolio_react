import React from "react";
// import Iframe from 'react-iframe'
// import { Container, Row, Col } from "react-bootstrap";


function ResumeItem(props) {
  return (
    <li>
      <p>{props.what}</p>
      <p>{props.where}</p>
      <p>{props.when}</p>
      <p>{props.description}</p>
      <p>{props.testOne}</p>
    </li>
  );
}

export default ResumeItem;