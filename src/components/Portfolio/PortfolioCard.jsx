import React, { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import { motion } from "motion/react";
import { motionVariants } from "../../utils/animation";

function PortfolioCard({ item }) {
  const [activModal, setActivModal] = useState(false);

  const openModal = () => {
    setActivModal(true);
  };
  const closeModal = () => {
    setActivModal(false);
  };

  return (
    <motion.div
      custom={item.id}
      variants={motionVariants("bottom", 0.3, 100, true)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="portfolio-img-card"
    >
      <div className="img-card" onClick={openModal}>
        <div className="overlay"></div>
        <div className="info">
          <h3>{item.title}</h3>
          <span>Youtube</span>
        </div>
        <img src={item.img} alt={item.title} />
      </div>
      <PortfolioModal
        activModal={activModal}
        item={item}
        closeModal={closeModal}
      />
    </motion.div>
  );
}

export default PortfolioCard;
