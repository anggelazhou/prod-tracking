import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import seqReducer from "./seqReducer";
import shotReducer from "./shotReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectReducer,
  sequences: seqReducer,
  shots: shotReducer,
});

export default rootReducer;
