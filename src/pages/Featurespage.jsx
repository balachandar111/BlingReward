import React, { useState } from "react";
import {
  Sparkles,
  Bot,
  QrCode,
  Wallet,
  MessageCircle,
  Wrench,
  Settings2,
  ArrowRight,
  ArrowUpRight,
  Check,
  ScanLine,
  Gift,
  BellRing,
  TrendingUp,
  Zap,
  ShieldCheck,
} from "lucide-react";
import PageHero from "../components/PageHero";
import DemoForm from "../components/DemoForm";
import useReveal from "../components/useReveal";
import "./Featurespage.css";

const features = [
  {
    id: "ai",
    span: "s4",
    badge: "Core Engine",
    icon: Bot,
    title: "AI Powered Reward System",
    desc: "Send timely reminders, refill prompts, and upsell suggestions. Bling helps convert one-time buyers into loyal customers and reactivates those who drop off.",
    points: ["Refill reminders", "Upsell suggestions", "Win-back nudges"],
  },
  {
    id: "qr",
    span: "s2",
    accent: true,
    badge: "Popular",
    icon: QrCode,
    title: "QR code-based Loyalty solutions",
    desc: "Let your product packaging drive engagement. Customers scan a QR code, sign up, and instantly receive cashback, spins, or coupons. You also get full visibility into your end customers’ data and purchase behavior.",
    points: ["Instant sign-up", "Cashback, spins & coupons", "Customer data visibility"],
  },
  {
    id: "upi",
    span: "s2",
    icon: Wallet,
    title: "UPI cashback and spin reward",
    desc: "Offer instant cashback or gamified spin-to-win experiences. Rewards can be customized by product, customer type, or order value.",
    points: ["Instant UPI payouts", "Spin-to-win games"],
  },
  {
    id: "wa",
    span: "s4",
    badge: "Automation",
    icon: MessageCircle,
    title: "WhatsApp and SMS AI restocking",
    desc: "Reach users directly through WhatsApp. Send reward alerts, birthday offers, new product drops, and loyalty updates with high engagement.",
    points: ["Reward alerts", "Birthday offers", "New product drops"],
  },
  {
    id: "dealer",
    span: "s3",
    icon: Wrench,
    title: "Dealer incentive systems",
    desc: "Set up dealer schemes, automate payouts, and monitor performance. Everything runs without manual tracking or spreadsheets.",
    points: ["Dealer schemes", "Automated payouts", "Live performance"],
  },
  {
    id: "custom",
    span: "s3",
    icon: Settings2,
    title: "Customized reward system solutions",
    desc: "Control campaigns, track results, and manage multiple reward types across products and regions. All from one easy-to-use dashboard.",
    points: ["Multiple reward types", "Products & regions", "One dashboard"],
  },
];

const journey = [
  { icon: ScanLine, title: "Scan", text: "Customer scans the QR on pack" },
  { icon: Gift, title: "Reward", text: "Cashback, spin or coupon, instantly" },
  { icon: BellRing, title: "Re-engage", text: "AI nudges on WhatsApp & SMS" },
  { icon: TrendingUp, title: "Grow", text: "Repeat sales and dealer pull" },
];

const pad = (n) => String(n + 1).padStart(2, "0");

