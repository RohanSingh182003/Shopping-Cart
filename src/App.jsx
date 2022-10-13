import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import AppState from "../Context/AppState";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catagory from "./Components/Catagory";
import Footer from "./Components/Footer";
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
      <LoadingBar
        color='purple'
        progress={progress}
        height={2}
        transitionTime={100}
        loaderSpeed={300}
      />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={loadProgress} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout data={loadProgress} />} />
          <Route path="/:category" element={<Catagory data={loadProgress} />} />
          <Route path="/product/:id" element={<Product data={loadProgress} />} />
        </Routes>
        <Footer />
      </AppState>
    </BrowserRouter>
  );
}

export default App;
