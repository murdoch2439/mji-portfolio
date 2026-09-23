import React, { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import PortfolioItem from "../components/portfolio/PortfolioItem";
import { portfolioProjects } from "../data/portfolioProjects";
import "../components/portfolio/portfolio.css";
import "./portfolioPage.css";

const PortfolioPage: FunctionComponent = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollUp(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="portfolio-page">
      <header className="portfolio-page__hero">
        <div className="container">
          <Link to="/#portfolio" className="portfolio-page__back">
            ← Back to home
          </Link>
          <p className="portfolio-page__eyebrow">All work</p>
          <h1>Portfolio</h1>
          <p className="portfolio-page__subtitle">
          From design to technical implementation, I'm able to deliver any project with a well structured work process.
          </p>
        </div>
      </header>

      <div className="container portfolio__container portfolio-page__grid">
        {portfolioProjects.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>

      <div className="container portfolio-page__chrome">
        <Link
          to="/#portfolio"
          className="portfolio-page__float-back"
          aria-label="Back to home portfolio"
        >
          <HiOutlineArrowLeft aria-hidden />
          <span>Home</span>
        </Link>
        <button
          type="button"
          className={`portfolio-page__scroll-up${
            showScrollUp ? " portfolio-page__scroll-up--visible" : ""
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          tabIndex={showScrollUp ? 0 : -1}
        >
          Scroll Up
        </button>
      </div>
    </main>
  );
};

export default PortfolioPage;
