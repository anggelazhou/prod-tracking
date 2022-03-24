import React from "react";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./shotList.css";
import { Link } from "react-router-dom";
import Shot from "../Shot";
import { connect, useSelect, useDispatch } from "react-redux";

const ShotList = ({ shots }) => {
  return (
    <div className="shots">
      {shots &&
        shots.map((shot) => {
          return <Shot shot={shot} key={shot.id} className="shot" />;
        })}
    </div>
  );
};

export default ShotList;
