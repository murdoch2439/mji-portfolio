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



function App() {

  return (
      <>
        <GlobalStore>
          <div className="App">
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
            <FooterSm />
          </div>
        </GlobalStore>
      </>
  );
}

export default App;
