import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./login.css";
import LoginForm from "../../auth/LoginForm";

import axios from "axios";

const AUTH_URL = "https://auth.d2.com/";

function Login() {
  const saltedAuth = btoa("dm-rest-api:dm-rest-api");
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
      Authorization: `Basic ${saltedAuth}`,
    },
  };

  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");
  const [loginOk, setLoginOk] = useState(false);

  const handleLogin = async (details) => {
    const response = await axios.post(
      AUTH_URL,
      { username: details.username, password: details.password },
      axiosConfig
    );
    console.log(details.username);
    console.log(response);
    setLoginOk(response.data === true);

    if (loginOk) {
      setUser({ username: details.username });
      console.log("Logged in, welcome " + details.username);
    } else {
      setError("login failed");
      console.log("Incorrect login by " + details.username);
    }
  };

  const handleLogout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <>
      {loginOk ? (
        <Navigate to="/projects" />
      ) : (
        <div className="login">
          <LoginForm Login={handleLogin} error={error} user={user} />
        </div>
      )}
    </>
  );
}
export default Login;

// export default class login extends Component {
//   render() {
//     return (
//       <div className="login">
//         <LoginForm />
//       </div>
//     );
//   }
// }
