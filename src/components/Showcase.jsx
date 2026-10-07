import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Carousel from "./Carousel";
import "./Showcase.css";

const slides = [
  {
    key: "app",
    title: "Scan, verify, get rewarded",
    text: "Customers scan the QR on your packaging, sign up and instantly receive cashback, spins or coupons.",
    points: [
      "Encrypted QR code on every product unit",
      "Instant UPI cashback and spin-to-win",
      "Gift vouchers, memberships and more",
    ],
    img: "/phone.png",
    alt: "Bling Reward customer app showing available points and a cashback offer",
    fit: "contain",
    cta: { to: "/solutions", label: "Explore solutions" },
  },
  {
    key: "loyalty",
    title: "Loyalty that fits every customer",
    text: "A customer loyalty platform tailored to your products, purchase patterns, and user profiles.",
    points: [
      "Tiered reward structures",
      "Personalized customer profiles",
      "Instant reward redemptions",
    ],
    img: "/solution-banner.jpeg",
    alt: "Four app screens showing rewards home, points earned, cashing points and merchants",
    fit: "cover",
    cta: { to: "/features", label: "See all features" },
  },
  {
    key: "analytics",
    title: "One dashboard for every campaign",
    text: "Track redemptions, customer behavior, dealer progress, and performance — all from a single dashboard.",
    points: [
      "Live campaign analytics",
      "Scheme performance dashboards",
      "Real-time secondary sales data",
    ],
    img: "/dashboard.png",
    alt: "Bling Reward admin dashboard with rewards trend, top channels and recent transactions",
    fit: "cover",
    cta: { to: "/case-studies", label: "Read case studies" },
  },
];

function Showcase() {
  return (
    <section id="showcase" className="showcase section">
      <div className="container">
        <div className="showcase__panel bg-dark on-dark">
          <span className="bg-dots" aria-hidden="true" />

          <div className="section-head showcase__head">
            <h2 className="section-title">See the platform in action</h2>
            <p className="section-lede">
              From the first QR scan to the last reward payout, everything works together.
            </p>
          </div>

          <Carousel className="showcase__carousel" label="Platform tour" autoplay={7000} tone="dark">
            {slides.map((s) => (
              <article className="showcase__slide" key={s.key}>
                <div className="showcase__copy">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>

                  <ul className="showcase__points">
                    {s.points.map((pt) => (
                      <li key={pt}>
                        <span className="showcase__tick">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <Link to={s.cta.to} className="btn btn-light">
                    {s.cta.label}
                    <ArrowRight size={18} className="btn-arrow" />
                  </Link>
                </div>

                <div className={`showcase__media is-${s.fit}`}>
                  <div className="showcase__frame scan-frame is-light">
                    <img src={s.img} alt={s.alt} loading="lazy" draggable="false" />
                  </div>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
