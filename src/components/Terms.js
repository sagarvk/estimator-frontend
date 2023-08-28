import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Terms.css";
export default function Terms() {
  return (
    <Fragment className="terms">
      <Container>
        <div className="section-header ">
          <h1>Terms & Conditions</h1>
          <p>Last updated on Aug 28th 2023</p>
          <p>
            The Website Owner, including subsidiaries and affiliates (“Website”
            or “Website Owner” or “we” or “us” or “our”) provides the
            information contained on the website or any of the pages comprising
            the website (“website”) to visitors (“visitors”) (cumulatively
            referred to as “you” or “your” hereinafter) subject to the terms and
            conditions set out in these website terms and conditions, the
            privacy policy and any other relevant terms and conditions, policies
            and notices which may be applicable to a specific section or module
            of the website.
          </p>{" "}
          <p>
            Welcome to our website. If you continue to browse and use this
            website you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern EstimatorPro Consultants relationship with you
            in relation to this website.
          </p>{" "}
          <p>
            The term 'EstimatorPro' or 'us' or 'we' refers to the owner of the
            website whose registered/operational office is Shirdi, Rahata,
            Ahmednagar, Maharashtra. The term 'you' refers to the user or viewer
            of our website.
          </p>
        </div>

        <Row>
          <Col md="12" className="policy-content">
            <h5>
              The use of this website is subject to the following terms of use:
            </h5>
            <p>
              &#8226; The content of the pages of this website is for your
              general information and use only. It is subject to change without
              notice.
            </p>
            <p>
              &#8226; Neither we nor any third parties provide any warranty or
              guarantee as to the accuracy, timeliness, performance,
              completeness or suitability of the information and materials found
              or offered on this website for any particular purpose. You
              acknowledge that such information and materials may contain
              inaccuracies or errors and we expressly exclude liability for any
              such inaccuracies or errors to the fullest extent permitted by
              law.
            </p>
            <p>
              &#8226; Your use of any information or materials on this website
              is entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services or information available through this website meet your
              specific requirements.
            </p>
            <p>
              &#8226; This website contains material which is owned by or
              licensed to us. This material includes, but is not limited to, the
              design, layout, look, appearance and graphics. Reproduction is
              prohibited other than in accordance with the copyright notice,
              which forms part of these terms and conditions.
            </p>
            <p>
              &#8226; All trademarks reproduced in this website which are not
              the property of, or licensed to, the operator are acknowledged on
              the website.
            </p>
            <p>
              &#8226; Unauthorized use of this website may give rise to a claim
              for damages and/or be a criminal offense.
            </p>
            <p>
              &#8226; From time to time this website may also include links to
              other websites. These links are provided for your convenience to
              provide further information.
            </p>
            <p>
              &#8226; You may not create a link to this website from another
              website or document without EstimatorPro Consultants prior written
              consent.
            </p>

            <p>
              &#8226; Your use of this website and any dispute arising out of
              such use of the website is subject to the laws of India or other
              regulatory authority.
            </p>
            <p>
              We as a merchant shall be under no liability whatsoever in respect
              of any loss or damage arising directly or indirectly out of the
              decline of authorization for any Transaction, on Account of the
              Cardholder having exceeded the preset limit mutually agreed by us
              with our acquiring bank from time to time
            </p>

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
