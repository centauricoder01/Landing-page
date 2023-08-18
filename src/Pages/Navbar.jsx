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
        <img src={logo} alt="logo" width={100} />
        <div className="navbar-inner-div">
          <p>Services</p>
          <p>Client</p>
          <p>Reviews</p>
          <p>Contact</p>
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
        <p>Services</p>
        <p>Client</p>
        <p>Reviews</p>
        <p>Contact</p>
      </div>
    </>
  );
};

export default Navbar;
