'use client';
import { useEffect, useRef } from 'react';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import './page.css';

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