function Featurespage() {
  const [showDemo, setShowDemo] = useState(false);
  const gridRef = useReveal();
  const flowRef = useReveal();

  return (
    <>
      <PageHero
        crumbs="Features"
        badge={{ icon: <Sparkles size={14} />, text: "Platform features" }}
        title={
          <>
            Features that power <span className="text-gradient">engagement</span>
          </>
        }
        description="Bling Reward is a smart, automated platform built to drive loyalty, repeat purchases, and partner performance. It connects QR scans, AI nudges, and WhatsApp journeys in one seamless system."
        chips={[
          { label: "QR rewards", icon: <QrCode size={15} /> },
          { label: "AI nudges", icon: <Bot size={15} /> },
          { label: "WhatsApp", icon: <MessageCircle size={15} /> },
          { label: "Dealer incentives", icon: <Wrench size={15} /> },
        ]}
        floaters={[<Zap size={24} />, <ShieldCheck size={22} />, <Gift size={20} />, <QrCode size={22} />]}
        visual={
          <div className="feat-hero__frame scan-frame">
            <img
              src="/dashboard.png"
              alt="Bling Reward dashboard with total users, rewards redeemed, revenue and a rewards trend chart"
              width="1536"
              height="1024"
            />
          </div>
        }
      />

      <section className="feat section">
        {/* decorative background layer */}
        <div className="feat__bg" aria-hidden="true">
          <span className="feat__orb o1" />
          <span className="feat__orb o2" />
          <span className="feat__orb o3" />
          <span className="feat__dots" />
          <span className="feat__ring r1" />
          <span className="feat__ring r2" />
          <span className="feat__chip c1">
            <QrCode size={22} />
          </span>
          <span className="feat__chip c2">
            <Gift size={20} />
          </span>
          <span className="feat__chip c3">
            <MessageCircle size={22} />
          </span>
          <span className="feat__chip c4">
            <Zap size={20} />
          </span>
          <span className="feat__chip c5">
            <ShieldCheck size={20} />
          </span>
        </div>

        <div className="container">
          <div className="section-head is-center">
            <p className="pill-label">
              <span className="pill-dot">
                <Sparkles size={14} />
              </span>
              What’s inside
            </p>
            <h2 className="section-title">
              Six tools, one <span className="text-gradient">loyalty engine</span>
            </h2>
            <p className="section-lede">
              Everything you need to reward customers, motivate dealers and win repeat orders,
              without stitching together separate tools.
            </p>
          </div>

          {/* ---------- bento ---------- */}
          <div className="feat__grid reveal" ref={gridRef}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <article
                  key={f.id}
                  className={`feat-card reveal-item tone-${f.id} ${f.span} ${f.accent ? "is-accent" : ""}`}
                  style={{ "--i": i }}
                >
                  <Icon className="feat-card__mark" size={150} strokeWidth={1} aria-hidden="true" />
                  <span className="feat-card__shine" aria-hidden="true" />

                  <div className="feat-card__head">
                    <span className="feat-card__icon">
                      <Icon size={24} />
                    </span>
                    <div className="feat-card__tags">
                      {f.badge && <span className="feat-card__badge">{f.badge}</span>}
                      <span className="feat-card__num">{pad(i)}</span>
                    </div>
                  </div>

                  <div className="feat-card__body">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>

                    <ul className="feat-card__points">
                      {f.points.map((p) => (
                        <li key={p}>
                          <Check size={13} strokeWidth={3} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ---------- how it connects ---------- */}
          <div className="feat-flow reveal" ref={flowRef}>
            <div className="feat-flow__head reveal-item" style={{ "--i": 0 }}>
              <h2>From first scan to repeat order</h2>
              <p>One connected journey. Every step feeds the next.</p>
            </div>

            <ol className="feat-flow__steps">
              {journey.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li className="feat-flow__step reveal-item" style={{ "--i": i + 1 }} key={s.title}>
                    <span className="feat-flow__icon">
                      <Icon size={22} />
                    </span>
                    <span className="feat-flow__n">Step {i + 1}</span>
                    <strong>{s.title}</strong>
                    <small>{s.text}</small>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* ---------- closing prompt ---------- */}
          <div className="feat__cta bg-dark on-dark">
            <span className="bg-dots" aria-hidden="true" />
            <div className="feat__cta-copy">
              <h2>Want to see these features in action?</h2>
              <p>Get a free walkthrough tailored to your brand, products and dealer network.</p>
            </div>
            <button type="button" className="btn btn-light" onClick={() => setShowDemo(true)}>
              Book a Free Demo
              <ArrowRight size={18} className="btn-arrow" />
            </button>
            <ArrowUpRight className="feat__cta-mark" size={180} strokeWidth={1} aria-hidden="true" />
          </div>
        </div>
      </section>

      {showDemo && <DemoForm onClose={() => setShowDemo(false)} />}
    </>
  );
}

export default Featurespage;