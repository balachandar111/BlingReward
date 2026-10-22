import React, { useEffect, useState } from "react";
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
  Package,
  Truck,
  Ticket,
  Trophy,
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

/* One slide per scan sweep: image + theme + the side chip content */
const slides = [
  {
    key: "rewards",
    theme: "purple",
    img: "/phone.png",
    alt: "Bling Reward app showing AI rewards, available points and activity overview",
    chips: {
      verify: { icon: <ShieldCheck size={18} />, title: "QR verified", sub: "Genuine product" },
      cash: { icon: <Wallet size={18} />, title: "UPI cashback", sub: "Credited instantly" },
      nudge: { icon: <MessageCircle size={18} />, title: "WhatsApp nudge", sub: "Time to restock" },
    },
  },
  {
    key: "cashback",
    theme: "blue",
    img: "/phone-blue.png",
    alt: "Bling Reward app showing cashback offers and instant wallet credit",
    chips: {
      verify: { icon: <BadgeCheck size={18} />, title: "Scan verified", sub: "Cashback unlocked" },
      cash: { icon: <Wallet size={18} />, title: "20% Cashback", sub: "Added to wallet" },
      nudge: { icon: <MessageCircle size={18} />, title: "WhatsApp alert", sub: "₹50 sent to your UPI" },
    },
  },
  {
    key: "gifts",
    theme: "brown",
    img: "/phone-brown.png",
    alt: "Bling Reward app showing physical gifts and redemption activity",
    chips: {
      verify: { icon: <Gift size={18} />, title: "Reward unlocked", sub: "Gift eligible" },
      cash: { icon: <Package size={18} />, title: "Gift dispatched", sub: "Delivered to your door" },
      nudge: { icon: <Truck size={18} />, title: "WhatsApp update", sub: "Your gift is on the way" },
    },
  },
  {
    key: "scratch",
    theme: "green",
    img: "/phone-green.png",
    alt: "Bling Reward app showing a Scratch & Win card revealing a 100 rupee cashback",
    chips: {
      verify: { icon: <Ticket size={18} />, title: "Scratch card unlocked", sub: "Scan to reveal" },
      cash: { icon: <Wallet size={18} />, title: "₹100 won", sub: "Added to wallet" },
      nudge: { icon: <MessageCircle size={18} />, title: "WhatsApp alert", sub: "You won a scratch card" },
    },
  },
  {
    key: "spin",
    theme: "rose",
    img: "/phone-rose.png",
    alt: "Bling Reward app showing a Spin & Win lucky wheel with instant rewards",
    chips: {
      verify: { icon: <Gift size={18} />, title: "Free spin earned", sub: "Spin the wheel" },
      cash: { icon: <Trophy size={18} />, title: "₹50 won", sub: "Credited to UPI" },
      nudge: { icon: <MessageCircle size={18} />, title: "WhatsApp alert", sub: "2 spins left today" },
    },
  },
];

function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);
  const [swapped, setSwapped] = useState(false);

  const slide = slides[active];

  // preload the other phone images so the swap never flashes
  useEffect(() => {
    slides.forEach((sl) => {
      const im = new Image();
      im.src = sl.img;
    });
  }, []);

  // every time the scanline starts a new sweep, move to the next slide
  const handleScanStart = (e) => {
    if (e.target !== e.currentTarget) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPrev(active);
    setActive((active + 1) % slides.length);
    setSwapped(true);
  };

  return (
    <section className="hero bg-aurora" data-theme={slide.theme}>
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
              key={`prev-${prev}-${active}`}
              className={`hero__phone${swapped ? " hero__phone--prev" : ""}`}
              src={slides[prev].img}
              alt={slides[prev].alt}
              width="1024"
              height="1536"
              fetchPriority="high"
            />
            {swapped && (
              <img
                key={slide.key + active}
                className="hero__phone hero__phone--next"
                src={slide.img}
                alt={slide.alt}
                width="1024"
                height="1536"
              />
            )}
            <span
              className="hero__scanline"
              aria-hidden="true"
              onAnimationIteration={handleScanStart}
            />
          </div>

          {["verify", "cash", "nudge"].map((name, i) => {
            const c = slide.chips[name];
            return (
              <div
                key={`${name}-${slide.key}`}
                className={`hero-chip hero-chip--${name}${swapped ? " is-swap" : ""}`}
                style={{ "--flow-d": `${i * 0.15}s` }}
                aria-hidden="true"
              >
                <span className="hero-chip__icon">{c.icon}</span>
                <span>
                  <strong>{c.title}</strong>
                  <small>{c.sub}</small>
                </span>
                <span className="hero-chip__flow" />
              </div>
            );
          })}
        </div>
      </div>

      {isDemoOpen && <DemoForm onClose={() => setIsDemoOpen(false)} />}
    </section>
  );
}

export default Hero;