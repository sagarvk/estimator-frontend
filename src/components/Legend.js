import { Fragment, useEffect, useRef } from "react";
import Typed from "typed.js";

import "./Legend.css";
const Legend = () => {
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
  return (
    <Fragment>
      <h1 style={{ fontStyle: "bold" }}>
        Welcome to <span style={{ color: "#6c55ff" }}>EstimatorPro</span>
      </h1>
      <h1 style={{ fontStyle: "bold" }}>
        Get <span style={{ color: "#6c55ff" }} ref={el}></span>{" "}
      </h1>
      <p className="detailed">
        Enter the details, make payment and get your construction estimate
        instantly downloaded as well as on mail. The estimate generated is as
        per industry standards with latest SOR.
      </p>
    </Fragment>
  );
};

export default Legend;
