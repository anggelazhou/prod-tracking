import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TypesSubNavBar from "../../common/layout/TypeSubNavbar";
import ShotList from "../../common/shot/ShotList";
import NewForm from "../../common/newShotForm";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./sequenceDetails.css";

import { connect, useSelect, useDispatch, useSelector } from "react-redux";
import { fetchShots } from "../../../store/actions/shotActions";

const SequenceDetails = ({ shots, startFetchShots }) => {
  const { id } = useParams();

  useEffect(() => {
    startFetchShots(id);
  }, []);

  const [openForm, setOpenForm] = useState(false);

  return (
    <div>
      <TypesSubNavBar />
      <div className="wrapper">
        <div className="topSeq">
          <a>Sequence number - {id}</a>
          <div>
            <button className="openFormBtn" onClick={() => setOpenForm(true)}>
              New
            </button>
            {openForm && <NewForm seqId={id} closeForm={setOpenForm} />}
          </div>
        </div>
        <div className="bottomSeq">
          <a className="type">Shots</a>
          {shots.loading ? (
            <div className="loading">Loading...</div>
          ) : shots.errorMsg ? (
            <div className="error">ERROR: {shots.errorMsg}</div>
          ) : (
            <ShotList />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shots: state.shots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startFetchShots: (id) => dispatch(fetchShots(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SequenceDetails);
