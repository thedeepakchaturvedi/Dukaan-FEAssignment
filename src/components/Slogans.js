import React from "react";
import './Slogans.css'

const Slogans = (props) => {
    return (
        <div className="slogan-main">
            <div className="slogan-content">
                {props.content}
            </div>
        </div>
    )
}

export default Slogans;