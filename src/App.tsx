import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import FooterSm from "./components/footerSm/FooterSm";
import { GlobalStore} from './store/Context';
import SectionComponent from "./components/section/SectionComponent";



function App() {

  return (
      <>
        <GlobalStore>
          <div className="App">
            <SectionComponent  id={''}><Header /></SectionComponent>

            {/*<Header />*/}
            <Nav />
            <SectionComponent  id={'about'}><About /></SectionComponent>
            <SectionComponent  id={'experience'}><Experience /></SectionComponent>
            <SectionComponent  id={'services'}><Services /></SectionComponent>
            <SectionComponent  id={'portfolio'}><Portfolio /></SectionComponent>
            <SectionComponent  id={'testimonials'}><Testimonials /></SectionComponent>
            <SectionComponent  id={'contact'}><Contact /></SectionComponent>

            {/*<About />*/}
            {/*<Experience />*/}
            {/*<Services />*/}
            {/*<Portfolio />*/}
            {/*<Testimonials />*/}
            <Footer />
            <FooterSm />
          </div>
        </GlobalStore>
      </>
  );
}

export default App;
