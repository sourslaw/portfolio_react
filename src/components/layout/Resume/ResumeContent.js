import React from "react";
import ResumeItem from "./ResumeItem";
import { Container, Row, Col } from "react-bootstrap";
import classes from '../HeadingComponent.module.css';
import classesMore from './ResumeContent.module.css';


function ResumeContent(props) {
	return (
		<Container fluid className={classes.container}>
			<div className={classes.headingCard}>resume</div>

			<Container className={classesMore.container}>
				<Row className={classesMore.mainRow}>
					<Col xs={12} lg={4} className={classesMore.col1}>
						<h1>education</h1>
						{props.contents.slice(5,8).map((content) => 
							<ResumeItem 
								key={content.id}
								id={content.id}
								what={content.what}
								where={content.where}
								when={content.when}
							/>
						)}
					</Col>

					<Col xs={12} lg={8}>
						<h1>experience</h1>
						{props.contents.slice(0,5).map((content) => 
							<ResumeItem 
								key={content.id}
								id={content.id}
								what={content.what}
								where={content.where}
								when={content.when}
								description={content.description}
							/>
						)}
					</Col>
				</Row>
			</Container>
			
		</Container>
  );
}

export default ResumeContent;