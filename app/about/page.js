'use client';
import { useEffect } from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => { el.style.animationPlayState = 'paused'; io.observe(el); });
    return () => io.disconnect();
  }, []);
}

export default function AboutPage() {
  useReveal();
  return (
    <>
      <AboutHero />
      <MissionSection />
      <TimelineSection />
      <ValuesSection />
      <TeamSection />
      <AboutCta />
    </>
  );
}

/* ── Hero ── */
function AboutHero() {
  return (
    <section className="about-hero">
      <div className="ah-mesh" aria-hidden="true">
        <div className="ah-orb ah-orb-1" />
        <div className="ah-orb ah-orb-2" />
      </div>
      <div className="container">
        <div className="ah-inner">
          <span className="section-label animate-fade-up">Our Story</span>
          <h1 className="ah-h1 animate-fade-up delay-1">
            Two Decades of Building<br />
            <span className="hero-gradient">Safer, Compliant</span><br />
            Organizations
          </h1>
          <p className="ah-sub animate-fade-up delay-2">
            Founded in 2005, QMet has grown from an ISO consultancy firm into a comprehensive compliance, cybersecurity, and training platform serving organizations across the GCC and beyond.
          </p>
          <div className="ah-badges animate-fade-up delay-3">
            <div className="ah-badge">
              <span className="badge-n">2005</span>
              <span className="badge-l">Founded</span>
            </div>
            <div className="ah-badge">
              <span className="badge-n">500+</span>
              <span className="badge-l">Certifications</span>
            </div>
            <div className="ah-badge">
              <span className="badge-n">20+</span>
              <span className="badge-l">Years Experience</span>
            </div>
            <div className="ah-badge">
              <span className="badge-n">15+</span>
              <span className="badge-l">Standards Covered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Mission ── */
function MissionSection() {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="mission-grid">
          <div className="mission-text reveal animate-fade-up">
            <span className="section-label">Our Mission</span>
            <h2 className="section-h2">
              More Than Compliance —<br />We Build Capability
            </h2>
            <p className="mission-p">
              QMet was founded with a clear purpose: to make world-class compliance and cybersecurity expertise accessible to every organization in the region. We believe that certification shouldn't be a one-time box-checking exercise — it should be the start of a culture of continuous improvement.
            </p>
            <p className="mission-p">
              Today, QMet serves as a unified ecosystem for organizations seeking consulting services, training programs, compliance guidance, cybersecurity solutions, and specialized digital tools. We are in the process of accreditation with the Gulf Accreditation Center, Saudi Accreditation Center, SASO, and SFDA.
            </p>
            <a href="/contact" className="btn-primary" style={{ marginTop: 24 }}>
              Work With Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="mission-cards reveal animate-fade-up delay-2">
            <div className="mission-card">
              <div className="mc-icon">🎯</div>
              <h3 className="mc-title">Practical, Not Academic</h3>
              <p className="mc-desc">We tailor every engagement to your actual operations — not textbook frameworks that don't survive contact with reality.</p>
            </div>
            <div className="mission-card">
              <div className="mc-icon">🌍</div>
              <h3 className="mc-title">Regional Expertise</h3>
              <p className="mc-desc">Deep knowledge of GCC-specific regulations including NCA, SAMA, and PDPL, alongside international ISO standards.</p>
            </div>
            <div className="mission-card">
              <div className="mc-icon">📈</div>
              <h3 className="mc-title">Long-Term Partnership</h3>
              <p className="mc-desc">We don't disappear after certification. Our clients trust us for ongoing advisory, re-certification, and continuous improvement.</p>
            </div>
            <div className="mission-card">
              <div className="mc-icon">🏆</div>
              <h3 className="mc-title">Results-Driven</h3>
              <p className="mc-desc">500+ certifications delivered across diverse industries. Our measure of success is your certification — and what comes after.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Timeline ── */
const MILESTONES = [
  { year: '2005', title: 'Founded in Bahrain', desc: 'QMet established as an ISO management system consultancy, with a focus on helping GCC organizations achieve international certification.' },
  { year: '2010', title: 'Expanded to Cybersecurity', desc: 'As cybersecurity frameworks emerged in the region, QMet extended its expertise to include ISMS, NCA, and information security implementations.' },
  { year: '2015', title: 'Academy & Training Launched', desc: 'QMet Academy was established, offering accredited training programs and qualification pathways for compliance and cybersecurity professionals.' },
  { year: '2020', title: '500+ Certifications Milestone', desc: 'QMet crossed 500 successful certifications across 6 industries, cementing its reputation as the region\'s most trusted compliance partner.' },
  { year: '2024', title: 'Digital Platform Expansion', desc: 'Launched digital compliance tools, automation services, and an AI chatbot to modernize the compliance journey for clients across the GCC.' },
];

function TimelineSection() {
  return (
    <section className="timeline-section">
      <div className="container">
        <div className="section-header reveal animate-fade-up">
          <span className="section-label">Our Journey</span>
          <h2 className="section-h2">Two Decades of Milestones</h2>
        </div>
        <div className="timeline">
          {MILESTONES.map((m, i) => (
            <div key={m.year} className={`timeline-item reveal animate-fade-up delay-${(i % 3) + 1}`}>
              <div className="tl-year">{m.year}</div>
              <div className="tl-connector">
                <div className="tl-dot" />
                {i < MILESTONES.length - 1 && <div className="tl-line" />}
              </div>
              <div className="tl-content">
                <h3 className="tl-title">{m.title}</h3>
                <p className="tl-desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Values ── */
const VALUES = [
  { icon: '🔒', label: 'Integrity', text: 'We give honest assessments, even when it\'s not what clients want to hear. Trust is earned through transparency.' },
  { icon: '⚡', label: 'Excellence', text: 'Every engagement is held to the same standard — thorough, accurate, and built to last beyond the audit.' },
  { icon: '🤝', label: 'Partnership', text: 'We succeed when you do. Our consultants work alongside your team, not above them.' },
  { icon: '🔄', label: 'Continuous Improvement', text: 'We practice what we preach — our processes, tools, and knowledge are constantly evolving.' },
];

function ValuesSection() {
  return (
    <section className="values-section">
      <div className="container">
        <div className="section-header reveal animate-fade-up">
          <span className="section-label">What Drives Us</span>
          <h2 className="section-h2">Our Core Values</h2>
        </div>
        <div className="values-grid">
          {VALUES.map((v, i) => (
            <div key={v.label} className={`value-card reveal animate-fade-up delay-${i + 1}`}>
              <div className="vc-icon">{v.icon}</div>
              <h3 className="vc-label">{v.label}</h3>
              <p className="vc-text">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Team ── */
const TEAM = [
  { initial: 'M', name: 'Mohammed Al-Sayed', role: 'Managing Director', expertise: 'ISO 9001 · ISO 27001 · Strategy' },
  { initial: 'S', name: 'Sara Al-Khalifa', role: 'Head of Cybersecurity', expertise: 'NCA ECC · SAMA · Penetration Testing' },
  { initial: 'K', name: 'Khalid Rahman', role: 'Lead ISO Consultant', expertise: 'ISO 22301 · ISO 45001 · Audits' },
  { initial: 'A', name: 'Aisha Noor', role: 'Academy Director', expertise: 'Training Programs · Certifications' },
];

function TeamSection() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header reveal animate-fade-up">
          <span className="section-label">The People Behind QMet</span>
          <h2 className="section-h2">Expert Consultants,<br />Real-World Experience</h2>
          <p className="section-sub">Our team brings decades of hands-on experience across ISO standards, cybersecurity frameworks, and regional regulations.</p>
        </div>
        <div className="team-grid">
          {TEAM.map((t, i) => (
            <div key={t.name} className={`team-card reveal animate-fade-up delay-${i + 1}`}>
              <div className="tc-avatar">{t.initial}</div>
              <h3 className="tc-name">{t.name}</h3>
              <div className="tc-role">{t.role}</div>
              <div className="tc-expertise">{t.expertise}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function AboutCta() {
  return (
    <section className="about-cta">
      <div className="container">
        <div className="about-cta-inner reveal animate-fade-up">
          <div className="acta-left">
            <h2 className="section-h2" style={{ color: 'white', marginBottom: 12 }}>
              Ready to Start Your<br />Compliance Journey?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.7 }}>
              From initial gap assessment to full certification and ongoing support, QMet is with you every step of the way.
            </p>
          </div>
          <div className="acta-right">
            <a href="/contact" className="btn-mint">
              Request Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="mailto:connect@qmet.org" style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, textDecoration: 'none', marginTop: 14, display: 'block', textAlign: 'center' }}>
              connect@qmet.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

