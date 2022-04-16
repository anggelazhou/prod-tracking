import axios from "axios";

const AUTH_URL = "https://auth.d2.com/";

export const loginOk = (user) => {
  return {
    type: "LOGIN_OK",
    payload: user,
  };
};

export const loginFailed = (user) => {
  return {
    type: "LOGIN_FAILED",
    payload: user,
  };
};

export const logoutOk = (user) => {
  return {
    type: "LOGOUT_OK",
    payload: user,
  };
};

export const logoutFailed = (user) => {
  return {
    type: "LOGOUT_FAILED",
    payload: user,
  };
};

function doLogin(user, password) {
  const saltedAuth = btoa("dm-rest-api:dm-rest-api");
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
      Authorization: `Basic ${saltedAuth}`,
    },
  };

  return axios.post(
    AUTH_URL,
    { username: user, password: password },
    axiosConfig
  );
}

function doLogout(user) {
  // call backend
}

//   const handleLogin = async (details) => {
//     const response = await axios.post(
//       AUTH_URL,
//       { username: details.username, password: details.password },
//       axiosConfig
//     );
//     console.log(details.username);
//     console.log(response);
//     setLoginOk(response.data === true);

//     if (loginOk) {
//       setUser({ username: details.username });
//       console.log("Logged in, welcome " + details.username);
//     } else {
//       setError("login failed");
//       console.log("Incorrect login by " + details.username);
//     }
//   };

// const handleLogout = () => {
//   setUser({ name: "", email: "" });
// };

export const loginAction = (user, password) => {
  return (dispatch) => {
    doLogin(user, password)
      .then((response) => {
        console.log(response);
        if (response.data === true) {
          dispatch(loginOk(user));
        } else {
          dispatch(loginFailed(user));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailed(user));
      });
  };
};

export const logoutAction = (user) => {
  return (dispatch) => {
    doLogout(user)
      .then((response) => {
        console.log(response);
        if (response.data === false) {
          dispatch(logoutOk(user));
        } else {
          dispatch(logoutFailed(user));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(logoutFailed(user));
      });
  };
};
