const initState = {
  projects: [],
  loading: false,
  errorMsg: null,
  activeProjectId: 0,
};

const projectReducer = (state = initState, action) => {
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
        activeProjectId: 0,
        projects: action.payload,
      };
    case "LOAD_FAILED":
      return {
        loading: false,
        errorMsg: action.payload,
        activeProjectId: 0,
        projects: [],
      };
    case "SELECT_PROJECT":
      return {
        ...state,
        activeProjectId: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
