import React from "react";
import { FileText } from "lucide-react";
import LegalLayout from "../components/LegalLayout";

const COMPANY = "Bling Reward Technologies Pvt. Ltd.";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    body: [
      `These Terms & Conditions (“Terms”) are a binding agreement between you and ${COMPANY} (“Bling Reward”, “we”, “us”). By visiting our website, booking a demo, creating an account or using our platform, you agree to these Terms and to our Privacy Policy.`,
      "If you use Bling Reward on behalf of a company, you confirm that you have authority to bind that company. If you do not agree, please do not use our services.",
    ],
  },
  {
    id: "services",
    title: "Our services",
    body: [
      "Bling Reward provides software and related services for product brands, including QR authentication, loyalty and cashback rewards, spin-and-win campaigns, dealer incentive programmes, analytics and WhatsApp / SMS marketing automation.",
      "Features, pricing and availability may differ by plan and may change over time. Some features rely on third-party providers and are subject to their availability.",
    ],
  },
  {
    id: "accounts",
    title: "Accounts and eligibility",
    body: [
      {
        list: [
          "You must be at least 18 years old and able to enter into a contract under Indian law.",
          "You are responsible for the accuracy of the information you provide and for keeping your login credentials confidential.",
          "You are responsible for all activity under your account and must tell us promptly about any unauthorised use.",
        ],
      },
    ],
  },
  {
    id: "use",
    title: "Acceptable use",
    body: [
      "You agree not to:",
      {
        list: [
          "Use the platform for anything unlawful, fraudulent, misleading or that infringes anyone’s rights.",
          "Generate, duplicate or manipulate QR codes, scans or rewards to claim benefits you are not entitled to.",
          "Send spam or unsolicited messages, or message people who have not agreed to receive them.",
          "Attempt to access accounts, systems or data you are not authorised to, or interfere with the security or performance of the platform.",
          "Reverse engineer, copy or resell the platform except as we expressly allow.",
        ],
      },
    ],
  },
  {
    id: "brands",
    title: "Brand responsibilities",
    body: [
      "If you are a brand running campaigns on Bling Reward, you are responsible for:",
      {
        list: [
          "The terms, eligibility rules and fairness of your campaigns, offers and rewards.",
          "Funding the cashback, gifts and incentives you promise to customers and dealers.",
          "Obtaining and recording the consents needed to collect customer data and to send WhatsApp, SMS or email messages.",
          "The accuracy of product, pricing and promotional content you upload.",
          "Complying with consumer protection, advertising, data protection, tax and other laws that apply to your business.",
        ],
      },
    ],
  },
  {
    id: "rewards",
    title: "Rewards and payouts",
    body: [
      "Cashback and UPI rewards are paid through third-party payment partners. Payout times can be affected by incorrect UPI details, bank or network issues and partner downtime. A reward may be withheld or reversed if we or the brand reasonably suspect fraud, duplicate claims or breach of campaign rules.",
      "Campaign terms, such as validity and reward limits, are set by the brand running the campaign.",
    ],
  },
  {
    id: "messaging",
    title: "WhatsApp and SMS messaging",
    body: [
      "Messaging features use third-party channels such as WhatsApp Business and SMS gateways. You must follow those providers’ policies and applicable rules, including opt-in and opt-out requirements. Delivery and read rates are not guaranteed, and messaging can be restricted by the channel provider.",
    ],
  },
  {
    id: "fees",
    title: "Fees and payment",
    body: [
      "Fees are as set out in your order form, proposal or plan. Unless agreed otherwise, fees are payable in advance, are non-refundable except where required by law, and exclude applicable taxes such as GST. Overdue amounts may lead to suspension of the service.",
    ],
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: [
      "Bling Reward and its licensors own the platform, software, designs, trademarks and documentation. We grant you a limited, non-exclusive, non-transferable right to use the platform during your subscription for your internal business purposes.",
      "You keep ownership of the content and data you upload. You give us a licence to host, process and display it as needed to provide and improve the service.",
    ],
  },
  {
    id: "privacy",
    title: "Data and privacy",
    body: [
      "How we handle personal information is described in our Privacy Policy. Where we process end-customer data for a brand, we do so on the brand’s instructions and subject to the brand’s own obligations under applicable data protection law.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimers",
    body: [
      "The platform is provided “as is” and “as available”. To the fullest extent permitted by law, we do not promise that the service will be uninterrupted or error-free, or that any particular sales, engagement or review results will be achieved. Case studies on our site show results for specific brands and are not a guarantee of future outcomes.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: [
      "To the extent permitted by law, Bling Reward will not be liable for indirect, incidental, special or consequential losses, or for loss of profits, revenue, goodwill or data. Our total liability for any claim relating to the service is limited to the fees you paid us in the three months before the event giving rise to the claim.",
      "Nothing in these Terms limits liability that cannot be limited under applicable law.",
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: [
      "You agree to indemnify and hold Bling Reward harmless from claims, losses and expenses (including reasonable legal fees) arising from your campaigns, your content, your breach of these Terms or your violation of law or third-party rights.",
    ],
  },
  {
    id: "termination",
    title: "Suspension and termination",
    body: [
      "You may stop using the service at any time. We may suspend or terminate access if you breach these Terms, if required by law, or if your use risks harm to the platform or other users. Provisions that by their nature should survive termination (such as intellectual property, disclaimers, liability and governing law) will continue to apply.",
    ],
  },
  {
    id: "law",
    title: "Governing law and disputes",
    body: [
      "These Terms are governed by the laws of India. Subject to any agreed dispute-resolution process, the courts at Chennai, Tamil Nadu have exclusive jurisdiction over any dispute arising from them.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    body: [
      "We may update these Terms from time to time. The updated version will show a new “last updated” date. Continuing to use the service after changes take effect means you accept the updated Terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    body: [
      `Questions about these Terms? Reach ${COMPANY} through our Contact Us page or call 88257 51903.`,
      "Registered office: Olympia Awfis Crystal, 11–14, 11th Avenue, Thiru Vi Ka Industrial Estate, Saidapet, Chennai, Tamil Nadu – 600032.",
    ],
  },
];

function TermsPage() {
  return (
    <LegalLayout
      crumbs="Terms & Conditions"
      badge={{ icon: <FileText size={14} />, text: "Legal" }}
      title={
        <>
          Terms &amp; <span className="text-gradient">Conditions</span>
        </>
      }
      description="The rules and responsibilities that apply when you use the Bling Reward website, platform and reward campaigns."
      updated="7 October 2026"
      sections={sections}
      other={{
        title: "Curious how we handle your data?",
        text: "Our Privacy Policy explains what we collect and why.",
        to: "/privacy-policy",
        label: "Privacy Policy",
      }}
    />
  );
}

export default TermsPage;
