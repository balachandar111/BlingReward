import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BookOpen, Check, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import DemoForm from "../components/DemoForm";
import "./CaseStudypage.css";

/*
  Item shapes used inside every block:
    "text"                      -> bullet
    { c: "text" }               -> check-marked point
    { s: "Lead", t: "text" }    -> bold lead-in followed by text
    { h: "Heading" }            -> sub-heading inside the block
    { p: "text" }               -> plain paragraph (conclusions)
*/
const cases = [
  {
    id: "malar-rice",
    brand: "Malar Rice",
    title: "Case Study 1: Bling Reward x Malar Rice Brand",
    summary:
      "Transforming Customer Loyalty & Sales with Smart Coupons, Instant Rewards and AI-powered Engagement.",
    img: "/malarrice.png",
    stats: [
      { value: "1400+", label: "Google Reviews" },
      { value: "3X", label: "User Engagement" },
      { value: "78%", label: "Customer Satisfaction" },
    ],
    blocks: [
      {
        title: "The Challenge",
        items: [
          "Malar Rice, a leading regional rice brand, faced two common but serious challenges:",
          "Growing concerns of duplicate/counterfeit rice bags damaging brand trust.",
          "Weak customer engagement & feedback — with only about 400 Google reviews despite a strong market presence.",
          "The brand wanted to:",
          { c: "Assure customers of authentic products." },
          { c: "Increase customer happiness & loyalty." },
          { c: "Collect more positive reviews & data-driven insights." },
          { c: "Encourage repeat purchases & maintain top-of-mind presence." },
        ],
      },
      {
        title: "How It Worked",
        items: [
          { s: "Step 1: Smart Coupons on Every Bag", t: "Every rice bag carried a unique coupon card with a QR code." },
          {
            s: "After purchase, customers could scan the QR code to:",
            t: "Verify Authenticity: Instantly confirm the product was genuinely from Malar Rice — building trust and defeating counterfeits.",
          },
          {
            s: "Step 2: Instant Surprise Rewards",
            t: "Upon verification, customers received a surprise cashback or gift directly to their account — creating a delightful purchase experience.",
          },
          {
            s: "Step 3: Encouraging Feedback",
            t: "Excited customers were encouraged to leave a Google review — significantly improving the brand’s online reputation.",
          },
        ],
      },
      {
        title: "AI-Powered Restock Reminders",
        items: [
          "Impressed by the success, Malar Rice expanded their partnership with BlingReward by adding an AI-based WhatsApp Assistant:",
          { c: "Reads customer purchase behavior using AI/ML." },
          { c: "Sends timely restock reminders based on past purchase dates." },
          { c: "Acts as a proactive marketing & sales channel — keeping the brand top-of-mind and boosting repeat sales." },
          { h: "The Results" },
          "1400 + Google Reviews",
          "3X More User Engagement",
          "78 % Customer Satisfaction",
        ],
      },
      {
        title: "Why This Worked",
        items: [
          "Customers felt valued & assured.",
          "The brand solved the duplicate product problem.",
          "Positive reviews enhanced brand visibility & credibility online.",
          "AI-powered reminders strengthened retention & sales cycles.",
          { h: "Conclusion" },
          {
            p: "With Bling Reward’s innovative mix of smart coupons, instant rewards, and AI-driven re-marketing, Malar Rice not only overcame their immediate challenges but also unlocked a sustainable path to growth, loyalty, and customer happiness",
          },
        ],
      },
    ],
  },
  {
    id: "arcot-manimark",
    brand: "Arcot Manimark",
    title: "Case Study 2: Bling Reward x Arcot Manimark Kadalai Mittai",
    summary: "Driving Dealer Motivation & Growth with a Customizable Incentive Program.",
    img: "/arcotmanimark.png",
    tags: ["Higher Engagement", "Increased Orders", "Referral Growth"],
    blocks: [
      {
        title: "The Challenge",
        items: [
          "Arcot Manimark, a well-known Kadalai Mittai (peanut candy) brand, wanted to strengthen its dealer network by:",
          "Motivating dealers to increase their monthly business.",
          "Creating excitement & loyalty in the dealer ecosystem.",
          "Encouraging dealers to bring in new distributors via referrals.",
          "Previously, dealer engagement was informal, inconsistent, and lacked measurable impact — leaving potential business on the table.",
          { h: "The Solution" },
          {
            p: "A Dealer Incentive Program Powered by BlingReward Arcot Manimark partnered with Bling Reward to design & launch a fully customizable dealer incentive platform, tailored to their unique needs & culture.",
          },
        ],
      },
      {
        title: "How It Worked",
        items: [
          { h: "Point-Based Rewards System:" },
          "Dealers earn points based on their monthly purchase volume.",
          "Points can be redeemed for exciting, aspirational gifts such as:",
          "Gold jewelry",
          "Two-wheelers",
          "Cashback",
          "International family trips",
          "and more — fully customizable to dealer preferences.",
          {
            s: "Referral Program",
            t: "Dealers earn bonus points or rewards for referring new dealers, turning existing partners into brand advocates.",
          },
          {
            s: "Fully Digital & Transparent",
            t: "Dealers can track their points, browse the rewards catalog, and redeem gifts seamlessly through the platform.",
          },
        ],
      },
      {
        title: "The Results",
        items: [
          {
            s: "Higher Dealer Engagement",
            t: "Dealers became more enthusiastic and goal-driven, motivated by aspirational rewards.",
          },
          {
            s: "Increased Monthly Orders",
            t: "Regular orders increased as dealers aimed to maximize their points and achieve higher reward tiers.",
          },
          {
            s: "Stronger Network Through Referrals",
            t: "The referral feature empowered dealers to bring in new distributors, organically expanding the sales network.",
          },
          {
            s: "Customizable & Scalable",
            t: "The flexible design allowed Arcot Manimark to update rewards, campaigns, and point structures to match business priorities over time.",
          },
        ],
      },
      {
        title: "Why This Worked",
        items: [
          { c: "Appealed to dealers’ aspirations with meaningful & high-value rewards." },
          { c: "Made dealer achievements visible & celebrated." },
          { c: "Encouraged healthy competition & collaboration within the network." },
          { c: "Created a self-propelling growth loop via referrals." },
          {
            s: "Conclusion",
            t: "By leveraging Bling Reward’s dealer incentive platform, Arcot Manimark transformed its dealer ecosystem — from transactional to enthusiastic & collaborative. The customizable rewards program helped increase sales, foster loyalty, and expand their network organically, turning dealers into partners in growth.",
          },
        ],
      },
    ],
  },
  {
    id: "vsn-brand",
    brand: "VSN Brand",
    title: "Case Study 3: BlingReward x VSN Brand",
    summary:
      "Automating Sales, Engagement, and Loyalty in FMCG with UPI Cashback, Gamified Rewards & Smart Restocking.",
    img: "/vsnbrand.png",
    tags: ["Repeat Sales", "Gamified Rewards", "AI Restocking"],
    blocks: [
      {
        title: "The Challenge",
        items: [
          "VSN Brand, a fast-growing FMCG manufacturer specializing in rice and essential food products, faced key growth challenges:",
          { c: "Retain customers in a highly competitive commodity market." },
          { c: "Reduce dependency on manual marketing & sales interventions." },
          { c: "Improve repeat orders & build lasting brand preference." },
          { h: "The Solution" },
          { p: "BlingReward-Powered Loyalty & Engagement Platform" },
          {
            p: "VSN adopted an innovative customer loyalty and sales automation platform from BlingReward — integrating UPI cashback, gamification, and AI-driven restocking.",
          },
        ],
      },
      {
        title: "How It Worked",
        items: [
          { h: "Everyday Engagement with UPI Cashback" },
          "Customers received instant UPI cashback upon purchasing VSN rice or food products and scanning a unique QR code.",
          "Built trust & excitement by rewarding every transaction.",
          { h: "Seasonal Gamification: SPIN & WIN + Cooking Challenge" },
          "During festivals & sales periods, VSN ran Spin & Win assured rewards programs — giving customers the chance to win exciting prizes beyond cashback.",
          "Hosted a Cooking Challenge Campaign, encouraging customers to share recipes & photos with VSN products, further strengthening emotional connection to the brand.",
          { h: "Auto Restock + Online Orders" },
          "AI-powered WhatsApp-based reminders helped customers restock products automatically based on their previous purchase patterns.",
          "Enabled direct online ordering, cutting friction and improving convenience for loyal buyers.",
        ],
      },
      {
        title: "Key Benefits Delivered",
        items: [
          {
            s: "Increased Loyalty & Repeat Sales:",
            t: "UPI cashback & gamified programs created a habit of choosing VSN over competitors.",
          },
          {
            s: "Enhanced Brand Engagement:",
            t: "Spin & Win and Cooking Challenge made the brand memorable & enjoyable.",
          },
          {
            s: "Automated Marketing & Sales:",
            t: "AI-driven reminders & order system ensured consistent sales with minimal intervention.",
          },
          {
            s: "Better Customer Data:",
            t: "Collected valuable customer behavior insights to refine future campaigns.",
          },
          {
            s: "Improved Brand Perception:",
            t: "More reviews, emotional engagement, and surprise rewards elevated the brand image.",
          },
        ],
      },
      {
        title: "Why This Worked",
        items: [
          { c: "Combines immediate gratification (cashback), emotional connection (challenges), and convenience (restocking) — covering all aspects of customer motivation." },
          { c: "Kept the brand relevant in both peak and off-peak periods." },
          { c: "Created an “always-on” marketing engine — freeing up internal teams." },
          { h: "Conclusion" },
          {
            p: "With Bling Reward, VSN Brand transformed its customer loyalty, engagement, and sales — turning one-time buyers into repeat customers and advocates, while reducing manual marketing efforts and boosting ROI significantly. By blending UPI cashback, seasonal gamification, and AI-powered restocking, VSN now runs its marketing & sales on auto-pilot — delighting customers and growing the business simultaneously",
          },
        ],
      },
    ],
  },
];

