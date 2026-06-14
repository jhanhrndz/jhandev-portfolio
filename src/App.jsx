import { useEffect } from 'react';
import Navbar from "./components/NavBar.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import ExperienceEducation from "./sections/ExperienceEducation.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // Synchronize initial theme preference to prevent layout theme flashes
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  return (
    <div className="relative min-h-screen text-zinc-900 dark:text-zinc-100">
      <Navbar />
      <main className="pb-10">
        <About />
        <Skills />
        <ExperienceEducation />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
