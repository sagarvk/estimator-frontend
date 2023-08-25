import "./App.css";
import Navbar from "./components/CustomNavbars";
// import TextControls from "./pages/Textcontrols";
import InputForm from "./components/InputForm";
import Footers from "./components/Footers";
import axios from "axios";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import { Container, Row, Col } from "reactstrap";
import Legend from "./components/Legend";
import { Fragment } from "react";
axios.defaults.baseURL = "http://localhost:4000/";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Container fluid className="main-section">
        <Row>
          <Col md="6">
            <Legend />
          </Col>
          <Col md="6">
            <InputForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <Features />
          </Col>
        </Row>

        <Row>
          <Col>
            <Testimonials />
          </Col>
        </Row>
        <Row>
          <Col>
            <Pricing />
          </Col>
        </Row>
      </Container>
      <Footers />
    </Fragment>
  );
}

export default App;
