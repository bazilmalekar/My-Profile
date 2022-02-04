import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Info from "./components/Info";
import {Routes, Route, Navigate } from "react-router-dom";
import AboutProfile from "./components/AboutProfile";
import Project from "./components/Project";


const App = () => {
  return(
    <React.Fragment>
      <div className="profile">
        <LandingPage />
        <Routes>          
        <Route path="/" element={<Navigate replace to="/about" />} />
          <Route path="/" element={<Info />} >
            <Route path="about" element={<AboutProfile />} />
            <Route path="projects" element={<Project />} />
          </Route>
        </Routes>        
      </div>
    </React.Fragment>
  );
}

export default App;