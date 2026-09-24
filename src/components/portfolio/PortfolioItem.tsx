import React, { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import TagList from "../tags/TagList";
import { PortfolioProject } from "../../data/portfolioProjects";
import {
  CaseStudyLocationState,
  PortfolioOrigin,
  rememberPortfolioOrigin,
} from "../../utils/portfolioNavigation";

type Props = {
  item: PortfolioProject;
};

const PortfolioItem: FunctionComponent<Props> = ({ item }) => {
  const { cover, href, work, title, linkType } = item;
  const location = useLocation();

  const portfolioOrigin: PortfolioOrigin =
    location.pathname === "/portfolio" ? "all" : "home";

  const caseStudyState: CaseStudyLocationState = { portfolioOrigin };

  const openCaseStudy = () => {
    rememberPortfolioOrigin(portfolioOrigin);
  };

  return (
    <article className={"portfolio__item"}>
      <div className={"portfolio__item-image"}>
        <img src={cover} alt={title} className={"portfolio__image"} />
      </div>

      <TagList items={work} />
      <h3 className={"portfolio__item-title"}>{title}</h3>
      <div className={"portfolio__item-cta"}>
        {linkType === "caseStudy" ? (
          <Link
            to={href}
            state={caseStudyState}
            className={"btn"}
            onClick={openCaseStudy}
          >
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
