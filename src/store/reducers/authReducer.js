const initState = {
  loggedIn: false,
  user: "",
  errorMessage: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_OK":
      return {
        loggedIn: true,
        user: action.payload,
        errorMessage: "",
      };
    case "LOGIN_FAILED":
      return {
        loggedIn: false,
        user: "",
        errorMessage: "Login failed",
      };
    case "LOGOUT_OK":
      return {
        loggedIn: false,
        user: "",
        errorMessage: "",
      };
    case "LOGOUT_FAILED":
      return {
        loggedIn: state.loggedIn,
        user: action.payload,
        errorMessage: "Logout failed",
      };
    default:
      return state;
  }
};

export default authReducer;
