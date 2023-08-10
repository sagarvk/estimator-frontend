import React, { Component, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import {
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./CustomNavbars.css";
export default function CustomNavbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <div
        className="container mt-2"
        style={{
          display: "block",
          width: 550,
          padding: 30,
        }}
      >
        <Navbar
          className="navbar"
          fixed="top"
          color="dark"
          light
          dark
          expand="md"
        >
          <NavbarBrand className="navbar-brand" href="/">
            Estimator
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="nav-item">
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="">Features</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="">Testimonals</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="">Pricing</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="">About Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      {/* <Nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Estimator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Testimonals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Nav> */}
    </div>
  );
}
