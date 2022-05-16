import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ShotList from "../../common/shot/ShotList";
import NewForm from "../../common/newShotForm";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./sequenceDetails.css";

import { connect, useSelector } from "react-redux";
import { fetchShots } from "../../../store/actions/shotActions";

const SequenceDetails = ({ shots, startFetchShots }) => {
  const { pid, id } = useParams();

  const currSeq = useSelector((store) => {
    const seqs = store.sequences.sequences.filter((seq) => seq.id == id);
    return seqs && seqs.length == 1 ? seqs[0] : null;
  });

  useEffect(() => {
    console.log(pid, id);
    startFetchShots(pid, id);
  }, []);

  const [openForm, setOpenForm] = useState(false);

  return (
    <div>
      {/* <TypesSubNavBar /> */}
      <div className="wrapperSeq">
        <div className="topSeq">
          <div className="seqName">
            {currSeq.code}
            <a className="type"> {">"} SHOTS</a>
          </div>
          <div lassName="button-sec">
            <button className="openFormBtn" onClick={() => setOpenForm(true)}>
              + Create New Shot
            </button>
          </div>
          {openForm && (
            <NewForm
              projId={pid}
              seqId={id}
              seqName={currSeq.code}
              closeForm={setOpenForm}
            />
          )}
        </div>
        <div className="bottomSeq">
          {shots.loading ? (
            <div className="loading">Loading...</div>
          ) : shots.errorMsg ? (
            <div className="error">ERROR: {shots.errorMsg}</div>
          ) : shots.shots.length == 0 ? (
            <div className="none">No shots</div>
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
    startFetchShots: (projId, seqId) => dispatch(fetchShots(projId, seqId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SequenceDetails);
