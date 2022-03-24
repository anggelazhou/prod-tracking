import React from "react";
import { Link } from "react-router-dom";
import "./TypesSubNavBar.css";

import "@fontsource/quantico";
import "@fontsource/roboto";

function TypesSubNavBar() {
  return (
    <section className="types-subnavbar">
      <Link to="/sequences" className="link">
        Sequences
      </Link>
      <Link to="/shots" className="link">
        Shots
      </Link>
      {/* <Link to="/assets" className="link">
        Assets
      </Link> */}
    </section>
  );
}

export default TypesSubNavBar;
