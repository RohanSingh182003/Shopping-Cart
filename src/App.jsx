import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import AppState from "../Context/AppState";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catagory from "./Components/Catagory";
import Footer from "./Components/Footer";

function App() {
  const ref = useRef(null)
  return (
    <BrowserRouter>
      <AppState>
      <LoadingBar color='violet' ref={ref} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:category" element={<Catagory />} />
        </Routes>
        <Footer />
      </AppState>
    </BrowserRouter>
  );
}

export default App;
