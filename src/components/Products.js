import React from "react";
import './Products.css';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';

import IndividualProduct from "./IndividualProduct";

const Products = () => {

    const data = [
        {
            img:product1,
            heading:"Privacy Policy Generator",
            content:"Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
        },
        {
            img:product2,
            heading:"Terms & Conditions Generator",
            content:"Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
        },
        {
            img:product3,
            heading:"Domain Name Generator",
            content:"Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
        },
        {
            img:product4,
            heading:"Invoice Generator",
            content:"Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
        }
    ]

    return(
        <div className="products-outer">
            <div className="products-container">
                <div className="heading">
                    Try our other free products
                </div>
                <div className="products">
                    {
                        data.map((ele, index) => {
                            return <IndividualProduct
                                img={ele.img}
                                heading={ele.heading} 
                                content={ele.content}
                                key = {index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products;