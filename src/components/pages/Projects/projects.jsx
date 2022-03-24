import React, { Component, useEffect } from "react";
import ProjectList from "../../common/project/ProjectList";
import SubNavbarWSearch from "../../common/layout/SubNavbarWSearch/SubNavbarWSearch";
import "./projects.css";
import { connect, useSelect, useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../../store/actions/projectActions";

const Projects = ({ projects, startFetchProjects }) => {
  // function Projects({ projects, startFetchProjects }) {
  useEffect(() => {
    startFetchProjects();
  }, []);
  return (
    <div>
      <SubNavbarWSearch title="Projects" subtitle=" - shared" />
      {projects.loading ? (
        <div className="loading">Loading...</div>
      ) : projects.errorMsg ? (
        <div className="error">ERROR: {projects.errorMsg}</div>
      ) : (
        <ProjectList projects={projects.projects} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startFetchProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