function Item({ item }) {
  if (typeof item === "string") return <li className="cs-li">{item}</li>;
  if (item.c)
    return (
      <li className="cs-li is-check">
        <span className="cs-check">
          <Check size={13} strokeWidth={3} />
        </span>
        {item.c}
      </li>
    );
  if (item.s)
    return (
      <li className="cs-li is-lead">
        <strong>{item.s}</strong> {item.t}
      </li>
    );
  if (item.h) return <li className="cs-sub">{item.h}</li>;
  return <li className="cs-para">{item.p}</li>;
}

const CaseStudypage = () => {
  const { hash } = useLocation();
  const initial = Math.max(0, cases.findIndex((c) => `#${c.id}` === hash));
  const [active, setActive] = useState(initial);
  const [showDemo, setShowDemo] = useState(false);

  /* /case-studies#vsn-brand opens that case directly (used by the home carousel) */
  useEffect(() => {
    const i = cases.findIndex((c) => `#${c.id}` === hash);
    if (i >= 0) setActive(i);
  }, [hash]);

  const current = cases[active];

  return (
    <>
      <PageHero
        badge={{ icon: <BookOpen size={14} />, text: "Case studies" }}
        title={
          <>
            Featured <span className="text-gradient">case studies</span>
          </>
        }
        description="How three brands turned loyalty programs into measurable growth. Pick a story to read the full breakdown."
      />

      <section className="cs section">
        <div className="container">
          {/* ---------- selector cards ---------- */}
          <div className="cs-picker" role="tablist" aria-label="Case studies">
            {cases.map((c, i) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                id={`cs-tab-${c.id}`}
                aria-selected={i === active}
                aria-controls="cs-panel"
                className={`cs-pick ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <img src={c.img} alt="" loading="lazy" />
                <span className="cs-pick__text">
                  <strong>{c.brand}</strong>
                  <small>{c.summary}</small>
                </span>
              </button>
            ))}
          </div>

          {/* ---------- active case ---------- */}
          <article
            className="cs-detail"
            id="cs-panel"
            role="tabpanel"
            aria-labelledby={`cs-tab-${current.id}`}
            key={current.id}
          >
            <header className="cs-detail__head">
              <div className="cs-detail__img scan-frame">
                <img src={current.img} alt={current.brand} />
              </div>

              <div className="cs-detail__intro">
                <h2>{current.title}</h2>
                <p>{current.summary}</p>

                {current.stats ? (
                  <ul className="cs-stats">
                    {current.stats.map((s) => (
                      <li key={s.label}>
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="cs-tags">
                    {current.tags.map((t) => (
                      <li key={t}>
                        <Check size={14} strokeWidth={3} />
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </header>

            <div className="cs-blocks">
              {current.blocks.map((b) => (
                <section className="cs-block" key={b.title}>
                  <h3>{b.title}</h3>
                  <ul>
                    {b.items.map((item, i) => (
                      <Item item={item} key={i} />
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>

          <div className="cs-cta">
            <h2>Want results like these?</h2>
            <button type="button" className="btn btn-light" onClick={() => setShowDemo(true)}>
              Book a Free Demo
              <ArrowRight size={18} className="btn-arrow" />
            </button>
          </div>
        </div>
      </section>

      {showDemo && <DemoForm onClose={() => setShowDemo(false)} />}
    </>
  );
};

export default CaseStudypage;
