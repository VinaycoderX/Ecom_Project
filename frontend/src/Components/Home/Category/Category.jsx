import React from "react";

import "./Category.scss";


import cat1 from "../../../assets/categorimg/cat1.jpg";
const Category = () => {
    return (
        
            <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                <img src={cat1} alt="" />
                </div>
                <div className="category">
                <img src={cat1} alt="" />
                </div>
                <div className="category">
                <img src={cat1} alt="" />
                </div>
                <div className="category">
                <img src={cat1} alt="" />
                </div>
            </div>
            </div>
        
    )
};



export default Category