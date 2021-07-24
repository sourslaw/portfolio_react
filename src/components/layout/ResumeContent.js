import React from "react";

import { Container, Row, Card, Col, Image } from "react-bootstrap";
import classes from './HeadingComponent.module.css';
import ResumeItem from "./ResumeItem";

// import { experience } from './data/DataBits';


function ResumeContent(props) {
	console.log(props);

  return (
		
  // <Container>
	// 	<div className={classes.headingCard}>resuem</div>
	// 	<Row>
	// 		<h1>experience</h1>
	// 		<p>{props.contents[0].what}</p> 
	// 		{/* NOTE: need to recreate a component for experience, education etc. */}
	// 	</Row>
	// 	<Row>
	// 		<h1>education</h1>
	// 	</Row>
	// 	<Row>
	// 		<h1>certificates</h1>
	// 	</Row>
  // </Container>
		<div>
			{props.contents.map((content) => 
				<ResumeItem 
					what={content.what}
					where={content.where}
					when={content.when}
					description={content.description}
				/>
			)}
		</div>
  )
}

export default ResumeContent;