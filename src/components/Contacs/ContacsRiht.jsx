import { FaPaperPlane } from "react-icons/fa";
import { motion } from "motion/react";
import { motionVariants } from "../../utils/animation";

function ContacsRiht() {
  return (
    <div className="contact-right">
      <motion.p
        custom={0}
        variants={motionVariants("left", 0.3, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        I'm always open to discussing product{" "}
        <span>design work or partnerships.</span>
      </motion.p>
      <form className="form contact-form">
        <motion.div
          custom={1}
          variants={motionVariants("left", 0.3, 50, true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="first-row"
        >
          <input placeholder="Name" type="text" />
        </motion.div>
        <motion.div
          custom={2}
          variants={motionVariants("left", 0.3, 50, true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="second-row"
        >
          <input placeholder="Email" type="email" />
          <input placeholder="Subject" type="text" />
        </motion.div>
        <motion.div
          custom={3}
          variants={motionVariants("left", 0.3, 50, true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="third-row"
        >
          <textarea placeholder="Message"></textarea>
        </motion.div>
        <motion.button
          custom={4}
          variants={motionVariants("left", 0.3, 50, true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="contant-btn inner-info-link"
          type="submit"
        >
          Send Message
          <FaPaperPlane className="fa-solid" />
        </motion.button>
      </form>
    </div>
  );
}

export default ContacsRiht;
