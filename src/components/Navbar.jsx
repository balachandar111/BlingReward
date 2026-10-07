import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Menu, X, ArrowRight } from "lucide-react";
import DemoForm from "./DemoForm";
import "./Navbar.css";

const links = [
  { to: "/solutions", label: "Solutions" },
  { to: "/service", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/features", label: "Features" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/faq", label: "FAQ" },
];

function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  /* shadow gets stronger once the page scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close the mobile menu on navigation / Escape */
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const openDemo = () => {
    setMenuOpen(false);
    setShowForm(true);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav__shell">
          <nav className="nav__bar" aria-label="Primary">
            <Link to="/" className="nav__logo" aria-label="Bling Reward home">
              <img src="/logo.png" alt="Bling Reward" />
            </Link>

            <div className="nav__links">
              <NavHashLink smooth to="/#about" className="nav__link">
                About
              </NavHashLink>
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>

            <div className="nav__actions">
              <button type="button" className="btn btn-primary btn-sm nav__cta" onClick={openDemo}>
                Book Demo
                <ArrowRight size={16} className="btn-arrow" />
              </button>

              <button
                type="button"
                className="nav__toggle"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((o) => !o)}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>

          <div id="mobile-menu" className={`nav__menu ${menuOpen ? "is-open" : ""}`}>
            <NavHashLink smooth to="/#about" className="nav__menu-link">
              About
            </NavHashLink>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => `nav__menu-link ${isActive ? "is-active" : ""}`}
              >
                {l.label}
              </NavLink>
            ))}
            <button type="button" className="btn btn-primary" onClick={openDemo}>
              Book a Free Demo
              <ArrowRight size={16} className="btn-arrow" />
            </button>
          </div>
        </div>
      </header>

      {showForm && <DemoForm onClose={() => setShowForm(false)} />}
    </>
  );
}

export default Navbar;
