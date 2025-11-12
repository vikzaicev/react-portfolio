import React from "react";
import Title from "../Title/Title";
import ServisesCard from "./ServisesCard";
import { dataServices } from "../../utils/dataServices";

function Servises() {
  return (
    <section className="services section" id="services">
      <div className="container flex-center">
        <Title title="Services" />
        <div className="services-wrapper">
          <h3 className="services-description">What I provide</h3>
          <ul className="services-list">
            <ServisesCard dataServices={dataServices} />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Servises;
