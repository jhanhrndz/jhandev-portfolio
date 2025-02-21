import Navbar from "./components/NavBar.jsx";
import About from "./sections/About.jsx";
import Skills from './sections/Skills'
import Projects from './sections/Projects.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;

