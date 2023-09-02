import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
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
      fixed="top"
      container="fluid"
      style={{
        alignContent: "center",
        textAlign: "center",
        display: "block",
        padding: "10px 40px",
      }}
    >
      <NavbarBrand className="navbar-brand">
        <Link className="navbar-brand" id="RouterNavLink" to="/">
          EstimatorPro
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto nav" navbar>
          <NavItem className="nav-item">
            <Link className="nav-link" id="RouterNavLink" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link" id="RouterNavLink" to="/testimonials">
              Testimonals
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link" id="RouterNavLink" to="/pricing">
              Pricing
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link" id="RouterNavLink" to="/contactus">
              Contact Us
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link" id="RouterNavLink" to="/aboutus">
              About Us
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link id="RouterNavLink" className="nav-link" to="/privacypolicy">
              Privacy Policy
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
