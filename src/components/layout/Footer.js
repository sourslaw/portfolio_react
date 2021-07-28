import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import classes from './Footer.module.css';


function Footer() {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Nav >
          <Nav.Link href='https://github.com/sourslaw'><i class="fab fa-github-alt fa-2x"></i></Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/scottlawan/'><i class="fab fa-linkedin-in fa-2x"></i></Nav.Link>
          <Nav.Link href='https://www.instagram.com/scottlawan/'><i class="fab fa-instagram fa-2x"></i></Nav.Link>
        </Nav>

        <Nav className={classes.bitsCopyright}>
          <p>&#169;2021 all rights reserved. scott lawan</p>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;