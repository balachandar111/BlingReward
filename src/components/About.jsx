import React from "react";
import { ShieldCheck, Handshake, Lightbulb, Sparkles } from "lucide-react";
import "./About.css";

const pillars = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Trust",
    text: "Maintaining trust with the client",
  },
  {
    icon: <Handshake size={22} />,
    title: "Relationship",
    text: "Maintaining a good relationship",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Consultation",
    text: "Suitable consultation suggestions for our valuable clients",
  },
];

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        {/* ---------- visual ---------- */}
        <div className="about__visual">
          <div className="about__panel scan-frame">
            <img
              className="about__person about__person--men"
              src="/men.png"
              alt="Illustration of a man using a laptop on a purple bean bag"
              loading="lazy"
            />
            <img
              className="about__person about__person--women"
              src="/women.png"
              alt="Illustration of a woman using her phone on a purple bean bag"
              loading="lazy"
            />
          </div>

          <div className="about__badge">
            <strong>20+</strong>
            <span>years of team experience</span>
          </div>
        </div>

        {/* ---------- copy ---------- */}
        <div className="about__copy">
          <p className="pill-label">
            <span className="pill-dot">
              <Sparkles size={14} />
            </span>
            Platform Overview
          </p>

          <h2 className="section-title about__title">
            About <span className="text-gradient">Us</span>
          </h2>

          <p className="about__text">
            We are not just a loyalty platform solution; We are a one-stop for end-to-end digital
            solution providers in the market. Our team has more than 20 years of experience handling
            client's needs and understanding the gap and we move through the market trend.
          </p>

          <p className="about__text">
            Bling Reward approaches each engagement by initiating a detailed discussion of your
            business and technology challenges and goals. We offer tailor-made loyalty application
            development services for startups, medium-sized companies, and large enterprises from
            dedicated teams to custom software development and other technology-related services.
            Bling reward always prefers three key things: Maintaining trust with the client,
            Maintaining a good relationship, and Suitable consultation suggestions for our valuable
            clients.
          </p>
        </div>
      </div>

      {/* ---------- pillars ---------- */}
      <div className="container">
        <ul className="about__pillars">
          {pillars.map((p) => (
            <li key={p.title}>
              <span className="about__pillar-icon">{p.icon}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
