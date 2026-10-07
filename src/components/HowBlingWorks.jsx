import React, { useEffect, useRef, useState } from "react";
import { Smile, Award, Briefcase, Repeat } from "lucide-react";
import "./HowBlingWorks.css";

const stats = [
  { icon: <Smile size={20} />, end: 1000, suffix: "+", label: "Customer Satisfaction" },
  { icon: <Award size={20} />, end: 15, suffix: "+", label: "Years Proven Track Record" },
  { icon: <Briefcase size={20} />, end: 100, suffix: "+", label: "Projects We Completed" },
  { icon: <Repeat size={20} />, end: 99, suffix: "%", label: "Retention Rate" },
];

/* Counts up once when scrolled into view (instant for reduced-motion users). */
function CountUp({ end, suffix }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      setValue(end);
      return undefined;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const duration = 1400;
        let start;
        const tick = (t) => {
          if (start === undefined) start = t;
          const p = Math.min((t - start) / duration, 1);
          setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end]);

  return (
    <span ref={ref} aria-label={`${end}${suffix}`}>
      <span aria-hidden="true">
        {value}
        {suffix}
      </span>
    </span>
  );
}

const HowBlingWorks = () => {
  return (
    <section className="hbw section">
      <div className="container hbw__grid">
        {/* ---------- visual ---------- */}
        <div className="hbw__visual">
          <div className="hbw__frame scan-frame">
            <img
              src={process.env.PUBLIC_URL + "/how-it-work.png"}
              alt="Four-step flow: brand sets up a campaign, customers join, WhatsApp engages them and the dashboard tracks rewards"
              loading="lazy"
            />
          </div>
          <span className="hbw__glow" aria-hidden="true" />
        </div>

        {/* ---------- copy ---------- */}
        <div className="hbw__copy">
          <h2 className="section-title">How Bling Reward works</h2>

          <p className="hbw__text">
            Bling Reward wasn’t built as a generic tool. It was shaped in real markets, starting
            with India’s rice industry, where loyalty is hard-won and every repeat purchase
            matters. After helping top rice brands engage rural buyers and motivate dealers, we’ve
            fine-tuned a platform that now works across any sector driven by repeat customers and
            brand loyalty.
          </p>

          <p className="hbw__text">
            It’s a tool that helps your business increase market presence, boost sales, and drive
            long-term growth.
          </p>

          <dl className="hbw__stats">
            {stats.map((s) => (
              <div className="hbw__stat" key={s.label}>
                <dt>
                  <span className="hbw__stat-icon">{s.icon}</span>
                  {s.label}
                </dt>
                <dd>
                  <CountUp end={s.end} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HowBlingWorks;
