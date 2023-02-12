import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from './ResumeItem.module.css';


function ResumeItem(props) {
	return (
    <Row>
			<Col className={classes.col1}>
			  <p className={classes.when}>{props.when}</p>
			</Col>
			<Col>
        <p className={classes.what}>{props.what}</p>
        <p className={classes.where}>{props.where}</p>
        <p className={classes.description}>{props.description}</p>
			</Col>
    </Row>
  );
}

export default ResumeItem;