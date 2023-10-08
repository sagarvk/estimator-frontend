import {
  Button,
  Col,
  Container,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { useState } from "react";
import {
  createOrder,
  getCompanyName,
  getKeyId,
  getRazorPayOptions,
  razorPayHandler,
  stripeHandler,
} from "./utils";
import loadingIndicator from "../loading.gif";
import { loadStripe } from "@stripe/stripe-js";

import styles from "./PaymentModal.module.css";

const PaymentModal = ({
  isOpen,
  close,
  toggle,
  formData,
  estimatedAmount,
  resetForm,
  estimateFees,
}) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    const stripe = await loadStripe(
      `pk_test_51NrhvoSJukRFIJnJz8Ah2WWELi7xOjKZrfSbOpCLRKHp5ihFtOKJjyqbTjTjAjYZORrKO0serrJl244OpJfR7u2j00rDBoW3iB`
    );

    // const stripepay = await axios.post("/estimate/stripecheckout", {
    //   response,
    //   formData,
    // });
    // const sessions = await stripepay.json();
    // const result = stripe.redirectToCheckout({ sessionId: sessions.id });
    // if (result.error) {
    //   console.log(result.error);
    // }
    const session = await stripeHandler(formData);
    console.log(session);

    const result = stripe.redirectToCheckout({ sessionId: session.data.id });
    if (result.error) {
      console.log(result.error);
    }
    // const order = await createOrder(formData);
    // const keyid = await getKeyId();
    // const companyname = await getCompanyName();
    // const options = getRazorPayOptions(order, formData, keyid, companyname);
    // options.handler = async function (response) {
    //   await razorPayHandler(response, order, formData);
    //   setLoading(false);
    //   resetForm();
    //   close();
    // };
    // options.modal = {
    //   ondismiss: () => {
    //     setLoading(false);
    //   },
    // };
    // const razorPay = new window.Razorpay(options);
    // razorPay.open();
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      size="lg"
      backdrop={true}
      fade={true}
      centered={true}
    >
      <ModalHeader toggle={toggle}>Payment Details</ModalHeader>
      <ModalBody>
        <Container>
          <Row>
            <Col>
              <Label forhtml="h4">
                <b>Name of Client</b>
              </Label>
            </Col>
            <Col>
              <h4>{formData.customerName}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label forhtml="h4">
                <b>Total Estimate Amt</b>
              </Label>
            </Col>
            <Col>
              <h4 id="estimateamt" name="estimateamt">
                {parseInt(estimatedAmount).toFixed(2)}
              </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label forhtml="h4">
                <b>Charges to be Paid</b>
              </Label>
            </Col>
            <Col>
              <h4>{parseInt(estimateFees).toFixed(2)}</h4>
            </Col>
          </Row>
          <Row>
            <Col className={styles.center}>
              {loading && <img src={loadingIndicator} alt="loading..." />}
            </Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button
          color="success"
          size="lg"
          onClick={handlePayment}
          disabled={loading}
        >
          Pay Now & Download
        </Button>{" "}
        <Button color="danger" size="lg" onClick={close} disabled={loading}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default PaymentModal;
