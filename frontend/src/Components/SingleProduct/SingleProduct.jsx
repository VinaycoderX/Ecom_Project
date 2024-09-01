import React from "react";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

import cat1 from "../../assets/categorimg/cat1.jpg";
import {
  FaCartPlus,
  FaSquareXTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa6";

const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={cat1} alt="" />
          </div>
          <div className="right">
            <span className="name">Product name</span>
            <span className="price">price</span>
            <span className="desc">description</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> Headphones</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaCartPlus size={16} />
                  <FaSquareXTwitter size={16} />
                  <FaCartPlus size={16} />
                  <FaInstagram size={20} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
