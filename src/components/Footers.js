import React from "react";
export default function Footers() {
  return (
    <footer
      style={{
        display: "flex",
        margin: "25px 0 0 0",
        alignItems: "center",
        backgroundColor: "#6c55ff",
        height: "50px",
        justifyContent: "center",
      }}
    >
      <h6 className="text-center" style={{ color: "white" }}>
        &copy; 2023 EstimatorPro Consultants
      </h6>
    </footer>
  );
}
