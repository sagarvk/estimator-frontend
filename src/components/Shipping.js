import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Cancellation.css";
export default function Shipping() {
  return (
    <Fragment className="shipping">
      <Container>
        <div className="section-header ">
          <h1>Shipping & Delivery Policy</h1>
          <p>Last updated on Aug 28th 2023</p>
          <p>Shipping is not applicable for business.</p>{" "}
        </div>

        <Row>
          <Col md="12" className="policy-content">
            <h5>Contact Us</h5>
            <p>
              If you have any questions or concerns about our privacy policy,
              please contact us at{" "}
              <a href="mailto:estimatorproconsultants@gmail.com">
                estimatorproconsultants@gmail.com
              </a>
              .
            </p>
            <p>EstimatorPro Consultants</p>
            <p>Ahmednagar, Maharashtra</p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
