import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur bg-white/70 dark:bg-dark/70">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src="/assets/logo.svg" className="h-8" />

        <ul className="hidden md:flex gap-8 font-medium dark:text-white">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Our Work</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setDark(!dark)}>
            <img src="../assets/moon.svg" className="h-5" />
          </button>
          <button className="bg-primary text-white px-5 py-2 rounded-full">
            Connect →
          </button>
        </div>
      </div>
    </nav>
  );
}
