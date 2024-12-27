import { Container, Nav, Navbar } from 'react-bootstrap';

import React from "react";
import classes from './Footer.module.css';

function Footer() {
  return (
    <Navbar className={classes.navBarMargin} bg="light">
      <Container className={classes.font}>
        <Nav>
          <Nav.Link className={classes.footer} href='https://github.com/sourslaw' target="blank"><i class="fab fa-github-alt fa-2x"></i></Nav.Link>
          <Nav.Link className={classes.footer} href='https://www.linkedin.com/in/scottlawan/' target="blank"><i class="fab fa-linkedin-in fa-2x"></i></Nav.Link>
          <Nav.Link className={classes.footer} href='https://www.instagram.com/scottlawan/' target="blank"><i class="fab fa-instagram fa-2x"></i></Nav.Link>
        </Nav>

        <Nav className={classes.bitsCopyright}>
          <p>&#169;2025 all rights reserved. scott lawan</p>
        </Nav>
      </Container>
		</Navbar>
  );
}

export default Footer;