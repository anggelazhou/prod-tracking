import React from "react";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./shotList.css";
import Shot from "../Shot";
import { useSelector } from "react-redux";

const ShotList = () => {
  const shots = useSelector((store) => {
    return store.sequences.sequences;
  });
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
