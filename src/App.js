

import './Scss/style.scss'

import Navbar from "./components/Navbar"
import Box1 from "./components/Box1"
import Box2 from "./components/Box2"
import Box3 from "./components/Box3"
import Footer from"./components/Footer"

function App() {
  return (
    <div className="div-app container-fluid">
    <Navbar/>
    <Box1/>
    <Box2/>
    <Box3/>
    <Footer/>
    </div>
  );
}

export default App;
