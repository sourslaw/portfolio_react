import { Container, Nav, Navbar } from 'react-bootstrap';

import React from "react";
import classes from './Navigation.module.css'

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className={classes.font}>
        <Navbar.Brand href="/" className={classes.logo}><i class="fas fa-hat-wizard fa-2x"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link href='/'>about</Nav.Link>
            <Nav.Link href='/resume'>resume</Nav.Link>
            <Nav.Link href='/portfolio'>pubs & pres</Nav.Link>
            <Nav.Link href='/blog'>blog</Nav.Link>
            <Nav.Link href='/contact'>contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;