import React from "react";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./projectList.css";
import { Link } from "react-router-dom";
import Project from "../Project";
import { connect, useSelect, useDispatch } from "react-redux";

const ProjectList = ({ projects }) => {
  return (
    <div className="projects">
      {projects &&
        projects.map((project) => {
          return (
            <Project project={project} key={project.id} className="project" />
          );
        })}
    </div>
  );
};

export default ProjectList;
