import React from "react";
import PortfolioItem from "./PortfolioItem";
import { Container, Row, Col } from "react-bootstrap";
import classes from '../HeadingComponent.module.css';
import classesPort from './PortfolioContent.module.css';


function PortfolioContent(props) {
  return (
		<Container fluid className={classes.container}>
			<div className={classes.headingCard}>portfolio</div>

      <Container className={classesPort.container}>
        <div className={classesPort.mainRow}>
          <Row >
            <Col className={classesPort.ul}>
              {props.contents.slice(0,2).map((content) => 
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
            </Col>
          </Row>
          <Row >
            <Col className={classesPort.ul}>
              {props.contents.slice(2,4).map((content) => 
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
            </Col>
          </Row>
					<Row >
            <Col className={classesPort.ul}>
              {props.contents.slice(4,6).map((content) => 
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
            </Col>
          </Row>
          <Row >
            <Col className={classesPort.ul}>
              {props.contents.slice(6,7).map((content) => 
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
            </Col>
          </Row>
        </div>
      </Container>
		</Container>
  );
}

export default PortfolioContent;