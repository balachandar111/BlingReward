import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import "./components/styles.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DemoForm from "./components/DemoForm";

import Home from "./pages/Home";
import Features from "./pages/Featurespage";
import Solutions from "./pages/Solutionspage";
import Service from "./pages/Servicespage";
import Industries from "./pages/Industriespage";
import FAQ from "./pages/FAQpage";
import CaseStudy from "./pages/CaseStudypage";

/* Reset scroll on route change (hash links such as /#about keep working). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

/* Navbar + Footer are rendered once here instead of inside every page. */
function Layout() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/service" element={<Service />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/case-studies" element={<CaseStudy />} />
        </Route>
        {/* Stand-alone demo form route (kept from the original app) */}
        <Route path="/demoform" element={<DemoForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
