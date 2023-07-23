import './App.css';
import Navbar from './components/Navbar';
import Textcontrols from './components/Textcontrols';
import axios from "axios"

axios.defaults.baseURL="http://localhost:4000/"

// const despdata = await axios.get("/quality/");

// console.log(despdata);

function App() {
  return (
    <>
    <Navbar></Navbar>
   
    <Textcontrols/>
    </>
  );
}

export default App;
