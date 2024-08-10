import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import AppContext from './utils/context';

const App = () => {
  return (
    <BrowserRouter>
    <AppContext>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/category/:id" element={<Category />} />  */}
      {/* <Route path="/product/:id" element={<SingleProduct />} />  */}
    </Routes>
    <Footer />
    </AppContext>
    </BrowserRouter>
    
  )
}

export default App