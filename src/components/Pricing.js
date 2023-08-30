import React, { useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pricing.css";
import Title from "../common/Title";
import { getCharges } from "./utils";
import { Container, Row } from "reactstrap";
export default function Footers() {
  const [estimateFees, setEstimateFees] = useState(null);
  useEffect(() => {
    async function getData() {
      const estimateFees = await getCharges();
      setEstimateFees(estimateFees);
    }
    getData();
  }, []);
  return (
    <Fragment>
      <Title title="Pricing" />
      <Container className="columns">
        <Row>
          <div class="price">
            <div class="header" style={{ backgroundColor: "#6c55ff" }}>
              Premium Charge
              <h1>
                <small>₹</small> {parseInt(estimateFees).toFixed(2)}{" "}
              </h1>
              <span>/ Estimate</span>
            </div>

            <li>Accurate Quantites</li>
            <li>Updated SOR</li>
            <li>Digitally Signed</li>
            <li>Instant Download</li>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
}
