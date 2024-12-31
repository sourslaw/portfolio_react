import { Col, Container, Row } from "react-bootstrap";

import PortfolioItem from "./PortfolioItem";
import React from "react";
import classes from '../HeadingComponent.module.css';
import classesPort from './PortfolioContent.module.css';

function PortfolioContent(props) {
  return (
		<Container fluid className={classes.container}>
			<div className={classes.headingCard}>portfolio</div>

      <Container className={classesPort.container}>
        <div className={classesPort.mainRow}>
          {/* <Row> heading for these two rows </Row> */}
          <Row >
            {/* <Col className={classesPort.ul}> */}
              {props.contents.slice(0,3).map((content) => 
                <PortfolioItem 
                  key={content.id}
                  title={content.title}
                  image={content.image}
									description={content.description}
									descriptionTwo={content.descriptionTwo}
                  link={content.link}
                  linkTwo={content.linkTwo}
                />
              )}
            {/* </Col> */}
          </Row>
          <Row >
            {/* <Col className={classesPort.ul}> */}
              {props.contents.slice(3,6).map((content) => 
                <PortfolioItem 
                  key={content.id}
                  title={content.title}
                  image={content.image}
									description={content.description}
									descriptionTwo={content.descriptionTwo}
                  link={content.link}
                  linkTwo={content.linkTwo}
                />
              )}
            {/* </Col> */}
          </Row>
        </div>
      </Container>
		</Container>
  );
}

export default PortfolioContent;