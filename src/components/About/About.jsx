import React from "react";

import img from "./../../img/about-img.webp";
import Title from "../Title/Title";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <Title title="About" />
        <div className="about-wrapper">
          <div className="about-img">
            <img src={img} alt="about" />
          </div>
          <div className="about-info">
            <div className="description">
              <h3>I'm Ilay</h3>
              <h4>
                A Lead <span>Front-End Developer</span> based in{" "}
                <span>California</span>
              </h4>
              <p>
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences through
                meaningful interactions. Check out my Portfolio
              </p>
            </div>
            <ul className="professional-list">
              <li className="list-item">
                <span className="number">5+</span>
                <span className="text">Years of experience</span>
              </li>
              <li className="list-item">
                <span className="number">3K+</span>
                <span className="text">Happy Customers</span>
              </li>
              <li className="list-item">
                <span className="number">5+</span>
                <span className="text">Success Projects</span>
              </li>
            </ul>
            <a href="" className="inner-info-link">
              Download
              <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
