import React, { useMemo, useState } from "react";
import { HelpCircle, Search, Plus, Phone, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import DemoForm from "../components/DemoForm";
import "./FAQpage.css";

const faqData = [
  {
    question: "What types of businesses can use Bling Reward?",
    answer:
      "Bling Reward is built for any brand that values repeat purchases and long-term engagement. We've seen success across rice brands, FMCG, retail, health, pet care, and even automotive. Whether you need a customer loyalty platform or a dealer incentive solution, our system adapts to your goals.",
  },
  {
    question: "How does your QR-based reward system work?",
    answer:
      "Each product or bill gets a unique QR code. When scanned, it directs users to a branded experience where they can register, sign up and get rewarded, spin for prizes, or claim cashback. It's a smart and scalable QR scan loyalty solution.",
  },
  {
    question: "Can rewards be automated?",
    answer:
      "Yes, our platform is an automated reward platform. Once you set up your campaign logic, the system handles tracking, validation, and reward disbursement. Whether it's UPI cashback rewards, coupon codes, or physical gift fulfillment, it all runs hands-free.",
  },
  {
    question: "Do you support WhatsApp for reward campaigns?",
    answer:
      "Absolutely. WhatsApp is at the heart of our communication engine. You can send out reward confirmations, promotional nudges, loyalty point updates, and personalized offers, all with higher open rates and faster engagement than email or SMS.",
  },
  {
    question: "Is this only for end-consumer engagement?",
    answer:
      "No, Bling also includes robust tools for motivating distributors, field agents, and service partners. Our dealer incentive solution lets you assign targets, track sales, and release rewards with complete transparency.",
  },
  {
    question: "Is your loyalty program software compliant and secure?",
    answer:
      "Yes. Our loyalty program software in India follows best practices for data protection and secure communication. Your customer data stays encrypted, accessible only through admin roles you control.",
  },
  {
    question: "Can I send rewards via UPI?",
    answer: "Yes, instant UPI rewards are built in and completely automated.",
  },
];

/* This entry was in the original FAQ list but is really a call-to-action,
   so it is shown as the closing banner instead of an accordion item. */
const closing = {
  title: "Ready to Turn Engagement Into Loyalty?",
  text: "Whether you're a growing FMCG brand, a retail giant, or a regional distributor — Bling Reward gives you everything you need to launch smart, automated loyalty campaigns that actually move the needle.",
};

function FAQpage() {
  const [openIndex, setOpenIndex] = useState(1); // 1-based, first question open
  const [query, setQuery] = useState("");
  const [showDemo, setShowDemo] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqData
      .map((item, i) => ({ ...item, n: i + 1 }))
      .filter((item) => !q || `${item.question} ${item.answer}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <PageHero
        badge={{ icon: <HelpCircle size={14} />, text: "Help centre" }}
        title={
          <>
            Frequently asked <span className="text-gradient">questions</span>
          </>
        }
        description="Quick answers to common questions about loyalty programs, QR rewards, and incentives."
      >
        <label className="faq-search">
          <Search size={20} />
          <span className="sr-only">Search questions</span>
          <input
            type="search"
            placeholder="Search questions, e.g. UPI or WhatsApp"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpenIndex(null);
            }}
          />
        </label>
      </PageHero>

      <section className="faq section">
        <div className="container faq__grid">
          {/* ---------- accordion ---------- */}
          <div className="faq__list" aria-live="polite">
            {results.length === 0 && (
              <p className="faq__empty">
                No questions match “{query}”. Try a different word, or talk to our team.
              </p>
            )}

            {results.map((item) => {
              const open = openIndex === item.n;
              return (
                <div className={`faq-item ${open ? "is-open" : ""}`} key={item.n}>
                  <h3>
                    <button
                      type="button"
                      className="faq-item__q"
                      aria-expanded={open}
                      aria-controls={`faq-a-${item.n}`}
                      id={`faq-q-${item.n}`}
                      onClick={() => setOpenIndex(open ? null : item.n)}
                    >
                      <span className="faq-item__n">{item.n}</span>
                      <span className="faq-item__text">{item.question}</span>
                      <span className="faq-item__icon">
                        <Plus size={20} />
                      </span>
                    </button>
                  </h3>

                  <div
                    className="faq-item__a"
                    id={`faq-a-${item.n}`}
                    role="region"
                    aria-labelledby={`faq-q-${item.n}`}
                  >
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ---------- help card ---------- */}
          <aside className="faq__aside">
            <div className="faq-help bg-dark on-dark">
              <h2>Still have questions?</h2>
              <p>Our team is happy to walk you through the platform.</p>
              <a href="tel:8825751903" className="btn btn-light">
                <Phone size={18} />
                Talk to Sales
              </a>
            </div>
          </aside>
        </div>

        {/* ---------- closing banner ---------- */}
        <div className="container">
          <div className="faq-close">
            <div>
              <h2>{closing.title}</h2>
              <p>{closing.text}</p>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => setShowDemo(true)}>
              Book a Free Demo
              <ArrowRight size={18} className="btn-arrow" />
            </button>
          </div>
        </div>
      </section>

      {showDemo && <DemoForm onClose={() => setShowDemo(false)} />}
    </>
  );
}

export default FAQpage;
