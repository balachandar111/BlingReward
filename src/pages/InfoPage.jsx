import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ArrowRight, Clock, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import DemoForm from "../components/DemoForm";
import useReveal from "../components/useReveal";
import infoPages, { SALES_TEL } from "./infoPages";
import "./InfoPage.css";

/**
 * One template for the simple Company / Resources pages linked from the footer.
 * Content lives in infoPages.js; routes are registered in App.js.
 */
function InfoPage({ slug }) {
  const page = infoPages[slug];
  const [showDemo, setShowDemo] = useState(false);
  const cardsRef = useReveal();

  if (!page) return <Navigate to="/" replace />;

  const Icon = page.icon;
  const soon = page.status === "soon";
  const [plain, accent] = page.title;

  const cta = page.cta;
  const ctaButton =
    cta.type === "demo" ? (
      <button type="button" className="btn btn-primary" onClick={() => setShowDemo(true)}>
        {cta.label}
        <ArrowRight size={18} className="btn-arrow" />
      </button>
    ) : cta.type === "tel" ? (
      <a className="btn btn-primary" href={`tel:${SALES_TEL}`}>
        <Phone size={18} />
        {cta.label}
      </a>
    ) : (
      <Link className="btn btn-primary" to={cta.to}>
        {cta.label}
        <ArrowRight size={18} className="btn-arrow" />
      </Link>
    );

  return (
    <>
      <PageHero
        crumbs={`${plain} ${accent}`.trim()}
        badge={{ icon: <Icon size={14} />, text: page.badge }}
        title={
          <>
            {plain && `${plain} `}
            <span className="text-gradient">{accent}</span>
          </>
        }
        description={page.description}
        floaters={[<Icon size={24} />, <Icon size={20} />, <Icon size={22} />]}
      >
        {soon && (
          <p className="info-soon">
            <Clock size={15} />
            Coming soon
          </p>
        )}
      </PageHero>

      <section className="info section">
        <div className="container">
          <div className="section-head is-center">
            <h2 className="section-title">{page.sectionTitle}</h2>
          </div>

          <ul className="info__grid reveal" ref={cardsRef}>
            {page.cards.map((c, i) => {
              const CardIcon = c.icon;
              const inner = (
                <>
                  <span className="info-card__icon">
                    <CardIcon size={24} />
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  {c.linkLabel && (
                    <span className="info-card__link">
                      {c.linkLabel}
                      <ArrowRight size={15} />
                    </span>
                  )}
                </>
              );

              return (
                <li className="reveal-item" style={{ "--i": i }} key={c.title}>
                  {c.to ? (
                    <Link to={c.to} className="info-card is-link">
                      {inner}
                    </Link>
                  ) : c.href ? (
                    <a href={c.href} className="info-card is-link">
                      {inner}
                    </a>
                  ) : c.action === "demo" ? (
                    <button type="button" className="info-card is-link" onClick={() => setShowDemo(true)}>
                      {inner}
                    </button>
                  ) : (
                    <div className="info-card">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="info__cta bg-dark on-dark">
            <span className="bg-dots" aria-hidden="true" />
            <div>
              <h2>{soon ? "Need something in the meantime?" : "Let’s talk"}</h2>
              <p>
                {soon
                  ? "Our team is happy to help while this page is being prepared."
                  : "Tell us about your brand and we’ll show you what Bling Reward can do."}
              </p>
            </div>
            {ctaButton}
          </div>
        </div>
      </section>

      {showDemo && <DemoForm onClose={() => setShowDemo(false)} />}
    </>
  );
}

export default InfoPage;
