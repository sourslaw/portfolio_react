import { Navbar, Nav, Container } from 'react-bootstrap';
import React from "react";


function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">me-site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link href='/'>about</Nav.Link>
            <Nav.Link href='/resume'>resume</Nav.Link>
            <Nav.Link href='/portfolio'>portfolio</Nav.Link>
            <Nav.Link href='/contact'>contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;