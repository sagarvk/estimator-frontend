import React from "react";
import InputForm from "./InputForm";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";

import { Container, Row, Col } from "reactstrap";
import Legend from "./Legend";
import { Fragment } from "react";
export default function Home() {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col md="6">
            <Legend />
          </Col>
          <Col md="6">
            <InputForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <Features />
          </Col>
        </Row>
        <Row>
          <Col>
            <Testimonials />
          </Col>
        </Row>
        <Row>
          <Col>
            <Pricing />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
