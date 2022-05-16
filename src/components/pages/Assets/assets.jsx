import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TypesSubNavBar from "../../common/layout/TypeSubNavbar";
import AssetList from "../../common/asset/AssetList";
import NewForm from "../../common/newAssetForm";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./assets.css";

import { connect, useSelector } from "react-redux";
import { fetchAssets } from "../../../store/actions/assetActions";

const Assets = ({ assets, startFetchAssets }) => {
  const { id } = useParams();

  const currProj = useSelector((store) => {
    const projs = store.projects.projects.filter((proj) => proj.id == id);
    return projs && projs.length == 1 ? projs[0] : null;
  });

  useEffect(() => {
    startFetchAssets(id);
  }, [id]);

  const [openForm, setOpenForm] = useState(false);

  return (
    <div>
      <TypesSubNavBar projId={id} />
      <div className="wrapper">
        <div className="top">
          <div>
            <div className="proj-name">
              {currProj.name}
              <a className="type"> {">"} ASSETS</a>
            </div>

            <img
              src={currProj.image}
              alt="project image"
              className="proj-img"
            />
          </div>
          <div className="middle">
            <div className="button-sec">
              <button className="openFormBtn" onClick={() => setOpenForm(true)}>
                + Create New Asset
              </button>
            </div>
          </div>
          {openForm && <NewForm projId={id} closeForm={setOpenForm} />}
        </div>
        <div className="bottom">
          {/* <div className="typeSeq">Assets</div> */}
          {assets.loading ? (
            <div className="loading">Loading...</div>
          ) : assets.errorMsg ? (
            <div className="error">ERROR: {assets.errorMsg}</div>
          ) : assets.assets.length == 0 ? (
            <div className="none">No assets</div>
          ) : (
            <AssetList projId={id} />
          )}
        </div>
        {/* <div className="grid left">Info</div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    assets: state.assets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startFetchAssets: (id) => dispatch(fetchAssets(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Assets);
