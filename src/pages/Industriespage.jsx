import React, { useMemo, useState } from "react";
import { Building2, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Carousel from "../components/Carousel";
import DemoForm from "../components/DemoForm";
import "./Industriespage.css";

// Industry Images
import babyProductsImage from "../Images/Baby Products (1).png";
import paintPlumbingImage from "../Images/Paint & Plumbing.png";
import fragrancesImage from "../Images/Fragrances & Aerosols (1).png";
import lightsAccessoriesImage from "../Images/Lights & Accessories (1).png";
import watchesAccessoriesImage from "../Images/Watches & Accessories (1).png";
import electronicsImage from "../Images/Electronics (1).png";
import faucetsImage from "../Images/Faucets & Sanitary Fittings (1).png";
import medicalDevicesImage from "../Images/Medical Devices & Accessories (1).png";
import supplementsImage from "../Images/Supplements & Wellness (1).png";
import hardwarePartsImage from "../Images/Hardware Parts.png";
import pharmaImage from "../Images/Pharma.png";
import retailEcommerceImage from "../Images/Retail & Ecommerce (1).png";
import shoesFootwearImage from "../Images/Shoes & Footwear (1).png";
import beautyCosmeticsImage from "../Images/Beauty & Cosmetics.png";
import fashionApparelImage from "../Images/Fashion and Apparel.png";
import liquorTobaccoImage from "../Images/Liquor & Tobacco.png";
import sportsFitnessImage from "../Images/Sports & Fitness.png";
import agricultureImage from "../Images/Agriculture.png";
import fmcgImage from "../Images/FMCG.png";
import petProductsImage from "../Images/Pet Products.png";
import automobileImage from "../Images/Automobile & Accessories.png";

const CATEGORIES = [
  "All",
  "Consumer & Retail",
  "Health & Fitness",
  "Home & Building",
  "Auto, Tech & Agri",
];

const industries = [
  {
    id: "01",
    title: "FMCG",
    category: "Consumer & Retail",
    featured: true,
    description:
      "Turn impulse buyers into loyal customers through cashback, spin-to-win, and refill reminders.",
    image: fmcgImage,
  },
  {
    id: "02",
    title: "Retail & Ecommerce",
    category: "Consumer & Retail",
    featured: true,
    description:
      "We take time and effort to accurately review everything about your business and your industry.",
    image: retailEcommerceImage,
  },
  {
    id: "03",
    title: "Fashion and Apparel",
    category: "Consumer & Retail",
    description:
      "We take time and effort to accurately review everything about your business and your industry.",
    image: fashionApparelImage,
  },
  {
    id: "04",
    title: "Automobile & Accessories",
    category: "Auto, Tech & Agri",
    featured: true,
    description:
      "Reward servicing, parts purchases , or test drives with cashback and targeted offers.",
    image: automobileImage,
  },
  {
    id: "05",
    title: "Paint & Plumbing",
    category: "Home & Building",
    description:
      "Build contractor and influencer loyalty through QR-based tracking and instant rewards.",
    image: paintPlumbingImage,
  },
  {
    id: "06",
    title: "Sports & Fitness",
    category: "Health & Fitness",
    description:
      "Engage active communities with challenges, leaderboards, and milestone-based rewards.",
    image: sportsFitnessImage,
  },
  {
    id: "07",
    title: "Pharma",
    category: "Health & Fitness",
    featured: true,
    description:
      "Encourage repeat purchases with cashback on prescriptions, gamified health challenges, and targeted offers for pharmacies and patients.",
    image: pharmaImage,
  },
  {
    id: "08",
    title: "Medical Devices & Accessories",
    category: "Health & Fitness",
    description:
      "Drive trust and loyalty with warranty-based QR registrations, cashback on purchases, and personalized after-sales engagement.",
    image: medicalDevicesImage,
  },
  {
    id: "09",
    title: "Electronics",
    category: "Auto, Tech & Agri",
    featured: true,
    description:
      "Boost brand stickiness with product registration rewards, spin-to-win campaigns on accessories, and cashback on extended warranties.",
    image: electronicsImage,
  },
  {
    id: "10",
    title: "Liquor & Tobacco",
    category: "Consumer & Retail",
    description:
      "Engage distributors and consumers with festival-themed rewards, instant cashback, and gamified loyalty campaigns for repeat sales.",
    image: liquorTobaccoImage,
  },
  {
    id: "11",
    title: "Agriculture",
    category: "Auto, Tech & Agri",
    description:
      "Incentivize repeat orders from dealers and end users with season-based loyalty campaigns.",
    image: agricultureImage,
  },
  {
    id: "12",
    title: "Beauty & Cosmetics",
    category: "Consumer & Retail",
    featured: true,
    description:
      "Delight customers with tiered cashback, limited-time drops, and spin-to-win campaigns for premium products and bundles.",
    image: beautyCosmeticsImage,
  },
  {
    id: "13",
    title: "Shoes & Footwear",
    category: "Consumer & Retail",
    description:
      "Encourage repeat buyers with exclusive cashback, style-based reward drops, and QR-based warranty incentives.",
    image: shoesFootwearImage,
  },
  {
    id: "14",
    title: "Pet Products",
    category: "Consumer & Retail",
    description:
      "Reward pet owners with cashback, refill reminders for essentials, and gamified challenges like “Pet Care Points.”",
    image: petProductsImage,
  },
  {
    id: "15",
    title: "Watches & Accessories",
    category: "Consumer & Retail",
    description:
      "Drive exclusivity with premium cashback offers, limited-edition spin-to-win rewards, and referral incentives.",
    image: watchesAccessoriesImage,
  },
  {
    id: "16",
    title: "Supplements & Wellness",
    category: "Health & Fitness",
    description:
      "Inspire health-conscious customers with cashback on subscriptions, gamified fitness challenges, and reward streaks.",
    image: supplementsImage,
  },
  {
    id: "17",
    title: "Faucets & Sanitary Fittings",
    category: "Home & Building",
    description:
      "Motivate contractors and resellers with instant cashback on orders, QR warranty registration, and seasonal loyalty bonuses.",
    image: faucetsImage,
  },
  {
    id: "18",
    title: "Fragrances & Aerosols",
    category: "Consumer & Retail",
    description:
      "Enhance customer experience with loyalty points on every spray, cashback for repeat purchases, and influencer-driven reward campaigns.",
    image: fragrancesImage,
  },
  {
    id: "19",
    title: "Hardware Parts",
    category: "Home & Building",
    description:
      "Incentivize contractors and dealers with bulk purchase cashback, QR-linked loyalty points, and seasonal rewards programs.",
    image: hardwarePartsImage,
  },
  {
    id: "20",
    title: "Baby Products",
    category: "Consumer & Retail",
    description:
      "Reward parents with cashback, subscription renewal perks, and gamified milestones for essential baby care products.",
    image: babyProductsImage,
  },
  {
    id: "21",
    title: "Lights & Accessories",
    category: "Home & Building",
    description:
      "Boost repeat orders with festival reward campaigns, cashback on bundles, and gamified incentives for retailers.",
    image: lightsAccessoriesImage,
  },
];

function Industriespage() {
  const [filter, setFilter] = useState("All");
  const [showDemo, setShowDemo] = useState(false);

  const featured = useMemo(() => industries.filter((i) => i.featured), []);
  const visible = useMemo(
    () => (filter === "All" ? industries : industries.filter((i) => i.category === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        badge={{ icon: <Building2 size={14} />, text: "Industries we empower" }}
        title={
          <>
            Tailored solutions for <span className="text-gradient">every sector</span>
          </>
        }
        description="Empowering brands across multiple industries with AI-powered loyalty, rewards, engagement, and retention solutions."
        visual={
          <div className="ind-stack" aria-hidden="true">
            <img className="ind-stack__a" src={fmcgImage} alt="" />
            <img className="ind-stack__b" src={pharmaImage} alt="" />
            <img className="ind-stack__c" src={electronicsImage} alt="" />
          </div>
        }
      >
        <p className="ind-hero__count">
          <strong>{industries.length}</strong> industries, one platform
        </p>
      </PageHero>

      {/* ---------- featured carousel ---------- */}
      <section className="ind-featured section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Popular industries</h2>
          </div>

          <Carousel className="ind-featured__carousel" label="Popular industries" autoplay={5500}>
            {featured.map((item) => (
              <article className="ind-feature" key={item.id}>
                <img src={item.image} alt={item.title} loading="lazy" draggable="false" />
                <div className="ind-feature__overlay">
                  <span className="ind-tag">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button type="button" className="btn btn-light btn-sm" onClick={() => setShowDemo(true)}>
                    Request Demo
                    <ArrowRight size={16} className="btn-arrow" />
                  </button>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ---------- filterable grid ---------- */}
      <section className="ind-all section bg-aurora">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Find your industry</h2>
          </div>

          <div className="ind-filters" role="group" aria-label="Filter industries">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={`ind-chip ${filter === c ? "is-active" : ""}`}
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="ind-grid" key={filter}>
            {visible.map((industry) => (
              <article className="ind-card" key={industry.id}>
                <div className="ind-card__media">
                  <img src={industry.image} alt={industry.title} loading="lazy" />
                </div>
                <div className="ind-card__body">
                  <span className="ind-tag is-light">{industry.category}</span>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <button type="button" className="ind-card__btn" onClick={() => setShowDemo(true)}>
                    Request Demo
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {showDemo && <DemoForm onClose={() => setShowDemo(false)} />}
    </>
  );
}

export default Industriespage;
