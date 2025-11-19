import { motion } from "motion/react";
import { motionVariants } from "../../utils/animation";
import { FaPaperPlane } from "react-icons/fa";

function GetIn() {
  return (
    <div className="get-in-touch sub-section">
      <div className="container flex-center">
        <div className="contact-card">
          <div className="title">
            <motion.h4
              custom={0}
              variants={motionVariants("right", 0.3, 50, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              LET'S TALK
            </motion.h4>
            <motion.h3
              custom={1}
              variants={motionVariants("right", 0.3, 50, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              ABOUT YOUR
            </motion.h3>
            <motion.h2
              custom={2}
              variants={motionVariants("right", 0.3, 50, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              NEXT PROJECT
            </motion.h2>
          </div>
          <motion.a
            custom={0}
            variants={motionVariants("left", 0.3, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            href=""
            className="get-in-touch-link inner-info-link"
          >
            Contact me
            <FaPaperPlane className="fa-solid fa-paper-plane" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default GetIn;
