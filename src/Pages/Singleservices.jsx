import React from "react";
import "../CSS/Services.css";

const Singleservices = ({ img, heading, para }) => {
  return (
    <div className="single-services-div">
      <img src={img} alt="one" width={100} style={{ marginBottom: "0px" }} />
      <h2 style={{ marginBottom: "0px", marginTop: "0px" }}>{heading}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        non praesentium molestias! Quo cumque aperiam praesentium vel autem
        maxime ipsam!
      </p>
      <button>Checkout</button>
    </div>
  );
};

export default Singleservices;
