import React from 'react';
import { MdClose } from "react-icons/md";
import cat1 from "../../../assets/categorimg/cat1.jpg";
import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="cart-products">
    <div className="cart-product">
        <div className="img-container">
        <img src={cat1} alt=""/>
        </div>
        <div className="prod-details">
            <span className="name">product name</span>
            <MdClose className="close-btn" />
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <div className="text">
                <span>3</span>
                <span>x</span>
                <span>&#8377;3654</span>
              </div>
        </div>
    </div>
    </div>
  )
}

export default CartItem