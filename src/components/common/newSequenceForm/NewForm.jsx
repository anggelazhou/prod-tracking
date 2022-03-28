import React from "react";
import { Link } from "react-router-dom";
import "./NewForm.css";
import "@fontsource/roboto";
import { useDispatch } from "react-redux";
import { addSequence } from "../../../store/actions/seqActions";

function NewForm({ projId, closeForm }) {
  const dispatch = useDispatch();

  const createSequence = (event) => {
    const id = event.target.seqID.value;
    const name = event.target.seqName.value;

    dispatch(addSequence(projId, id, name));
  };

  return (
    <div className="modal-background">
      <div className="form-container">
        <div className="title-close-btn">
          <button onClick={() => closeForm(false)}> X </button>
        </div>
        <div className="title">
          <a>Create a new Sequence</a>
          <a> - Global Form</a>
        </div>
        <form onSubmit={(event) => createSequence(event)}>
          <div className="body">
            <label>Sequence ID: </label>
            <input id="id" name="seqID" required />
          </div>
          <div className="body">
            <label>Sequence Name: </label>
            <input
              id="name"
              name="seqName"
              type="text"
              pattern="[0-9]{4}"
              required
            />
          </div>
          <div className="footer">
            <button onClick={() => closeForm(false)} id="cancelBtn">
              Cancel
            </button>
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewForm;
