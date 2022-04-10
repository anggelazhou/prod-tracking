// import axios from "axios";
import ShotgunApi from "../../components/api/shotgunAPI";

export const initLoad = () => {
  return {
    type: "LOAD_SEQUENCE_INIT",
  };
};

export const loadOk = (sequences) => {
  return {
    type: "LOAD_SEQUENCE_OK",
    payload: sequences,
  };
};

export const loadFailed = (errorMsg) => {
  return {
    type: "LOAD_SEQUENCE_FAILED",
    payload: errorMsg,
  };
};

export const selectSequence = (sequenceId) => {
  return {
    type: "SELECT_SEQUENCE",
    payload: sequenceId,
  };
};

export const startAddSeq = () => {
  return {
    type: "START_ADD_SEQUENCE",
  };
};

export const addOk = (data) => {
  return {
    type: "ADD_SEQUENCE_OK",
    payload: data,
  };
};

export const addFailed = (errorMsg) => {
  return {
    type: "ADD_SEQUENCE_FAILED",
    payload: errorMsg,
  };
};

export const addSequence = (projectId, sequenceName) => {
  return (dispatch) => {
    dispatch(startAddSeq());
    const seqData = { code: sequenceName };
    ShotgunApi.saveSequence(projectId, seqData)
      .then((response) => {
        dispatch(addOk(response));
      })
      .catch((err) => {
        const myAction = addFailed(err.message);
        dispatch(myAction);
      });
  };
};

export const fetchSequences = (projID) => {
  return (dispatch) => {
    dispatch(initLoad());
    ShotgunApi.getSequences(projID)
      .then((response) => {
        console.log(response);
        const loadedSequences = response;
        const myAction = loadOk(loadedSequences);
        dispatch(myAction);
        // dispatch(loadOk(response.data));
      })
      .catch((err) => {
        const myAction = loadFailed(err.message);
        dispatch(myAction);
      });
  };
};
