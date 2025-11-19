import Title from "../Title/Title";
import Awards from "./Awards";
import Education from "./Education";
import SkilsInfo from "./SkilsInfo";
import WorkExp from "./WorkExp";
import { motion } from "motion/react";
import { motionVariants } from "../../utils/animation";

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <Title title="Skilss" />
        <div className="inner-content">
          <div className="skills-description">
            <motion.h3
              custom={0}
              variants={motionVariants("right", 0.3, 50, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              Education & Skills
            </motion.h3>
            <motion.p
              custom={1}
              variants={motionVariants("right", 0.3, 50, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              For more than 5 years our experts have been accomplishing enough
              with modern Web Development, new generation web and app
              programming language.
            </motion.p>
          </div>
          <div className="skills-info education-all">
            <motion.div
              custom={0}
              variants={motionVariants("bottom", 0.3, 100, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Education />
            </motion.div>
            <motion.div
              custom={1}
              variants={motionVariants("bottom", 0.3, 100, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <SkilsInfo />
            </motion.div>
            <motion.div
              custom={2}
              variants={motionVariants("bottom", 0.3, 100, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Awards />
            </motion.div>
          </div>
          <WorkExp />
        </div>
      </div>
    </section>
  );
};
