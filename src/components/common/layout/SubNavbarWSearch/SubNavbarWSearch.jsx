import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SubNavbarWSearch.css";
import NewForm from "../../newForm";
import "@fontsource/roboto";

function SubNavbarWSearch(props) {
  // const [openForm, setOpenForm] = useState(false);
  return (
    <section className="subnavbarWSearch">
      <section className="subnavbarWSearch-title">
        <a className="title">{props.title} </a>
        <a className="subtitle">{props.subtitle}</a>
      </section>
      <section className="subnavbarWSearch-links">
        <section className="links">
          <Link
            to="/sequences"
            className="subnavbarWSearch-item"
            style={{ paddingLeft: "0" }}
          >
            buttons
          </Link>
        </section>
        {/* <section className="search">
          <button className="openFormBtn" onClick={() => setOpenForm(true)}>
            New
          </button>
        </section>
        {openForm && <NewForm closeForm={setOpenForm} />} */}
      </section>
    </section>
  );
}

export default SubNavbarWSearch;
