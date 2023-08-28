import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css";
export default function ContactUs() {
  return (
    <Fragment className="contact-us">
      <Container>
        <div className="section-header ">
          <h1>Contact EstimatorPro</h1>
          <p>We'd Love to Hear From You</p>
        </div>
        <Row>
          <Col md="6" className="contact-form">
            <Form>
              <FormGroup>
                <Label for="name">Your Name</Label>
                <Input type="text" id="name" name="name" required />
              </FormGroup>
              <FormGroup>
                <Label for="email">Your Email</Label>
                <Input type="email" id="email" name="email" required />
              </FormGroup>
              <FormGroup>
                <Label for="message">Your Message</Label>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  rows="5"
                  required
                />
              </FormGroup>
              <Button color="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md="6" className="contact-info">
            <h2>Contact Information</h2>
            <p>
              If you have any questions or inquiries, please don't hesitate to
              contact us:
            </p>
            <p>
              Email:{" "}
              <a href="mailto:estimatorproconsultants@gmail.com">
                estimatorproconsultants@gmail.com
              </a>
            </p>
            <p>Phone: +91-9854121121</p>
            <p>EstimatorPro Consultants</p>
            <p>Ahmednagar, Maharashtra</p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
