import React from "react";
import google from "../Assets/google.png";
import zoho from "../Assets/zoho.png";
import zomato from "../Assets/zomato.png";
import nasa from "../Assets/nasa.png";
import microsoft from "../Assets/microsoft.png";
import land from "../Assets/range.png";
import "../CSS/Client.css";

const Client = () => {
  return (
    <div className="main-client-div">
      <h1 style={{ textAlign: "center" }}>Your Clients</h1>
      <div className="client-img-div">
        <img src={google} alt="google" />
        <img src={zoho} alt="zoho" />
        <img src={zomato} alt="zomago" />
        <img src={land} alt="range" />
        <img src={nasa} alt="nasa" />
        <img src={microsoft} alt="microsoft" />
      </div>
    </div>
  );
};

export default Client;
