import './globals.css';

export const metadata = {
  title: 'QMet — Compliance, Cybersecurity & Consulting',
  description:
    'QMet is your trusted partner for ISO consultancy, cybersecurity services, compliance frameworks, and training. Serving organizations across the GCC since 2005.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

/* ─────────────────────────── NAV ─────────────────────────── */
function Nav() {
  return (
    <>
      <style>{`
        /* Scroll effect handled via JS below */
      `}</style>
      <nav className="nav" id="main-nav">
        <div className="container">
          <div className="nav-inner">
            <a href="/" className="nav-logo">
              <div className="nav-logo-mark">Q</div>
              <span className="nav-logo-text">Q<span>Met</span></span>
            </a>

            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#standards">Standards</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>

            <div className="nav-cta">
              <a href="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
                Get a Consultation
              </a>
            </div>

            <button className="nav-mobile-btn" aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var nav = document.getElementById('main-nav');
            var links = nav ? nav.querySelectorAll('.nav-links a') : [];
            var path = window.location.pathname;
            links.forEach(function(a) {
              if (a.getAttribute('href') === path) a.classList.add('active');
            });
            function onScroll() {
              if (!nav) return;
              if (window.scrollY > 20) nav.classList.add('scrolled');
              else nav.classList.remove('scrolled');
            }
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
          })();
        `
      }} />
    </>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-mark">Q</div>
            <p>
              Your trusted partner in management system consultancy, cybersecurity, and compliance since 2005. Headquartered in Bahrain, serving the GCC and beyond.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="X / Twitter">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">ISO Consultancy</a></li>
              <li><a href="#services">Cybersecurity</a></li>
              <li><a href="#services">Compliance</a></li>
              <li><a href="#services">Training & Academy</a></li>
              <li><a href="#services">Audits</a></li>
            </ul>
          </div>

          {/* Standards */}
          <div className="footer-col">
            <h4>Standards</h4>
            <ul>
              <li><a href="#standards">ISO 27001</a></li>
              <li><a href="#standards">ISO 9001</a></li>
              <li><a href="#standards">ISO 22301</a></li>
              <li><a href="#standards">NCA ECC</a></li>
              <li><a href="#standards">SAMA CSF</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} QMet International Services. All rights reserved.</span>
          <span>Office 1908, Almoayyed Tower, Al Seef — Bahrain &nbsp;·&nbsp; connect@qmet.org</span>
        </div>
      </div>
    </footer>
  );
}
