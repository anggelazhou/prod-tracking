import React from "react";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./assetList.css";
import Asset from "../Asset";
import { useSelector } from "react-redux";

const AssetList = ({ projId }) => {
  const assets = useSelector((store) => {
    return store.assets.assets;
  });
  return (
    <div className="assets">
      {assets &&
        assets.map((asset) => {
          return (
            <Asset
              asset={asset}
              key={asset.id}
              projId={projId}
              className="asset"
            />
          );
        })}
    </div>
  );
};

export default AssetList;
