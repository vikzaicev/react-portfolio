import React from "react";
import Title from "../Title/Title";
import ServisesCard from "./ServisesCard";
import { dataServices } from "../../utils/dataServices";
import { motion } from "motion/react";
import { motionVariants } from "../../utils/animation";

function Servises() {
  return (
    <section className="services section" id="services">
      <div className="container flex-center">
        <Title title="Services" />
        <div className="services-wrapper">
          <motion.h3
            custom={0}
            variants={motionVariants("right", 0.3, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="services-description"
          >
            What I provide
          </motion.h3>
          <ul className="services-list">
            <ServisesCard dataServices={dataServices} />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Servises;
