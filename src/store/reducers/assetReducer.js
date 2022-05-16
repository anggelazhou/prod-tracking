const initState = {
  assets: [],
  loading: false,
  errorMsg: null,
  activeAssetId: 0,
};

const assetReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_ASSET_INIT":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_ASSET_OK":
      return {
        loading: false,
        errorMsg: null,
        activeAssetId: 0,
        assets: action.payload,
      };
    case "LOAD_ASSET_FAILED":
      return {
        loading: false,
        errorMsg: action.payload,
        activeAssetId: 0,
        assets: [],
      };
    case "SELECT_ASSET_ASSET":
      return {
        ...state,
        activeAssetId: action.payload,
      };
    case "START_ADD_ASSET":
      return {
        ...state,
      };
    case "ADD_ASSET_OK":
      return {
        ...state,
        assets: [...state.assets, action.payload],
      };
    default:
      return state;
  }
};

export default assetReducer;
