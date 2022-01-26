import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SRLWrapper } from "simple-react-lightbox";
import {Routes, Route, NavLink, Navigate, Outlet } from "react-router-dom";
import About from "./About";
import Project from "./Project";


const Info = () => {
    const [divColor, setDivColor] = useState(false);

    const handleAboutClick = () => {
        setDivColor(false);
    }

    const handleProjectClick = () => {
        setDivColor(true);
    }

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    });
    return(
        <>
        <div className="info">
            <div className="row">
                <div className="col-lg-3 profile_image">
                    <div className="profile_pic"  data-aos="fade-down-right" data-aos-offset="500">
                        <SRLWrapper>
                            <a href="/images/myProfilePic.jpg" data-lightbox="mygallery"><img className="testimage" src="/images/myProfilePic.jpg" alt="profile-pic"></img></a>           
                        </SRLWrapper>
                    </div>                    
                    <NavLink to="/My-Profile/about" className="about_toggle"><div onClick={handleAboutClick} style={{ backgroundColor: !divColor ? "gray" : "black",  fontWeight: !divColor ? "bold": null}} className="toggle_divU"  data-aos="fade-right">About</div></NavLink>
                    <NavLink to="/My-Profile/project" className="project_toggle"><div onClick={handleProjectClick} style={{ backgroundColor: divColor ? "gray" : "black",  fontWeight: divColor ? "bold": null}} className="toggle_divD"  data-aos="fade-left">Projects</div></NavLink>                  
                </div>
                 
                <div className="col-lg-9">              
                    <div className="row">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Info;