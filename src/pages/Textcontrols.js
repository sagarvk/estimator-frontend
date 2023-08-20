import React, { useEffect, useState, Component, useRef } from "react";
import axios from "axios";
import Typed from "typed.js";
import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";
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
  FormGroup,
  Input,
} from "reactstrap";
import fileDownload from "js-file-download";

axios.defaults.baseURL = "http://localhost:4000/";

export default function TextControls() {
  const [despdataList, setdespDataList] = useState([]);
  const [ptypedataList, setptypeDataList] = useState([]);
  const [modal, setModal] = useState(false);

  let estimateamount = [];
  let FEES = 499;
  const [eamt, setEamt] = useState({
    estimateAmt: "",
  });

  const toggle = () => setModal(!modal);

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Instant Estimate Download",
        "Accurate Calculations",
        "Digitally Signed Estimate",
        "With Latest SOR",
      ],
      startDelay: 200,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 500,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  const getPtypeData = async () => {
    const ptypedata = await axios.get("/ptype/");
    console.log(ptypedata);
    if (ptypedata.data.success) {
      setptypeDataList(ptypedata.data.data);
    }
  };
  useEffect(() => {
    getPtypeData();
  }, []);
  const [selectedptype, setSelectedptype] = useState("");

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
    setSelectedptype(e.target.value);
    const despdata = axios.post("/quality/", formData).then((response) => {
      console.log(response.data);
      setdespDataList(response.data.data);
    });
  };
  const handlePtype = (e) => {
    setSelectedptype(e.target.value);
    console.log(selectedptype);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    axios.post("/quality/", formData).then((response) => {
      console.log(response.data);
      setdespDataList(response.data.data);
    });
  };

  const handOpenRazorpay = (data) => {
    let payamt = Number(data.amount);
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
        let roid = response.razorpay_order_id;
        let rpid = response.razorpay_payment_id;

        axios
          .post("/estimate/payverify", { response: response })
          .then((res) => {
            console.log(res, 37);
            if (res.data.message === "Valid Sign") {
              (async () => {
                await axios
                  .post("/estimate/", formData, {
                    responseType: "blob",
                    headers: { Accept: "application/pdf" },
                  })
                  .then((responsefile) => {
                    // Create a Blob from the response data
                    const pdfBlob = new Blob([responsefile.data], {
                      type: "application/pdf",
                    });

                    // Create a temporary URL for the Blob
                    const furl = window.URL.createObjectURL(pdfBlob);

                    // Create a temporary <a> element to trigger the download
                    const tempLink = document.createElement("a");
                    tempLink.href = furl;
                    tempLink.setAttribute(
                      "download",
                      `Estimate_${formData.customerName}.pdf`
                    ); // Set the desired filename for the downloaded file

                    // Append the <a> element to the body and click it to trigger the download
                    document.body.appendChild(tempLink);
                    tempLink.click();

                    // Clean up the temporary elements and URL
                    document.body.removeChild(tempLink);
                    window.URL.revokeObjectURL(furl);

                    // fileDownload(
                    //   responsefile.data,
                    //   `${formData.customerName}.pdf`
                    // );
                    // responsefile.data = "";
                  });
              })();

              (async () => {
                await axios
                  .post("/client/addclient", {
                    response: response,
                    formData,
                    rorder_id: roid,
                    rpayment_id: rpid,
                    pay_amt: payamt,
                  })
                  .then((res) => {
                    console.log(res, 37);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })();
            } else {
              // const MySwal = withReactContent(Swal);
              // MySwal.fire({
              //   title: <strong>Payment Failed</strong>,
              //   html: <i>Payment Failed!!! Pls try again.</i>,
              //   icon: "error",
              // });
            }

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
        <Container className="main-container">
          <Row>
            <Col className="main-img" md="6">
              <Row>
                <h1>
                  Welcome to <span style={{ color: "blue" }}>EstimatorPro</span>
                </h1>
                <h1>
                  Get <span ref={el}></span>{" "}
                </h1>
                <p>
                  Enter the details, make payment and get your construction
                  estimate instantly downloaded as well as on mail. The estimate
                  generated is as per industry standards with latest SOR.
                </p>
              </Row>
            </Col>
            <Col className="main-form">
              <Form onSubmit={handleSubmit}>
                <h3 style={{ textAlign: "center" }}>Estimate Details</h3>
                <FormGroup>
                  <Label className="my-2" htmlFor="customerName">
                    <strong>Customer Name</strong>
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="customerName"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="py-2" htmlFor="address">
                    <strong>Address</strong>
                  </Label>
                  <Input
                    className="form-control"
                    type="textarea"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="4"
                    required
                  />
                </FormGroup>

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label className="" htmlFor="plotLength">
                        <strong>Plot Length (in ft.)</strong>
                      </Label>
                      <Input
                        type="number"
                        className="form-control"
                        id="plotLength"
                        name="plotLength"
                        value={formData.plotLength}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="plotWidth">
                        <strong>Plot Width (in ft.)</strong>
                      </Label>
                      <Input
                        type="number"
                        className="form-control"
                        id="plotWidth"
                        name="plotWidth"
                        value={formData.plotWidth}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="totalBuiltupArea">
                        <strong>Total Builtup Area (in sq.ft.)</strong>
                      </Label>
                      <Input
                        type="number"
                        className="form-control"
                        id="totalBuiltupArea"
                        name="totalBuiltupArea"
                        value={formData.totalBuiltupArea}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="numOfFloors">
                        <strong>Number of Floors</strong>
                      </Label>
                      <Input
                        type="select"
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
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="projectType">
                        <strong>Project Type</strong>
                      </Label>
                      <Input
                        className="form-control"
                        type="select"
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handlePtype}
                        onClick={handlePtype}
                        required
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        {ptypedataList[0] ? (
                          ptypedataList.map((ele) => {
                            return (
                              <option key={ele._id} value={ele.pname}>
                                {ele.pname}
                              </option>
                            );
                          })
                        ) : (
                          <option value="Premium">Premium</option>
                        )}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="constructionQuality">
                        <strong>Construction Quality</strong>
                      </Label>
                      <Input
                        className="form-control"
                        type="select"
                        id="constructionQuality"
                        name="constructionQuality"
                        value={formData.constructionQuality}
                        onChange={handleChange}
                        // onClick={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Construction Quality
                        </option>
                        {selectedptype && despdataList[0] ? (
                          despdataList.map((el) => {
                            return (
                              <option key={el._id} value={el.name}>
                                {el.name}
                              </option>
                            );
                          })
                        ) : (
                          <option value="Premium">Premium</option>
                        )}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="mobileNo">
                        <strong>Mobile Number</strong>
                      </Label>
                      <Input
                        type="tel"
                        className="form-control"
                        id="mobileNo"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="mailId">
                        <strong>Mail id</strong>
                      </Label>
                      <Input
                        type="email"
                        className="form-control"
                        id="mailId"
                        name="mailId"
                        value={formData.mailId}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button type="submit" color="primary" className="button" block>
                  Generate Estimate
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
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
            <Button color="success" size="lg" onClick={handlePayment}>
              Pay Now & Download
            </Button>{" "}
            <Button color="danger" size="lg" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
