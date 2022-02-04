import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Info from "./components/Info";
import {Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
import Test from "./components/Test";

const App = () => {
  return(
    <React.Fragment>
      <div className="profile">
        <LandingPage />
        <Routes>          
        <Route path="/" element={<Navigate replace to="/projects" />} />
          <Route path="/" element={<Info />} >
            <Route path="about" element={<Test />} />
            <Route path="projects" element={<Project />} />
          </Route>
        </Routes>        
      </div>
    </React.Fragment>
  );
}

export default App;