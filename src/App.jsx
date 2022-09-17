import AppState from "../Context/AppState"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"


function App() {

  return (
    <AppState>
    <Navbar/>
    <Home />
    </AppState>
  )
}

export default App
