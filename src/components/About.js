import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {Fade} from "react-reveal";

const About = () => {
    useEffect(()=> {
        Aos.init({
            duration: 1000
        });
    });
    return(
        <>
        <div className="about"  data-aos="fade-in" data-aos-offset="450">
            <h1>About</h1>
            <div >
                <div className="about_intro">
                <p>Certified MERN Stack web developer</p>
                <p>Eager to learn &  adapt to up coming tools and technologies and develop websites using the same</p>
                <p>Experience of working with web technologies such as:</p>
                </div>
                <div className="skills">
                    <section>
                        <div className="skill_list">
                            <div>
                                <Fade  duration={1000}>
                                    <p className="skill_category">Front-end</p>
                                </Fade>
                            </div>
                            <Fade bottom cascade>
                                <div className="skill_content">
                                    <div className="skill_spacing">
                                        <img src="/icons/html.png" alt="html icon" className="skill_icons" />
                                        <h6>HTML5</h6>
                                    </div>
                                    <div className="skill_spacing">
                                        <img src="/icons/css.png" alt="html icon" className="skill_icons" />
                                        <h6>CSS3</h6>
                                    </div>
                                    <div className="skill_spacing">
                                        <img src="/icons/js.png" alt="html icon" className="skill_icons" />
                                        <h6>JavaScript ES6</h6>
                                    </div>  
                                    <div className="skill_spacing">
                                        <img src="/icons/jquery.png" alt="html icon" className="skill_icons" />
                                        <h6>jQuery</h6>
                                    </div>                              
                                </div>
                            </Fade>
                        </div>
                    </section>
                    <section>
                        <div className="skill_list">
                            <div className="skill_title">
                                <Fade duration={1000} delay={500}>
                                    <p className="skill_category">CSS Preprocessor & Libraries</p>
                                </Fade>
                            </div>
                            <Fade bottom cascade delay={500}>
                                <div className="skill_content">
                                    <div className="skill_spacing">
                                        <img src="/icons/sass.png" alt="html icon" className="skill_icons" />
                                        <h6>SASS</h6>
                                    </div>
                                    <div className="skill_spacing">
                                        <img src="/icons/bootstrap.png" alt="html icon" className="skill_icons" />
                                        <h6>Bootstrap</h6>
                                    </div>
                                    <div className="skill_spacing">
                                        <img src="/icons/material-ui.png" alt="html icon" className="skill_icons" />
                                        <h6>Material-ui</h6>
                                    </div>   
                                    <div className="skill_spacing">
                                        <img src="/icons/css.png" alt="html icon" className="skill_icons" />
                                        <h6>Flexbox</h6>
                                    </div>                              
                                </div>
                            </Fade>
                        </div>
                    </section> 
                    <section>
                        <div className="skill_list">
                            <div>
                                <Fade duration={1000} delay={500}>
                                    <p className="skill_category">Front-end Framework</p>
                                </Fade>
                            </div>
                            <Fade bottom cascade delay={500}>
                                <div className="skill_content">
                                    <div className="skill_spacing">
                                        <img src="/icons/react.png" alt="html icon" className="skill_icons" />
                                        <h6>React JS</h6>
                                    </div>                           
                                </div>
                            </Fade>
                        </div>
                    </section> 
                    <section>
                        <div className="skill_list">
                            <div>
                                <Fade duration={1000} delay={500}>
                                    <p className="skill_category">State Management Library</p>
                                </Fade>
                            </div>
                            <Fade bottom cascade delay={500}>
                                <div className="skill_content">
                                    <div className="skill_spacing">
                                        <img src="/icons/redux.png" alt="html icon" className="skill_icons" />
                                        <h6>Redux</h6>
                                    </div>                           
                                </div>
                            </Fade>
                        </div>
                    </section>
                    <section>
                        <div className="skill_list">
                            <div>
                                <Fade duration={1000} delay={500}>
                                    <p className="skill_category">Back-end</p>
                                </Fade>
                            </div>
                            <Fade bottom cascade delay={500}>
                                <div className="skill_content">
                                    <div className="skill_spacing">
                                        <img src="/icons/node.png" alt="html icon" className="skill_icons" />
                                        <h6>Node.js</h6>
                                    </div>    
                                    <div className="skill_spacing">
                                        <img src="/icons/mongodb.png" alt="html icon" className="skill_icons" />
                                        <h6>MongoDB</h6>
                                    </div>                        
                                </div>
                            </Fade>
                        </div>
                    </section>
                    <section>
                        <div className="skill_list">
                            <div>
                                <Fade duration={1000} delay={500}>
                                    <p className="skill_category">Back-end Frameworks</p>
                                </Fade>
                            </div>
                            <Fade bottom cascade delay={500}>
                                <div className="skill_content">
                                    <div className="skill_spacing">
                                        <img src="/icons/node.png" alt="html icon" className="skill_icons" />
                                        <h6>Express</h6>
                                    </div>    
                                    <div className="skill_spacing">
                                        <img src="/icons/mongodb.png" alt="html icon" className="skill_icons" />
                                        <h6>Mongoose</h6>
                                    </div>                        
                                </div>
                            </Fade>
                        </div>
                    </section> 
                    <section>
                        <div className="skill_list">
                            <div className="skill_title">
                                <Fade duration={1000} delay={500}>
                                    <p className="skill_category">Version Control System & Repositories</p>
                                </Fade>
                            </div>
                            <Fade bottom cascade delay={500}>
                                <div className="skill_content">
                                    <div className="skill_spacing">
                                        <img src="/icons/github.png" alt="html icon" className="skill_icons" />
                                        <h6>GitHub</h6>
                                    </div>
                                    <div className="skill_spacing">
                                        <img src="/icons/bitbucket.png" alt="html icon" className="skill_icons" />
                                        <h6>Bitbucket</h6>
                                    </div>                                                                
                                </div>
                            </Fade>
                        </div>
                    </section>
                    <section>
                        <div className="skill_list">
                            <div>
                                <Fade duration={1000} delay={500}>
                                    <p className="skill_category">Web Hosting Services</p>
                                </Fade>
                            </div>
                            <Fade bottom cascade delay={500}>
                                <div className="skill_content">
                                    <div className="skill_spacing">
                                        <img src="/icons/aws.png" alt="html icon" className="skill_icons" />
                                        <h6>AWS</h6>
                                    </div>
                                    <div className="skill_spacing">
                                        <img src="/icons/heroku.png" alt="html icon" className="skill_icons" />
                                        <h6>Heroku</h6>
                                    </div>                                                                
                                </div>
                            </Fade>
                        </div>
                    </section>  
                    <section>
                        <div className="skill_list">
                            <div>
                                <Fade duration={1000} delay={500}>
                                    <p className="skill_category">Issue Tracking Product</p>
                                </Fade>
                            </div>
                            <Fade bottom cascade delay={500}>
                                <div className="skill_content">
                                    <div className="skill_spacing">
                                        <img src="/icons/jira.png" alt="html icon" className="skill_icons" />
                                        <h6>Jira Software</h6>
                                    </div>                                                               
                                </div>
                            </Fade>
                        </div>
                    </section>         
                </div>        
                <a href="/docs/experience.pdf" target="_blank"><button className="btn btn-primary custom_btn">Experience</button></a>
                <a href="/docs/certificates.pdf" target="_blank"><button className="btn btn-primary custom_btn">Certifications</button></a>         
            </div>
        </div>
        </>
    );
}

export default About;