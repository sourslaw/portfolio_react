import React from "react";
import { Container } from "react-bootstrap";
import classes from './HeadingComponent.module.css';
import ResumeItem from "./ResumeItem";


function ResumeContent(props) {
  return (
		<Container>
			<div className={classes.headingCard}>resumee</div>

			<ul>
				{props.contents.map((content) => 
					<ResumeItem 
						what={content.what}
						where={content.where}
						when={content.when}
						description={content.description}
					/>
				)}
			</ul>
		</Container>
  );
}

export default ResumeContent;