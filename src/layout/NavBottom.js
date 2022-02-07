import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./NavBottom.css";

export default function NavBottom() {
  
  let timeNow = new Date().toLocaleString() + "";
  let justTime = timeNow.substr(9,6) + " " + timeNow.substr(19);

  return (
    <Container>
      <Navbar expand="lg" fixed="bottom" className="bottomContainer">
        <Container style={{ marginLeft: 0 }}>
          <Navbar.Brand href="/" className="navbrand" style={{ fontSize: 18 }}>
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto" style={{ marginLeft: 0 }}>
            <Nav.Link className="navitem" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="navitem" href="/skills">
              Skills
            </Nav.Link>
            <Nav.Link className="navitem" href="/education">
              Education
            </Nav.Link>
            <Nav.Link className="navitem" href="/experience">
              Experience
            </Nav.Link>
            <Nav.Link className="navitem" href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="navitem" href="/contact">
              Contact
            </Nav.Link>
            <Navbar.Text className="navtime">{justTime}</Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}
