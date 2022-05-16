import React from "react";
import { Link } from "react-router-dom";
import "./NewForm.css";
import "@fontsource/roboto";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addAsset } from "../../../store/actions/assetActions";

function NewForm({ projId, closeForm }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createAsset = (event) => {
    const name = event.assetName;

    dispatch(addAsset(projId, name));
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
          <a>Create a new Asset</a>
          <a> - Global Form</a>
        </div>
        {/* <form onSubmit={(event) => createAsset(event)}> */}
        <form onSubmit={handleSubmit(createAsset)}>
          <div className="body">
            <label className="label">Asset Name: </label>
            <input
              id="name"
              {...register("assetName", {
                required: true,
              })}
            />
            {errors.assetName && <div>Required</div>}
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
