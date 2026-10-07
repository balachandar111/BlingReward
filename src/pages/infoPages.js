import {
  BookOpen,
  Newspaper,
  Handshake,
  Mail,
  FileCode2,
  Webhook,
  Video,
  LifeBuoy,
  Activity,
  Phone,
  MapPin,
  CalendarCheck,
  Megaphone,
  Image,
  Users,
  Layers,
  Rocket,
  Search,
  PlayCircle,
  MessageCircle,
  ShieldCheck,
  Code2,
  KeyRound,
  Bell,
  BarChart3,
  Store,
  Building2,
  Cpu,
} from "lucide-react";

/*
  Content for the simple Company / Resources pages linked from the footer.
  Routes are registered in App.js (path = `/${slug}`).

  status: "live"  -> real content
          "soon"  -> page shows a "coming soon" badge so nothing links to a dead end
  cta.type: "demo" (opens the demo form) | "tel" | "link"
*/
const SALES_PHONE = "8825751903";

const infoPages = {
  blog: {
    icon: BookOpen,
    badge: "Company",
    title: ["Bling", "Blog"],
    description:
      "Stories, playbooks and product updates on QR authentication, loyalty rewards and marketing automation for brands.",
    status: "soon",
    sectionTitle: "What you’ll find here",
    cards: [
      { icon: Rocket, title: "Product updates", text: "New features and improvements across the Bling Reward platform." },
      { icon: BarChart3, title: "Growth playbooks", text: "Practical ways to lift repeat purchases, reviews and dealer sales." },
      { icon: Users, title: "Brand stories", text: "How brands use rewards, WhatsApp and AI restocking to grow." },
    ],
    cta: { type: "link", label: "Read our case studies", to: "/case-studies" },
  },

  "press-kit": {
    icon: Newspaper,
    badge: "Company",
    title: ["Press", "Kit"],
    description:
      "Brand assets, company facts and contact details for journalists, partners and event organisers.",
    status: "soon",
    sectionTitle: "What the kit will include",
    cards: [
      { icon: Image, title: "Logos & brand assets", text: "Approved logos, colours and product screenshots." },
      { icon: Layers, title: "Company fact sheet", text: "A short overview of Bling Reward, our platform and our customers." },
      { icon: Megaphone, title: "Media contact", text: "Reach our team for interviews, quotes and announcements." },
    ],
    cta: { type: "tel", label: "Call our team" },
  },

  "partner-program": {
    icon: Handshake,
    badge: "Company",
    title: ["Partner", "Program"],
    description:
      "Grow with us. Bring Bling Reward’s QR rewards, dealer incentives and WhatsApp automation to your clients.",
    status: "live",
    sectionTitle: "Who it’s for",
    cards: [
      { icon: Store, title: "Resellers & distributors", text: "Offer a ready-to-run loyalty platform to the brands you already serve." },
      { icon: Code2, title: "Agencies & integrators", text: "Add rewards, QR authentication and automation to your client projects." },
      { icon: Building2, title: "Technology partners", text: "Connect your product or service with the Bling Reward ecosystem." },
    ],
    cta: { type: "demo", label: "Become a partner" },
  },

  contact: {
    icon: Mail,
    badge: "Company",
    title: ["Contact", "Us"],
    description:
      "Talk to our team about QR authentication, loyalty rewards, dealer incentives or WhatsApp automation for your brand.",
    status: "live",
    sectionTitle: "Get in touch",
    cards: [
      {
        icon: Phone,
        title: "Call sales",
        text: "Speak to our team directly.",
        href: `tel:${SALES_PHONE}`,
        linkLabel: "88257 51903",
      },
      {
        icon: CalendarCheck,
        title: "Book a demo",
        text: "See the platform in action, tailored to your products.",
        action: "demo",
        linkLabel: "Book a free demo",
      },
      {
        icon: MapPin,
        title: "Visit us",
        text: "Olympia Awfis Crystal, 11–14, 11th Avenue, Thiru Vi Ka Industrial Estate, Saidapet, Chennai, Tamil Nadu – 600032.",
      },
    ],
    cta: { type: "demo", label: "Book a Free Demo" },
  },

  documentation: {
    icon: FileCode2,
    badge: "Resources",
    title: ["Product", "Documentation"],
    description:
      "Guides for setting up campaigns, QR codes, rewards, dealer schemes and WhatsApp journeys.",
    status: "soon",
    sectionTitle: "Planned guides",
    cards: [
      { icon: PlayCircle, title: "Getting started", text: "Launch your first QR reward campaign step by step." },
      { icon: Layers, title: "Campaign setup", text: "Rewards, rules, products and regions in one dashboard." },
      { icon: MessageCircle, title: "WhatsApp automation", text: "Configure reminders, offers and restock journeys." },
    ],
    cta: { type: "tel", label: "Ask our team" },
  },

  "api-reference": {
    icon: Webhook,
    badge: "Resources",
    title: ["API", "Reference"],
    description:
      "Integrate Bling Reward with your ERP, billing and CRM systems using our developer APIs.",
    status: "soon",
    sectionTitle: "What the reference will cover",
    cards: [
      { icon: KeyRound, title: "Authentication", text: "Keys, scopes and secure access to your account data." },
      { icon: Webhook, title: "Webhooks & events", text: "Get notified about scans, redemptions and payouts." },
      { icon: Cpu, title: "Endpoints", text: "Campaigns, rewards, customers and dealer programmes." },
    ],
    cta: { type: "demo", label: "Talk to our team" },
  },

  webinars: {
    icon: Video,
    badge: "Resources",
    title: ["Live", "Webinars"],
    description:
      "Live sessions and recordings on loyalty marketing, dealer incentives and AI-powered engagement.",
    status: "soon",
    sectionTitle: "What to expect",
    cards: [
      { icon: PlayCircle, title: "Live demos", text: "Watch real campaigns being built from scratch." },
      { icon: Users, title: "Brand conversations", text: "Hear what works from brands running rewards today." },
      { icon: Bell, title: "Recordings", text: "Catch up on past sessions whenever suits you." },
    ],
    cta: { type: "demo", label: "Book a live demo instead" },
  },

  "help-center": {
    icon: LifeBuoy,
    badge: "Resources",
    title: ["Help", "Center"],
    description:
      "Find answers fast, or reach our team if you need a hand with your campaigns.",
    status: "live",
    sectionTitle: "How can we help?",
    cards: [
      { icon: Search, title: "Browse the FAQ", text: "Quick answers on QR rewards, UPI payouts and WhatsApp.", to: "/faq", linkLabel: "Open FAQ" },
      { icon: Phone, title: "Talk to us", text: "Speak to our team for setup and campaign help.", href: `tel:${SALES_PHONE}`, linkLabel: "88257 51903" },
      { icon: ShieldCheck, title: "Policies", text: "Read how we handle data and the terms of using Bling Reward.", to: "/privacy-policy", linkLabel: "Privacy Policy" },
    ],
    cta: { type: "demo", label: "Book a Free Demo" },
  },

  status: {
    icon: Activity,
    badge: "Resources",
    title: ["Platform", "Status"],
    description:
      "A public view of platform availability and incident updates is on its way.",
    status: "soon",
    sectionTitle: "What the status page will show",
    cards: [
      { icon: Activity, title: "Live availability", text: "Platform, QR scanning, rewards and messaging at a glance." },
      { icon: Bell, title: "Incident updates", text: "Clear, timely communication if something goes wrong." },
      { icon: BarChart3, title: "Uptime history", text: "A transparent record of reliability over time." },
    ],
    cta: { type: "tel", label: "Contact support" },
  },
};

export const SALES_TEL = SALES_PHONE;
export default infoPages;
