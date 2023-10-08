import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PaymentSuccess.css"; // Import your custom CSS here

const PaymentSuccess = () => {
  return (
    <Container>
      <Row className="mt-5 justify-content-center payment-success">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="payment-card">
            <CardBody>
              <div className="success-icon">&#10003;</div>
              <h1 className="text-center">Payment Successful</h1>
              <p className="text-center">
                Thank you for your payment. Your order has been successfully
                processed.
              </p>
              <Button
                color="primary"
                className="btn-block continue-shopping-btn"
              >
                Continue Shopping
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSuccess;
