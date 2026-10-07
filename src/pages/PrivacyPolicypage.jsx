import React from "react";
import { ShieldCheck } from "lucide-react";
import LegalLayout from "../components/LegalLayout";

const COMPANY = "Bling Reward Technologies Pvt. Ltd.";

const sections = [
  {
    id: "overview",
    title: "Who we are",
    body: [
      `${COMPANY} (“Bling Reward”, “we”, “us”) provides a platform for QR authentication, loyalty and cashback rewards, dealer incentives and WhatsApp / SMS marketing automation for product brands across India.`,
      "This Privacy Policy explains what personal information we collect, why we collect it, how we use and protect it, and the choices you have. It applies to our website, our dashboard and the reward experiences we run for brands.",
      {
        note: "In most reward campaigns, the brand that runs the campaign decides why and how its customers’ data is used. Bling Reward processes that data on the brand’s behalf. For our own website visitors and business customers, we decide.",
      },
    ],
  },
  {
    id: "collect",
    title: "Information we collect",
    body: [
      { sub: "From brands, dealers and website visitors" },
      {
        list: [
          "Contact details such as name, work email, phone number and company name (for example when you book a demo or talk to sales).",
          "Account and billing details for our business customers.",
          "Messages and enquiries you send us.",
        ],
      },
      { sub: "From end customers who take part in a reward campaign" },
      {
        list: [
          "Name, mobile number and, where a reward is paid out, the UPI ID or payout details you provide.",
          "Product, batch, QR code and purchase details linked to the scan, and the reward you received.",
          "Reviews, photos or recipes you choose to submit to a campaign.",
          "WhatsApp or SMS interaction history related to the campaign.",
        ],
      },
      { sub: "Collected automatically" },
      {
        list: [
          "Device and browser type, IP address, approximate location and pages visited.",
          "Cookie and similar technology data (see Cookies below).",
        ],
      },
    ],
  },
  {
    id: "use",
    title: "How we use information",
    body: [
      {
        list: [
          "To verify product authenticity and deliver cashback, spin-and-win rewards, coupons and gifts.",
          "To run loyalty, referral and dealer-incentive programmes for the brand you interact with.",
          "To send service messages, reward confirmations and, where permitted, reminders and offers by WhatsApp, SMS or email.",
          "To provide analytics and dashboards to brands (for example scans, redemptions and repeat-purchase trends).",
          "To prevent fraud, duplicate claims and misuse of rewards.",
          "To operate, secure and improve our platform and respond to your requests.",
          "To comply with legal and tax obligations.",
        ],
      },
      "We do not sell your personal information.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing your information",
    body: [
      "We share information only where needed to provide the service:",
      {
        list: [
          "With the brand running the campaign you took part in, including scan and reward activity.",
          "With service providers such as cloud hosting, payment and UPI partners, WhatsApp / SMS gateways and analytics tools, who may use it only to perform services for us.",
          "With authorities or advisers where required by law, to enforce our terms, or to protect rights, safety and security.",
          "In connection with a merger, acquisition or sale of assets, with notice where required.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    body: [
      "We use cookies and similar technologies to keep the site working, remember preferences, understand how pages are used and improve performance.",
      {
        list: [
          "Essential cookies: needed for security and core features.",
          "Analytics cookies: help us understand traffic and improve the site.",
          "Preference cookies: remember settings you choose.",
        ],
      },
      "You can control or delete cookies in your browser settings. Blocking some cookies may affect how parts of the site work.",
    ],
  },
  {
    id: "security",
    title: "Data security",
    body: [
      "We use technical and organisational measures such as encryption in transit, role-based access controls and monitoring to protect personal information. No online service can be guaranteed to be completely secure, so we encourage you to use strong credentials and keep them confidential.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep data",
    body: [
      "We keep personal information only for as long as needed for the purposes described here, for the duration of the brand’s campaign and contract, and as required by law (for example tax and accounting rules). After that we delete or anonymise it.",
    ],
  },
  {
    id: "rights",
    title: "Your rights and choices",
    body: [
      "Under applicable Indian law, including the Digital Personal Data Protection Act, 2023, you may have the right to:",
      {
        list: [
          "Access a summary of the personal data we process about you.",
          "Ask us to correct inaccurate or incomplete data.",
          "Ask us to erase data that is no longer needed.",
          "Withdraw consent for marketing messages at any time, for example by replying STOP or using the opt-out link.",
          "Nominate another person to exercise your rights, and raise a grievance.",
        ],
      },
      "Where we process your data for a brand, we may direct your request to that brand or help the brand respond to it.",
    ],
  },
  {
    id: "children",
    title: "Children",
    body: [
      "Our services are intended for adults. We do not knowingly collect personal information from children. If you believe a child has provided us data, please contact us and we will delete it.",
    ],
  },
  {
    id: "links",
    title: "Third-party services",
    body: [
      "Our site and campaigns may link to or run on third-party services such as WhatsApp, Google and payment apps. Their own privacy policies apply to how they handle your data, and we are not responsible for their practices.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. When we do, we will change the “last updated” date at the top and, for material changes, give additional notice where appropriate.",
    ],
  },
  {
    id: "contact",
    title: "Contact and grievances",
    body: [
      `For privacy questions, requests or grievances, reach ${COMPANY} through our Contact Us page or call 88257 51903.`,
      "Registered office: Olympia Awfis Crystal, 11–14, 11th Avenue, Thiru Vi Ka Industrial Estate, Saidapet, Chennai, Tamil Nadu – 600032.",
    ],
  },
];

function PrivacyPolicypage() {
  return (
    <LegalLayout
      crumbs="Privacy Policy"
      badge={{ icon: <ShieldCheck size={14} />, text: "Your data, protected" }}
      title={
        <>
          Privacy <span className="text-gradient">Policy</span>
        </>
      }
      description="How Bling Reward collects, uses and protects personal information across our website, platform and reward campaigns."
      updated="7 October 2026"
      sections={sections}
      other={{
        title: "Looking for the rules of using Bling Reward?",
        text: "Read the terms that apply to our website and platform.",
        to: "/terms-and-conditions",
        label: "Terms & Conditions",
      }}
    />
  );
}

export default PrivacyPolicypage;
