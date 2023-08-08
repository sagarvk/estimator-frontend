import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import { jsPDF } from "jspdf";
import { applyPlugin } from "jspdf-autotable";
import "jspdf-autotable";
import {
  Card,
  CardBody,
  CardGroup,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import "../OwlCarousel2-2.3.4/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css";
import "../OwlCarousel2-2.3.4/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css";
// import "./Textcontrols.css";
applyPlugin(jsPDF);

axios.defaults.baseURL = "http://localhost:4000/";

export default function Textcontrols() {
  const [despdataList, setdespDataList] = useState([]);
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  // const [eamt,seteAmtList]= useState([])

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

  // const getEamt = async()=> {
  //   const eamtdata = await axios.post("/estimate/",formData)
  //   console.log(eamtdata)
  //   if(eamtdata.data.success){
  //     seteAmtList(eamtdata.data.data)
  //   }
  //   console.log(eamt)
  // }
  // useEffect(()=>{
  //   getEamt()

  // },[])
  // console.log(eamt)

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle form submission, for example, send the data to the server or perform any other actions.
    const runestimate = await axios.post("/estimate/", formData);

    console.log(runestimate);
    console.log(formData);

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
  };

  return (
    <div>
      <div className="container mt-2">
        <form onSubmit={handleSubmit}>
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
        </form>
      </div>

      <div class="container mt-2">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title">
              <h2>
                Awesome <span>Features</span>
              </h2>
            </div>
          </div>
        </div>
        <OwlCarousel
          className="owl-carousel features-carousel owl-theme "
          loop
          margin={10}
          nav
          {...options}
        >
          <div class="item">
            <div class="feature-item">
              <div class="icon">
                <i class="fas fa-check"></i>
              </div>
              <h3>User Friendly</h3>
              <p>
                Estimator is extremely user friendly with few input parameters
              </p>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-check"></i>
            </div>
            <h3>Accuracy</h3>
            <p>
              Estimates generated have high accuracy with all necessary checks
            </p>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3>Time Saving</h3>
            <p>It saves time, has estimate is generatedin just a few seconds</p>
          </div>
          <div class="item">
            <div class="icon">
              <i class="fas fa-wallet"></i>
            </div>
            <h3>Cost Effective</h3>
            <p>It saves lots of man hours and indirectly is cost effective</p>
          </div>
        </OwlCarousel>
      </div>

      {/* <!-- How It Works Section Start --> */}

      <div className="container mt-2">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title center">
              <h2>
                How It <span>Works</span>
              </h2>
            </div>
          </div>
        </div>
        <CardGroup>
          <Card
            className="my-2"
            // color="primary"
            style={{
              width: "15rem",
              padding: "0px 20px",
              margin: "0 15px",
              boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
              borderStyle: "-moz-initial",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">Enter Details</CardTitle>
              {/* <CardSubtitle className="mb-2" tag="h6">
                1
              </CardSubtitle> */}
              <CardText>
                Enter the details of the property e.g. Address, Length & Width
                of Plot, Builtup Area of Structure, No. of Floors, Type of
                Structure, Quality of Construction etc.
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="my-2"
            // color="primary"
            style={{
              width: "15rem",
              padding: "0px 20px",
              margin: "0 15px",
              boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
              borderStyle: "-moz-initial",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">View Estimate Amount</CardTitle>

              <CardText>
                After submiting the details, view the estimate amount generated
                for the inputs given.
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="my-2"
            // color="primary"
            style={{
              width: "15rem",
              padding: "0px 20px",
              margin: "0 15px",
              boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
              borderStyle: "-moz-initial",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">Payment</CardTitle>
              <CardText>
                Once you have confirmed the estimate amount and satisfied with
                it, confirm and pay the charges.
              </CardText>
            </CardBody>
          </Card>
          <Card
            className="my-2"
            // color="primary"
            style={{
              width: "15rem",
              padding: "0px 20px",
              margin: "0 15px",
              boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
              borderStyle: "-moz-initial",
            }}
          >
            <CardBody>
              <CardTitle tag="h5">Download the Estimate</CardTitle>
              <CardText>
                Once you have completed the transaction your estimate download
                will start automatically. A mail will also be sent on provided
                mail id.
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </div>

      {/* <!-- Features Section End --> */}
    </div>
  );
}
