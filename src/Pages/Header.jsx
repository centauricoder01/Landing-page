import React from "react";
import "../CSS/Header.css";
const Header = () => {
  return (
    <div className="main-header-div">
      <div className="col text-col">
        <h1>Technology</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt at,
          ipsam modi sequi iusto suscipit. Aliquam distinctio eveniet optio
          ipsum laboriosam nemo iusto eos fuga.
        </p>
        <button>Explore</button>
      </div>
      <div className="col card-col">
        <div className="card card1">
          <h3>Same Technology</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            iste!
          </p>
        </div>
        <div className="card card2">
          <h3>Same Technology</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            iste!
          </p>
        </div>
        <div className="card card3">
          <h3>Same Technology</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            iste!
          </p>
        </div>
        <div className="card card4">
          <h3>Same Technology</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            iste!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
