import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";


import "./Cart.scss";

const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}
            >
            <FaRegWindowClose />
            <span className="text">close</span>
          </span>
        </div>



        {/* <div className="empty-cart">
        <BsCartX />
        <span>No product is added to the Cart</span>
        <button className="return-cta">RETURN TO SHOP</button>
        </div> */}


        <>
        <CartItem />
        <div className="cart-footer">
            <div className="subtotal">
                <span className="text">Subtotal</span>
                <span className="text total">&#8377;1234</span>
            </div>
            <div className="button">
                <button className="checkout-cta">Checkout</button>
            </div>
        </div>
        </>
      </div>
    </div> 
  );
};

export default Cart;
