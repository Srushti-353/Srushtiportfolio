import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hfooter from "./components/Hfooter";
import Home from "./components/Home";
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Hfooter />
      <About />
      <Portfolio />
      <Education />
      <Experience />
      <Contact />


      <SocialLinks />
    </div>

  );
}

export default App;
