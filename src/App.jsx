import React, { useState } from 'react'
import AppState from "../Context/AppState";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catagory from "./Components/Catagory";
import Product from './Components/Product/Product';
import Checkout from './Components/Checkout';

function App() {
  const loadProgress = (progress) => {
    setProgress(progress)
  }
  const [progress, setProgress] = useState(0)
  return (
    <BrowserRouter>
      <AppState>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/:category" element={<Catagory />} />
          <Route exact path="/product/:id" element={<Product />} />
        </Routes>
      </AppState>
    </BrowserRouter>
  );
}

export default App;
