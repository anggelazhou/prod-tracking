import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TypesSubNavBar from "../../common/layout/TypeSubNavbar";
import SequenceList from "../../common/sequence/SequenceList";
import NewForm from "../../common/newSequenceForm";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./projectDetails.css";

import { connect, useSelector } from "react-redux";
import { fetchSequences } from "../../../store/actions/seqActions";

const ProjectDetails = ({ sequences, startFetchSequences }) => {
  const { id } = useParams();

  const currProj = useSelector((store) => {
    const projs = store.projects.projects.filter((proj) => proj.id == id);
    return projs && projs.length == 1 ? projs[0] : null;
  });

  useEffect(() => {
    startFetchSequences(id);
  }, [id]);

  const [openForm, setOpenForm] = useState(false);

  return (
    <div>
      {/* <TypesSubNavBar /> */}
      <div className="wrapper">
        <div className="top">
          <div>
            <div className="proj-name">
              {currProj.name}
              <a className="type"> {">"} SEQUENCES</a>
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
                + Create New Sequence
              </button>
            </div>
          </div>
          {openForm && <NewForm projId={id} closeForm={setOpenForm} />}
        </div>
        <div className="bottom">
          {/* <div className="typeSeq">Sequences</div> */}
          {sequences.loading ? (
            <div className="loading">Loading...</div>
          ) : sequences.errorMsg ? (
            <div className="error">ERROR: {sequences.errorMsg}</div>
          ) : sequences.sequences.length == 0 ? (
            <div className="none">No sequences</div>
          ) : (
            <SequenceList projId={id} />
          )}
        </div>
        {/* <div className="grid left">Info</div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sequences: state.sequences,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startFetchSequences: (id) => dispatch(fetchSequences(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
