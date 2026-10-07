import React from "react";
import { Rocket, Megaphone, TrendingUp, Zap, Heart, Target } from "lucide-react";
import "./Rewards.css";

const features = [
  {
    id: 1,
    title: "Boost Repeat Purchases",
    description:
      "Even a small increase in customer retention can lead to major revenue gains. With QR scans, timely nudges, and instant rewards, customers keep coming back.",
    icon: <Rocket size={24} />,
    size: "wide",
    tone: "brand",
  },
  {
    id: 2,
    title: "Improve Campaign ROI",
    description:
      "Spend where it matters. With WhatsApp's high open rates, Bling improves campaign performance and reduces waste.",
    icon: <Megaphone size={24} />,
    stat: { value: "98%", label: "WhatsApp open rate" },
  },
  {
    id: 3,
    title: "Grow Average Order Value",
    description:
      "AI suggestions promote combos and add-ons. Example: 'Add ₹50 more and unlock a bonus spin' or 'Customers also bought...'",
    icon: <TrendingUp size={24} />,
  },
  {
    id: 4,
    title: "Launch Faster, Scale Smarter",
    description:
      "No-code setup, prebuilt templates, and automation mean your campaign can go live in days, not weeks.",
    icon: <Zap size={24} />,
    size: "wide",
  },
  {
    id: 5,
    title: "Cut Customer Churn",
    description:
      "Gamified rewards and relevant offers help reduce drop-offs. Personalized incentives can lower churn by over 60%.",
    icon: <Heart size={24} />,
    stat: { value: "60%+", label: "lower churn" },
  },
  {
    id: 6,
    title: "Get Actionable Insights",
    description:
      "Track redemptions, customer behavior, dealer progress, and performance — all from a single dashboard.",
    icon: <Target size={24} />,
    size: "wide",
  },
];

/* Cursor-following spotlight: updates CSS variables, no React re-render. */
const trackPointer = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const Rewards = () => {
  return (
    <section className="benefits section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">
            Our skills are the main
            <span className="benefits__line text-gradient">reasons why clients choose us</span>
          </h2>
        </div>

        <div className="benefits__grid">
          {features.map((item) => (
            <article
              className={`benefit ${item.size === "wide" ? "is-wide" : ""} ${
                item.tone === "brand" ? "is-brand" : ""
              }`}
              key={item.id}
              onPointerMove={trackPointer}
            >
              <div className="benefit__top">
                <span className="benefit__icon">{item.icon}</span>
                {item.stat && (
                  <p className="benefit__stat">
                    <strong>{item.stat.value}</strong>
                    <span>{item.stat.label}</span>
                  </p>
                )}
              </div>

              <div className="benefit__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rewards;
