import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply theme class on mount and when isDark changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Scroll handler: floating bar style + scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);

      const sections = ["about-me", "skills", "experience", "projects", "contact"];
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

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[85%] md:w-[62%] lg:w-[46%] px-4 py-2.5 rounded-xl transition-all duration-300 z-50 border ${
        scrolling
          ? "bg-white/80 dark:bg-zinc-950/80 border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md shadow-lg dark:shadow-2xl"
          : "bg-white/40 dark:bg-zinc-900/40 border-zinc-200/40 dark:border-zinc-800/40 backdrop-blur-sm shadow-lg"
      }`}
    >
      <ul className="flex items-center justify-center space-x-4 sm:space-x-6">
        {["About me", "Skills", "Experience", "Projects", "Contact"].map((section) => {
          const sectionId = section.toLowerCase().replace(" ", "-");
          return (
            <li key={section}>
              <a
                href={`#${sectionId}`}
                className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                  activeSection === sectionId
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {section}
              </a>
            </li>
          );
        })}

        {/* Vertical divider */}
        <li aria-hidden="true" className="h-5 w-px bg-zinc-300 dark:bg-zinc-700" />

        {/* Theme toggle */}
        <li>
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-all duration-300 cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
