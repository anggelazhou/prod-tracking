// import axios from "axios";
import ShotgunApi from "../../components/api/shotgunAPI";
import { getShotData, saveShot } from "../../mockData";

const shotsData = getShotData();

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

const doAddShot = (data) => {
  saveShot(data);
  return Promise.resolve({ data });
  // return Axios.post(url)    => Promise {response: {data: [.....]}}
  // return Promise.reject( ... );
};

export const addShot = (shotId, shotName, seqId, shotImg) => {
  return (dispatch) => {
    dispatch(startAddShot());
    const shotData = {
      id: shotId,
      code: shotName,
      sg_sequence: seqId,
      image: shotImg,
    };
    doAddShot(shotData)
      .then((response) => {
        dispatch(addOk(shotData));
      })
      .catch((err) => {
        dispatch(addFailed(err.message));
      });
  };
};

const doFetch = (seqID) => {
  return Promise.resolve({
    data: shotsData.filter((shot) => shot.seqId == seqID),
  });
  // return Axios.get(url)    => Promise {response: {data: [.....]}}
  // return Promise.reject( ... );
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

export const fetchShots2 = (seqID) => {
  return (dispatch) => {
    dispatch(initLoad());
    doFetch(seqID)
      .then((response) => {
        const loadedShots = response.data;
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
