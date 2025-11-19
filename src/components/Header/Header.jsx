import React, { useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { Link } from "react-scroll";
import { FiAlignJustify, FiX } from "react-icons/fi";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setsticky] = useState(false);
  const toggleHandler = () => {
    setOpenMenu((prev) => !prev);
  };
  const handleSticky = () => {
    setsticky(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  return (
    <header className={sticky ? "header sticky" : "header"}>
      <div className="container">
        <div className="header-wrapper">
          <Link to="home" smooth={true} duration={0} className="logo">
            Viktor
          </Link>
          <RemoveScroll enabled={openMenu}>
            <nav className={openMenu ? "nav active" : "nav"}>
              <ul className={openMenu ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link
                    to="home"
                    smooth={true}
                    duration={0}
                    className="nav-link"
                    onClick={toggleHandler}
                  >
                    home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="about"
                    smooth={true}
                    duration={0}
                    className="nav-link"
                    onClick={toggleHandler}
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
                    onClick={toggleHandler}
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
                    onClick={toggleHandler}
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
                    onClick={toggleHandler}
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
                    onClick={toggleHandler}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="nav-menu-btn" onClick={toggleHandler}>
              {openMenu ? <FiX /> : <FiAlignJustify />}
            </div>
          </RemoveScroll>
        </div>
      </div>
    </header>
  );
}

export default Header;
