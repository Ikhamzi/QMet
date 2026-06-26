'use client';
import { useEffect, useRef } from 'react';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

/* ─── Intersection Observer hook for scroll animations ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.animationPlayState = 'running';
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => {
      el.style.animationPlayState = 'paused';
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function HomePage() {
  useReveal();
  return (
    <>
      <style>{homeStyles}</style>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <StatsSection />
      <StandardsSection />
      <IndustriesSection />
      <TestimonialSection />
      <CtaSection />
      <AboutPage />
      <ContactPage />
    </>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function HeroSection() {
  return (
    <section className="hero">
      {/* Background mesh */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-grid" />
      </div>

      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="section-label animate-fade-up">Trusted Since 2005 · GCC & Beyond</span>

            <h1 className="hero-h1 animate-fade-up delay-1">
              Compliance &<br />
              <span className="hero-gradient">Cybersecurity</span><br />
              Done Right
            </h1>

            <p className="hero-sub animate-fade-up delay-2">
              QMet helps organizations across the Gulf achieve ISO certification, navigate cybersecurity frameworks, and build lasting compliance programs — with expert consultants who've done it thousands of times.
            </p>

            <div className="hero-actions animate-fade-up delay-3">
              <a href="/contact" className="btn-primary">
                Request a Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#services" className="btn-secondary">Explore Services</a>
            </div>

            <div className="hero-proof animate-fade-up delay-4">
              <div className="hero-proof-item">
                <span className="proof-number">500+</span>
                <span className="proof-label">Certifications Delivered</span>
              </div>
              <div className="proof-divider" />
              <div className="hero-proof-item">
                <span className="proof-number">20+</span>
                <span className="proof-label">Years of Experience</span>
              </div>
              <div className="proof-divider" />
              <div className="hero-proof-item">
                <span className="proof-number">15+</span>
                <span className="proof-label">Standards Covered</span>
              </div>
            </div>
          </div>

          <div className="hero-visual animate-fade-up delay-2">
            <div className="hero-card-main">
              <div className="hcard-header">
                <div className="hcard-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <div className="hcard-title">Compliance Status</div>
                  <div className="hcard-sub">ISO 27001 · Active</div>
                </div>
                <div className="hcard-badge">Live</div>
              </div>
              <div className="hcard-bars">
                {[
                  { label: 'Risk Controls', pct: 94 },
                  { label: 'Policy Coverage', pct: 88 },
                  { label: 'Audit Readiness', pct: 97 },
                ].map((b) => (
                  <div key={b.label} className="hbar-row">
                    <div className="hbar-meta">
                      <span>{b.label}</span>
                      <span>{b.pct}%</span>
                    </div>
                    <div className="hbar-track">
                      <div className="hbar-fill" style={{ '--w': `${b.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-card-float hero-card-float-1">
              <div className="hfloat-dot" style={{ background: '#5fecc8' }} />
              <div>
                <div className="hfloat-title">ISO 9001 Certified</div>
                <div className="hfloat-sub">Client — Manufacturing Co.</div>
              </div>
            </div>

            <div className="hero-card-float hero-card-float-2">
              <div className="hfloat-dot" style={{ background: '#5e62d1' }} />
              <div>
                <div className="hfloat-title">NCA ECC Passed</div>
                <div className="hfloat-sub">Client — FinTech Ltd.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── TRUST BAR ─────────────────────────── */
function TrustBar() {
  const logos = [
    'ISO 9001', 'ISO 27001', 'ISO 22301', 'ISO 45001',
    'NCA ECC', 'SAMA CSF', 'PCI DSS', 'GDPR',
    'ISO 14001', 'SOC 2', 'NIST CSF', 'PDPL',
  ];
  return (
    <section className="trust-bar">
      <div className="container">
        <p className="trust-label">Standards & Frameworks We Cover</p>
        <div className="trust-track-wrap">
          <div className="trust-track">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="trust-chip">{l}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SERVICES ─────────────────────────── */
const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    tag: 'Core Service',
    title: 'ISO Consultancy',
    desc: 'End-to-end support for ISO 9001, 27001, 22301, 45001 and more — from gap analysis through certification.',
    color: 'var(--purple)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    tag: 'High Demand',
    title: 'Cybersecurity Services',
    desc: 'NCA ECC, SAMA CSF, ISO 27001 implementation, security audits, and threat risk assessments.',
    color: 'var(--mint)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
      </svg>
    ),
    tag: 'Compliance',
    title: 'Regulatory Compliance',
    desc: 'PDPL, GDPR, PCI DSS, SOC 2 — we map your obligations and guide implementation from day one.',
    color: 'var(--purple)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    tag: 'Training',
    title: 'Academy & Training',
    desc: 'Accredited courses, workshops, and corporate training programs to build internal compliance capability.',
    color: 'var(--mint)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    tag: 'Documentation',
    title: 'Documentation & Audits',
    desc: 'Policy drafting, procedure documentation, internal audit programs, and pre-certification mock audits.',
    color: 'var(--purple)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    tag: 'Automation',
    title: 'Compliance Automation',
    desc: 'Leverage automation to continuously monitor, enforce, and report compliance across IT environments.',
    color: 'var(--mint)',
  },
];

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header reveal animate-fade-up">
          <span className="section-label">What We Do</span>
          <h2 className="section-h2">
            A Full Spectrum of<br />Compliance & Security Services
          </h2>
          <p className="section-sub">
            From first-time ISO certification to enterprise-wide cybersecurity programs, QMet delivers practical results — not just reports.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`service-card reveal animate-fade-up delay-${(i % 3) + 1}`}
            >
              <div className="sc-icon" style={{ '--accent': s.color }}>
                {s.icon}
              </div>
              <div className="sc-tag">{s.tag}</div>
              <h3 className="sc-title">{s.title}</h3>
              <p className="sc-desc">{s.desc}</p>
              <a href="/contact" className="sc-link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── STATS ─────────────────────────── */
const STATS = [
  { n: '2005', label: 'Year Founded', suffix: '' },
  { n: '500', label: 'Certifications Delivered', suffix: '+' },
  { n: '20', label: 'Years of Expertise', suffix: '+' },
  { n: '6', label: 'Industries Served', suffix: '+' },
];

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-inner">
          <div className="stats-text reveal animate-fade-up">
            <span className="section-label" style={{ color: 'var(--mint)', background: 'rgba(95,236,200,0.12)', borderColor: 'rgba(95,236,200,0.25)' }}>Our Track Record</span>
            <h2 className="section-h2" style={{ color: 'white' }}>
              Two Decades of<br />Building Trust
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '15px', marginTop: 16 }}>
              Since 2005, QMet has been the preferred partner for organizations across the GCC seeking credible, lasting compliance — not checkbox exercises.
            </p>
            <a href="/about" className="btn-mint" style={{ marginTop: 28 }}>
              Our Story
            </a>
          </div>
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div key={s.label} className={`stat-card reveal animate-fade-up delay-${i + 1}`}>
                <div className="stat-n">{s.n}<span className="stat-suffix">{s.suffix}</span></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── STANDARDS ─────────────────────────── */
const STANDARDS = [
  { code: 'ISO 27001', name: 'Information Security', cat: 'ISO Standard' },
  { code: 'ISO 9001',  name: 'Quality Management', cat: 'ISO Standard' },
  { code: 'ISO 22301', name: 'Business Continuity', cat: 'ISO Standard' },
  { code: 'ISO 45001', name: 'Occupational Health & Safety', cat: 'ISO Standard' },
  { code: 'NCA ECC',   name: 'Essential Cybersecurity Controls', cat: 'KSA Framework' },
  { code: 'SAMA CSF',  name: 'Cybersecurity Framework', cat: 'KSA Framework' },
  { code: 'PDPL',      name: 'Personal Data Protection Law', cat: 'Regulation' },
  { code: 'PCI DSS',   name: 'Payment Card Industry', cat: 'Global Standard' },
];

function StandardsSection() {
  return (
    <section className="standards-section" id="standards">
      <div className="container">
        <div className="section-header reveal animate-fade-up">
          <span className="section-label">Standards & Frameworks</span>
          <h2 className="section-h2">
            Every Major Standard.<br />One Trusted Partner.
          </h2>
        </div>
        <div className="standards-grid">
          {STANDARDS.map((s, i) => (
            <div key={s.code} className={`std-card reveal animate-fade-up delay-${(i % 4) + 1}`}>
              <div className="std-cat">{s.cat}</div>
              <div className="std-code">{s.code}</div>
              <div className="std-name">{s.name}</div>
              <div className="std-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="/contact" className="btn-secondary reveal animate-fade-up">View All Standards & Frameworks</a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── INDUSTRIES ─────────────────────────── */
const INDUSTRIES = [
  { icon: '🏥', name: 'Healthcare', desc: 'Patient data protection and clinical quality standards.' },
  { icon: '🏭', name: 'Manufacturing', desc: 'Quality, EHS, and operational compliance programs.' },
  { icon: '🏛️', name: 'Government', desc: 'National cybersecurity and data governance frameworks.' },
  { icon: '💳', name: 'Financial Services', desc: 'SAMA, PCI DSS, PDPL, and risk management.' },
  { icon: '💻', name: 'Technology', desc: 'Cloud security, ISO 27001, and software quality.' },
  { icon: '🎓', name: 'Education', desc: 'Institutional quality systems and data privacy.' },
];

function IndustriesSection() {
  return (
    <section className="industries-section" id="industries">
      <div className="container">
        <div className="section-header reveal animate-fade-up">
          <span className="section-label">Industry Coverage</span>
          <h2 className="section-h2">
            Built for Your Industry's<br />Specific Obligations
          </h2>
        </div>
        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <div key={ind.name} className={`ind-card reveal animate-fade-up delay-${(i % 3) + 1}`}>
              <div className="ind-icon">{ind.icon}</div>
              <h3 className="ind-name">{ind.name}</h3>
              <p className="ind-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── TESTIMONIAL ─────────────────────────── */
function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testi-inner reveal animate-fade-up">
          <div className="testi-quote">"</div>
          <blockquote className="testi-text">
            QMet made our ISO 27001 certification journey completely manageable. Their consultants understood our industry context from day one and guided our team through every requirement with clarity and confidence.
          </blockquote>
          <div className="testi-author">
            <div className="testi-avatar">A</div>
            <div>
              <div className="testi-name">Ahmad Al-Rashidi</div>
              <div className="testi-role">CISO, Leading FinTech Company — KSA</div>
            </div>
            <div className="testi-stars">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA ─────────────────────────── */
function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-inner reveal animate-fade-up">
          <div className="cta-bg-orb" />
          <span className="section-label" style={{ color: 'white', background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.25)' }}>
            Start Today
          </span>
          <h2 className="cta-h2">
            Ready to Achieve<br />Your Compliance Goals?
          </h2>
          <p className="cta-sub">
            Book a free 30-minute consultation. We'll identify your obligations, map a realistic path, and give you a clear scope — no commitment required.
          </p>
          <div className="cta-actions">
            <a href="/contact" className="btn-mint">
              Book Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="mailto:connect@qmet.org" className="cta-email">
              connect@qmet.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── STYLES ─────────────────────────── */
const homeStyles = `
/* ── Hero ── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 140px 0 100px;
  background: linear-gradient(160deg, #f0f0ff 0%, #ffffff 50%, #f0fdf9 100%);
  position: relative;
  overflow: hidden;
}

.hero-mesh {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.mesh-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
}

.mesh-orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #5e62d1 0%, transparent 70%);
  top: -150px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.mesh-orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #5fecc8 0%, transparent 70%);
  bottom: -100px;
  left: -80px;
  animation: float 10s ease-in-out infinite reverse;
}

.mesh-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(94,98,209,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(94,98,209,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-h1 {
  font-size: clamp(40px, 5vw, 64px);
  line-height: 1.05;
  color: var(--black);
  margin: 12px 0 20px;
}

.hero-gradient {
  background: linear-gradient(135deg, var(--purple) 0%, var(--mint) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 16px;
  line-height: 1.75;
  color: #4b5563;
  max-width: 480px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.hero-proof {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid rgba(0,0,0,0.08);
}

.hero-proof-item {
  display: flex;
  flex-direction: column;
}

.proof-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 28px;
  font-weight: 800;
  color: var(--black);
  letter-spacing: -0.04em;
}

.proof-label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
  margin-top: 2px;
}

.proof-divider {
  width: 1px;
  height: 36px;
  background: rgba(0,0,0,0.1);
}

/* Hero Visual */
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-card-main {
  background: white;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 24px 80px rgba(94,98,209,0.15), 0 4px 16px rgba(0,0,0,0.06);
  width: 340px;
  border: 1px solid rgba(94,98,209,0.1);
  position: relative;
  z-index: 2;
}

.hcard-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.hcard-icon {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, var(--purple), var(--mint));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.hcard-title {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: var(--black);
}

.hcard-sub {
  font-size: 12px;
  color: #9ca3af;
  margin-top: 2px;
}

.hcard-badge {
  margin-left: auto;
  background: rgba(95,236,200,0.15);
  color: #059669;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 100px;
  border: 1px solid rgba(95,236,200,0.4);
}

.hbar-row { margin-bottom: 14px; }
.hbar-row:last-child { margin-bottom: 0; }

.hbar-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 6px;
}

.hbar-meta span:last-child {
  color: var(--purple);
  font-weight: 700;
}

.hbar-track {
  height: 6px;
  background: #f3f4f6;
  border-radius: 100px;
  overflow: hidden;
}

.hbar-fill {
  height: 100%;
  width: var(--w);
  background: linear-gradient(90deg, var(--purple), var(--mint));
  border-radius: 100px;
  animation: barGrow 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  transform-origin: left;
}

@keyframes barGrow {
  from { width: 0; }
  to   { width: var(--w); }
}

.hero-card-float {
  position: absolute;
  background: white;
  border-radius: 14px;
  padding: 14px 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(94,98,209,0.1);
  animation: float 6s ease-in-out infinite;
  white-space: nowrap;
  z-index: 3;
}

.hero-card-float-1 {
  top: -24px;
  right: -32px;
  animation-delay: 0s;
}

.hero-card-float-2 {
  bottom: 24px;
  left: -32px;
  animation-delay: -3s;
}

.hfloat-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.hfloat-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: var(--black);
}

.hfloat-sub {
  font-size: 11px;
  color: #9ca3af;
  margin-top: 1px;
}

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .hero-visual { display: none; }
  .hero { padding: 120px 0 80px; }
}

/* ── Trust Bar ── */
.trust-bar {
  padding: 32px 0;
  background: white;
  border-top: 1px solid rgba(0,0,0,0.06);
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.trust-label {
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 18px;
}

.trust-track-wrap {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
}

.trust-track {
  display: flex;
  gap: 12px;
  animation: marquee 28s linear infinite;
  width: max-content;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.trust-chip {
  flex-shrink: 0;
  padding: 8px 18px;
  border-radius: 100px;
  background: var(--light-bg);
  border: 1px solid rgba(94,98,209,0.15);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: var(--purple);
  white-space: nowrap;
}

/* ── Services ── */
.services-section {
  padding: 100px 0;
  background: var(--light-bg);
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-h2 {
  font-size: clamp(28px, 4vw, 44px);
  color: var(--black);
  margin-bottom: 16px;
  line-height: 1.1;
}

.section-sub {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.7;
  max-width: 520px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(94,98,209,0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--purple), var(--mint));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover {
  border-color: var(--purple);
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(94,98,209,0.12);
}

.service-card:hover::before { opacity: 1; }

.sc-icon {
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, rgba(94,98,209,0.1), rgba(95,236,200,0.1));
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  margin-bottom: 16px;
}

.sc-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--purple);
  margin-bottom: 10px;
  opacity: 0.7;
}

.sc-title {
  font-size: 19px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 10px;
  font-family: 'Space Grotesk', sans-serif;
}

.sc-desc {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.65;
  margin-bottom: 20px;
}

.sc-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: var(--purple);
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  transition: gap 0.2s ease;
}

.sc-link:hover { gap: 10px; }

@media (max-width: 900px) {
  .services-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
  .services-grid { grid-template-columns: 1fr; }
}

/* ── Stats ── */
.stats-section {
  padding: 100px 0;
  background: var(--black);
  position: relative;
  overflow: hidden;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(94,98,209,0.2) 0%, transparent 70%);
  border-radius: 50%;
}

