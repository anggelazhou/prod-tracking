import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SignedInLinks from "../SignedInLinks";
import SignedOutLinks from "../SignedOutLinks";

import "@fontsource/quantico";
import "@fontsource/roboto";

function Navbar() {
  return (
    <section className="navbar">
      <Link to="/" className="logo">
        <img
          src={require("../../../static/images/DDlogo.png")}
          alt="logo"
          className="img"
        />
        <a className="logo-text">PROD TRACKER</a>
      </Link>
      <a className="button">
        <SignedInLinks />
        <SignedOutLinks />
        {/* CHANGE TO ACC LOGOUT, NOT GO TO FORM */}
      </a>
    </section>
  );
}

export default Navbar;
