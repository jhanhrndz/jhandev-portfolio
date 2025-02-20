import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY < 50); 

      const sections = ["sobre-mí", "proyectos", "habilidades", "contacto"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[50%] lg:w-[40%] px-6 py-3 rounded-2xl transition-all duration-300 z-50 ${
        scrolling ?  "bg-white shadow-lg" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <ul className="flex justify-center space-x-6">
        {["Sobre mí", "Proyectos", "Habilidades", "Contacto"].map((section) => {
          const sectionId = section.toLowerCase().replace(" ", "-");
          return (
            <li key={section}>
              <a
                href={`#${sectionId}`}
                className={`text-lg font-medium transition-colors ${
                  activeSection === sectionId
                    ? "text-blue-500"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {section}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
