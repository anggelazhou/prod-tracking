const initState = {
  shots: [],
  loading: false,
  errorMsg: null,
  activeShotId: 0,
};

const shotReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_INIT":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_OK":
      return {
        loading: false,
        errorMsg: null,
        activeShotId: 0,
        shots: action.payload,
      };
    case "LOAD_FAILED":
      return {
        loading: false,
        errorMsg: action.payload,
        activeShotId: 0,
        shots: [],
      };
    case "SELECT_SHOT":
      return {
        ...state,
        activeShotId: action.payload,
      };
    default:
      return state;
  }
};

export default shotReducer;
