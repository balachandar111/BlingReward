import React, { useEffect, useState } from "react";
import {
  QrCode,
  BadgeCheck,
  Gift,
  MessageCircle,
  Star,
  ArrowRight,
  ArrowLeft,
  Check,
  ShieldCheck,
} from "lucide-react";
import "./Features.css";

const AUTOPLAY_MS = 5000;

/* ---------------------------------------------------------------------------
   5-step customer journey: Scan → Verify → Get Reward → WhatsApp → Review
--------------------------------------------------------------------------- */
const stepsData = [
  {
    id: 1,
    stepNum: "01",
    title: "Scan",
    tag: "Customer scans",
    desc: "Customer scans the unique, encrypted QR code on the product packaging using any phone camera. No app download needed.",
    points: [
      "Works with any smartphone camera",
      "Unique secure QR on every pack",
      "Opens instantly, no app required",
    ],
    icon: QrCode,
    tone: "violet",
  },
  {
    id: 2,
    stepNum: "02",
    title: "Verify",
    tag: "Instant authenticity check",
    desc: "The product is validated in real time against your database and a branded verification page opens for the customer.",
    points: [
      "Real-time authenticity validation",
      "Fake and duplicate scans flagged",
      "Branded product information page",
    ],
    icon: BadgeCheck,
    tone: "blue",
  },
  {
    id: 3,
    stepNum: "03",
    title: "Get Reward",
    tag: "Instant gratification",
    desc: "Cashback, loyalty points, or a surprise prize is credited immediately, giving customers a reason to scan every time.",
    points: [
      "Cashback, points or gift prizes",
      "Credited within seconds",
      "Fully configurable reward rules",
    ],
    icon: Gift,
    tone: "amber",
  },
  {
    id: 4,
    stepNum: "04",
    title: "WhatsApp",
    tag: "Automated engagement",
    desc: "Reward confirmations, offers and updates are delivered automatically on WhatsApp, the channel your customers already use.",
    points: [
      "Instant reward confirmation",
      "Personalised offers and updates",
      "Higher open rates than email or SMS",
    ],
    icon: MessageCircle,
    tone: "green",
  },
  {
    id: 5,
    stepNum: "05",
    title: "Review",
    tag: "Social proof & loyalty",
    desc: "Happy customers are prompted to leave a review and refer friends, which builds trust and drives repeat purchases.",
    points: [
      "One-tap review requests",
      "Refer-a-friend sharing built in",
      "Turns buyers into brand advocates",
    ],
    icon: Star,
    tone: "rose",
  },
];

/* ---------------------------------------------------------------------------
   Small phone mock-up that changes per step (pure CSS / JSX, no images)
--------------------------------------------------------------------------- */
const StepVisual = ({ id }) => (
  <div className="jx-phone" aria-hidden="true">
    <span className="jx-phone__notch" />
    <div className="jx-phone__screen" key={id}>
      {id === 1 && (
        <div className="jx-scan">
          <p className="jx-scan__hint">Point camera at QR</p>
          <div className="jx-scan__box">
            <span className="jx-scan__corner tl" />
            <span className="jx-scan__corner tr" />
            <span className="jx-scan__corner bl" />
            <span className="jx-scan__corner br" />
            <QrCode size={78} strokeWidth={1.4} />
            <span className="jx-scan__line" />
          </div>
          <span className="jx-pill">Scanning…</span>
        </div>
      )}

      {id === 2 && (
        <div className="jx-verify">
          <span className="jx-verify__badge">
            <ShieldCheck size={38} strokeWidth={1.8} />
          </span>
          <h4>100% Authentic</h4>
          <p>Product verified successfully</p>
          <ul>
            <li><Check size={14} /> Batch No. verified</li>
            <li><Check size={14} /> Not scanned before</li>
            <li><Check size={14} /> Genuine brand product</li>
          </ul>
        </div>
      )}

      {id === 3 && (
        <div className="jx-reward">
          <span className="jx-reward__icon">
            <Gift size={30} strokeWidth={1.8} />
          </span>
          <p>Congratulations!</p>
          <h4>₹50</h4>
          <span className="jx-pill jx-pill--amber">Cashback credited</span>
          <div className="jx-reward__bar"><i /></div>
          <small>Loyalty points: 120 / 200</small>
        </div>
      )}

      {id === 4 && (
        <div className="jx-chat">
          <div className="jx-chat__head">
            <span className="jx-chat__avatar"><MessageCircle size={14} /></span>
            <div>
              <strong>Bling Reward</strong>
              <small>online</small>
            </div>
          </div>
          <div className="jx-chat__body">
            <span className="jx-bubble">🎉 Your ₹50 cashback is added!</span>
            <span className="jx-bubble">Thanks for scanning. Here's 10% off your next order.</span>
            <span className="jx-bubble jx-bubble--me">Awesome, thank you!</span>
          </div>
        </div>
      )}

      {id === 5 && (
        <div className="jx-review">
          <p>How was your product?</p>
          <div className="jx-review__stars">
            {[0, 1, 2, 3, 4].map((n) => (
              <Star key={n} size={26} fill="currentColor" strokeWidth={1.2} style={{ animationDelay: `${n * 0.12}s` }} />
            ))}
          </div>
          <span className="jx-review__quote">“Genuine product and a great reward!”</span>
          <span className="jx-pill jx-pill--rose">Share &amp; refer a friend</span>
        </div>
      )}
    </div>
  </div>
);

