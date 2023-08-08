import "./App.css";
import Navbar from "./components/CustomNavbars";
import Textcontrols from "./pages/Textcontrols";
import Footers from "./components/Footers";
import axios from "axios";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
axios.defaults.baseURL = "http://localhost:4000/";

// const despdata = await axios.get("/quality/");

// console.log(despdata);

function App() {
  return (
    <>
      <Navbar />
      <Textcontrols />
      <Footers />
    </>
  );
}

export default App;
