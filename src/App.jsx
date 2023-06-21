import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { ThemeContext } from "./themeContext";

function App() {
  const [theme, setTheme] = useState("");
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="min-h-screen dark:bg-gray-800 dark:text-stone-300 font-medium relative text-gray-700 bg-amber-50/50 font-work">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
