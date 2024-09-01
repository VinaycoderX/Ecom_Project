import React from 'react';
import Products from '../Products/Products';

const Category = () => {
  return (
    <div className="category-main-content">
    <div className="layout">
        <div className="category-title">
            Category Titl
        </div>
        <Products innerPage={true}  />
    </div>
    
    </div>
  )
}

export default Category