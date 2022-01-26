import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  useEffect(() => {
    Aos.init({
        duration: 1000
    });
  });
    return(
        <>
        <div className="icon_bar">
          <a href="https://linkedin.com/in/bazil-malekar-ab95a4195" className="linkedin" target="_blank">Linkedin <i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/bazilmalekar" className="github" target="_blank">GitHub <i class="fab fa-github"></i></a>
          <a href="https://wa.me/918147987681" className="whatsapp" target="_blank">Whatsapp <i class="fab fa-whatsapp"></i></a>
          <a href="https://bazilmalekar.github.io/My-Profile/docs/myResume.pdf" className="resume" target="_blank">Resume<i class="fas fa-user"></i></a>
        </div>
        <div className="landing_div">
          <h1>Bazil Malekar</h1>
          <p data-aos="fade-up">Web Developer || MERN Stack Developer</p>
        </div>
        </>
    );
}

export default LandingPage;