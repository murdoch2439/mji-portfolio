import React, { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { getCaseStudyBySlug } from "../data/caseStudies";
import "./caseStudy.css";

const CaseStudyBackControl: FunctionComponent = () => (
  <Link
    to="/#portfolio"
    className="case-study__float-back"
    aria-label="Back to portfolio"
  >
    <HiOutlineArrowLeft aria-hidden />
    <span>Portfolio</span>
  </Link>
);

const CaseStudyScrollTop: FunctionComponent<{ visible: boolean }> = ({
  visible,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`case-study__scroll-up${
        visible ? " case-study__scroll-up--visible" : ""
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
    >
      Scroll Up
    </button>
  );
};

const CaseStudyChrome: FunctionComponent = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollUp(window.scrollY > 320);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container case-study__chrome">
      <CaseStudyBackControl />
      <CaseStudyScrollTop visible={showScrollUp} />
    </div>
  );
};

const CaseStudyPage: FunctionComponent = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <main className="case-study case-study--missing">
        <div className="container">
          <h1>Project not found</h1>
          <p className="text-light">
            This case study does not exist or was moved.
          </p>
          <Link to="/#portfolio" className="btn btn-primary">
            Back to portfolio
          </Link>
        </div>
        <CaseStudyChrome />
      </main>
    );
  }

  return (
    <main className="case-study">
      <header className="case-study__hero">
        <div className="container case-study__hero-inner">
          <Link to="/#portfolio" className="case-study__back">
            ← Back to portfolio
          </Link>
          <p className="case-study__eyebrow">Case study</p>
          <h1>{study.title}</h1>
          <p className="case-study__subtitle">{study.subtitle}</p>

          <ul className="case-study__tags">
            {study.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div className="case-study__actions">
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Visit live site
              </a>
            )}
            {study.githubUrl && (
              <a
                href={study.githubUrl}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                View code
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="container case-study__cover-wrap">
        <img
          src={study.cover}
          alt={`${study.title} preview`}
          className="case-study__cover"
        />
      </div>

      <div className="container case-study__meta">
        <div>
          <h5>Role</h5>
          <p>{study.meta.role}</p>
        </div>
        <div>
          <h5>Timeline</h5>
          <p>{study.meta.timeline}</p>
        </div>
        <div>
          <h5>Team</h5>
          <p>{study.meta.team}</p>
        </div>
        <div>
          <h5>Stack</h5>
          <p>{study.meta.stack.join(" · ")}</p>
        </div>
      </div>

      <section className="container case-study__section">
        <h2>Overview</h2>
        <p>{study.overview}</p>
      </section>

      <section className="container case-study__section">
        <h2>The problem</h2>
        <p>{study.problem.summary}</p>
        <ul className="case-study__list">
          {study.problem.challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="container case-study__section">
        <h2>Goals</h2>
        <ol className="case-study__list case-study__list--ordered">
          {study.goals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ol>
      </section>

      <section className="container case-study__section">
        <h2>Process</h2>
        <div className="case-study__phases">
          {study.process.phases.map((phase, index) => (
            <article key={phase.title} className="case-study__phase">
              <span className="case-study__phase-step">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container case-study__section">
        <h2>Solution</h2>
        <p>{study.solution.summary}</p>
        <div className="case-study__features">
          {study.solution.features.map((feature) => (
            <article key={feature.title} className="case-study__feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container case-study__section">
        <h2>Outcomes</h2>
        <p className="case-study__placeholder-note">{study.outcomes.summary}</p>
        <div className="case-study__metrics">
          {study.outcomes.metrics.map((metric) => (
            <div key={metric.label} className="case-study__metric">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container case-study__section">
        <h2>Reflection</h2>
        <div className="case-study__reflection">
          <div>
            <h3>What I learned</h3>
            <ul className="case-study__list">
              {study.reflection.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>What&apos;s next</h3>
            <ul className="case-study__list">
              {study.reflection.next.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container case-study__cta">
        <h2>Want something similar?</h2>
        <p className="text-light">
          Let&apos;s talk about your product, workflow, or client site.
        </p>
        <div className="case-study__actions">
          <Link to="/#contact" className="btn btn-primary">
            Get in touch
          </Link>
          <Link to="/#portfolio" className="btn">
            More projects
          </Link>
        </div>
      </section>

      <CaseStudyChrome />
    </main>
  );
};

export default CaseStudyPage;
