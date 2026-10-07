import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, User, Mail, Building2, Phone, Check, ArrowRight, QrCode } from "lucide-react";
import "./DemoForm.css";

const perks = [
  "Setup in 7 days",
  "No credit card required",
  "Dedicated onboarding support",
];

/**
 * Works both as a modal (pass `onClose`, or the legacy `closeForm`) and as the
 * stand-alone /demoform route (no props → closing navigates home).
 */
function DemoForm({ onClose, closeForm }) {
  const navigate = useNavigate();
  const firstField = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | error

  const close = onClose || closeForm || (() => navigate("/"));

  /* Esc closes, page behind does not scroll, first field is focused */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstField.current && firstField.current.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((d) => ({ ...d, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const GOOGLE_SHEET_URL = "YOUR_COPIED_WEB_APP_URL_HERE";

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setLoading(false);
      setStatus("success");
    } catch (error) {
      setLoading(false);
      setStatus("error");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="demo-overlay" onClick={close}>
      <div
        className="demo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="demo-close" onClick={close} aria-label="Close form">
          <X size={20} />
        </button>

        {/* Left: value panel */}
        <aside className="demo-aside bg-dark on-dark">
          <span className="demo-aside__qr scan-frame is-light">
            <QrCode size={34} strokeWidth={1.6} />
          </span>
          <h2>See Bling Reward working for your brand</h2>
          <p>Tell us a little about your business and we’ll walk you through a live demo.</p>

          <ul className="demo-perks">
            {perks.map((p) => (
              <li key={p}>
                <span className="demo-perks__tick">
                  <Check size={14} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right: form / success */}
        <div className="demo-main">
          {status === "success" ? (
            <div className="demo-success" role="status">
              <span className="demo-success__badge">
                <Check size={30} strokeWidth={3} />
              </span>
              <h3>Demo booked successfully</h3>
              <p>Thanks, {formData.name.split(" ")[0] || "there"}! We’ll reach out shortly.</p>
              <button type="button" className="btn btn-primary" onClick={close}>
                Done
              </button>
            </div>
          ) : (
            <>
              <h3 id="demo-title" className="demo-main__title">
                Book a Demo
              </h3>
              <p className="demo-main__sub">We’ll reach out shortly</p>

              <form className="demo-form" onSubmit={handleSubmit}>
                <label className="demo-field">
                  <span className="demo-field__label">Full name</span>
                  <User size={18} />
                  <input
                    ref={firstField}
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="demo-field">
                  <span className="demo-field__label">Email address</span>
                  <Mail size={18} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="demo-field">
                  <span className="demo-field__label">Company name</span>
                  <Building2 size={18} />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </label>

                <label className="demo-field">
                  <span className="demo-field__label">Phone number</span>
                  <Phone size={18} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </label>

                {status === "error" && (
                  <p className="demo-error" role="alert">
                    Failed to submit request. Please try again.
                  </p>
                )}

                <button type="submit" className="btn btn-primary demo-submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Request"}
                  {!loading && <ArrowRight size={18} className="btn-arrow" />}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DemoForm;
