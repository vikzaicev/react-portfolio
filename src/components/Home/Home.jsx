import { FaFacebook, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { motionVariants } from "../../utils/animation";
import manImg from "./../../img/main-img.webp";

import { FiArrowRightCircle, FiArrowDown } from "react-icons/fi";

const social = [
  { id: 1, icon: FaFacebook },
  { id: 2, icon: FaInstagramSquare },
  { id: 3, icon: FaGithub },
];

function Home() {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {social.map((item) => {
            return (
              <motion.a
                href=""
                key={item.id}
                custom={item.id}
                variants={motionVariants("right", 0.3, 50, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                <item.icon />
              </motion.a>
            );
          })}
        </div>
        <div className="home-info">
          <motion.h1
            custom={0}
            variants={motionVariants("left", 0.3, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Hi, I am Viktor
          </motion.h1>
          <motion.h3
            custom={1}
            variants={motionVariants("left", 0.3, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Front-end Developer
          </motion.h3>
          <motion.p
            custom={2}
            variants={motionVariants("left", 0.3, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            I create stunning websites for your business, Highly experienced in
            web design and development
          </motion.p>
          <motion.a
            custom={3}
            variants={motionVariants("left", 0.3, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            href="#contact"
            className="home-info-link inner-info-link"
          >
            Contact me
            <FiArrowRightCircle />
          </motion.a>
        </div>
        <div className="home-img">
          <motion.img
            custom={0}
            variants={motionVariants("right", 0.5, 150, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            src={manImg}
            alt="man"
          />
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
