import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Textcontrols.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Container,
  Label,
  Col,
  Form,
} from "reactstrap";

axios.defaults.baseURL = "http://localhost:4000/";

export default function TextControls() {
  const [despdataList, setdespDataList] = useState([]);
  const [modal, setModal] = useState(false);

  let estimateamount = [];
  let FEES = 499;
  const [eamt, setEamt] = useState({
    estimateAmt: "",
  });

  const toggle = () => setModal(!modal);

  const getDespData = async () => {
    const despdata = await axios.get("/quality/");
    console.log(despdata);
    if (despdata.data.success) {
      setdespDataList(despdata.data.data);
    }
  };
  useEffect(() => {
    getDespData();
  }, []);
  console.log(despdataList);

  const [formData, setFormData] = useState({
    customerName: "",
    address: "",
    plotLength: "",
    plotWidth: "",
    totalBuiltupArea: "",
    numOfFloors: "",
    projectType: "",
    constructionQuality: "",
    mobileNo: "",
    mailId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handOpenRazorpay = (data) => {
    const options = {
      key: "rzp_test_QLwMUVF4PpHZIS",
      amount: Number(data.amount),
      currency: data.currency,
      name: "COMPANY NAME",
      description: "ESTIMATE PAYMENT",
      order_id: data.id,
      send_sms_hash: true,
      handler: function (response) {
        console.log(response, 34);

        axios
          .post("/estimate/payverify", { response: response })
          .then((res) => {
            console.log(res, 37);

            // Reset the form after submission (optional)
            setFormData({
              customerName: "",
              address: "",
              plotLength: "",
              plotWidth: "",
              totalBuiltupArea: "",
              numOfFloors: "",
              projectType: "",
              constructionQuality: "",
              mobileNo: "",
              mailId: "",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      },
      prefill: {
        name: formData.customerName,
        email: formData.mailId,
        contact: formData.mobileNo,
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    axios
      .post("/estimate/createorder", formData)
      .then((res) => {
        console.log(res.data, 29);
        handOpenRazorpay(res.data.data);
        setModal(!modal);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle form submission, for example, send the data to the server or perform any other actions.
    // const runestimate = await axios.post("/estimate/", formData);

    const runestimateamt = await axios.post("/estimate/eamt", formData);

    console.log(runestimateamt);
    let eamount = runestimateamt.data.amtData;
    estimateamount.push({ eamt: eamount });

    console.log(estimateamount[0].eamt);

    // console.log(formData);
    setEamt({ estimateAmt: eamount });
    console.log(eamt.estimateAmt);
    setModal(!modal);

    // Reset the form after submission (optional)
    // setFormData({
    //   customerName: "",
    //   address: "",
    //   plotLength: "",
    //   plotWidth: "",
    //   totalBuiltupArea: "",
    //   numOfFloors: "",
    //   projectType: "",
    //   constructionQuality: "",
    //   mobileNo: "",
    //   mailId: "",
    // });
  };

  return (
    <div>
      <div className="containerbox">
        <div className="container mt-2 col-md-12">
          <Form onSubmit={handleSubmit}>
            <div className="form-group col-md-6">
              <label className="my-2" htmlFor="customerName">
                <strong>Customer Name</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label className="py-2" htmlFor="address">
                <strong>Address</strong>
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="py-2" htmlFor="plotLength">
                  <strong>Plot Length (in ft.)</strong>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="plotLength"
                  name="plotLength"
                  value={formData.plotLength}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="plotWidth">
                  <strong>Plot Width (in ft.)</strong>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="plotWidth"
                  name="plotWidth"
                  value={formData.plotWidth}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="totalBuiltupArea">
                <strong>Total Builtup Area (in sq.ft.)</strong>
              </label>
              <input
                type="number"
                className="form-control"
                id="totalBuiltupArea"
                name="totalBuiltupArea"
                value={formData.totalBuiltupArea}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="numOfFloors">
                <strong>Number of Floors</strong>
              </label>
              <select
                className="form-control"
                id="numOfFloors"
                name="numOfFloors"
                value={formData.numOfFloors}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Number of Floors
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="projectType">
                <strong>Project Type</strong>
              </label>
              <select
                className="form-control"
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select project type
                </option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="constructionQuality">
                <strong>Construction Quality</strong>
              </label>
              <select
                className="form-control"
                id="constructionQuality"
                name="constructionQuality"
                value={formData.constructionQuality}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Construction Quality
                </option>
                {despdataList[0] ? (
                  despdataList.map((el) => {
                    return (
                      <option key={el._id} value={el.name}>
                        {el.name}
                      </option>
                    );
                  })
                ) : (
                  // <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                  // <option value="Luxury">Luxury</option>
                )}
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mobileNo">
                <strong>Mobile Number</strong>
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobileNo"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mailId">
                <strong>Mail id</strong>
              </label>
              <input
                type="email"
                className="form-control"
                id="mailId"
                name="mailId"
                value={formData.mailId}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary my-3">
              Generate Estimate
            </button>
          </Form>
        </div>
        <Modal
          isOpen={modal}
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
                    {parseInt(eamt.estimateAmt).toFixed(2)}
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
                  <h4>{FEES.toFixed(2)}</h4>
                </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handlePayment}>
              Pay Now & Download
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
