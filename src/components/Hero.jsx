import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Gift,
  MessageCircle,
  BadgeCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";
import DemoForm from "./DemoForm";
import "./Hero.css";

const features = [
  { icon: <ShieldCheck size={16} />, label: "QR Authentication" },
  { icon: <Gift size={16} />, label: "Instant Rewards" },
  { icon: <MessageCircle size={16} />, label: "AI WhatsApp" },
  { icon: <BadgeCheck size={16} />, label: "Warranty" },
  { icon: <TrendingUp size={16} />, label: "Analytics" },
];

function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="hero bg-aurora">
      <span className="bg-dots" aria-hidden="true" />

      <div className="container hero__inner">
        {/* ---------- copy ---------- */}
        <div className="hero__copy">
          <p className="pill-label hero__reveal" style={{ "--d": "0ms" }}>
            <span className="pill-dot">
              <Gift size={14} />
            </span>
            AI-powered loyalty &amp; engagement platform
          </p>

          <h1 className="hero__title hero__reveal" style={{ "--d": "90ms" }}>
            Engage. Reward.
            <span className="hero__title-line text-gradient">Grow together.</span>
          </h1>

          <p className="hero__lede hero__reveal" style={{ "--d": "180ms" }}>
            Bling Rewards is an AI-Powered loyalty &amp; engagement platform that helps brands
            acquire, engage and retain customers.
          </p>

          <div className="hero__actions hero__reveal" style={{ "--d": "270ms" }}>
            <button type="button" className="btn btn-primary" onClick={() => setIsDemoOpen(true)}>
              Book a Free Demo
              <ArrowRight size={18} className="btn-arrow" />
            </button>

            <HashLink smooth to="/#showcase" className="btn btn-ghost">
              <span className="hero__play">
                <Play size={12} fill="currentColor" />
              </span>
              Watch Platform Tour
            </HashLink>
          </div>

          <ul className="hero__features hero__reveal" style={{ "--d": "360ms" }}>
            {features.map((f) => (
              <li key={f.label}>
                {f.icon}
                {f.label}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- visual ---------- */}
        <div className="hero__visual">
          <div className="hero__rings" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="hero__stage scan-frame">
            <img
              className="hero__phone"
              src="/phone.png"
              alt="Bling Reward app showing AI rewards, available points and activity overview"
              width="1024"
              height="1536"
              fetchPriority="high"
            />
            <span className="hero__scanline" aria-hidden="true" />
          </div>

          <div className="hero-chip hero-chip--verify" aria-hidden="true">
            <span className="hero-chip__icon">
              <ShieldCheck size={18} />
            </span>
            <span>
              <strong>QR verified</strong>
              <small>Genuine product</small>
            </span>
          </div>

          <div className="hero-chip hero-chip--cash" aria-hidden="true">
            <span className="hero-chip__icon">
              <Wallet size={18} />
            </span>
            <span>
              <strong>UPI cashback</strong>
              <small>Credited instantly</small>
            </span>
          </div>

          <div className="hero-chip hero-chip--nudge" aria-hidden="true">
            <span className="hero-chip__icon">
              <MessageCircle size={18} />
            </span>
            <span>
              <strong>WhatsApp nudge</strong>
              <small>Time to restock</small>
            </span>
          </div>
        </div>
      </div>

      {isDemoOpen && <DemoForm onClose={() => setIsDemoOpen(false)} />}
    </section>
  );
}

export default Hero;
