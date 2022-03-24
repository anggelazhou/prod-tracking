import React from "react";
import { Link } from "react-router-dom";
import "./NewForm.css";
import "@fontsource/roboto";
import { useDispatch } from "react-redux";
import { addShot } from "../../../store/actions/shotActions";

function NewForm({ seqId, closeForm }) {
  const dispatch = useDispatch();
  const createSequence = (event) => {
    const id = event.target.shotID.value;
    const name = event.target.shotName.value;
    const img = event.target.shotImg.value;

    dispatch(addShot(id, name, seqId, img));
  };

  return (
    <div className="modal-background">
      <div className="form-container">
        <div className="title-close-btn">
          <button onClick={() => closeForm(false)}> X </button>
        </div>
        <div className="title">
          <a>Create a new Shot</a>
          <a> - Global Form</a>
        </div>
        <form onSubmit={(event) => createSequence(event)}>
          <div className="body">
            <label>Shot ID: </label>
            <input id="id" name="shotID" />
          </div>
          <div className="body">
            <label>Shot Name: </label>
            <input id="name" name="shotName" />
          </div>
          <div className="body">
            <label>Image: </label>
            <input id="img" name="shotImg" />
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
