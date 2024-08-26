import React from "react";
import "./Product.scss";

import iphone14 from "../../../assets/categorimg/iphone14.jpg";

const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={iphone14} alt="" className="" />
      </div>
      <div className="prod-details">
        <span className="name">Product name</span>
        <span className="price">&#8377;499</span>
      </div>
    </div>
  );
};

export default Product;
