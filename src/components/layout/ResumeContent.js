import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from './HeadingComponent.module.css';
import classesMore from './ResumeContent.module.css';
import ResumeItem from "./ResumeItem";


function ResumeContent(props) {
  return (
		<Container>
			<div className={classes.headingCard}>resumee</div>

			<Row className={classesMore.mainRow}>

				<Col>
					<h1>education</h1>
					<ul>
						{props.contents.slice(4,7).map((content) => 
							<ResumeItem 
								key={content.id}
								id={content.id}
								what={content.what}
								where={content.where}
								when={content.when}
								// description={content.description}
							/>
						)}
					</ul>
				</Col>

				<Col >
					<h1>experience</h1>
					<ul>
						{props.contents.slice(0,4).map((content) => 
							<ResumeItem 
								key={content.id}
								id={content.id}
								what={content.what}
								where={content.where}
								when={content.when}
								description={content.description}
							/>
						)}
					</ul>
				</Col>

			</Row>


		</Container>
  );
}

export default ResumeContent;