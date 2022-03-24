import React, { Component } from "react";
import ProjectList from "../../../common/project/ProjectList";
import TypesSubNavBar from "../../../common/layout/TypeSubNavbar";
import SubNavbarWSearch from "../../../common/layout/SubNavbarWSearch/SubNavbarWSearch";
import "./assets.css";
import { connect } from "react-redux";

class Assets extends Component {
  render() {
    // const { projects } = this.props;
    return (
      <div>
        <TypesSubNavBar />
        <SubNavbarWSearch title="Assets" subtitle="" />
        <div style={{ margin: "1rem" }}>ASSETS</div>
      </div>
    );
  }
}
export default Assets;
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
