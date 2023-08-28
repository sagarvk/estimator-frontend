import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PrivacyPolicy.css";
export default function PrivacyPolicy() {
  return (
    <Fragment className="privacy-policy">
      <Container>
        <div className="section-header ">
          <h1>Privacy Policy</h1>
          <p>Last updated on Aug 28th 2023</p>
          <p>
            This privacy policy sets out how EstimatorPro uses and protects any
            information that you give EstimatorPro when you use this website.
          </p>{" "}
          <p>
            EstimatorPro is committed to ensuring that your privacy is
            protected. Should we ask you to provide certain information by which
            you can be identified when using this website, and then you can be
            assured that it will only be used in accordance with this privacy
            statement.
          </p>{" "}
          <p>
            EstimatorPro may change this policy from time to time by updating
            this page. You should check this page from time to time to ensure
            that you are happy with any changes.
          </p>
        </div>

        <Row>
          <Col md="12" className="policy-content">
            <h5>We may collect the following information:</h5>
            <p>&#8226; Name and job title</p>
            <p>&#8226; Contact information including email address</p>
            <p>
              &#8226; Demographic information such as postcode, preferences and
              interests
            </p>
            <p>
              &#8226; Other information relevant to customer surveys and/or
              offers
            </p>

            <h5>What we do with the information we gather</h5>
            <p>
              We require this information to understand your needs and provide
              you with a better service, and in particular for the following
              reasons:
            </p>
            <p>&#8226; Internal record keeping.</p>
            <p>
              &#8226; We may use the information to improve our products and
              services.
            </p>
            <p>
              &#8226; We may periodically send promotional emails about new
              products, special offers or other information which we think you
              may find interesting using the email address which you have
              provided.
            </p>
            <p>
              &#8226; From time to time, we may also use your information to
              contact you for market research purposes. We may contact you by
              email, phone, fax or mail. We may use the information to customise
              the website according to your interests.
            </p>
            <p>
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorised access or disclosure we have put in
              suitable measures.
            </p>

            <h5>How we use cookies</h5>

            <p>
              A cookie is a small file which asks permission to be placed on
              your computer's hard drive. Once you agree, the file is added and
              the cookie helps analyses web traffic or lets you know when you
              visit a particular site. Cookies allow web applications to respond
              to you as an individual. The web application can tailor its
              operations to your needs, likes and dislikes by gathering and
              remembering information about your preferences.
            </p>
            <p>
              We use traffic log cookies to identify which pages are being used.
              This helps us analyses data about webpage traffic and improve our
              website in order to tailor it to customer needs. We only use this
              information for statistical analysis purposes and then the data is
              removed from the system.
            </p>
            <p>
              Overall, cookies help us provide you with a better website, by
              enabling us to monitor which pages you find useful and which you
              do not. A cookie in no way gives us access to your computer or any
              information about you, other than the data you choose to share
              with us.
            </p>
            <p>
              You can choose to accept or decline cookies. Most web browsers
              automatically accept cookies, but you can usually modify your
              browser setting to decline cookies if you prefer. This may prevent
              you from taking full advantage of the website.
            </p>

            <h5>Controlling your personal information</h5>

            <p>
              You may choose to restrict the collection or use of your personal
              information in the following ways:
            </p>
            <p>
              &#8226; whenever you are asked to fill in a form on the website,
              look for the box that you can click to indicate that you do not
              want the information to be used by anybody for direct marketing
              purposes.
            </p>
            <p>
              &#8226; if you have previously agreed to us using your personal
              information for direct marketing purposes, you may change your
              mind at any time by writing to or emailing us at
              estimatorproconsultants@gmail.com
            </p>

            <p>
              We will not sell, distribute or lease your personal information to
              third parties unless we have your permission or are required by
              law to do so. We may use your personal information to send you
              promotional information about third parties which we think you may
              find interesting if you tell us that you wish this to happen.
            </p>
            <p>
              If you believe that any information we are holding on you is
              incorrect or incomplete, please write to or email us as soon as
              possible, at the above address. We will promptly correct any
              information found to be incorrect.
            </p>

            <h5>Information Collection and Usage</h5>
            <p>
              We collect information that you provide directly to us when using
              our services, such as your name, email address, and contact
              number. This information is used to provide you with the services
              you've requested, including instant generation of estimates and
              communication regarding your projects.
            </p>
            <h5>Sharing of Information</h5>
            <p>
              We do not share your personal information with third parties
              except for the purpose of providing our services. Your data is
              stored securely and is only accessible to authorized personnel.
            </p>
            <h5>Security</h5>
            <p>
              We implement industry-standard security measures to protect your
              data from unauthorized access, alteration, or disclosure. Our
              digital signature feature ensures the security and authenticity of
              your estimates.
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
