import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/common/layout";
import Projects from "./components/pages/Projects";
import ProjectDetails from "./components/pages/ProjectDetails";
import Login from "./components/pages/Login";
import SequenceDetails from "./components/pages/SequenceDetails";
// import Shot from "./components/pages/ShotDetails";
// import Asset from "./components/pages/AssetDetails";
// import Assets from "./components/pages/Assets";
// import Sequences from "./components/pages/NoNeedForNow/Sequences";
// import Shots from "./components/pages/Shots";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Projects />} />
          <Route exact path="/projects" element={<Projects />} />
          {/* <Route exact path="/sequences" element={<Sequences />} />
          <Route exact path="/shots" element={<Shots />} /> */}
          {/* <Route exact path="/assets" element={<Assets />} /> */}
          <Route
            exact
            path="/projects/:id/sequences"
            element={<ProjectDetails />}
          />
          <Route
            exact
            path="/projects/:pid/sequences/:id/shots"
            element={<SequenceDetails />}
          />
          {/* <Route exact path="/shots/:id" element={<Shot />} /> */}
          {/* <Route exact path="/assets/:id" element={<Asset />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
