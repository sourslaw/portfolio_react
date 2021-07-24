import { Navbar, Nav, Container } from 'react-bootstrap';
import React from "react";


function Footer() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav>
          <Nav.Link href='mailto:lawanscott@gmail.com'>email</Nav.Link>
          <Nav.Link href='https://github.com/sourslaw'>github</Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/scottlawan/'>linkedin</Nav.Link>
          <Nav.Link href='https://www.instagram.com/scottlawan/'>instagram</Nav.Link>
          <Nav.Link href='https://twitter.com/herolawan'>twitter</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );

}

export default Footer;