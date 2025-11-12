import React, { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleHandler = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="" className="logo">
            Viktor
          </a>
          <nav className={openMenu ? "nav active" : "nav"}>
            <ul className={openMenu ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a href="#home" className="nav-link active">
                  home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li c="nav-item">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="nav-menu-btn" onClick={toggleHandler}>
            {openMenu ? <FiX /> : <FiAlignJustify />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
