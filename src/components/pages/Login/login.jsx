import React, { useState } from "react";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./login.css";
import LoginForm from "../../auth/LoginForm";
import { loginAction, logoutAction } from "../../../store/actions/authActions";
import { connect } from "react-redux";

function Login({ loginOk, error, handleLogin, handleLogout }) {
  return (
    <>
      {loginOk ? (
        <div>Logged in!</div>
      ) : (
        <div className="login">
          <LoginForm Login={handleLogin} error={error} />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loginOk: state.auth.loggedIn,
    error: state.auth.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (user, password) => dispatch(loginAction(user, password)),
    handleLogout: (user) => dispatch(logoutAction(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
