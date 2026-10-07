import React, { useMemo, useState } from "react";
import { ArrowRight, Phone, Gift, Sparkles } from "lucide-react";
import DemoForm from "./DemoForm";
import "./TalkToSales.css";

const SIZE = 25;

/* Deterministic QR-style pattern: three finder squares + seeded modules. */
function buildModules() {
  const cells = [];
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };

  const inFinder = (x, y) =>
    (x < 8 && y < 8) || (x >= SIZE - 8 && y < 8) || (x < 8 && y >= SIZE - 8);
  const inCenter = (x, y) => x >= 9 && x <= 15 && y >= 9 && y <= 15; // room for the badge

  for (let y = 0; y < SIZE; y += 1) {
    for (let x = 0; x < SIZE; x += 1) {
      if (!inFinder(x, y) && !inCenter(x, y) && rand() > 0.52) cells.push([x, y]);
    }
  }
  return cells;
}

function QrArt() {
  const modules = useMemo(buildModules, []);
  const finders = [
    [0, 0],
    [SIZE - 7, 0],
    [0, SIZE - 7],
  ];

  return (
    <svg
      className="cta__qr-svg"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Decorative QR code"
    >
      {modules.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" rx="0.2" />
      ))}
      {finders.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="7" height="7" rx="1.4" />
          <rect x={x + 1} y={y + 1} width="5" height="5" rx="0.9" className="cta__qr-hole" />
          <rect x={x + 2} y={y + 2} width="3" height="3" rx="0.6" />
        </g>
      ))}
    </svg>
  );
}

const TalkToSales = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__panel">
          <span className="bg-dots" aria-hidden="true" />

          {/* ---------- copy ---------- */}
          <div className="cta__copy">
            <p className="cta__badge">
              <Sparkles size={16} />
              Start Your Free 30–Day Trial
            </p>

            <h2 className="cta__title">
              Ready to Transform Your Brand Engagement?
            </h2>

            <p className="cta__text">
              Join 500+ brands using Bling Reward to protect products, reward customers, and unlock
              data-driven growth.
            </p>

            <div className="cta__buttons">
              <button type="button" className="btn btn-light" onClick={() => setShowDemoForm(true)}>
                Book a Free Demo
                <ArrowRight size={18} className="btn-arrow" />
              </button>

              <a href="tel:8825751903" className="btn btn-outline-light">
                <Phone size={18} />
                Talk to Sales
              </a>
            </div>

            <p className="cta__fineprint">
              No credit card required &nbsp;•&nbsp; Setup in 7 days &nbsp;•&nbsp; Dedicated
              onboarding support
            </p>
          </div>

          {/* ---------- QR art ---------- */}
          <div className="cta__art" aria-hidden="true">
            <div className="cta__qr scan-frame is-light">
              <QrArt />
              <span className="cta__qr-badge">
                <Gift size={26} />
              </span>
              <span className="cta__qr-scan" />
            </div>
          </div>
        </div>
      </div>

      {showDemoForm && <DemoForm onClose={() => setShowDemoForm(false)} />}
    </section>
  );
};

export default TalkToSales;
