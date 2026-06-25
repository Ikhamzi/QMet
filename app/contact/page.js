'use client';
import { useState, useEffect } from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => { el.style.animationPlayState = 'paused'; io.observe(el); });
    return () => io.disconnect();
  }, []);
}

export default function ContactPage() {
  useReveal();
  return (
    <>
      <style>{contactStyles}</style>
      <ContactHero />
      <ContactBody />
      <OfficeSection />
    </>
  );
}

/* ── Hero ── */
function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="ch-bg" aria-hidden="true">
        <div className="ch-orb ch-orb-1" />
        <div className="ch-orb ch-orb-2" />
      </div>
      <div className="container">
        <div className="ch-inner">
          <span className="section-label animate-fade-up">Get In Touch</span>
          <h1 className="ch-h1 animate-fade-up delay-1">
            Let's Talk About<br />
            <span className="hero-gradient">Your Compliance</span><br />
            Goals
          </h1>
          <p className="ch-sub animate-fade-up delay-2">
            Whether you're starting your first ISO certification, tackling a new cybersecurity framework, or planning a company-wide compliance program — book a free consultation and let our experts map the path forward.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Contact Body ── */
function ContactBody() {
  return (
    <section className="contact-body">
      <div className="container">
        <div className="contact-grid">
          {/* Left — Info */}
          <div className="contact-info reveal animate-fade-up">
            <h2 className="ci-title">How Can We Help You?</h2>
            <p className="ci-sub">
              Fill in the form and one of our consultants will reach back within one business day with a clear, no-obligation response.
            </p>

            <div className="ci-channels">
              <div className="ci-channel">
                <div className="ci-ch-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="ci-ch-label">Email Us</div>
                  <a href="mailto:connect@qmet.org" className="ci-ch-value">connect@qmet.org</a>
                </div>
              </div>

              <div className="ci-channel">
                <div className="ci-ch-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="ci-ch-label">Our Office</div>
                  <div className="ci-ch-value">Office 1908, Almoayyed Tower<br />Al Seef, Bahrain</div>
                </div>
              </div>

              <div className="ci-channel">
                <div className="ci-ch-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className="ci-ch-label">Response Time</div>
                  <div className="ci-ch-value">Within 1 business day</div>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="ci-expect">
              <h3 className="ce-title">What happens next?</h3>
              <div className="ce-steps">
                <div className="ce-step">
                  <div className="ces-num">1</div>
                  <div className="ces-text">
                    <strong>You submit the form</strong>
                    <span>Takes under 2 minutes.</span>
                  </div>
                </div>
                <div className="ce-step">
                  <div className="ces-num">2</div>
                  <div className="ces-text">
                    <strong>We review your needs</strong>
                    <span>A consultant reads your requirements the same day.</span>
                  </div>
                </div>
                <div className="ce-step">
                  <div className="ces-num">3</div>
                  <div className="ces-text">
                    <strong>We reach back within 24h</strong>
                    <span>With an initial scope and suggested next step.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-form-wrap reveal animate-fade-up delay-2">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Lead Form ── */
const SERVICES = [
  'ISO 9001 — Quality Management',
  'ISO 27001 — Information Security',
  'ISO 22301 — Business Continuity',
  'ISO 45001 — Health & Safety',
  'NCA ECC / CCC — Cybersecurity',
  'SAMA Cybersecurity Framework',
  'PDPL / GDPR Compliance',
  'PCI DSS',
  'Training & Academy',
  'Accreditation Consultancy',
  'Other / Not Sure Yet',
];

function LeadForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    company: '', industry: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handle(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    setLoading(true);
    // Simulate API call — replace with real endpoint
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="form-success">
        <div className="fs-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h3 className="fs-title">Message Received!</h3>
        <p className="fs-sub">
          Thank you for reaching out. One of our consultants will review your enquiry and respond within one business day.
        </p>
        <button className="btn-secondary" onClick={() => setSubmitted(false)} style={{ marginTop: 20 }}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={submit} noValidate>
      <div className="lf-header">
        <h2 className="lf-title">Request a Free Consultation</h2>
        <p className="lf-sub">No commitment required. One of our senior consultants will review your enquiry personally.</p>
      </div>

      <div className="lf-row">
        <div className="lf-field">
          <label className="lf-label">First Name *</label>
          <input
            className="lf-input"
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handle}
            placeholder="Ahmed"
            required
          />
        </div>
        <div className="lf-field">
          <label className="lf-label">Last Name *</label>
          <input
            className="lf-input"
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handle}
            placeholder="Al-Rashidi"
            required
          />
        </div>
      </div>

      <div className="lf-row">
        <div className="lf-field">
          <label className="lf-label">Work Email *</label>
          <input
            className="lf-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handle}
            placeholder="ahmed@company.com"
            required
          />
        </div>
        <div className="lf-field">
          <label className="lf-label">Phone Number</label>
          <input
            className="lf-input"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handle}
            placeholder="+966 5x xxx xxxx"
          />
        </div>
      </div>

      <div className="lf-row">
        <div className="lf-field">
          <label className="lf-label">Company / Organization *</label>
          <input
            className="lf-input"
            type="text"
            name="company"
            value={form.company}
            onChange={handle}
            placeholder="Your company name"
            required
          />
        </div>
        <div className="lf-field">
          <label className="lf-label">Industry</label>
          <select
            className="lf-input lf-select"
            name="industry"
            value={form.industry}
            onChange={handle}
          >
            <option value="">Select your industry</option>
            <option>Healthcare</option>
            <option>Financial Services</option>
            <option>Government</option>
            <option>Manufacturing</option>
            <option>Technology</option>
            <option>Education</option>
            <option>FinTech</option>
            <option>Energy & Utilities</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="lf-field">
        <label className="lf-label">Service / Standard of Interest *</label>
        <select
          className="lf-input lf-select"
          name="service"
          value={form.service}
          onChange={handle}
          required
        >
          <option value="">Select a service or standard</option>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="lf-field">
        <label className="lf-label">Tell Us About Your Needs</label>
        <textarea
          className="lf-input lf-textarea"
          name="message"
          value={form.message}
          onChange={handle}
          placeholder="Briefly describe your compliance goals, timeline, or any specific challenges. The more context, the more useful our initial response will be."
          rows={4}
        />
      </div>

      <button type="submit" className="btn-primary lf-submit" disabled={loading}>
        {loading ? (
          <>
            <div className="lf-spinner" />
            Sending…
          </>
        ) : (
          <>
            Send My Request
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </>
        )}
      </button>

      <p className="lf-privacy">
        🔒 Your information is confidential and will only be used to respond to your enquiry.
      </p>
    </form>
  );
}

