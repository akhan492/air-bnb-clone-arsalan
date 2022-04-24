import React from "react";
import "./Body.css";

export default function Body() {
  return (
    <>
      <div className="body">
        <div className="body__center">
          <div className="learnmore">
            <h1>Help house 100,000 refugees fleeing Ukraine</h1>
            <span>Learn more</span>
          </div>
        </div>
        <div className="div__down">
          <img
            className="bodyImage"
            src="https://a0.muscache.com/im/pictures/8aa32150-e831-40aa-98f5-b743b44c6b27.jpg?im_w=960"
            alt="image"
          />
          <div className="caption">
            <h1>Let your curiosity do the booking</h1>
            <span>i'm flexible</span>
          </div>
        </div>
      </div>
    </>
  );
}
