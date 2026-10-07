import React, { useMemo, useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  ChevronDown,
  Check,
  Code2,
  Users,
  TrendingUp,
  Rocket,
  HeartHandshake,
  GraduationCap,
  Laptop,
  Send,
} from "lucide-react";
import PageHero from "../components/PageHero";
import DemoForm from "../components/DemoForm";
import useReveal from "../components/useReveal";
import "./Careerspage.css";

/* Where "Apply now" sends applications – change this to your real HR mailbox. */
const CAREERS_EMAIL = "careers@blingtechconnect.com";

/*
  Openings follow https://blingtechconnect.com/careers (roles, teams and experience
  levels). Requirement bullets are summarised and the remote / hybrid labels should be
  confirmed. Edit, add or remove entries here and the page updates automatically.
*/
const jobs = [
  {
    id: "senior-full-stack-developer",
    title: "Senior Full Stack Developer",
    dept: "IT Engineering",
    mode: "Remote",
    type: "Full-time",
    exp: "5+ years",
    summary:
      "We’re looking for an experienced Full Stack Developer to build scalable web applications using React and Node.js.",
    needs: [
      "Design and develop full-stack web applications",
      "5+ years of experience with React and Node.js",
      "Write clean, tested and maintainable code",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    dept: "IT Engineering",
    mode: "Remote",
    type: "Full-time",
    exp: "3+ years",
    summary:
      "Join our DevOps team to manage and optimize our cloud infrastructure using AWS and Docker.",
    needs: [
      "3+ years of DevOps experience",
      "Hands-on with AWS and Docker",
      "Build and maintain CI/CD pipelines and monitoring",
    ],
  },
  {
    id: "hr-manager",
    title: "HR Manager",
    dept: "Human Resources",
    mode: "Hybrid",
    type: "Full-time",
    exp: "5+ years",
    summary:
      "Lead our HR initiatives, manage talent acquisition, and develop company culture strategies.",
    needs: [
      "Develop HR policies and procedures",
      "5+ years of HR management experience",
      "HR information systems proficiency",
    ],
  },
  {
    id: "recruitment-specialist",
    title: "Recruitment Specialist",
    dept: "Human Resources",
    mode: "Remote",
    type: "Full-time",
    exp: "2+ years",
    summary:
      "Source and recruit top talent for our growing engineering and business teams.",
    needs: [
      "Manage the recruitment pipeline end to end",
      "Track recruitment metrics",
      "2+ years of recruitment experience",
    ],
  },
  {
    id: "enterprise-account-executive",
    title: "Enterprise Account Executive",
    dept: "Sales",
    mode: "Hybrid",
    type: "Full-time",
    exp: "4+ years",
    summary:
      "Develop new business opportunities by prospecting and qualifying leads for our sales team.",
    needs: [
      "Identify and qualify enterprise leads",
      "4+ years of enterprise sales experience",
      "Strong communication and negotiation skills",
    ],
  },
];

const perks = [
  {
    icon: Rocket,
    title: "Build real products",
    text: "Work on QR authentication, loyalty rewards, AI chatbots and enterprise software used by real brands.",
  },
  {
    icon: TrendingUp,
    title: "Grow fast",
    text: "A fast-moving company where ownership, learning and growth come early.",
  },
  {
    icon: Laptop,
    title: "Flexible work",
    text: "Remote and hybrid roles so you can do your best work where you work best.",
  },
  {
    icon: GraduationCap,
    title: "Always learning",
    text: "Mentorship from senior engineers and room to explore new tools and ideas.",
  },
  {
    icon: HeartHandshake,
    title: "Supportive culture",
    text: "Collaborative teams, honest feedback and respect for people’s time.",
  },
  {
    icon: Users,
    title: "Impact-driven teams",
    text: "Small, focused teams where your work is seen and shapes the product.",
  },
];

const steps = [
  { title: "Apply", text: "Send your resume and a short note." },
  { title: "Intro call", text: "A quick chat about you and the role." },
  { title: "Skills round", text: "A practical discussion or task for the role." },
  { title: "Offer", text: "Meet the team and join the journey." },
];

function Careerspage() {
  const departments = useMemo(() => ["All", ...new Set(jobs.map((j) => j.dept))], []);
  const [dept, setDept] = useState("All");
  const [openId, setOpenId] = useState(jobs[0].id);
  const [showDemo, setShowDemo] = useState(false);

  const perksRef = useReveal();
  const stepsRef = useReveal();

  const list = dept === "All" ? jobs : jobs.filter((j) => j.dept === dept);

  const applyHref = (job) =>
    `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application: ${job.title}`)}&body=${encodeURIComponent(
      `Hi,\n\nI'd like to apply for the ${job.title} role.\n\nName:\nPhone:\nExperience:\nLinkedIn / Portfolio:\n\n(Please attach your resume.)`
    )}`;

  return (
    <>
      <PageHero
        crumbs="Careers"
        badge={{ icon: <Briefcase size={14} />, text: "We’re hiring" }}
        title={
          <>
            Join our <span className="text-gradient">team</span>
          </>
        }
        description="We’re looking for talented individuals to join our growing team and help brands build trust, loyalty and growth with RFID, AI chatbots, digital warranty, QR rewards and enterprise software."
        stats={[
          { value: String(jobs.length), label: "Open positions" },
          { value: String(departments.length - 1), label: "Teams hiring" },
          { value: "Remote", label: "& hybrid roles" },
        ]}
        floaters={[<Code2 size={24} />, <Users size={22} />, <Rocket size={20} />, <Briefcase size={22} />]}
      >
        <div className="careers-hero__actions">
          <a href="#openings" className="btn btn-primary">
            View open roles
            <ArrowRight size={18} className="btn-arrow" />
          </a>
        </div>
      </PageHero>

      {/* ---------- why join ---------- */}
      <section className="careers-why section">
        <div className="container">
          <div className="section-head is-center">
            <h2 className="section-title">
              Why work with <span className="text-gradient">Bling</span>
            </h2>
            <p className="section-lede">
              Meaningful products, ambitious teammates and the space to do the best work of your
              career.
            </p>
          </div>

          <ul className="careers-perks reveal" ref={perksRef}>
            {perks.map((p, i) => {
              const Icon = p.icon;
              return (
                <li className="careers-perk reveal-item" style={{ "--i": i }} key={p.title}>
                  <span className="careers-perk__icon">
                    <Icon size={22} />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------- openings ---------- */}
      <section className="careers-jobs section" id="openings">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Current openings</h2>
            <p className="section-lede">
              Don’t see a perfect fit? Send your resume anyway. We’re always glad to meet
              great people.
            </p>
          </div>

          <div className="careers-filter" role="tablist" aria-label="Filter by team">
            {departments.map((d) => (
              <button
                key={d}
                type="button"
                role="tab"
                aria-selected={dept === d}
                className={dept === d ? "is-active" : ""}
                onClick={() => setDept(d)}
              >
                {d}
                <span>{d === "All" ? jobs.length : jobs.filter((j) => j.dept === d).length}</span>
              </button>
            ))}
          </div>

          <div className="careers-list">
            {list.map((job) => {
              const open = openId === job.id;
              return (
                <article className={`job ${open ? "is-open" : ""}`} key={job.id}>
                  <h3>
                    <button
                      type="button"
                      className="job__head"
                      aria-expanded={open}
                      aria-controls={`job-${job.id}`}
                      onClick={() => setOpenId(open ? null : job.id)}
                    >
                      <span className="job__icon">
                        <Code2 size={22} />
                      </span>

                      <span className="job__main">
                        <strong>{job.title}</strong>
                        <small>{job.dept}</small>
                      </span>

                      <span className="job__meta">
                        <span>
                          <MapPin size={14} />
                          {job.mode}
                        </span>
                        <span>
                          <Clock size={14} />
                          {job.type}
                        </span>
                        <span>
                          <Briefcase size={14} />
                          {job.exp}
                        </span>
                      </span>

                      <ChevronDown size={20} className="job__chev" />
                    </button>
                  </h3>

                  <div className="job__body" id={`job-${job.id}`} role="region">
                    <div>
                      <p>{job.summary}</p>
                      <p className="job__label">What we’re looking for</p>
                      <ul>
                        {job.needs.map((n) => (
                          <li key={n}>
                            <span>
                              <Check size={12} strokeWidth={3} />
                            </span>
                            {n}
                          </li>
                        ))}
                      </ul>
                      <a href={applyHref(job)} className="btn btn-primary btn-sm">
                        Apply now
                        <Send size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- hiring process ---------- */}
      <section className="careers-process section">
        <div className="container">
          <div className="section-head is-center">
            <h2 className="section-title">How hiring works</h2>
            <p className="section-lede">A simple, respectful process with no surprises.</p>
          </div>

          <ol className="careers-steps reveal" ref={stepsRef}>
            {steps.map((s, i) => (
              <li className="careers-step reveal-item" style={{ "--i": i }} key={s.title}>
                <span className="careers-step__n">{i + 1}</span>
                <strong>{s.title}</strong>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="careers-cta bg-dark on-dark">
            <span className="bg-dots" aria-hidden="true" />
            <div>
              <h2>Ready to build what’s next?</h2>
              <p>Send us your resume and tell us what you’d love to work on.</p>
            </div>
            <a
              className="btn btn-light"
              href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("General application")}`}
            >
              Send your resume
              <ArrowRight size={18} className="btn-arrow" />
            </a>
          </div>

          <p className="careers-demo">
            Looking to use Bling Reward instead?{" "}
            <button type="button" onClick={() => setShowDemo(true)}>
              Book a free demo
            </button>
          </p>
        </div>
      </section>

      {showDemo && <DemoForm onClose={() => setShowDemo(false)} />}
    </>
  );
}

export default Careerspage;
