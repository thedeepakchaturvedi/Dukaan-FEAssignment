import React from "react";
import './IndividualProduct.css'

const IndividualProduct = (props) => {
    return(
        <div className="product-card">
            <div className="img-container">
                <img src={props.img} alt="feature"></img>
            </div>
            <div className="title">
                {props.heading}
            </div>
            <div className="content">
                {props.content}
            </div>
        </div>
    )
}

export default IndividualProduct;