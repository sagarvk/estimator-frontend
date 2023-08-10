import { Fragment } from "react";
import {
  Card,
  CardBody,
  CardGroup,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";
import Title from "../common/Title";

const Testimonials = () => {
  return (
    <Fragment>
      <div className="container">
        <Title title="How it works" />
        <Container className="d-flex align-items-center justify-content-center">
          <div className="row justify-content-center">
            <CardGroup>
              <div className="col-md-3">
                <Card
                  className="h-100 my-2"
                  // color="primary"
                  style={{
                    width: "15rem",
                    padding: "0px 20px",
                    margin: "0 15px",
                    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
                    borderStyle: "-moz-initial",
                    textAlign: "center",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h5">Enter Details</CardTitle>
                    {/* <CardSubtitle className="mb-2" tag="h6">
                1
              </CardSubtitle> */}
                    <CardText>
                      Enter the details of the property e.g. Address, Length &
                      Width of Plot, Builtup Area of Structure, No. of Floors,
                      Type of Structure, Quality of Construction etc.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-3">
                <Card
                  className="h-100 my-2"
                  // color="primary"
                  style={{
                    width: "15rem",
                    padding: "0px 20px",
                    margin: "0 15px",
                    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
                    borderStyle: "-moz-initial",
                    textAlign: "center",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h5">View Estimate Amount</CardTitle>

                    <CardText>
                      After submiting the details, view the estimate amount
                      generated for the inputs given.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-3">
                <Card
                  className="h-100 my-2"
                  // color="primary"
                  style={{
                    width: "15rem",
                    padding: "0px 20px",
                    margin: "0 15px",
                    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
                    borderStyle: "-moz-initial",
                    textAlign: "center",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h5">Payment</CardTitle>
                    <CardText>
                      Once you have confirmed the estimate amount and satisfied
                      with it, confirm and pay the charges.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-3">
                <Card
                  className="h-100 my-2"
                  // color="primary"
                  style={{
                    width: "15rem",
                    padding: "0px 20px",
                    margin: "0 15px",
                    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
                    borderStyle: "-moz-initial",
                    textAlign: "center",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h5">Download the Estimate</CardTitle>
                    <CardText>
                      Once you have completed the transaction your estimate
                      download will start automatically. A mail will also be
                      sent on provided mail id.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </CardGroup>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Testimonials;
