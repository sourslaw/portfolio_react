import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from './HeadingComponent.module.css';
import classesPort from './PortfolioContent.module.css';
import PortfolioItem from "./PortfolioItem";


function PortfolioContent(props) {
  return (
		<Container>
			<div className={classes.headingCard}>portfolio</div>

			<Row className={classesPort.mainRow}>

        <ul className={classesPort.ul}>
          {props.contents.map((content) => 
            <PortfolioItem 
              key={content.id}
              title={content.title}
              image={content.image}
              description={content.description}
              link={content.link}
            />
          )}
        </ul>

			</Row>

		</Container>
  );
}

export default PortfolioContent;