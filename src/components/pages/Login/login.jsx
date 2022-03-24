import React, { useState } from "react";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./login.css";
import LoginForm from "../../auth/LoginForm";

import axios from "axios";

const AUTH_URL = "https://auth.d2.com/";

function Login() {
  const env = "de"; //change

  const adminUser = {
    username: "dm-rest-api",
    password: "dm-rest-api",
  };

  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");

  const handleLogin = async (details) => {
    console.log(details);

    let loginOk = false;
    if (env === "dev") {
      loginOk =
        details.username === adminUser.username &&
        details.password === adminUser.password;
    } else {
      const response = await axios.post(
        AUTH_URL,
        {},
        { auth: { username: details.username, password: details.password } }
      );
      loginOk = response.status === 200;
    }
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
      {user.username != "" ? (
        <div>Logged in!</div>
      ) : (
        <div className="login">
          <LoginForm Login={handleLogin} error={error} />
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
