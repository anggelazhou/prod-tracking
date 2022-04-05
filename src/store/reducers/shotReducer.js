const initState = {
  shots: [],
  loading: false,
  errorMsg: null,
};

const shotReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_SHOT_INIT":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_SHOT_OK":
      return {
        loading: false,
        errorMsg: null,
        shots: action.payload,
      };
    case "LOAD_SHOT_FAILED":
      return {
        loading: false,
        errorMsg: action.payload,
        shots: [],
      };
    case "START_ADD_SHOT":
      return {
        ...state,
      };
    case "ADD_SHOT_OK":
      return {
        ...state,
        shots: [...state.shots, action.payload],
      };
    default:
      return state;
  }
};

export default shotReducer;
