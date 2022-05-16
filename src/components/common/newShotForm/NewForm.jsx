import React from "react";
import "./NewForm.css";
import "@fontsource/roboto";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addShot } from "../../../store/actions/shotActions";

function NewForm({ projId, seqId, seqName, closeForm }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createShot = (event) => {
    const name = seqName + event.shotName;
    // const img = event.shotImg;
    const img = null;

    dispatch(addShot(projId, seqId, name, img));
    closeForm(false);
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
        <form onSubmit={handleSubmit(createShot)}>
          <div className="body">
            <label className="label">Shot Name: </label>
            <a className="shotBegin"> {seqName}</a>
            <input
              id="name"
              type="text"
              pattern="[0-9]{4}"
              {...register("shotName", {
                required: true,
              })}
            />
          </div>
          {/* <div className="body">
            <label>Image: </label>
            <input id="img" name="shotImg" />
          </div> */}
          {errors.shotName && <div>Required</div>}
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
