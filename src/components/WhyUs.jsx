import React from "react";
import { Store, Layers, MessageSquare, Users, BadgeCheck, UserPlus } from "lucide-react";
import "./WhyUs.css";

const data = [
  {
    icon: <Store size={22} />,
    title: "Built on Real Market Experience",
    desc: "We started by solving loyalty problems in the rice industry. That hands-on work shaped a system that now scales across sectors and complexity.",
  },
  {
    icon: <Layers size={22} />,
    title: "All-in-One Reward Platform",
    desc: "Spin campaigns, UPI cashback, physical gifts — manage everything in one dashboard without switching tools or juggling spreadsheets.",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "AI and WhatsApp Built In",
    desc: "AI powers timely nudges, refill suggestions, and upsells. WhatsApp ensures instant delivery, 98% open rates, and real engagement.",
  },
  {
    icon: <Users size={22} />,
    title: "Designed for Dealers and Distributors",
    desc: "All the generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "Made for India, Ready for Scale",
    desc: "From e-commerce giants to regional brands, Bling adapts to your campaign goals, customer behavior, and language needs.",
  },
  {
    icon: <UserPlus size={22} />,
    title: "Create Your Account",
    desc: "You don’t need a tech team to get started. With plug-and-play templates and dedicated support, you can launch faster and manage smarter.",
  },
];

const WhyUs = () => {
  return (
    <section className="whyus bg-dark on-dark section">
      <span className="bg-dots" aria-hidden="true" />

      <div className="container whyus__grid">
        <div className="whyus__intro">
          <h2 className="section-title">
            Why choose <span className="text-gradient-light">Bling Reward</span>
          </h2>
          <p className="section-lede">
            Most loyalty tools focus on points and cashback. Bling goes deeper. We're built for
            real-world challenges like distributor engagement, regional campaigns, and
            high-frequency purchases across industries.
          </p>
        </div>

        <ul className="whyus__list">
          {data.map((item) => (
            <li className="whyus__item" key={item.title}>
              <span className="whyus__icon">{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
