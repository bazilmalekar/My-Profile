import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Info from "./components/Info";
import {Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";

const App = () => {
  return(
    <React.Fragment>
      <div className="profile">
        <LandingPage />
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/My-Profile/" />} /> */}
          <Route path="/" element={<Info />} />
          <Route path="/My-Profile" element={<Navigate replace to="/My-Profile/about" />} />
          <Route path="/My-Profile" element={<Info />} >
            <Route path="about" element={<About />} />
            <Route path="project" element={<Project />} />
          </Route>
        </Routes>        
      </div>
    </React.Fragment>
  );
}

export default App;