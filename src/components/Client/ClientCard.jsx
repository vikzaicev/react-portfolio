import { motion } from "motion/react";
import { motionVariants } from "../../utils/animation";

function ClientCard({ item }) {
  return (
    <>
      <div className="swiper-slide swiper-client-block">
        <div className="client-img">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="client-details">
          <motion.p
            custom={1}
            variants={motionVariants("right", 0.3, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            {item.text}
          </motion.p>
          <motion.h3
            custom={2}
            variants={motionVariants("right", 0.3, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            {item.title}
          </motion.h3>
          <motion.span
            custom={3}
            variants={motionVariants("right", 0.3, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            {item.span}
          </motion.span>
        </div>
      </div>
    </>
  );
}

export default ClientCard;
