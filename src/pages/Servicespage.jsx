import React, { useState } from "react";
import {
  Zap,
  Gamepad2,
  Wallet,
  PartyPopper,
  Medal,
  Megaphone,
  Ticket,
  Palette,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Carousel from "../components/Carousel";
import DemoForm from "../components/DemoForm";
import "./Servicespage.css";

const servicesData = [
  {
    icon: Gamepad2,
    title: "SPIN-WIN (Gamified rewards)",
    desc: "Boost user engagement with an interactive spin-to-win wheel that delivers instant prizes and creates a fun, memorable shopping experience.",
    tag: "Gamification",
  },
  {
    icon: Wallet,
    title: "Flat Cashback",
    desc: "Reward every purchase with guaranteed flat cashback directly credited to customers, encouraging repeat sales and building loyalty effortlessly.",
    tag: "Rewards",
  },
  {
    icon: PartyPopper,
    title: "Festival Campaigns",
    desc: "Launch festive-themed reward campaigns that capture seasonal excitement, attract new customers, and strengthen brand recall.",
    tag: "Marketing",
  },
  {
    icon: Medal,
    title: "Gamification Challenges",
    desc: "Engage customers with fun challenges, badges, and leaderboards that turn everyday purchases into rewarding interactions.",
    tag: "Engagement",
  },
  {
    icon: Megaphone,
    title: "Customised Marketing contest",
    desc: "Invite customers to share creative recipes featuring your products, rewarding them with cashback, points, or prizes to boost brand interaction.",
    tag: "Growth",
  },
  {
    icon: Ticket,
    title: "Voucher Code Redemptions",
    desc: "Offer customers exclusive voucher codes for discounts, freebies, or points that encourage repeat shopping and loyalty program sign-ups.",
    tag: "Loyalty",
  },
  {
    icon: Palette,
    title: "Customized White Labeling Application",
    desc: "Provide businesses with ready-to-launch apps customized with their branding, features, and design, helping them save time while building a strong brand identity.",
    tag: "Enterprise",
  },
];

function Servicespage() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <PageHero
        badge={{ icon: <Zap size={14} />, text: "Our premium services" }}
        title={
          <>
            Smart solutions for <span className="text-gradient">modern brands</span>
          </>
        }
        description="Empower your ecosystem with automated rewards, gamified engagement, and white-labeled applications."
        visual={
          <div className="svc-hero__stage">
            <div className="svc-hero__panel scan-frame">
              <img
                className="svc-hero__img svc-hero__img--men"
                src="/men.png"
                alt="Illustration of a man working on a laptop"
              />
              <img
                className="svc-hero__img svc-hero__img--women"
                src="/women.png"
                alt="Illustration of a woman using her phone"
              />
            </div>
          </div>
        }
      />

      <section className="svc bg-dark on-dark section">
        <span className="bg-dots" aria-hidden="true" />

        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Seven ways to reward and engage</h2>
            <p className="section-lede">
              Swipe through the services brands use most to turn everyday purchases into loyalty.
            </p>
          </div>

          <Carousel className="svc__carousel" label="Services" tone="dark" autoplay={5000}>
            {servicesData.map((item) => {
              const Icon = item.icon;
              return (
                <article className="svc-card" key={item.title}>
                  <Icon className="svc-card__mark" size={180} strokeWidth={0.9} aria-hidden="true" />

                  <div className="svc-card__top">
                    <span className="svc-card__icon">
                      <Icon size={26} />
                    </span>
                    <span className="svc-card__tag">{item.tag}</span>
                  </div>

                  <div className="svc-card__body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>

                  <button type="button" className="svc-card__btn" onClick={() => setShowDemo(true)}>
                    Explore Details
                    <ArrowRight size={18} />
                  </button>
                </article>
              );
            })}
          </Carousel>
        </div>
      </section>

      {showDemo && <DemoForm onClose={() => setShowDemo(false)} />}
    </>
  );
}

export default Servicespage;
