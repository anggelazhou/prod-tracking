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
