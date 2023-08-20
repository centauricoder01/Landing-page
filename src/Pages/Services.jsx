import React from "react";
import Singleservices from "./Singleservices";
import "../CSS/Services.css";
import one from "../Assets/one.webp";
import two from "../Assets/two.webp";
import three from "../Assets/three.webp";
import four from "../Assets/four.webp";
import five from "../Assets/five.png";

const Services = () => {
  return (
    <div className="services-div" id="services">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: "0px", fontWeight: "bolder" }}>
          Your Services
        </h1>
        <p style={{ marginTop: "0px", fontWeight: "bolder" }}>
          Get industry-level expertise in your product.
        </p>
      </div>
      <div className="main-services-div">
        <Singleservices
          img={one}
          heading={"Web Developement"}
          para={
            "This is just  someting that I have written and I am really very happy."
          }
        />
        <Singleservices
          img={two}
          heading={"Web Developement"}
          para={
            "This is just  someting that I have written and I am really very happy."
          }
        />
        <Singleservices
          img={three}
          heading={"Web Developement"}
          para={
            "This is just  someting that I have written and I am really very happy."
          }
        />
        <Singleservices
          img={four}
          heading={"Web Developement"}
          para={
            "This is just  someting that I have written and I am really very happy."
          }
        />
        <Singleservices
          img={five}
          heading={"Web Developement"}
          para={
            "This is just  someting that I have written and I am really very happy."
          }
        />
      </div>
    </div>
  );
};

export default Services;
