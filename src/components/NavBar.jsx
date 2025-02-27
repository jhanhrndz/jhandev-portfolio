import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Ahora se vuelve transparente al hacer scroll

      const sections = ["about-me", "skills", "projects", "contact"];
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
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[40%] lg:w-[35%] px-4 py-2 rounded-xl transition-all duration-300 z-50 ${
        scrolling ? "bg-white/70 backdrop-blur-md" : "bg-white shadow-lg"
      }`}
    >
      <ul className="flex justify-center space-x-4">
        {["About me", "Skills", "Projects", "Contact"].map((section) => {
          const sectionId = section.toLowerCase().replace(" ", "-");
          return (
            <li key={section}>
              <a
                href={`#${sectionId}`}
                className={`text-sm font-medium transition-colors ${
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
