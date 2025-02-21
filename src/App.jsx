import Navbar from "./components/NavBar.jsx";
import About from "./sections/About.jsx";
import Skills from './sections/Skills'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contatc.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

