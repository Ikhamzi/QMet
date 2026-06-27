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

