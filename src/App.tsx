import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { GlobalStore } from "./store/Context";
import Home from "./pages/Home";
import CaseStudyPage from "./pages/CaseStudyPage";

/** Scroll to hash targets when navigating to /#section from case studies */
const HashScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Wait a tick so Home has mounted
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
    } else if (location.pathname === "/") {
      // no-op: keep existing section scroll from nav
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <GlobalStore>
        <div className="App">
          <HashScrollHandler />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<CaseStudyPage />} />
          </Routes>
        </div>
      </GlobalStore>
    </BrowserRouter>
  );
}

export default App;
