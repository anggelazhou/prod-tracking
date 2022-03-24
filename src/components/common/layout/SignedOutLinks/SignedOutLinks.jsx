import React from "react";
import { Link } from "react-router-dom";
import "./SignedOutLinks.css";

import "@fontsource/quantico";
import "@fontsource/roboto";

function SignedOutLinks() {
  return (
    <Link to="/login" className="button-link">
      Log in
    </Link>
  );
}

export default SignedOutLinks;
