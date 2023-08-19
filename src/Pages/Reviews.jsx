import React from "react";
import "../CSS/Reviews.css";
import Singlereview from "./Singlereview";

const Reviews = () => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div className="main-heading-review-div">
        <h1 style={{ marginBottom: "0px", fontWeight: "bolder" }}>
          Our Client Speak
        </h1>
        <p style={{ marginTop: "0px", fontWeight: "bolder" }}>
          We have been working with clients around the world
        </p>
      </div>
      <div className="review-div">
        <Singlereview />
        <Singlereview />
        <Singlereview />
      </div>
    </div>
  );
};

export default Reviews;
