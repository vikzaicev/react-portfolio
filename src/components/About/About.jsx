import { motion } from "motion/react";
import { motionVariants } from "../../utils/animation";

import img from "./../../img/about-img.webp";
import Title from "../Title/Title";
const listAbout = [
  { number: "5+", text: "Years of experience", id: 1 },
  { number: "3K+", text: "Happy Customers", id: 2 },
  { number: "5+", text: "Success Projects", id: 3 },
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <Title title="About" />
        <div className="about-wrapper">
          <div className="about-img">
            <motion.img
              custom={0}
              variants={motionVariants("right", 0.8, 150, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              src={img}
              alt="about"
            />
          </div>
          <div className="about-info">
            <div className="description">
              <motion.h3
                custom={0}
                variants={motionVariants("left", 0.3, 50, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                I'm Ilay
              </motion.h3>
              <motion.h4
                custom={1}
                variants={motionVariants("left", 0.3, 50, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                A Lead <span>Front-End Developer</span> based in{" "}
                <span>California</span>
              </motion.h4>
              <motion.p
                custom={2}
                variants={motionVariants("left", 0.3, 50, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences through
                meaningful interactions. Check out my Portfolio
              </motion.p>
            </div>
            <ul className="professional-list">
              {listAbout.map((item) => {
                return (
                  <motion.li
                    custom={item.id}
                    variants={motionVariants("left", 0.5, 50, true)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    key={item.id}
                    className="list-item"
                  >
                    <span className="number">{item.number}</span>
                    <span className="text">{item.text}</span>
                  </motion.li>
                );
              })}
            </ul>
            <motion.a
              custom={1}
              variants={motionVariants("left", 0.3, 50, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              href=""
              className="inner-info-link"
            >
              Download
              <i className="fa-solid fa-download"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
