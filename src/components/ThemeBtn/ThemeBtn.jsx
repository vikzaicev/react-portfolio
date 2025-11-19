import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

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
      {theme === "Light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ThemeBtn;

// .them-btn {
//   position: fixed;
//   z-index: 11;
//   right: 0;
//   top: 150px;
//   background: var(--bg-transparent-color-01);
//   backdrop-filter: blur(20px);
//   width: 50px;
//   height: 50px;
//   font-size: 20px;
//   border-radius: 5px 0 0 5px;
//   box-shadow: var(--box-shadow);
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
