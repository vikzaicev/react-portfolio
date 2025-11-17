import { FaFacebook, FaInstagramSquare, FaGithub } from "react-icons/fa";
import manImg from "./../../img/main-img.webp";

import { FiArrowRightCircle, FiArrowDown } from "react-icons/fi";

function Home() {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaInstagramSquare />
          </a>
          <a href="">
            <FaGithub />
          </a>
        </div>
        <div className="home-info">
          <h1>Hi, I am Viktor</h1>
          <h3>Front-end Developer</h3>
          <p>
            I create stunning websites for your business, Highly experienced in
            web design and development
          </p>
          <a href="#contact" className="home-info-link inner-info-link">
            Contact me
            <FiArrowRightCircle />
          </a>
        </div>
        <div className="home-img">
          <img src={manImg} alt="man" />
        </div>
      </div>
      <a href="#about" className="scroll-down">
        Scroll down
        <FiArrowDown />
      </a>
    </section>
  );
}

export default Home;
