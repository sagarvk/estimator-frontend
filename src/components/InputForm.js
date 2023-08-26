import { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "reactstrap";

import * as config from "./InputForm.config";
import axios from "axios";
import Field from "../common/Field";

import "./InputForm.module.css";
import PaymentModal from "./PaymentModal";
import { getEstimateAmount } from "./utils";

const InputForm = () => {
  const [formState, setFormState] = useState(config.formState);
  const [formFields, setFormFields] = useState({});
  const [baseQualities, setBaseQualities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [estimatedAmount, setEstimatedAmount] = useState(null);

  useEffect(() => {
    async function getData() {
      const projectTypes = await axios.get("/ptype");
      const qualities = await axios.get("/quality");

      const { projectType, constructionQuality } = config;
      setFormFields({
        ...config,
        projectType: {
          ...projectType,
          options: projectTypes.data.data,
        },
        constructionQuality: {
          ...constructionQuality,
          options: [],
        },
      });
      setBaseQualities(qualities.data.data);
    }
    getData();
  }, []);

  const handleOnChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handlePropertyTypeChange = (e) => {
    const projectType = e.target.value;
    setFormState({
      ...formState,
      projectType,
      constructionQuality: "",
    });
    if (projectType) {
      const applicableQualities = baseQualities.filter(
        (bq) => bq.ptype === projectType
      );

      setFormFields({
        ...formFields,
        constructionQuality: {
          ...formFields.constructionQuality,
          options: applicableQualities,
        },
      });
    } else {
      setFormFields({
        ...formFields,
        constructionQuality: {
          ...formFields.constructionQuality,
          options: [],
        },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const estimateAmount = await getEstimateAmount(formState);
    setEstimatedAmount(estimateAmount.data.amtData);
    open();
  };

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const resetForm = () => setFormState(config.formState);

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <h3 style={{ textAlign: "center" }}>Estimate Details</h3>
        <Field
          {...formFields.customerName}
          handleOnChange={handleOnChange}
          value={formState.customerName}
          tabIndex="1"
        />
        <Field
          {...formFields.address}
          handleOnChange={handleOnChange}
          value={formState.address}
          tabIndex="2"
        />
        <Row>
          <Col md="6">
            <Field
              {...formFields.plotLength}
              handleOnChange={handleOnChange}
              value={formState.plotLength}
              tabIndex="3"
            />
            <Field
              {...formFields.totalBuiltupArea}
              handleOnChange={handleOnChange}
              value={formState.totalBuiltupArea}
              tabIndex="5"
            />
            <Field
              {...formFields.projectType}
              handleOnChange={handlePropertyTypeChange}
              value={formState.projectType}
              tabIndex="7"
            />
            <Field
              {...formFields.mobileNo}
              handleOnChange={handleOnChange}
              value={formState.mobileNo}
              tabIndex="10"
            />
          </Col>
          <Col md="6">
            <Field
              {...formFields.plotWidth}
              handleOnChange={handleOnChange}
              value={formState.plotWidth}
              tabIndex="4"
            />
            <Field
              {...formFields.numberOfFloors}
              handleOnChange={handleOnChange}
              value={formState.numOfFloors}
              tabIndex="6"
            />
            <Field
              {...formFields.constructionQuality}
              handleOnChange={handleOnChange}
              value={formState.constructionQuality}
              disabled={!formState.projectType}
              tabIndex="9"
            />
            <Field
              {...formFields.mailId}
              handleOnChange={handleOnChange}
              value={formState.mailId}
              tabIndex="11"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button disabled={isOpen} color="primary" type="submit">
              Submit
            </Button>
          </Col>
          <Col>
            <Button
              color="danger"
              onClick={() => setFormState(config.formState)}
            >
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
      <PaymentModal
        formData={formState}
        isOpen={isOpen}
        close={close}
        estimatedAmount={estimatedAmount}
        resetForm={resetForm}
      />
    </Fragment>
  );
};

export default InputForm;
