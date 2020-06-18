import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
const NavBAr = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Canada Dry</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#home">RECIEPE DOWNLOAD</Nav.Link>
          <NavDropdown
            title="ENGLISH"
            id="collasible-nav-dropdown"></NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBAr;
