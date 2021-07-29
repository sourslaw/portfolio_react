import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from './HeadingComponent.module.css';
import classesPort from './PortfolioContent.module.css';
import PortfolioItem from "./PortfolioItem";


function PortfolioContent(props) {
  return (
		<Container>
			<div className={classes.headingCard}>portfolio</div>

      <div className={classesPort.mainRow}>
        <Row >
          <div className={classesPort.ul}>
            {props.contents.slice(0,2).map((content) => 
              <PortfolioItem 
                key={content.id}
                title={content.title}
                image={content.image}
                description={content.description}
                link={content.link}
                linkTwo={content.linkTwo}
              />
            )}
          </div>
        </Row>

        <Row className={classesPort.bottomSpace}>
          <div className={classesPort.ul}>
            {props.contents.slice(2,4).map((content) => 
              <PortfolioItem 
                key={content.id}
                title={content.title}
                image={content.image}
                description={content.description}
                link={content.link}
                linkTwo={content.linkTwo}
              />
            )}
          </div>
        </Row>
      </div>

		</Container>
  );
}

export default PortfolioContent;