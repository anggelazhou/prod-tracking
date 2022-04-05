const initState = {
  sequences: [],
  loading: false,
  errorMsg: null,
  activeSequenceId: 0,
};

const seqReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_SEQUENCE_INIT":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_SEQUENCE_OK":
      return {
        loading: false,
        errorMsg: null,
        activeSequenceId: 0,
        sequences: action.payload,
      };
    case "LOAD_SEQUENCE_FAILED":
      return {
        loading: false,
        errorMsg: action.payload,
        activeSequenceId: 0,
        sequences: [],
      };
    case "SELECT_SEQUENCE_SEQUENCE":
      return {
        ...state,
        activeSequenceId: action.payload,
      };
    case "START_ADD_SEQUENCE":
      return {
        ...state,
      };
    case "ADD_SEQUENCE_OK":
      return {
        ...state,
        sequences: [...state.sequences, action.payload],
      };
    default:
      return state;
  }
};

export default seqReducer;
