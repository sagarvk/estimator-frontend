import "./App.css";
import Navbar from "./components/CustomNavbars";
import TextControls from "./pages/Textcontrols";
import Footers from "./components/Footers";
import axios from "axios";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
axios.defaults.baseURL = "http://localhost:4000/";

function App() {
  return (
    <>
      <Navbar />
      <TextControls />
      <Features />
      <Testimonials />
      <Footers />
    </>
  );
}

export default App;
