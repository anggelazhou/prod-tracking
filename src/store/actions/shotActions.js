// import axios from "axios";
import ShotgunApi from "../../components/api/shotgunAPI";

export const initLoad = () => {
  return {
    type: "LOAD_SHOT_INIT",
  };
};

export const loadOk = (shots) => {
  return {
    type: "LOAD_SHOT_OK",
    payload: shots,
  };
};

export const loadFailed = (errorMsg) => {
  return {
    type: "LOAD_SHOT_FAILED",
    payload: errorMsg,
  };
};

export const startAddShot = () => {
  return {
    type: "START_ADD_SHOT",
  };
};

export const addOk = (data) => {
  return {
    type: "ADD_SHOT_OK",
    payload: data,
  };
};

export const addFailed = (errorMsg) => {
  return {
    type: "ADD_SHOT_FAILED",
    payload: errorMsg,
  };
};

export const addShot = (projectId, seqId, shotName, shotImg) => {
  return (dispatch) => {
    dispatch(startAddShot());
    const shotData = {
      code: shotName,
      image: shotImg,
    };
    ShotgunApi.saveShot(projectId, seqId, shotData)
      .then((response) => {
        dispatch(addOk(response));
      })
      .catch((err) => {
        dispatch(addFailed(err.message));
      });
  };
};

export const fetchShots = (projID, seqID) => {
  return (dispatch) => {
    dispatch(initLoad());
    console.log(seqID);
    ShotgunApi.getShotsForSequence(projID, seqID)
      .then((response) => {
        const loadedShots = response.data;
        console.log(response);
        const myAction = loadOk(loadedShots);
        dispatch(myAction);
        // dispatch(loadOk(response.data));
      })
      .catch((err) => {
        const myAction = loadFailed(err.message);
        dispatch(myAction);
      });
  };
};
