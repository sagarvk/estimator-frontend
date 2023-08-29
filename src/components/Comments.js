import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Comments.css";

const Comments = () => {
  return (
    <div className="testimonials">
      <Container>
        <h1 className=" mb-2">Client Testimonials</h1>
        <Row>
          <h4>
            Testimonials for EstimatorPro: Your Go-To Instant Estimation
            Solution
          </h4>
          <p>
            At EstimatorPro, we understand the critical importance of accurate
            and swift cost estimations in the world of construction and project
            management. Our revolutionary platform has been transforming the way
            professionals approach estimates, and our valued clients are eager
            to share their experiences.
          </p>{" "}
          <p>Here's what our clients have to say about EstimatorPro:</p>
        </Row>
        <Row>
          <Col md="4">
            <div className="testimonial">
              <p className="testimonial-text">
                "EstimatorPro has truly changed the game for me. As a
                construction manager, time is of the essence, and I need
                reliable estimates on the go. With EstimatorPro, I can quickly
                generate accurate estimates right from my mobile device. The
                integration with the latest Schedule of Rates (SOR) ensures that
                my estimates are always up to date. The digital sign feature is
                the cherry on top, streamlining the approval process. It's like
                having a virtual estimating assistant that never lets me down!"
              </p>
              <p className="testimonial-author">
                - John Smith, CEO of BuildTech
              </p>
            </div>
          </Col>
          <Col md="4">
            <div className="testimonial">
              <p className="testimonial-text">
                "Gone are the days of juggling spreadsheets and manually
                updating rates. EstimatorPro has simplified my life as a project
                engineer. The ease of use combined with the instant results have
                saved me countless hours. The fact that I can access it from
                anywhere means I can stay productive even when I'm out in the
                field. The digital sign feature also adds a layer of
                professionalism to my estimates. Thank you, EstimatorPro!"
              </p>
              <p className="testimonial-author">
                - Sarah Johnson, Architect at DesignSpace
              </p>
            </div>
          </Col>
          <Col md="4">
            <div className="testimonial">
              <p className="testimonial-text">
                "Accuracy is paramount in my line of work, and EstimatorPro has
                exceeded my expectations. The platform's integration with the
                latest Schedule of Rates ensures that my estimates are always
                aligned with industry standards. The interface is intuitive and
                user-friendly, making it easy for someone like me, who isn't a
                numbers person, to navigate with confidence. EstimatorPro has
                become an indispensable tool in my toolkit."
              </p>
              <p className="testimonial-author">
                - Michael Rodriguez, Project Manager at ConstructBuild
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Comments;
