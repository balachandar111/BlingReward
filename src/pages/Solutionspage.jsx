import React, { useRef, useState } from "react";
import {
  Sparkles,
  QrCode,
  Store,
  Gift,
  Bot,
  MessageCircle,
  Star,
  Box,
  Gamepad2,
  Check,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/PageHero";
import DemoForm from "../components/DemoForm";
import "./Solutionspage.css";

const solutions = [
  {
    id: "qr-protection",
    tab: "QR Based Brand Protection",
    title: "QR Based Brand Protection",
    subtitle: "Anti-Counterfeiting & Verification",
    description:
      "QR Code Signup Rewards that turn your product packaging into a direct engagement tool.",
    icon: QrCode,
    capabilities: [
      "Encrypted QR code per product unit",
      "Real-time verification dashboard",
      "Anti-counterfeiting alert system",
      "Scan location & device tracking",
    ],
  },
  {
    id: "dealer-incentive",
    tab: "Dealer and Super Stockist Incentives",
    title: "Dealer and Super Stockist Incentive Solutions",
    subtitle: "Automated Supply Chain Rewards",
    description:
      "Dealer Incentive Solutions that simplify tracking, performance management, and payouts.",
    icon: Store,
    capabilities: [
      "Scheme performance dashboards",
      "Automated UPI & bank payouts",
      "Dealer leaderboard & incentives",
      "Real-time secondary sales data",
    ],
  },
  {
    id: "customer-loyalty",
    tab: "End Customers Loyalty Platform",
    title: "End Customers Loyalty Platform",
    subtitle: "Lifecycle Retention Programs",
    description:
      "Customer Loyalty Platform tailored to your products, purchase patterns, and user profiles.",
    icon: Gift,
    capabilities: [
      "Tiered reward structures",
      "Purchase pattern analytics",
      "Personalized customer profiles",
      "Instant reward redemptions",
    ],
  },
  {
    id: "ai-rewards",
    tab: "AI Powered Reward Platform",
    title: "AI Powered Reward Platform",
    subtitle: "Smart Cashbacks & Analytics",
    description:
      "Automated Reward Platform with UPI cashback, physical gift dispatch, and live campaign analytics.",
    icon: Bot,
    capabilities: [
      "Direct UPI cashback integrations",
      "Automated physical gift dispatch",
      "Live campaign analytics",
      "AI fraud detection",
    ],
  },
  {
    id: "engagement-tools",
    tab: "Customized Customer Engagement Tools",
    title: "Customized Customer Engagement Tools",
    subtitle: "WhatsApp Automation & Nudges",
    description:
      "Customer Engagement Tools including WhatsApp journeys, nudges, and personalized offers.",
    icon: MessageCircle,
    capabilities: [
      "Automated WhatsApp journeys",
      "Smart push notifications & nudges",
      "Personalized offer engines",
      "Conversational workflows",
    ],
  },
  {
    id: "google-review",
    tab: "Guaranteed Google Review",
    title: "Guaranteed Google Review",
    subtitle: "Organic Trust & Local SEO",
    description: "Guaranteed Google Review Booster to help you build online trust and visibility.",
    icon: Star,
    capabilities: [
      "Automated review prompts",
      "Filtered positive feedback loops",
      "Organic customer review triggers",
      "Local SEO visibility boost",
    ],
  },
  {
    id: "ar-rewards",
    tab: "AR Multiple Engagements Rewards",
    title: "AR Multiple Engagements Rewards Systems",
    subtitle: "3D Augmented Experience",
    description:
      "AR or QR-Based Brand Protection Platform that safeguards your original products from duplication.",
    icon: Box,
    capabilities: [
      "3D Augmented Reality scanning",
      "Anti-duplication safeguards",
      "Interactive product packaging",
      "Gamified reward unlocks",
    ],
  },
  {
    id: "gamification",
    tab: "Multiple Gamification Formats",
    title: "Multiple Gamification Formats",
    subtitle: "Play & Win Mechanics",
    description:
      "Multiple Gamification Formats like spin-to-win, scratch cards, and tiered rewards to keep customers engaged.",
    icon: Gamepad2,
    capabilities: [
      "Spin-to-Win wheels",
      "Digital scratch cards",
      "Streak & milestone rewards",
      "Interactive contests",
    ],
  },
];

function Solutionspage() {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const [showDemo, setShowDemo] = useState(false);
  const tabRefs = useRef([]);

  const index = solutions.findIndex((s) => s.id === activeId);
  const active = solutions[index];
  const ActiveIcon = active.icon;

  /* roving keyboard navigation for the tablist */
  const onKeyDown = (e) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    let n = index;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") n = (index + 1) % solutions.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = (index - 1 + solutions.length) % solutions.length;
    if (e.key === "Home") n = 0;
    if (e.key === "End") n = solutions.length - 1;
    setActiveId(solutions[n].id);
    tabRefs.current[n] && tabRefs.current[n].focus();
  };

  return (
    <>
      <PageHero
        badge={{ icon: <Sparkles size={14} />, text: "Our solutions" }}
        title={
          <>
            Everything your brand <span className="text-gradient">needs</span>
          </>
        }
        description="Explore our comprehensive suite of solutions tailored for brand growth, engagement, and security."
        visual={
          <div className="sol-hero__frame scan-frame">
            <img
              src="/solution-banner.jpeg"
              alt="Four screens of a rewards app: home, points earned, cashing points and merchants"
              width="1920"
              height="1080"
            />
          </div>
        }
      />

      <section className="sol section">
        <div className="container sol__grid">
          {/* ---------- tab list ---------- */}
          <div
            className="sol__tabs"
            role="tablist"
            aria-label="Solutions"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
          >
            {solutions.map((s, i) => {
              const Icon = s.icon;
              const selected = s.id === activeId;
              return (
                <button
                  key={s.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-selected={selected}
                  aria-controls="sol-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`sol__tab ${selected ? "is-active" : ""}`}
                  onClick={() => setActiveId(s.id)}
                >
                  <span className="sol__tab-icon">
                    <Icon size={20} />
                  </span>
                  <span className="sol__tab-label">{s.tab}</span>
                </button>
              );
            })}
          </div>

          {/* ---------- active panel ---------- */}
          <div
            className="sol__panel"
            role="tabpanel"
            id="sol-panel"
            aria-labelledby={`tab-${active.id}`}
            key={active.id}
          >
            <ActiveIcon className="sol__mark" size={260} strokeWidth={0.8} aria-hidden="true" />

            <p className="sol__subtitle">
              <ActiveIcon size={18} />
              {active.subtitle}
            </p>
            <h2>{active.title}</h2>
            <p className="sol__desc">{active.description}</p>

            <h3 className="sol__cap-title">Key capabilities</h3>
            <ul className="sol__caps">
              {active.capabilities.map((c) => (
                <li key={c}>
                  <span className="sol__check">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>

            <button type="button" className="btn btn-primary" onClick={() => setShowDemo(true)}>
              Explore Solution
              <ArrowRight size={18} className="btn-arrow" />
            </button>
          </div>
        </div>
      </section>

      {showDemo && <DemoForm onClose={() => setShowDemo(false)} />}
    </>
  );
}

export default Solutionspage;
