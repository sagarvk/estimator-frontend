import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Cancellation.css";
export default function Cancellation() {
  return (
    <Fragment className="cancellation">
      <Container>
        <div className="section-header ">
          <h1>Cancellation & Refund Policy</h1>
          <p>Last updated on Aug 28th 2023</p>
          <p>
            EstimatorPro Consultants believes in helping its customers as far as
            possible, and has therefore a liberal cancellation policy. Under
            this policy:.
          </p>{" "}
          <p>
            &#8226; Cancellations will be considered only if the request is made
            immediately after placing the order. However, the cancellation
            request may not be entertained if the orders have been communicated
            to the vendors/merchants and they have initiated the process of
            shipping them.
          </p>
          <p>
            &#8226; EstimatorPro Consultants does not accept cancellation
            requests for perishable items like flowers, eatables etc. However,
            refund/replacement can be made if the customer establishes that the
            quality of product delivered is not good.
          </p>
          <p>
            &#8226; In case of receipt of damaged or defective items please
            report the same to our Customer Service team. The request will,
            however, be entertained once the merchant has checked and determined
            the same at his own end. This should be reported within 7 days of
            receipt of the products.
          </p>
          <p>
            &#8226; In case you feel that the product received is not as shown
            on the site or as per your expectations, you must bring it to the
            notice of our customer service within 7 days of receiving the
            product. The Customer Service Team after looking into your complaint
            will take an appropriate decision.
          </p>
          <p>
            &#8226; In case of complaints regarding products that come with a
            warranty from manufacturers, please refer the issue to them.
          </p>
          <p>
            &#8226; In case of any Refunds approved by EstimatorPro Consultants,
            it’ll take 3-5 days for the refund to be processed to the end
            customer.
          </p>
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
