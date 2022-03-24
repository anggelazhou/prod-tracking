import React, { Component } from "react";
import ProjectList from "../../common/project/ProjectList";
import TypesSubNavBar from "../../common/layout/TypeSubNavbar";
import SubNavbarWSearch from "../../common/layout/SubNavbarWSearch/SubNavbarWSearch";
import "./shots.css";
import { connect } from "react-redux";

class Shots extends Component {
  render() {
    // const { projects } = this.props;
    return (
      <div>
        <TypesSubNavBar />
        <SubNavbarWSearch title="Shots" subtitle="" />
        <div style={{ margin: "1rem" }}>SHOTS</div>
      </div>
    );
  }
}
export default Shots;

// const mapStateToProps = (state) => {
//   return {
//     projects: state.project.projects,
//   };
// };

// export default connect(mapStateToProps)(Sequences);

// export default class Projects extends Component {
//   render() {
//     return <div className="Projects">P</div>;
//   }
// }
