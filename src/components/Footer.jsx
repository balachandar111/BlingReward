import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MapPin } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import "./Footer.css";

const platform = [
  "QR Authentication",
  "Loyalty Rewards",
  "Warranty Management",
  "Dealer Management",
  "AI WhatsApp",
  "Analytics Dashboard",
  "Campaign Manager",
];

const industries = [
  "FMCG",
  "Retail",
  "Healthcare",
  "Manufacturing",
  "Automotive",
  "Electronics",
  "Agriculture",
];

const company = [
  { label: "Careers", href: "#careers" },
  { label: "Blog", href: "#blog" },
  { label: "Press Kit", href: "#press" },
  { label: "Partner Program", href: "#partner" },
  { label: "Contact Us", href: "#contact" },
];

const resources = [
  { label: "Documentation", href: "#docs" },
  { label: "API Reference", href: "#api" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Webinars", href: "#webinars" },
  { label: "Help Center", href: "#help" },
  { label: "Status Page", href: "#status" },
];

const socials = [
  { label: "LinkedIn", href: "#linkedin", icon: <FaLinkedinIn /> },
  { label: "Twitter", href: "#twitter", icon: <FaXTwitter /> },
  { label: "YouTube", href: "#youtube", icon: <FaYoutube /> },
  { label: "WhatsApp", href: "#whatsapp", icon: <FaWhatsapp /> },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bling_reward?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    icon: <FaInstagram />,
    external: true,
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-dark on-dark">
      <span className="bg-dots" aria-hidden="true" />

      <div className="container footer__top">
        {/* ---------- brand ---------- */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Bling Reward home">
            <img src="/logo.png" alt="Bling Reward" />
          </Link>

          <p className="footer__about">
            AI-powered QR Authentication, Loyalty Rewards & Marketing Automation for product brands
            across India.
          </p>

          <p className="footer__address">
            <MapPin size={18} />
            <span>
              Olympia Awfis Crystal, 11–14, 11th Avenue, Thiru Vi Ka Industrial Estate, Saidapet,
              Chennai, Tamil Nadu-600032.
            </span>
          </p>

          <div className="footer__social">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ---------- link columns ---------- */}
        <nav className="footer__cols" aria-label="Footer">
          <div>
            <h3>Platform</h3>
            <ul>
              {platform.map((l) => (
                <li key={l}>
                  <Link to="/solutions">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Industries</h3>
            <ul>
              {industries.map((l) => (
                <li key={l}>
                  <Link to="/industries">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <HashLink smooth to="/#about">
                  About Us
                </HashLink>
              </li>
              {company.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
            <ul>
              {resources.map((l) => (
                <li key={l.label}>
                  {l.to ? <Link to={l.to}>{l.label}</Link> : <a href={l.href}>{l.label}</a>}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>© 2024 Bling Reward Technologies Pvt. Ltd. All rights reserved.</p>

        <div className="footer__legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookie">Cookie Policy</a>
          <a href="#gdpr">GDPR</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
