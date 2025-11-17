import React from "react";
import { FaXmark } from "react-icons/fa6";

function PortfolioModal({ item, activModal, closeModal }) {
  return (
    <div
      className={activModal ? "portfolio-model active" : "portfolio-model"}
      onClick={closeModal}
    >
      <div className="portfolio-model-body">
        <FaXmark className="portfolio-close-btn" onClick={closeModal} />
        <h3>{item.title}</h3>
        <img src={item.img} alt={item.title} />
        <p>{item.text}</p>
      </div>
    </div>
  );
}

export default PortfolioModal;
