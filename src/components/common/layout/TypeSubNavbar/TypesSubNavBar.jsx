import React from "react";
import { Link } from "react-router-dom";
import "./TypesSubNavBar.css";

import "@fontsource/quantico";
import "@fontsource/roboto";

function TypesSubNavBar({ projId }) {
  return (
    <section className="types-subnavbar">
      <Link to={`/projects/${projId}/sequences`} className="link">
        Sequences
      </Link>
      <Link to={`/projects/${projId}/assets`} className="link">
        Assets
      </Link>
      {/* <Link to="/assets" className="link">
        Assets
      </Link> */}
    </section>
  );
}

export default TypesSubNavBar;
