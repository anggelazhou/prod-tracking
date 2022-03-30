import React from "react";
// import "@fontsource/quantico";
import "@fontsource/roboto";
import "./project.css";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="image-container">
          <img src={project.image} />
        </div>
        <Link to={`/projects/${project.id}/sequences`} className="project-name">
          {project.name}
        </Link>
      </div>
    </div>
  );
};

export default Project;
