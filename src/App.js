import Topbar from "./Components/topbar/Topbar"
import Intro from "./Components/intro/Intro"
import Portfolio from "./Components/portfolio/Portfolio"
import Work from "./Components/work/Work"
import Testimonial from "./Components/testimonial/Testimonial"
import Contact from "./Components/contact/Contact"
import "./app.scss"
function App() {
  return (
    <div className="app">
      <Topbar/>
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
