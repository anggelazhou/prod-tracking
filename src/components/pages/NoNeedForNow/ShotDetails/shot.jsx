import React from "react";
import { useParams } from "react-router-dom";
import TypesSubNavBar from "../../../common/layout/TypeSubNavbar";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./shot.css";

function Shot(project) {
  const { id } = useParams();
  return (
    <div>
      <TypesSubNavBar />
      <div className="wrapper">
        <div className="grid top-shot">
          <a>Shot number - {id}</a>
        </div>
        <div className="grid right">Media</div>
        <div className="grid left">Info</div>
      </div>
    </div>
  );
}

export default Shot;
