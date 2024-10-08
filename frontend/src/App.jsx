import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import AppContext from './utils/context';
import Newsletter from './Components/Footer/Newsletter/Newsletter';
import Category from './Components/Category/Category';
import SingleProduct from './Components/SingleProduct/SingleProduct';

const App = () => {
  return (
    <BrowserRouter>
    <AppContext>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Category />} />  
      <Route path="/product/:id" element={<SingleProduct />} /> 
    </Routes>
    <Newsletter />
    <Footer />
    </AppContext>
    </BrowserRouter>
    
  )
}

export default App