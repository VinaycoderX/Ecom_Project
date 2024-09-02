import React from 'react';
import "./Search.scss";
import { MdClose } from "react-icons/md";


const Search = ( {setShowSearch} ) => {
  return (
    <div className="search-modal">
        <input type="text" 
        autoFocus
        placeholder="search for products"    
    />
    <MdClose onClick={() => setShowSearch(false)}/>
    
    </div>
  )
}

export default Search