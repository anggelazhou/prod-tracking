import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TypesSubNavBar from "../../common/layout/TypeSubNavbar";
import SequenceList from "../../common/sequence/SequenceList";
import NewForm from "../../common/newForm";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./projectDetails.css";

import { connect, useSelect, useDispatch, useSelector } from "react-redux";
import { fetchSequences } from "../../../store/actions/seqActions";

const ProjectDetails = ({ sequences, startFetchSequences }) => {
  const { id } = useParams();

  useEffect(() => {
    startFetchSequences(id);
  }, []);

  const [openForm, setOpenForm] = useState(false);

  return (
    <div>
      <TypesSubNavBar />
      <div className="wrapper">
        <div className="top">
          <a>Project number - {id}</a>
          <div>
            <button className="openFormBtn" onClick={() => setOpenForm(true)}>
              New
            </button>
          </div>
          {openForm && <NewForm projId={id} closeForm={setOpenForm} />}
        </div>
        <div className="bottom">
          {sequences.loading ? (
            <div className="loading">Loading...</div>
          ) : sequences.errorMsg ? (
            <div className="error">ERROR: {sequences.errorMsg}</div>
          ) : (
            <SequenceList />
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
