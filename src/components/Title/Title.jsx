import { motion } from "motion/react";
import { motionVariants } from "../../utils/animation";

function Title({ title }) {
  return (
    <>
      <motion.h2
        custom={0}
        variants={motionVariants("bottom", 0.3, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className="inner-title"
      >
        {title}
      </motion.h2>
      <motion.h3
        custom={1}
        variants={motionVariants("bottom", 0.3, 70, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className="inner-second-title"
      >
        {title}
      </motion.h3>
    </>
  );
}

export default Title;
