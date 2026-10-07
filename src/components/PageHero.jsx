import React from "react";
import "./PageHero.css";

/**
 * Shared hero for inner pages.
 *  - badge:  { icon: <LucideIcon />, text: "..." }  (optional small pill)
 *  - title:  node (headline)
 *  - description: string | node
 *  - visual: node shown on the right (optional)
 *  - children: extra content under the description (buttons, stats…)
 */
function PageHero({ badge, title, description, visual, children, tone = "light" }) {
  const dark = tone === "dark";

  return (
    <section className={`page-hero ${dark ? "bg-dark on-dark" : "bg-aurora"}`}>
      <span className="bg-dots" aria-hidden="true" />

      <div className={`container page-hero__inner ${visual ? "has-visual" : ""}`}>
        <div className="page-hero__copy">
          {badge && (
            <p className="pill-label">
              <span className="pill-dot">{badge.icon}</span>
              {badge.text}
            </p>
          )}
          <h1 className="page-hero__title">{title}</h1>
          {description && <p className="page-hero__lede">{description}</p>}
          {children}
        </div>

        {visual && <div className="page-hero__visual">{visual}</div>}
      </div>
    </section>
  );
}

export default PageHero;