.stats-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.stat-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(94,98,209,0.12);
  border-color: rgba(94,98,209,0.4);
  transform: translateY(-3px);
}

.stat-n {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 44px;
  font-weight: 800;
  color: white;
  letter-spacing: -0.04em;
  line-height: 1;
}

.stat-suffix {
  color: var(--mint);
}

.stat-label {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  margin-top: 6px;
  font-weight: 500;
}

@media (max-width: 900px) {
  .stats-inner { grid-template-columns: 1fr; gap: 48px; }
}

/* ── Standards ── */
.standards-section {
  padding: 100px 0;
  background: white;
}

.standards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.std-card {
  background: var(--light-bg);
  border: 1px solid rgba(94,98,209,0.1);
  border-radius: 14px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
}

.std-card:hover {
  background: white;
  border-color: var(--purple);
  box-shadow: 0 8px 32px rgba(94,98,209,0.12);
  transform: translateY(-3px);
}

.std-cat {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--mint);
  background: rgba(95,236,200,0.12);
  padding: 3px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 12px;
}

.std-code {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: var(--black);
  letter-spacing: -0.03em;
  margin-bottom: 6px;
}

.std-name {
  font-size: 12px;
  color: #6b7280;
  line-height: 1.4;
}

.std-arrow {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: var(--purple);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.std-card:hover .std-arrow { opacity: 1; }

@media (max-width: 900px) {
  .standards-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .standards-grid { grid-template-columns: 1fr; }
}

/* ── Industries ── */
.industries-section {
  padding: 100px 0;
  background: var(--light-bg);
}

.industries-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.ind-card {
  background: white;
  border-radius: 14px;
  padding: 28px;
  border: 1px solid rgba(94,98,209,0.1);
  transition: all 0.25s ease;
}

.ind-card:hover {
  border-color: var(--purple);
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(94,98,209,0.1);
}

.ind-icon {
  font-size: 32px;
  margin-bottom: 14px;
}

.ind-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 8px;
}

