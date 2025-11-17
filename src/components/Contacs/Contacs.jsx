import React from "react";
import Title from "../Title/Title";
import ContacsLeft from "./ContacsLeft";
import ContacsRiht from "./ContacsRiht";

function Contacs() {
  return (
    <section className="contact section" id="contact">
      <div className="container flex-center">
        <Title title="Contact Me" />
        <div className="contact-wrapper">
          <ContacsLeft />
          <ContacsRiht />
        </div>
      </div>
    </section>
  );
}

export default Contacs;
