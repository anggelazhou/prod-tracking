import React from "react";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./shot.css";

const Shot = ({ shot }) => {
  return (
    <div className="cardShot">
      <div className="card-contentShot">
        <div className="image-container">
          <img src={shot.image} />
        </div>
        {shot.code}
      </div>
    </div>
  );
};

export default Shot;
