import React from "react";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./asset.css";
import { Link } from "react-router-dom";

const Asset = ({ asset, projId }) => {
  return (
    <div className="cardAsset">
      <div className="card-contentAsset">
        <Link
          to={`/projects/${projId}/assets/${asset.id}/shots`}
          className="asset-name"
        >
          {asset.code}
        </Link>
      </div>
    </div>
  );
};

export default Asset;
