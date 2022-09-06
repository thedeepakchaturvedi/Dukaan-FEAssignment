import React from "react";
import './IndividualFeature.css'

const IndividualFeature = (props) => {
    return(
        <div className="feature-outer">
            <div className="img">
                <img src={props.img} alt="feature"></img>
            </div>
            <div className="heading">
                {props.heading}
            </div>
            <div className="content">
                {props.content}
            </div>
        </div>
    )
}

export default IndividualFeature;