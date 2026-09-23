import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import TagList from "../tags/TagList";
import { PortfolioProject } from "../../data/portfolioProjects";

type Props = {
  item: PortfolioProject;
};

const PortfolioItem: FunctionComponent<Props> = ({ item }) => {
  const { cover, href, work, title, linkType } = item;

  return (
    <article className={"portfolio__item"}>
      <div className={"portfolio__item-image"}>
        <img src={cover} alt={title} className={"portfolio__image"} />
      </div>

      <TagList items={work} />
      <h3 className={"portfolio__item-title"}>{title}</h3>
      <div className={"portfolio__item-cta"}>
        {linkType === "caseStudy" ? (
          <Link to={href} className={"btn"}>
            See project
          </Link>
        ) : (
          <a href={href} className={"btn"} target={"_blank"} rel="noreferrer">
            See project
          </a>
        )}
      </div>
    </article>
  );
};

export default PortfolioItem;
