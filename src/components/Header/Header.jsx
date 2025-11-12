import React, { useState } from "react";
import { Link } from "react-scroll";
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
          <Link to="home" smooth={true} duration={0} className="logo">
            Viktor
          </Link>

          <nav className={openMenu ? "nav active" : "nav"}>
            <ul className={openMenu ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="home" smooth={true} duration={0} className="nav-link">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  smooth={true}
                  duration={0}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="skills"
                  smooth={true}
                  duration={0}
                  className="nav-link"
                >
                  Skills
                </Link>
              </li>
              <li c="nav-item">
                <Link
                  to="services"
                  smooth={true}
                  duration={0}
                  className="nav-link"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={0}
                  className="nav-link"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={0}
                  className="nav-link"
                >
                  Contact
                </Link>
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
