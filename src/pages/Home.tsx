import React, { FunctionComponent } from "react";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Experience from "../components/experience/Experience";
import Services from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";
import FooterSm from "../components/footerSm/FooterSm";
import SectionComponent from "../components/section/SectionComponent";
import {
  HOME_SCROLL_SECTION_IDS,
  useScrollSpy,
} from "../hooks/useScrollSpy";

const Home: FunctionComponent = () => {
  useScrollSpy(HOME_SCROLL_SECTION_IDS);

  return (
    <>
      <SectionComponent id={""}>
        <Header />
      </SectionComponent>
      <Nav />
      <SectionComponent id={"about"}>
        <About />
      </SectionComponent>
      <SectionComponent id={"experience"}>
        <Experience />
      </SectionComponent>
      <SectionComponent id={"services"}>
        <Services />
      </SectionComponent>
      <SectionComponent id={"portfolio"}>
        <Portfolio />
      </SectionComponent>
      <SectionComponent id={"testimonials"}>
        <Testimonials />
      </SectionComponent>
      <SectionComponent id={"contact"}>
        <Contact />
      </SectionComponent>
      <Footer />
      <FooterSm />
    </>
  );
};

export default Home;
