import React from "react";
export default function Footers() {
  return (
    <div className="container">
      <footer
        style={{
          display: "flex",
          margin: "25px",
          alignItems: "center",
          backgroundColor: "#6c55ff",
          height: "50px",
          justifyContent: "center",
        }}
      >
        {/* <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="" className="nav-link px-2 ">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link px-2 ">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link px-2 ">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link px-2 ">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 ">
              About
            </a>
          </li>
        </ul> */}
        <h6 className="text-center" style={{ color: "white" }}>
          &copy; 2023 Company, Inc
        </h6>
      </footer>
    </div>
  );
}
