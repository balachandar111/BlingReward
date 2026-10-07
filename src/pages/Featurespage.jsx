import React, { useState } from "react";
import { Sparkles, Bot, QrCode, Wallet, MessageCircle, Wrench, Settings2, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import DemoForm from "../components/DemoForm";
import "./Featurespage.css";

const features = [
  {
    id: "ai",
    span: "s4",
    badge: "Core Engine",
    icon: Bot,
    title: "AI Powered Reward System",
    desc: "Send timely reminders, refill prompts, and upsell suggestions. Bling helps convert one-time buyers into loyal customers and reactivates those who drop off.",
  },
  {
    id: "qr",
    span: "s2",
    accent: true,
    badge: "Popular",
    icon: QrCode,
    title: "QR code-based Loyalty solutions",
    desc: "Let your product packaging drive engagement. Customers scan a QR code, sign up, and instantly receive cashback, spins, or coupons. You also get full visibility into your end customers’ data and purchase behavior.",
  },
  {
    id: "upi",
    span: "s2",
    icon: Wallet,
    title: "UPI cashback and spin reward",
    desc: "Offer instant cashback or gamified spin-to-win experiences. Rewards can be customized by product, customer type, or order value.",
  },
  {
    id: "wa",
    span: "s4",
    badge: "Automation",
    icon: MessageCircle,
    title: "WhatsApp and SMS AI restocking",
    desc: "Reach users directly through WhatsApp. Send reward alerts, birthday offers, new product drops, and loyalty updates with high engagement.",
  },
  {
    id: "dealer",
    span: "s3",
    icon: Wrench,
    title: "Dealer incentive systems",
    desc: "Set up dealer schemes, automate payouts, and monitor performance. Everything runs without manual tracking or spreadsheets.",
  },
  {
    id: "custom",
    span: "s3",
    icon: Settings2,
    title: "Customized reward system solutions",
    desc: "Control campaigns, track results, and manage multiple reward types across products and regions. All from one easy-to-use dashboard.",
  },
];

function Featurespage() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <PageHero
        badge={{ icon: <Sparkles size={14} />, text: "Platform features" }}
        title={
          <>
            Features that power <span className="text-gradient">engagement</span>
          </>
        }
        description="Bling Reward is a smart, automated platform built to drive loyalty, repeat purchases, and partner performance. It connects QR scans, AI nudges, and WhatsApp journeys in one seamless system."
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
        <div className="container">
          <div className="feat__grid">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <article
                  key={f.id}
                  className={`feat-card ${f.span} ${f.accent ? "is-accent" : ""}`}
                >
                  <Icon className="feat-card__mark" size={150} strokeWidth={1} aria-hidden="true" />

                  <div className="feat-card__head">
                    <span className="feat-card__icon">
                      <Icon size={24} />
                    </span>
                    {f.badge && <span className="feat-card__badge">{f.badge}</span>}
                  </div>

                  <div className="feat-card__body">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="feat__cta">
            <h2>Want to see these features in action?</h2>
            <button type="button" className="btn btn-primary" onClick={() => setShowDemo(true)}>
              Book a Free Demo
              <ArrowRight size={18} className="btn-arrow" />
            </button>
          </div>
        </div>
      </section>

      {showDemo && <DemoForm onClose={() => setShowDemo(false)} />}
    </>
  );
}

export default Featurespage;
