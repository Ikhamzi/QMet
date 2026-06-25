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
      <style>{aboutStyles}</style>
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

/* ─────────────────────────── STYLES ─────────────────────────── */
const aboutStyles = `
/* Hero */
.about-hero {
  padding: 140px 0 100px;
  background: linear-gradient(160deg, #f0f0ff 0%, #ffffff 50%, #f0fdf9 100%);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.ah-mesh { position: absolute; inset: 0; pointer-events: none; }

.ah-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.28;
}

.ah-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, #5e62d1 0%, transparent 70%);
  top: -150px; right: -100px;
}

.ah-orb-2 {
  width: 350px; height: 350px;
  background: radial-gradient(circle, #5fecc8 0%, transparent 70%);
  bottom: -80px; left: -60px;
}

.ah-inner {
  max-width: 780px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.ah-h1 {
  font-size: clamp(36px, 5vw, 60px);
  color: var(--black);
  margin: 14px 0 22px;
  line-height: 1.08;
}

.hero-gradient {
  background: linear-gradient(135deg, var(--purple) 0%, var(--mint) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ah-sub {
  font-size: 16px;
  color: #4b5563;
  line-height: 1.75;
  max-width: 580px;
  margin: 0 auto 36px;
}

.ah-badges {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.ah-badge {
  background: white;
  border: 1px solid rgba(94,98,209,0.15);
  border-radius: 14px;
  padding: 20px 28px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(94,98,209,0.08);
}

.badge-n {
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 30px;
  font-weight: 800;
  color: var(--purple);
  letter-spacing: -0.04em;
}

.badge-l {
  display: block;
  font-size: 12px;
  color: #9ca3af;
  font-weight: 500;
  margin-top: 4px;
}

/* Mission */
.mission-section {
  padding: 100px 0;
  background: white;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.mission-p {
  font-size: 15px;
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 16px;
}

.mission-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.mission-card {
  background: var(--light-bg);
  border: 1px solid rgba(94,98,209,0.1);
  border-radius: 14px;
  padding: 22px;
  transition: all 0.25s ease;
}

.mission-card:hover {
  border-color: var(--purple);
  background: white;
  box-shadow: 0 8px 28px rgba(94,98,209,0.1);
  transform: translateY(-2px);
}

.mc-icon { font-size: 26px; margin-bottom: 10px; }

.mc-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 8px;
}

.mc-desc { font-size: 13px; color: #6b7280; line-height: 1.6; }

@media (max-width: 900px) {
  .mission-grid { grid-template-columns: 1fr; gap: 48px; }
}

/* Timeline */
.timeline-section {
  padding: 100px 0;
  background: var(--light-bg);
}

.timeline {
  max-width: 840px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  display: grid;
  grid-template-columns: 80px 40px 1fr;
  gap: 20px;
  align-items: start;
}

.tl-year {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 800;
  font-size: 15px;
  color: var(--purple);
  padding-top: 4px;
  text-align: right;
}

.tl-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tl-dot {
  width: 14px;
  height: 14px;
  background: var(--purple);
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px var(--purple);
  flex-shrink: 0;
  margin-top: 4px;
}

.tl-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(to bottom, var(--purple), rgba(94,98,209,0.2));
  min-height: 60px;
}

.tl-content {
  padding-bottom: 40px;
}

.tl-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 8px;
  padding-top: 0;
}

.tl-desc {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.7;
}

@media (max-width: 600px) {
  .timeline-item { grid-template-columns: 60px 28px 1fr; gap: 12px; }
  .tl-year { font-size: 12px; }
}

/* Values */
.values-section {
  padding: 100px 0;
  background: white;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.value-card {
  text-align: center;
  padding: 36px 24px;
  background: var(--light-bg);
  border-radius: 16px;
  border: 1px solid rgba(94,98,209,0.1);
  transition: all 0.25s ease;
}

.value-card:hover {
  background: white;
  border-color: var(--purple);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(94,98,209,0.1);
}

.vc-icon { font-size: 36px; margin-bottom: 14px; }

.vc-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 10px;
}

.vc-text { font-size: 13px; color: #6b7280; line-height: 1.65; }

@media (max-width: 900px) {
  .values-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .values-grid { grid-template-columns: 1fr; }
}

/* Team */
.team-section {
  padding: 100px 0;
  background: var(--light-bg);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.team-card {
  background: white;
  border-radius: 16px;
  padding: 28px 24px;
  border: 1px solid rgba(94,98,209,0.1);
  text-align: center;
  transition: all 0.25s ease;
}

.team-card:hover {
  border-color: var(--purple);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(94,98,209,0.1);
}

.tc-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--purple), var(--mint));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 800;
  font-size: 24px;
  margin: 0 auto 16px;
}

.tc-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 4px;
}

.tc-role {
  font-size: 12px;
  font-weight: 600;
  color: var(--purple);
  margin-bottom: 10px;
}

.tc-expertise {
  font-size: 11px;
  color: #9ca3af;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .team-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .team-grid { grid-template-columns: 1fr; }
}

/* About CTA */
.about-cta {
  padding: 80px 0;
  background: var(--purple);
}

.about-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

.acta-left { flex: 1; min-width: 280px; }
.acta-right { flex-shrink: 0; text-align: center; }

/* section-h2 and section-label reused from globals */
.section-h2 {
  font-size: clamp(26px, 4vw, 42px);
  color: var(--black);
  margin-bottom: 16px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.section-sub {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.7;
  max-width: 520px;
  margin: 0 auto;
}
`;
