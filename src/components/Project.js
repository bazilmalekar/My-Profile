import React from "react";
import {Fade} from "react-reveal";

const Project = () => {
    return(
        <>
        <div className="projects">
            <div className="row">
                <div className="col-lg-6 col-md-12 p-5 porject_divOuter order-md-first">
                    <Fade right duration={1500}>
                    <div className="porject_div">
                        {/* carousel start */}
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="images/turbo1.png" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="images/turbo2.png" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="images/turbo3.png" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        {/* carousel end */}
                    </div>
                    </Fade>
                </div>
                <Fade delay={1000}>
                <div className="col-lg-6 col-md-12 p-5 project_title order-md-last">
                    <a href="https://turbocamindia.com/turbocare/" target="_blank">Turbocam/turbocare</a>
                </div>
                </Fade>
            </div>
            
            <div className="row flip">
                <Fade delay={1200}>
                <div className="col-lg-6 col-md-12  p-5 project_title">
                    <a href="https://www.google.com" target="_blank">New Bluebell <br /><p>Restaurants & Event Place</p></a>
                </div>
                </Fade>
                <div className="col-lg-6 col-md-12 p-5 porject_divOuter">
                    <Fade left duration={1500}>
                    <div className="porject_div">
                        {/* carousel start */}
                        <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="images/bluebell1.png" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="images/bluebell2.png" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="images/bluebell3.png" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        {/* carousel end */}
                    </div>
                    </Fade>
                </div>
            </div>
            <div className="d-flex justify-content-center pb-2" >
                <h6>& more to come....</h6>
            </div>
        </div>
        </>
    );
}

export default Project;