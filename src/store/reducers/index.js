import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import seqReducer from "./seqReducer";
import shotReducer from "./shotReducer";
import assetReducer from "./assetReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  assets: assetReducer,
  projects: projectReducer,
  sequences: seqReducer,
  shots: shotReducer,
});

export default rootReducer;
