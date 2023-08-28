import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <Fragment className="about-us">
      <Container>
        <div className="section-header">
          <h1>About EstimatorPro</h1>
          <p>Your Trusted Partner in Estimation & Civil Engineering Services</p>
        </div>
        <Row>
          <Col md="6" className="about-text">
            <h2>Our Expertise</h2>
            <p>
              EstimatorPro Consultants is dedicated to providing comprehensive
              Estimation & Civil Engineering services. Our team consists of
              skilled professionals, including experienced estimators and civil
              engineers. We are committed to delivering accurate estimates
              tailored to your project's specific requirements. Whether your
              project involves residential, commercial, or industrial
              construction, we have the expertise to exceed your expectations.
            </p>
          </Col>
          <Col md="6" className="about-text">
            <h2>Instant Estimate Generation with Digital Sign</h2>
            <p>
              Say goodbye to waiting for estimates. With EstimatorPro, you can
              instantly generate accurate estimates and download them for your
              convenience. Our cutting-edge technology considers the latest
              industry standards, material costs, and labor rates to provide
              reliable estimates. Additionally, our digital signature feature
              enhances the credibility of your estimates, ensuring legal
              compliance and security.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="6" className="about-text">
            <h2>Stay Updated with Latest SOR Rates</h2>
            <p>
              Staying informed about the latest Schedule of Rates is essential
              for precise project estimation. EstimatorPro Consultants is
              committed to providing you with up-to-date SOR rates, enabling you
              to make informed decisions. Our platform empowers you to adjust
              estimates based on the latest market trends and fluctuations.
            </p>
          </Col>
          <Col md="6" className="about-text">
            <h2>Contact Us</h2>
            <p>
              Have questions or ready to get started? Reach out to us at{" "}
              <a href="mailto:estimatorproconsultants@gmail.com">
                estimatorproconsultants@gmail.com
              </a>
              . Our team is here to assist you, whether you need help navigating
              our platform, understanding estimates, or any other inquiries
              related to our services.
            </p>
            <p>Firm Name: EstimatorPro Consultants</p>
            <p>Location: Ahmednagar, Maharashtra</p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
