import React from "react";
import "../CSS/Reviews.css";

const Singlereview = () => {
  return (
    <div className="main-review-div">
      <div className="single-review-div">
        <h3 style={{ marginBottom: "5px", marginTop: "1px" }}>
          Good Post and I am Happy.
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
          aperiam tenetur iure debitis at amet.
        </p>
        <div className="review-arrow">
          
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        alt="small-img"
        width={50}
      />
      <h4>Rajendra Patel</h4>
      <p>CEO of Apple</p>
    </div>
  );
};

export default Singlereview;
