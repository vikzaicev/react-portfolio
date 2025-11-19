import { motion } from "motion/react";
import { motionVariants } from "../../utils/animation";
import { dataContacts } from "../../utils/dataContacts";

function ContacsLeft() {
  return (
    <div className="contact-left">
      <motion.h2
        custom={0}
        variants={motionVariants("right", 0.3, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        Let's discuss your project
      </motion.h2>
      <ul className="contact-list">
        {dataContacts.map((item) => {
          return (
            <motion.li
              custom={item.id}
              variants={motionVariants("right", 0.3, 50, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              key={item.id}
            >
              <h3>
                <item.img /> {item.name}
              </h3>
              <span>
                <a href="tel:001237779999">{item.value}</a>
              </span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContacsLeft;
