import React from "react";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./shot.css";
// import { Link } from "react-router-dom";

const Shot = ({ shot }) => {
  return (
    <div className="cardShot">
      <div className="card-contentShot">
        <div className="image-container">
          <img src={shot.image} />
        </div>
        {/* <Link to={`/shots/${shot.id}`} className="shot-name"> */}
        {shot.code}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Shot;
