import React from "react";
import header from "../Assets/header.png";
import "../CSS/Header.css";
const Header = () => {
  return (
    <div className="main-header-div">
      <div className="header-titles">
        <h1>The Future of Technology</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          non voluptatem illum eaque, at officia quam quia nulla libero
          doloribus.
        </p>
        <button>Checkout</button>
      </div>
      <div className="images-div">
        <img src={header} alt="header" />
      </div>
    </div>
  );
};

export default Header;
