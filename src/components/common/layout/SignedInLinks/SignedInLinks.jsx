import React from "react";
import { Link } from "react-router-dom";
import "./SignedInLinks.css";

import "@fontsource/roboto";

function SignedInLinks() {
  return (
    <Link to="/logout" className="button-link">
      Log out
    </Link>
  );
}

export default SignedInLinks;
