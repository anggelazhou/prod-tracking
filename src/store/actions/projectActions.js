import axios from "axios";
import ShotgunApi from "../../components/api/shotgunAPI";

export const initLoad = () => {
  return {
    type: "LOAD_INIT",
  };
};

export const loadOk = (projects) => {
  return {
    type: "LOAD_OK",
    payload: projects,
  };
};

export const loadFailed = (errorMsg) => {
  return {
    type: "LOAD_FAILED",
    payload: errorMsg,
  };
};

export const selectProject = (projectId) => {
  return {
    type: "SELECT_PROJECT",
    payload: projectId,
  };
};

export const fetchProjects = () => {
  return (dispatch) => {
    dispatch(initLoad());
    ShotgunApi.getProjects()
      .then((response) => {
        console.log(response);
        const loadedProjects = response;
        const myAction = loadOk(loadedProjects);
        dispatch(myAction);
        // dispatch(loadOk(response.data));
      })
      .catch((err) => {
        const myAction = loadFailed(err.message);
        dispatch(myAction);
      });
  };
};
