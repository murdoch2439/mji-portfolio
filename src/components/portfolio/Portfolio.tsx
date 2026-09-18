import React, { FunctionComponent } from "react";
import "./portfolio.css";
import PortfolioItem from "./PortfolioItem";
import { portfolioProjects } from "../../data/portfolioProjects";

const Portfolio: FunctionComponent = () => {
  return (
    <section id={"portfolio"}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={"container portfolio__container"}>
        {portfolioProjects.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
