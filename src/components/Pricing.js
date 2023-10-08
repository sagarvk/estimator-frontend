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
          <div className="price">
            <div className="header" style={{ backgroundColor: "#6c55ff" }}>
              Premium Charge
              <h1 style={{ color: "#ffffff" }}>
                <small>₹</small> {parseInt(estimateFees).toFixed(2)}{" "}
                <span>/ Estimate</span>
              </h1>
            </div>

            <li>Accurate Quantites</li>
            <li>Updated SSR</li>
            <li>Digitally Signed</li>
            <li>Instant Download</li>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
}