/* ---------------------------------------------------------------------------
   Component
--------------------------------------------------------------------------- */
const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = stepsData.length;

  useEffect(() => {
    // Always auto-advance. Timer restarts after every manual click.
    const timer = setTimeout(
      () => setCurrentIndex((i) => (i + 1) % total),
      AUTOPLAY_MS
    );
    return () => clearTimeout(timer);
  }, [currentIndex, total]);

  const active = stepsData[currentIndex];
  const ActiveIcon = active.icon;
  const prevStep = () => setCurrentIndex((currentIndex - 1 + total) % total);
  const nextStep = () => setCurrentIndex((currentIndex + 1) % total);

  return (
    <section className="journey section">
      <div className="container">
        <div className="section-head is-center">
          <span className="jx-eyebrow">How it works</span>
          <h2 className="section-title">
            From first scan to <span className="text-gradient">loyal advocate</span>
          </h2>
          <p className="section-lede">
            Five simple steps that turn a single product scan into a lasting customer relationship.
          </p>
        </div>

        {/* ---------- horizontal stepper ---------- */}
        <ol className="jx-steps">
          {stepsData.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentIndex;
            const isDone = index < currentIndex;
            return (
              <li
                key={step.id}
                className={`${isDone ? "is-done" : ""} ${isActive ? "is-current" : ""}`}
              >
                <button
                  type="button"
                  className={`jx-step ${isActive ? "is-active" : ""}`}
                  aria-current={isActive ? "step" : undefined}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span className={`jx-node tone-${step.tone}`}>
                    {isDone ? <Check size={20} strokeWidth={2.6} /> : <Icon size={20} />}
                  </span>
                  <span className="jx-label">
                    <small>Step {step.stepNum}</small>
                    <strong>{step.title}</strong>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* ---------- detail card ---------- */}
        <div className={`jx-card tone-${active.tone}`} aria-live="polite">
          <span
            className="jx-card__progress"
            key={`p-${currentIndex}`}
            style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
          />

          <div className="jx-card__info" key={active.id}>
            <span className="jx-badge">
              <ActiveIcon size={16} />
              {active.tag}
            </span>
            <p className="jx-count">
              Step {active.stepNum} of {String(total).padStart(2, "0")}
            </p>
            <h3>{active.title}</h3>
            <p className="jx-desc">{active.desc}</p>

            <ul className="jx-points">
              {active.points.map((p) => (
                <li key={p}>
                  <span className="jx-tick"><Check size={13} strokeWidth={3} /></span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="jx-actions">
              <button type="button" className="jx-btn jx-btn--ghost" onClick={prevStep} aria-label="Previous step">
                <ArrowLeft size={18} />
              </button>
              <button type="button" className="jx-btn jx-btn--primary" onClick={nextStep}>
                Next: {stepsData[(currentIndex + 1) % total].title}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="jx-card__visual">
            <span className="jx-glow" aria-hidden="true" />
            <span className="jx-bignum" aria-hidden="true" key={`n-${currentIndex}`}>
              {active.stepNum}
            </span>
            <StepVisual id={active.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;