/* ── Office ── */
function OfficeSection() {
  return (
    <section className="office-section">
      <div className="container">
        <div className="office-grid">
          <div className="office-text reveal animate-fade-up">
            <span className="section-label">Our Location</span>
            <h2 className="section-h2">Visit Us in Bahrain</h2>
            <p className="office-p">
              Our headquarters is located in the Almoayyed Tower, one of Bahrain's premier business addresses in the Al Seef district. We serve clients across the GCC region, including Saudi Arabia, UAE, Kuwait, Qatar, and Oman, with both on-site and remote engagement models.
            </p>
            <div className="office-details">
              <div className="od-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Office 1908, Building 2504, Road 2832, Block 428<br />Almoayyed Tower, Al Seef — Bahrain</span>
              </div>
              <div className="od-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:connect@qmet.org" className="od-link">connect@qmet.org</a>
              </div>
              <div className="od-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Sun – Thu &nbsp;·&nbsp; 9:00 AM – 6:00 PM (AST)</span>
              </div>
            </div>
          </div>

          <div className="office-map-wrap reveal animate-fade-up delay-2">
            <div className="office-map-placeholder">
              <div className="omp-inner">
                <div className="omp-pin">📍</div>
                <div className="omp-name">QMet Headquarters</div>
                <div className="omp-addr">Almoayyed Tower, Al Seef, Bahrain</div>
                <a
                  href="https://maps.google.com/?q=Almoayyed+Tower,+Al+Seef,+Bahrain"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ fontSize: 13, padding: '10px 20px', marginTop: 16 }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── STYLES ─────────────────────────── */
const contactStyles = `
/* Hero */
.contact-hero {
  padding: 140px 0 80px;
  background: linear-gradient(160deg, #f0f0ff 0%, #ffffff 60%, #f0fdf9 100%);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.ch-bg { position: absolute; inset: 0; pointer-events: none; }

.ch-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.25;
}

.ch-orb-1 {
  width: 450px; height: 450px;
  background: radial-gradient(circle, #5e62d1 0%, transparent 70%);
  top: -120px; right: -80px;
}

.ch-orb-2 {
  width: 320px; height: 320px;
  background: radial-gradient(circle, #5fecc8 0%, transparent 70%);
  bottom: -60px; left: -60px;
}

.ch-inner {
  max-width: 680px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.ch-h1 {
  font-size: clamp(36px, 5vw, 58px);
  color: var(--black);
  margin: 14px 0 20px;
  line-height: 1.08;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.hero-gradient {
  background: linear-gradient(135deg, var(--purple) 0%, var(--mint) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ch-sub {
  font-size: 16px;
  color: #4b5563;
  line-height: 1.75;
}

/* Contact Body */
.contact-body {
  padding: 80px 0 100px;
  background: var(--light-bg);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: start;
}

/* Info */
.contact-info {
  position: sticky;
  top: 100px;
}

.ci-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: var(--black);
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.ci-sub {
  font-size: 15px;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 36px;
}

.ci-channels {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 36px;
}

.ci-channel {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.ci-ch-icon {
  width: 44px;
  height: 44px;
  background: rgba(94,98,209,0.08);
  border: 1px solid rgba(94,98,209,0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple);
  flex-shrink: 0;
}

.ci-ch-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 4px;
}

.ci-ch-value {
  font-size: 14px;
  color: var(--black);
  font-weight: 500;
  text-decoration: none;
  line-height: 1.5;
}

a.ci-ch-value:hover { color: var(--purple); }

/* Expect */
.ci-expect {
  background: white;
  border-radius: 14px;
  padding: 24px;
  border: 1px solid rgba(94,98,209,0.1);
}

.ce-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 18px;
  letter-spacing: -0.01em;
}

.ce-steps {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.ce-step {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.ces-num {
  width: 26px;
  height: 26px;
  background: var(--purple);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 800;
  font-family: 'Space Grotesk', sans-serif;
  flex-shrink: 0;
}

.ces-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ces-text strong {
  font-size: 13px;
  font-weight: 700;
  color: var(--black);
}

.ces-text span {
  font-size: 12px;
  color: #9ca3af;
}

/* Form */
.contact-form-wrap {
  /* intentionally plain */
}

.lead-form {
  background: white;
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(94,98,209,0.1);
  box-shadow: 0 8px 40px rgba(94,98,209,0.08);
}

.lf-header {
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.lf-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--black);
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.lf-sub {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
}

.lf-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.lf-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.lf-field:last-of-type { margin-bottom: 0; }

.lf-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #374151;
}

.lf-input {
  width: 100%;
  padding: 11px 14px;
  border: 1.5px solid #e5e7eb;
  border-radius: 9px;
  font-size: 14px;
  color: var(--black);
  background: white;
  font-family: 'Inter', sans-serif;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.lf-input:focus {
  border-color: var(--purple);
  box-shadow: 0 0 0 3px rgba(94,98,209,0.1);
}

.lf-input::placeholder { color: #9ca3af; }

.lf-select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}

.lf-textarea {
  resize: vertical;
  min-height: 100px;
  line-height: 1.6;
}

.lf-submit {
  width: 100%;
  justify-content: center;
  padding: 15px;
  font-size: 15px;
  margin-top: 24px;
  position: relative;
}

.lf-submit:disabled {
  opacity: 0.75;
  cursor: not-allowed;
  transform: none !important;
}

.lf-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.lf-privacy {
  text-align: center;
  font-size: 12px;
  color: #9ca3af;
  margin-top: 14px;
}

/* Success state */
.form-success {
  background: white;
  border-radius: 20px;
  padding: 60px 40px;
  border: 1px solid rgba(94,98,209,0.1);
  box-shadow: 0 8px 40px rgba(94,98,209,0.08);
  text-align: center;
}

.fs-icon {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, rgba(94,98,209,0.1), rgba(95,236,200,0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple);
  margin: 0 auto 20px;
}

.fs-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 12px;
}

.fs-sub {
  font-size: 15px;
  color: #6b7280;
  line-height: 1.7;
  max-width: 380px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 40px; }
  .contact-info { position: static; }
  .lf-row { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .lead-form { padding: 28px 20px; }
}

/* Office */
.office-section {
  padding: 100px 0;
  background: white;
}

.office-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.office-p {
  font-size: 15px;
  color: #4b5563;
  line-height: 1.8;
  margin: 16px 0 28px;
}

.office-details {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.od-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  color: #374151;
  line-height: 1.55;
}

.od-item svg { flex-shrink: 0; margin-top: 2px; }

.od-link {
  color: var(--purple);
  text-decoration: none;
  font-weight: 500;
}

.od-link:hover { text-decoration: underline; }

.office-map-wrap {
  border-radius: 20px;
  overflow: hidden;
  height: 320px;
}

.office-map-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(94,98,209,0.06) 0%, rgba(95,236,200,0.06) 100%);
  border: 1px solid rgba(94,98,209,0.15);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.omp-inner {
  text-align: center;
}

.omp-pin { font-size: 40px; margin-bottom: 10px; }

.omp-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 6px;
}

.omp-addr {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 4px;
}

@media (max-width: 900px) {
  .office-grid { grid-template-columns: 1fr; gap: 40px; }
  .office-map-wrap { height: 240px; }
}

/* shared section styles */
.section-h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(26px, 4vw, 42px);
  font-weight: 700;
  color: var(--black);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 16px;
}
`;
