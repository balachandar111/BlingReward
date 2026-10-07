import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Carousel from "./Carousel";
import "./SuccessStories.css";

/* Same facts as the Case Studies page – nothing new is claimed here. */
const stories = [
  {
    id: "malar-rice",
    brand: "Malar Rice",
    summary:
      "Transforming Customer Loyalty & Sales with Smart Coupons, Instant Rewards and AI-powered Engagement.",
    img: "/malarrice.png",
    stats: [
      { value: "1400+", label: "Google Reviews" },
      { value: "3X", label: "User Engagement" },
      { value: "78%", label: "Customer Satisfaction" },
    ],
  },
  {
    id: "arcot-manimark",
    brand: "Arcot Manimark",
    summary: "Driving Dealer Motivation & Growth with a Customizable Incentive Program.",
    img: "/arcotmanimark.png",
    tags: ["Higher Engagement", "Increased Orders", "Referral Growth"],
  },
  {
    id: "vsn-brand",
    brand: "VSN Brand",
    summary:
      "Automating Sales, Engagement, and Loyalty in FMCG with UPI Cashback, Gamified Rewards & Smart Restocking.",
    img: "/vsnbrand.png",
    tags: ["Repeat Sales", "Gamified Rewards", "AI Restocking"],
  },
];

function SuccessStories() {
  return (
    <section className="stories section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Real results from real brands</h2>
          <p className="section-lede">
            See how brands across India turned scans into reviews, repeat orders and dealer
            enthusiasm.
          </p>
        </div>

        <Carousel className="stories__carousel" label="Success stories" autoplay={8000}>
          {stories.map((s) => (
            <article className="story" key={s.id}>
              <div className="story__media scan-frame">
                <img src={s.img} alt={`${s.brand} campaign`} loading="lazy" draggable="false" />
              </div>

              <div className="story__copy">
                <h3>{s.brand}</h3>
                <p className="story__summary">{s.summary}</p>

                {s.stats ? (
                  <ul className="story__stats">
                    {s.stats.map((st) => (
                      <li key={st.label}>
                        <strong>{st.value}</strong>
                        <span>{st.label}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="story__tags">
                    {s.tags.map((t) => (
                      <li key={t}>
                        <Check size={14} strokeWidth={3} />
                        {t}
                      </li>
                    ))}
                  </ul>
                )}

                <Link to={`/case-studies#${s.id}`} className="btn btn-primary">
                  Read the case study
                  <ArrowRight size={18} className="btn-arrow" />
                </Link>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default SuccessStories;
