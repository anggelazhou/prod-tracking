// import axios from "axios";
import { getShotData, saveShot } from "../../mockData";

const shotsData = getShotData();

export const initLoad = () => {
  return {
    type: "LOAD_INIT",
  };
};

export const loadOk = (shots) => {
  return {
    type: "LOAD_OK",
    payload: shots,
  };
};

export const loadFailed = (errorMsg) => {
  return {
    type: "LOAD_FAILED",
    payload: errorMsg,
  };
};

export const selectShot = (shotId) => {
  return {
    type: "SELECT_SHOT",
    payload: shotId,
  };
};

export const startAddShot = () => {
  return {
    type: "START_ADD_SHOT",
  };
};

export const addOk = (data) => {
  return {
    type: "ADD_OK",
    payload: data,
  };
};

export const addFailed = (errorMsg) => {
  return {
    type: "ADD_FAILED",
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
    const shotData = { id: shotId, shotName, seqId, img: shotImg };
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

export const fetchShots = (seqID) => {
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