.ind-desc {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .industries-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .industries-grid { grid-template-columns: 1fr; }
}

/* ── Testimonial ── */
.testimonial-section {
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(94,98,209,0.04) 0%, rgba(95,236,200,0.04) 100%);
  border-top: 1px solid rgba(94,98,209,0.08);
  border-bottom: 1px solid rgba(94,98,209,0.08);
}

.testi-inner {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.testi-quote {
  font-size: 80px;
  color: var(--purple);
  font-family: Georgia, serif;
  line-height: 0.8;
  margin-bottom: 16px;
  opacity: 0.3;
}

.testi-text {
  font-size: 20px;
  line-height: 1.7;
  color: var(--black);
  font-style: italic;
  font-weight: 400;
  margin-bottom: 28px;
}

.testi-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.testi-avatar {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, var(--purple), var(--mint));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 17px;
}

.testi-name {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: var(--black);
}

.testi-role {
  font-size: 13px;
  color: #9ca3af;
}

.testi-stars {
  margin-left: auto;
  color: #f59e0b;
  font-size: 17px;
  letter-spacing: 2px;
}

/* ── CTA ── */
.cta-section {
  padding: 100px 0;
  background: var(--purple);
  position: relative;
  overflow: hidden;
}

.cta-inner {
  text-align: center;
  position: relative;
  z-index: 2;
}

.cta-bg-orb {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.cta-h2 {
  font-size: clamp(28px, 4vw, 48px);
  color: white;
  margin: 16px 0 20px;
  line-height: 1.1;
}

.cta-sub {
  font-size: 16px;
  color: rgba(255,255,255,0.75);
  line-height: 1.7;
  max-width: 500px;
  margin: 0 auto 36px;
}

.cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.cta-email {
  color: rgba(255,255,255,0.75);
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid rgba(255,255,255,0.3);
  padding-bottom: 2px;
  transition: color 0.2s ease;
}

.cta-email:hover { color: white; }
`;
