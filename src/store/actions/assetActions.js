// import axios from "axios";
import ShotgunApi from "../../components/api/shotgunAPI";

export const initLoad = () => {
  return {
    type: "LOAD_ASSET_INIT",
  };
};

export const loadOk = (assets) => {
  return {
    type: "LOAD_ASSET_OK",
    payload: assets,
  };
};

export const loadFailed = (errorMsg) => {
  return {
    type: "LOAD_ASSET_FAILED",
    payload: errorMsg,
  };
};

export const selectAsset = (assetId) => {
  return {
    type: "SELECT_ASSET",
    payload: assetId,
  };
};

export const startAddSeq = () => {
  return {
    type: "START_ADD_ASSET",
  };
};

export const addOk = (data) => {
  return {
    type: "ADD_ASSET_OK",
    payload: data,
  };
};

export const addFailed = (errorMsg) => {
  return {
    type: "ADD_ASSET_FAILED",
    payload: errorMsg,
  };
};

export const addAsset = (projectId, assetName) => {
  return (dispatch) => {
    dispatch(startAddSeq());
    const assetData = { code: assetName };
    ShotgunApi.saveAsset(projectId, assetData)
      .then((response) => {
        dispatch(addOk(response));
      })
      .catch((err) => {
        const myAction = addFailed(err.message);
        dispatch(myAction);
      });
  };
};

export const fetchAssets = (projID) => {
  return (dispatch) => {
    dispatch(initLoad());
    ShotgunApi.getAssets(projID)
      .then((response) => {
        console.log(response);
        const loadedAssets = response;
        const myAction = loadOk(loadedAssets);
        dispatch(myAction);
        // dispatch(loadOk(response.data));
      })
      .catch((err) => {
        const myAction = loadFailed(err.message);
        dispatch(myAction);
      });
  };
};
