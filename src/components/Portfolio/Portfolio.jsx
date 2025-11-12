import React from "react";
import Title from "../Title/Title";
import PortfolioCard from "./PortfolioCard";
import { dataPortfolio } from "../../utils/dataPortfolio";

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container flex-center">
        <Title title="Portfolio" />
        <div className="portfolio-wrapper">
          {dataPortfolio.map((item) => {
            return <PortfolioCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
