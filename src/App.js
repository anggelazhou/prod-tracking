import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/common/layout";
import Projects from "./components/pages/Projects";
import ProjectDetails from "./components/pages/ProjectDetails";
import Login from "./components/pages/Login";
import SequenceDetails from "./components/pages/SequenceDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Projects />} />
          <Route exact path="/projects" element={<Projects />} />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
