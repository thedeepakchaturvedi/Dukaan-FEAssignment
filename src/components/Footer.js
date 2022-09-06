import React from "react";
import './Footer.css';
import logo from '../assets/dukaanLogo.png';
import indiaFlag from '../assets/india.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="dukaan-logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="fir-col">
                    <div>Contact</div>
                    <div>FAQ's</div>
                </div>
                <div className="sec-col">
                    <div>Tutorials</div>
                    <div>Blog</div>
                </div>
                <div className="thi-col">
                    <div>Privacy</div>
                    <div>Banned Items</div>
                </div>
                <div className="for-col">
                    <div>About</div>
                    <div className="job-container">
                        <div>
                            Jobs
                        </div>
                        <div className="num">
                            3
                        </div>
                    </div>
                </div>
                <div className="fif-col">
                    <div>Facebook</div>
                    <div>Twitter</div>
                    <div>Linkedin</div>
                </div>
            </div>

            <div className="hr-1">

            </div>

            <div className="end-box">
                <div>Dukaan 2020, All rights reserved.</div>
                <div className="flag-container">
                    <div className="left-pane">Made in </div>
                    <div className="india">
                        <img src={indiaFlag} alt="indian-flag"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;