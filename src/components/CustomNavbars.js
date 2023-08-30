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
      <NavbarBrand className="navbar-brand" Link="/">
        <Link id="RouterNavLink" className="navbar-brand" to="/">
          EstimatorPro
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto nav" navbar>
          <NavItem className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link" to="/testimonials">
              Testimonals
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link" to="/pricing">
              Pricing
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link" to="/contactus">
              Contact Us
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link" to="/aboutus">
              About Us
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link" to="/privacypolicy">
              Privacy Policy
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
