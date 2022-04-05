import React from "react";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./sequence.css";
import { Link } from "react-router-dom";

const Sequence = ({ sequence, projId }) => {
  return (
    <div className="cardSeq">
      <div className="card-contentSeq">
        <Link
          to={`/projects/${projId}/sequences/${sequence.id}/shots`}
          className="seq-name"
        >
          {sequence.code}
        </Link>
      </div>
    </div>
  );
};

export default Sequence;
