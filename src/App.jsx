import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import AppState from "../Context/AppState";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catagory from "./Components/Catagory";
import Footer from "./Components/Footer";

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
          <Route path="/:category" element={<Catagory data={loadProgress} />} />
        </Routes>
        <Footer />
      </AppState>
    </BrowserRouter>
  );
}

export default App;
