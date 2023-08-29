import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footers() {
  return (
    <footer
      style={{
        display: "flex",
        width: "100%",
        // margin: "25px 0 0 0",
        alignItems: "center",
        backgroundColor: "#6c55ff",
        padding: "10px 0px",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col md={4}>
            <h6 style={{ color: "white", textAlign: "center" }}>
              <Link className="nav-link" to="/terms&consditions">
                Terms & Conditions
              </Link>
            </h6>
            {/* Your Terms & Conditions content */}
          </Col>
          <Col md={4}>
            <h6 style={{ color: "white", textAlign: "center" }}>
              <Link className="nav-link" to="/cancellation">
                Cancellation & Refund Policy
              </Link>
            </h6>
            {/* Your Cancellation & Refund Policy content */}
          </Col>
          <Col md={4}>
            <h6 style={{ color: "white", textAlign: "center" }}>
              <Link className="nav-link" to="/shipping">
                Shipping & Delivery Policy
              </Link>
            </h6>
            {/* Your Shipping & Delivery Policy content */}
          </Col>
        </Row>
        <Col md={12}>
          <Row>
            <h6 className="text-center" style={{ color: "white" }}>
              &copy; 2023 EstimatorPro.com
            </h6>
          </Row>
        </Col>
      </Container>
    </footer>
  );
}
