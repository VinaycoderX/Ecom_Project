import React from 'react';
import "./Search.scss";
import { MdClose } from "react-icons/md";
import boatearphone from "../../../assets/boatearphone.webp";  
const Search = ( {setShowSearch} ) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" 
        autoFocus
        placeholder="search for products"    
    />
    <MdClose onClick={() => setShowSearch(false)}/>
    </div>
    <div className="search-result-content">
      <div className="search-results">
        <div className="search-result-item">
          <div className="img-container">
            <img src={boatearphone} alt="" />
          </div>
          <div className="prod-details">
            <span className="name">product name</span>
            <span className="name">product description</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Search