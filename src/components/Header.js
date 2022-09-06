import React from "react";
import './Header.css';
import logo from  '../assets/dukaanLogo.png';

const Header = () => {
    return(
        <div className="nav-bar">
            <div className="nav">
                <div className="left-pane">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="right-pane">
                    <div className="signin-txt">
                        Sign in
                    </div>
                    <div className="signin-btn">
                        Dukaan for PC
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header;