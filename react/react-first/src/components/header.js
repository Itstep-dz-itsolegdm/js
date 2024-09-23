import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <Navbar expand="lg" bg="light" variant="light">
        <div className="container">
          <Navbar.Brand href="#home">
            <h1 className="sitename">Bootslander</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#hero">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Dropdown 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Dropdown 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
