import React from "react";
import { Link } from "react-router-dom";
import "./NewForm.css";
import "@fontsource/roboto";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addSequence } from "../../../store/actions/seqActions";

function NewForm({ projId, closeForm }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createSequence = (event) => {
    const name = event.seqName;

    dispatch(addSequence(projId, name));
    closeForm(false);
  };

  console.log(errors);

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
        {/* <form onSubmit={(event) => createSequence(event)}> */}
        <form onSubmit={handleSubmit(createSequence)}>
          <div className="body">
            <label className="label">Sequence Name: </label>
            <input
              id="name"
              {...register("seqName", {
                required: true,
              })}
            />
            {errors.seqName && <div>Required</div>}
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
