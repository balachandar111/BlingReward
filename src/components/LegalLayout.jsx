import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock, Printer } from "lucide-react";
import PageHero from "./PageHero";
import "./LegalLayout.css";

/**
 * Shared layout for legal documents (Privacy Policy, Terms & Conditions).
 *
 * sections: [{ id, title, body: [ node, … ] }]
 * node:  "paragraph text"
 *        { list: ["a", "b"] }
 *        { sub: "Sub-heading" }
 *        { note: "Highlighted note" }
 */
function renderNode(node, i) {
  if (typeof node === "string") return <p key={i}>{node}</p>;
  if (node.list)
    return (
      <ul className="legal-list" key={i}>
        {node.list.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    );
  if (node.sub) return <h3 key={i}>{node.sub}</h3>;
  if (node.note) return <p className="legal-note" key={i}>{node.note}</p>;
  return null;
}

function LegalLayout({ badge, crumbs, title, description, updated, sections, other }) {
  const [active, setActive] = useState(sections[0]?.id);

  const minutes = Math.max(
    1,
    Math.round(
      sections
        .flatMap((s) => s.body)
        .map((n) => (typeof n === "string" ? n : (n.list || [n.sub || n.note || ""]).join(" ")))
        .join(" ")
        .split(/\s+/).length / 200
    )
  );

  /* highlight the table-of-contents entry for the section being read */
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [sections]);

  return (
    <>
      <PageHero
        crumbs={crumbs}
        badge={badge}
        title={title}
        description={description}
        chips={[
          { label: `Last updated ${updated}`, icon: <CalendarDays size={15} /> },
          { label: `${minutes} min read`, icon: <Clock size={15} /> },
        ]}
      />

      <section className="legal section">
        <div className="container legal__grid">
          {/* ---------- table of contents ---------- */}
          <aside className="legal__toc" aria-label="On this page">
            <p className="legal__toc-title">On this page</p>
            <ol>
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={active === s.id ? "is-active" : ""}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>

            <button type="button" className="legal__print" onClick={() => window.print()}>
              <Printer size={16} />
              Print / save as PDF
            </button>
          </aside>

          {/* ---------- document ---------- */}
          <article className="legal__doc">
            {sections.map((s, i) => (
              <section className="legal-sec" id={s.id} key={s.id}>
                <h2>
                  <span className="legal-sec__n">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                {s.body.map(renderNode)}
              </section>
            ))}

            <div className="legal__other">
              <div>
                <h2>{other.title}</h2>
                <p>{other.text}</p>
              </div>
              <Link to={other.to} className="btn btn-primary">
                {other.label}
                <ArrowRight size={18} className="btn-arrow" />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default LegalLayout;
