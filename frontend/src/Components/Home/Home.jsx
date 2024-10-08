import "./Home.scss";
import React from "react";
import Banner from "../Banner/Banner";
import Newsletter from "../Footer/Newsletter/Newsletter";
import Category from "./Category/Category";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
        <Category />
        <Products headingText="Popular Products" />
        </div>
      </div>  
      </div>
  )
}

export default Home