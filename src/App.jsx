import Navbar from "./components/NavBar.jsx";
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <section id="sobre-mí" className="h-screen bg-gray-100">Sobre mí</section>
      <section id="proyectos" className="h-screen bg-gray-200">Proyectos</section>
      <section id="habilidades" className="h-screen bg-gray-300">Habilidades</section>
      <section id="contacto" className="h-screen bg-gray-400">Contacto</section>
    </div>
  );
}

export default App;

