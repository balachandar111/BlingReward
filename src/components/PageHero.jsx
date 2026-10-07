import React from "react";
import "./PageHero.css";

/**
 * Shared hero for inner pages.
 *  - badge:       { icon: <LucideIcon />, text: "..." }  (optional small pill)
 *  - title:       node (headline)
 *  - description: string | node
 *  - visual:      node shown on the right (optional)
 *  - children:    extra content under the description (buttons, search…)
 *  - tone:        "light" (default, aurora) | "dark"
 *
 *  Optional "rich" extras (used by Features / Case Studies / FAQ / Careers):
 *  - crumbs:  string          -> small breadcrumb above the badge, e.g. "Case studies"
 *  - stats:   [{ value, label }]   -> glass stat strip under the copy
 *  - chips:   [{ label, onClick?, icon? }] -> quick-action chips under the copy
 *  - floaters: [<Icon/>, …]   -> decorative floating icon tiles behind the hero
 *
 *  Pages that pass none of these render exactly as before.
 */
function PageHero({
  badge,
  title,
  description,
  visual,
  children,
  tone = "light",
  crumbs,
  stats,
  chips,
  floaters,
}) {
  const dark = tone === "dark";
  const rich = Boolean(crumbs || stats || chips || floaters);

  return (
    <section
      className={`page-hero ${dark ? "bg-dark on-dark" : "bg-aurora"} ${rich ? "page-hero--rich" : ""}`}
    >
      <span className="bg-dots" aria-hidden="true" />

      {floaters && (
        <div className="page-hero__floaters" aria-hidden="true">
          {floaters.map((icon, i) => (
            <span className={`page-hero__floater f${i + 1}`} key={i}>
              {icon}
            </span>
          ))}
        </div>
      )}

      <div className={`container page-hero__inner ${visual ? "has-visual" : ""}`}>
        <div className="page-hero__copy">
          {crumbs && (
            <p className="page-hero__crumbs">
              <span>Home</span>
              <i aria-hidden="true">/</i>
              <b>{crumbs}</b>
            </p>
          )}

          {badge && (
            <p className="pill-label">
              <span className="pill-dot">{badge.icon}</span>
              {badge.text}
            </p>
          )}
          <h1 className="page-hero__title">{title}</h1>
          {description && <p className="page-hero__lede">{description}</p>}
          {children}

          {chips && (
            <ul className="page-hero__chips">
              {chips.map((c) => (
                <li key={c.label}>
                  {c.onClick ? (
                    <button type="button" onClick={c.onClick}>
                      {c.icon}
                      {c.label}
                    </button>
                  ) : (
                    <span>
                      {c.icon}
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}

          {stats && (
            <dl className="page-hero__stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {visual && <div className="page-hero__visual">{visual}</div>}
      </div>
    </section>
  );
}

export default PageHero;
