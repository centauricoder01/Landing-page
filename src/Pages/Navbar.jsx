import React, { useState } from "react";
import logo from "../Assets/logo.png";
import "../CSS/Navbar.css";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { GiCrossedBones } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState("hide-responsive-navbar-div");

  const handleChange = () => {
    if (show === "responsive-navbar-div") {
      setShow("hide-responsive-navbar-div");
    } else {
      setShow("responsive-navbar-div");
    }
  };
  return (
    <>
      <div className="main-navbar-div">
        <a href="#home">
          <img src={logo} alt="logo" width={100} />
        </a>
        <div className="navbar-inner-div">
          <a href="#client">Client</a>
          <a href="#services">Services</a>
          <a href="#review">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <BsMenuButtonWideFill
          size={30}
          className="main-navbar-menu"
          onClick={handleChange}
        />
      </div>

      {/* RESPONSIVE NAVBAR START FROM HERE  */}
      <div className={show}>
        <div className="responsive-icons">
          <img src={logo} alt="logo" width={100} />
          <GiCrossedBones onClick={handleChange} />
        </div>
        <a href="#client">Client</a>
        <a href="#services">Services</a>
        <a href="#review">Reviews</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
};

export default Navbar;
