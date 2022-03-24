// import axios from "axios";
import sequencesData from "../../mockData/sequences.json";

export const initLoad = () => {
  return {
    type: "LOAD_INIT",
  };
};

export const loadOk = (sequences) => {
  return {
    type: "LOAD_OK",
    payload: sequences,
  };
};

export const loadFailed = (errorMsg) => {
  return {
    type: "LOAD_FAILED",
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

const doAddSeq = (data) => {
  sequencesData = [...sequencesData, data];
  return Promise.resolve({
    data,
  });
  // return Axios.post(url)    => Promise {response: {data: [.....]}}
  // return Promise.reject( ... );
};

export const addSequence = (projectId, sequenceId, sequenceName) => {
  return (dispatch) => {
    dispatch(startAddSeq());
    const seqData = { projectId, id: sequenceId, seqName: sequenceName };
    doAddSeq(seqData)
      .then((response) => {
        dispatch(addOk(seqData));
      })
      .catch((err) => {
        const myAction = addFailed(err.message);
        dispatch(myAction);
      });
  };
};

const doFetch = (projID) => {
  return Promise.resolve({
    data: sequencesData.filter((seq) => seq.projectId == projID),
  });
  // return Axios.get(url)    => Promise {response: {data: [.....]}}
  // return Promise.reject( ... );
};

export const fetchSequences = (projID) => {
  return (dispatch) => {
    dispatch(initLoad());
    doFetch(projID)
      .then((response) => {
        const loadedSequences = response.data;
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