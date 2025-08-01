import { Col, Container, Row } from "react-bootstrap";

import React from "react";
import classes from '../HeadingComponent.module.css';
import classesPort from './PortfolioContent.module.css';

function PortfolioContent(props) {
  return (
		<Container fluid className={classes.container}>
			<div className={classes.headingCard}>publications & presentations</div>

      <Container className={classesPort.container}>
        <div className={classesPort.mainRow}>
          <Row class="mb-5">
            <p>“A Programmatic Workflow for Inserting Content Notices in Digital Collections.” Journal of Digital Media Management. [In press]</p>

            <p>“<a href="https://drive.google.com/file/d/1qKDLy2ADhGfBB8ezxa4nfknpKLd5iheI/view?usp=drive_link" target="_blank">Serving it Up with Ones and Zeroes: A Programmatic Workflow for Inserting Content Notices in Digital Collections</a>.” Presenting to the Midwest Archives Conference Annual Meeting, Spring 2025</p>

            <p>“<a href="https://drive.google.com/file/d/1hiG6qyCJhkesU54OtI8ExmyNiND0eajJ/view?usp=drive_link" target="_blank">Good Things Come in Threes: Building a Digital Collection at the University of Minnesota</a>.” Presented to the Midwest Archives Conference Annual Meeting, Spring 2024</p>

            <p>“<a href="https://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=1116&context=westernarchives" target="_blank">Review of Archival Values: Essays in Honor of Mark A. Greene, edited by Christine Weideman and Mary A. Caldera</a>.” Published in the Journal of Western Archives, Spring 2020</p>

            <p>“<a href="https://drive.google.com/file/d/1FIVPhX96VcbHR4yyJrFVdLQtlBrUt0jI/view?usp=drive_link" target="_blank">Colorado State Archives’ First Born</a>.” Presented to the Society of American Archivists (SAA), Washington, D.C., August 2018</p>


            <p>“<a href="https://drive.google.com/file/d/1FIVPhX96VcbHR4yyJrFVdLQtlBrUt0jI/view?usp=drive_link" target="_blank">Colorado State Archives’ First Born</a>.” Presented to the Association for Recorded Sound Collections (ARSC), Baltimore, MD, May 2018</p>

            <p>“<a href="https://www.srmarchivists.org/resources/Documents/Newsletters%202017/2017-Summer-Newsletter-2.pdf" target="_blank">Preserving the Colorado General Assembly’s Sessions</a>.” Published in the Society of Rocky Mountain Archivist (SRMA) Quarterly Newsletter, Denver, CO, August 2017</p>
          
          </Row>
        </div>
      </Container>
		</Container>
  );
}

export default PortfolioContent;