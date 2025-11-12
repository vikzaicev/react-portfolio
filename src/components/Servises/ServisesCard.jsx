import React, { useState } from "react";
import Modal from "./Modal";
import { FaRightLong } from "react-icons/fa6";

function ServisesCard({ dataServices }) {
  const [activIndex, setActivIndex] = useState(null);

  const openModal = (index) => {
    setActivIndex(index);
  };
  const closeModal = () => {
    setActivIndex(null);
  };
  return (
    <>
      {dataServices.map((item, index) => {
        return (
          <li className="services-container" key={index}>
            <div className="service-card">
              <item.icon className="services-icon" />
              <h3>{item.title}</h3>
              <div className="learn-more-btn" onClick={() => openModal(index)}>
                Learn More
                <FaRightLong className="long" />
              </div>
            </div>
            {activIndex === index && (
              <Modal item={item} isActive={true} onClose={closeModal} />
            )}
          </li>
        );
      })}
    </>
  );
}

export default ServisesCard;
