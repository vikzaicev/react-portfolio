import React, { useState } from "react";
import PortfolioModal from "./PortfolioModal";

function PortfolioCard({ item }) {
  const [activModal, setActivModal] = useState(false);

  const openModal = () => {
    setActivModal(true);
  };
  const closeModal = () => {
    setActivModal(false);
  };

  return (
    <>
      <div className="portfolio-img-card">
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
      </div>
    </>
  );
}

export default PortfolioCard;
