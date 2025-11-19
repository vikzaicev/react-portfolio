import { dataWorkExp } from "../../utils/dataSkilss";
import { motion } from "motion/react";
import { motionVariants } from "../../utils/animation";

function WorkExp() {
  return (
    <div className="education work-exp">
      <motion.h3
        custom={0}
        variants={motionVariants("right", 0.3, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className="work-exp-title"
      >
        Work & Experience
      </motion.h3>
      <div className="skills-info">
        {dataWorkExp.map((item, index) => {
          return (
            <motion.div
              custom={index}
              variants={motionVariants("bottom", 0.3, 100, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="experience-card"
              key={index}
            >
              <div className="upper">
                <h3>{item.title}</h3>
                <h5>{item.subtitle}</h5>
                <span>{item.year}</span>
              </div>
              <div className="hr"></div>
              <h4 className="label">{item.label}</h4>
              <p>{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkExp;
