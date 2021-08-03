import React from "react";
import classes from './ResumeItem.module.css';

import { Col, Row } from "react-bootstrap";


function ResumeItem(props) {
  // return (
  //   <li>
  //     <p className={classes.what}>{props.what}</p>
  //     <p className={classes.where}>{props.where}</p>
  //     <p className={classes.when}>{props.when}</p>
  //     <p className={classes.description}>{props.description}</p>
  //   </li>
	// );
	
	// TEST
	return (
		// <Col>

    <Row>
			<Col className={classes.col1}  >
			<p className={classes.when}>{props.when}</p>
			</Col>
			<Col>
			<p className={classes.what}>{props.what}</p>
      <p className={classes.where}>{props.where}</p>
      
      <p className={classes.description}>{props.description}</p>
			</Col>

    </Row>
		// </Col>

  );
}

export default ResumeItem;