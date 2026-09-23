import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";
import PortfolioItem from "./PortfolioItem";
import { recentPortfolioProjects } from "../../data/portfolioProjects";

const Portfolio: FunctionComponent = () => {
  return (
    <section id={"portfolio"}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={"container portfolio__container"}>
        {recentPortfolioProjects.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
      <div className={"container portfolio__more"}>
        <Link to={"/portfolio"} className={"btn btn-primary"}>
          See more
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
