import "./App.css";
import Navbar from "./components/CustomNavbars";
import Home from "./components/Home";
// import InputForm from "./components/InputForm";
import Footers from "./components/Footers";
import axios from "axios";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Features from "./components/Features";
// import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import { Container } from "reactstrap";

import AboutUs from "./components/AboutUs";
// import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import Cancellation from "./components/Cancellation";
import Shipping from "./components/Shipping";
import ScrollToTop from "./common/ScrollToTop";
import Comments from "./components/Comments";
// ("");
axios.defaults.baseURL = "https://estimator-backend-7m3w.onrender.com/";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Container fluid className="main-section">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/testimonials" element={<Comments />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route exact path="/terms&consditions" element={<Terms />} />
          <Route exact path="/cancellation" element={<Cancellation />} />
          <Route exact path="/shipping" element={<Shipping />} />
        </Routes>
      </Container>
      <Footers />
    </Router>
  );
}

export default App;
