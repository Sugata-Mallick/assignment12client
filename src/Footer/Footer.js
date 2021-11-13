
import React from "react";
import './Footer.css'
import ReactDOM from "react-dom";


import { faBold, faFaucet, faFileAudio, faFilePowerpoint, faLaptopCode, faMapMarkedAlt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1 className=" text-warning">Autocar Com.</h1>

                                <div className="icons-container d-flex text-center ">
                                   
                                <FontAwesomeIcon className="m-1" icon={faLaptopCode} />
                                <FontAwesomeIcon className="m-1" icon={faFileAudio} />
                                    <FontAwesomeIcon className="m-1" icon={faBold} />
                                </div>

                                <p className="mt-2 text-info">
                                    <small>
                                    Most definitions of cars say that they run primarily on road.
                                    </small>
                                </p>

                                <p className="mt-2  text-danger ">
                                    <small>Zemez © . All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu text-primary">Home</li>
                                    <li className="footer-menu text-primary">Services</li>
                                    <li className="footer-menu text-primary">Contact us</li>
                                    <li className="footer-menu text-primary"> About us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3 className=" text-success">Sign up for the newsletter</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-2">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>+1811177722</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <p className=" text-info">
                                           Autocar com. placed on Landfornia ,
                                            <br /> 95/96 Agracolony of Landfornia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;