import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaThemeco } from "react-icons/fa";

function ThemeBtn() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)") ? "Dark" : "Light";
  });
  const toogleTheme = () => {
    setTheme((prev) => {
      return prev === "Light" ? "Dark" : "Light";
    });
  };
  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "Dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button
      className="them-btn"
      onClick={toogleTheme}
      aria-label="Toggle theme"
    >
      {theme === "Light" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeBtn;
