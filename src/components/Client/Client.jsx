import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Title from "../Title/Title";
import ClientCard from "./ClientCard";
import { dataClient } from "../../utils/dataClient";

function Client() {
  return (
    <section className="section our-client">
      <div className="container flex-center">
        <Title title="Our Clients" />
        <div className="our-client-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination
            loop={true}
            className="swiper client-swiper"
          >
            <div className="swiper-wrapper">
              {dataClient.map((item) => (
                <SwiperSlide key={item.id}>
                  <ClientCard item={item} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>

          <div className="swiper-button-next">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Client;
