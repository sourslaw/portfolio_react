import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from '../HeadingComponent.module.css';
import classesMore from './ResumeContent.module.css';
import ResumeItem from "./ResumeItem";


function ResumeContent(props) {
  return (
		<Container fluid className={classes.container}>
			<div className={classes.headingCard}>resume</div>
			<Container className={classesMore.container}>
				<Row className={classesMore.mainRow}>
					<Col className={classesMore.colBump} xs lg="4">
						<h1>education</h1>
						<ul>
							{props.contents.slice(4,7).map((content) => 
								<ResumeItem 
									key={content.id}
									id={content.id}
									what={content.what}
									where={content.where}
									when={content.when}
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
		</Container>
  );
}

export default ResumeContent;