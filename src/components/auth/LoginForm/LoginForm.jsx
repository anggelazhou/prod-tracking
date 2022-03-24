import React, { useState } from "react";
import "./LoginForm.css";

import "@fontsource/quantico";
import "@fontsource/roboto";

function LoginForm({ Login, error }) {
  const [user, setUser] = useState({ username: "", password: "" });

  const loginHandler = (e) => {
    e.preventDefault();

    Login(user);
  };

  return (
    <form onSubmit={loginHandler} className="form">
      {error && <p>{error}</p>}
      <div className="title">Login</div>
      {/* ERROR */}
      <div className="line">
        <input
          type="text"
          username="username"
          placeholder="username"
          id="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          value={user.username}
          className="login-input"
        />
      </div>
      <div className="line">
        <input
          type="password"
          password="password"
          placeholder="password"
          id="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user.password}
          className="login-input"
        />
      </div>
      <div className="line">
        <input type="submit" value="Log In" className="login-button" />
      </div>
    </form>
  );
}

export default LoginForm;
