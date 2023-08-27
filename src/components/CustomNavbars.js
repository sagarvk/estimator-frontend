import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomNavbars.css";

export default function CustomNavbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar
      color="primary"
      dark
      light
      className="navbar"
      expand="md"
      style={{
        alignContent: "center",
        textAlign: "center",
        display: "flex",
        padding: "10px",
      }}
    >
      <NavbarBrand className="navbar-brand" href="/">
        EstimatorPro
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto nav" navbar>
          <NavItem className="nav-item">
            <NavLink href="/components/">Home</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="">Testimonals</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="">Pricing</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="">Contact Us</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="">About Us</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="">Privacy Policy</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
