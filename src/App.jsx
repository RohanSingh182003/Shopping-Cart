import AppState from "../Context/AppState"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Cart from "./Components/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Catagory from "./Components/Catagory";


function App() {
  return (
    <BrowserRouter>
    <AppState>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/:category" element={<Catagory />}/>
    </Routes>
    </AppState>
    </BrowserRouter>
  )
}

export default App
