// import axios from "axios";
import projectsData from "../../mockData/projects.json";

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

const doFetch = () => {
  return Promise.resolve({ data: projectsData });
  // return Axios.get(url)    => Promise {response: {data: [.....]}}
  // return Promise.reject( ... );
};

export const fetchProjects = () => {
  return (dispatch) => {
    dispatch(initLoad());
    doFetch()
      .then((response) => {
        const loadedProjects = response.data;
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