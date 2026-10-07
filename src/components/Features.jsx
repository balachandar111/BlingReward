import React, { useEffect, useState } from "react";
import { ShoppingBag, QrCode, BadgeCheck, Gift, MessageCircle, Star, Repeat, ArrowRight } from "lucide-react";
import "./Features.css";

const AUTOPLAY_MS = 4500;

const stepsData = [
  {
    id: 1,
    stepNum: "01",
    title: "Purchase",
    desc: "Customer buys product in store or online through any distribution channel.",
    icon: ShoppingBag,
  },
  {
    id: 2,
    stepNum: "02",
    title: "Scan QR",
    desc: "Customer scans the unique secure encrypted QR code on the packaging.",
    icon: QrCode,
  },
  {
    id: 3,
    stepNum: "03",
    title: "Verify",
    desc: "Product authenticity is validated instantly and custom page opens.",
    icon: BadgeCheck,
  },
  {
    id: 4,
    stepNum: "04",
    title: "Get Reward",
    desc: "Instant cashback, loyalty points, or prize sent immediately.",
    icon: Gift,
  },
  {
    id: 5,
    stepNum: "05",
    title: "WhatsApp",
    desc: "Automated customer engagement and notification updates via WhatsApp.",
    icon: MessageCircle,
  },
  {
    id: 6,
    stepNum: "06",
    title: "Review",
    desc: "Satisfied customers share reviews and refer friends.",
    icon: Star,
  },
  {
    id: 7,
    stepNum: "07",
    title: "Repeat",
    desc: "Drives repeat purchases and builds long-term brand loyalty.",
    icon: Repeat,
  },
];

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hold, setHold] = useState(false);
  const reduced = reduceMotion();
  const running = !hold && !reduced;

  useEffect(() => {
    if (!running) return undefined;
    const timer = setTimeout(
      () => setCurrentIndex((i) => (i + 1) % stepsData.length),
      AUTOPLAY_MS
    );
    return () => clearTimeout(timer);
  }, [currentIndex, running]);

  const active = stepsData[currentIndex];
  const next = stepsData[(currentIndex + 1) % stepsData.length];
  const ActiveIcon = active.icon;

  return (
    <section
      className="journey section"
      onPointerEnter={(e) => e.pointerType === "mouse" && setHold(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
    >
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">
            From purchase to <span className="text-gradient">loyal advocate</span>
          </h2>
          <p className="section-lede">
            See how Bling Reward turns a single product scan into a lifetime customer relationship.
          </p>
        </div>

        <div className="journey__grid">
          {/* ---------- step list ---------- */}
          <ol className="journey__steps">
            {stepsData.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentIndex;
              const isDone = index < currentIndex;
              return (
                <li key={step.id} className={isDone ? "is-done" : ""}>
                  <button
                    type="button"
                    className={`journey__step ${isActive ? "is-active" : ""}`}
                    aria-current={isActive ? "step" : undefined}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <span className="journey__node">
                      <Icon size={20} />
                    </span>
                    <span className="journey__label">
                      <small>Step {step.stepNum}</small>
                      <strong>{step.title}</strong>
                    </span>
                    {isActive && running && (
                      <span
                        className="journey__progress"
                        key={`p-${currentIndex}`}
                        style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ol>

          {/* ---------- preview panel ---------- */}
          <div className="journey__panel" aria-live="polite">
            <span className="bg-dots" aria-hidden="true" />
            <span className="journey__bignum" aria-hidden="true" key={`n-${currentIndex}`}>
              {active.stepNum}
            </span>

            <div className="journey__content" key={active.id}>
              <span className="journey__icon scan-frame is-light">
                <ActiveIcon size={34} strokeWidth={1.7} />
              </span>
              <p className="journey__count">
                Step {active.stepNum} of {String(stepsData.length).padStart(2, "0")}
              </p>
              <h3>{active.title}</h3>
              <p className="journey__desc">{active.desc}</p>
            </div>

            <button
              type="button"
              className="journey__next"
              onClick={() => setCurrentIndex((currentIndex + 1) % stepsData.length)}
            >
              Next: {next.title}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
