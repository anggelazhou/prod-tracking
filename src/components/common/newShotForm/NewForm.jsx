import React from "react";
import "./NewForm.css";
import "@fontsource/roboto";
import { useDispatch } from "react-redux";
import { addShot } from "../../../store/actions/shotActions";

function NewForm({ seqName, seqId, closeForm }) {
  const dispatch = useDispatch();
  const createSequence = (event) => {
    const id = event.target.shotID.value;
    const name = seqName + event.target.shotName.value;
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
            <input id="id" name="shotID" required />
          </div>
          <div className="body">
            <label>Shot Name: </label>
            <a> {seqName}</a>
            <input id="seqName" name="seqName" type="hidden" value={seqName} />
            <input
              id="name"
              name="shotName"
              type="text"
              pattern="[0-9]{4}"
              required
            />
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
