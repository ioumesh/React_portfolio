import Topbar from "./Components/topbar/Topbar"
import Intro from "./Components/intro/Intro"
import Portfolio from "./Components/portfolio/Portfolio"
import Work from "./Components/work/Work"
import Testimonial from "./Components/testimonial/Testimonial"
import Contact from "./Components/contact/Contact"
import Menu from "./Components/menu/Menu"
import "./app.scss"
import {useState} from 'react'

function App() {
  const [menuOpen, setMenuopen] = useState(false)
  return (
    
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuopen={setMenuopen} />
      <Menu menuOpen={menuOpen} setMenuopen={setMenuopen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work/>
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
