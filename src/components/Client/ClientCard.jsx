import React from "react";

function ClientCard({ item }) {
  return (
    <>
      <div className="swiper-slide swiper-client-block">
        <div className="client-img">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="client-details">
          <p>{item.text}</p>
          <h3>{item.title}</h3>
          <span>{item.span}</span>
        </div>
      </div>
    </>
  );
}

export default ClientCard;
