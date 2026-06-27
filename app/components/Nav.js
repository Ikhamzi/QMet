'use client';

import './nav.css';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// ─────────────────────────────────────────────
// NAV ITEMS — 4 top-level dropdowns + CTA
// ─────────────────────────────────────────────
const NAV_ITEMS = [
  {
    label: 'Products',
    href: '/products',
    // "wide" layout with 3 columns
    dropdown: {
      type: 'products', // special layout: left list + right content
      leftLinks: [
        { label: 'ISO 27001', href: '/products/iso-27001' },
        { label: 'NIS2', href: '/products/nis2' },
        { label: 'DORA', href: '/products/dora' },
        { label: 'ISO 42001', href: '/products/iso-42001' },
        { label: 'EU GDPR', href: '/products/eu-gdpr' },
        { label: 'ISO 9001', href: '/products/iso-9001' },
        { label: 'ISO 14001', href: '/products/iso-14001' },
        { label: 'ISO 45001', href: '/products/iso-45001' },
        { label: 'ISO 13485', href: '/products/iso-13485' },
        { label: 'EU MDR', href: '/products/eu-mdr' },
        { label: 'IATF 16949', href: '/products/iatf-16949' },
        { label: 'AS9100', href: '/products/as9100' },
      ],
    },
  },
  {
    label: 'Industries',
    href: '/industries',
    dropdown: {
      type: 'list', // simple single-column list
      links: [
        { label: 'Consultants', href: '/industries/consultants' },
        { label: 'IT & SaaS Companies', href: '/industries/it-saas' },
        { label: 'Critical Infrastructure', href: '/industries/critical-infrastructure' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
        { label: 'Transportation & Distribution', href: '/industries/transportation' },
        { label: 'Education', href: '/industries/education' },
        { label: 'Telecommunications', href: '/industries/telecommunications' },
        { label: 'Banking & Finance', href: '/industries/banking-finance' },
        { label: 'Government', href: '/industries/government' },
        { label: 'Health Organizations', href: '/industries/healthcare' },
        { label: 'Medical Device', href: '/industries/medical-device' },
        { label: 'Aerospace', href: '/industries/aerospace' },
      ],
    },
  },
  {
    label: 'Resources',
    href: '/resources',
    dropdown: {
      type: 'sections', // multi-column sections layout
      sections: [
        {
          title: 'By Type',
          links: [
            { label: 'Articles', href: '/resources/articles' },
            { label: 'Webinars', href: '/resources/webinars' },
            { label: 'Courses', href: '/resources/courses' },
            { label: 'White Papers', href: '/resources/white-papers' },
            { label: 'Templates & Tools', href: '/resources/templates' },
            { label: 'Podcast', href: '/resources/podcast' },
          ],
          viewAll: { label: 'VIEW ALL →', href: '/resources' },
        },
        {
          title: 'Where to Start',
          links: [
            { label: 'ISO 27001', href: '/resources/iso-27001' },
            { label: 'ISO 42001', href: '/resources/iso-42001' },
            { label: 'ISO 9001', href: '/resources/iso-9001' },
            { label: 'ISO 13485', href: '/resources/iso-13485' },
            { label: 'ISO 14001', href: '/resources/iso-14001' },
            { label: 'ISO 45001', href: '/resources/iso-45001' },
            { label: 'NIS2', href: '/resources/nis2' },
            { label: 'For Consultants', href: '/resources/consultants' },
            { label: 'EU GDPR', href: '/resources/eu-gdpr' },
            { label: 'EU MDR', href: '/resources/eu-mdr' },
            { label: 'DORA', href: '/resources/dora' },
            { label: 'IATF 16949', href: '/resources/iatf-16949' },
            { label: 'AS9100', href: '/resources/as9100' },
            { label: 'Compliance in general', href: '/resources/compliance' },
            { label: 'Community', href: '/resources/community' },
          ],
        },
        {
          title: 'Other',
          links: [
            { label: 'Live Consultations', href: '/resources/live-consultations' },
            { label: 'Consultant Directory', href: '/resources/consultant-directory' },
            { label: 'Community', href: '/resources/community' },
          ],
        },
      ],
    },
  },
  {
    label: 'About Us',
    href: '/about ',
    dropdown: {
      type: 'list',
      links: [
        { label: 'About QMet', href: '/about' },
        { label: 'Our Team', href: '/about/team' },
        { label: 'Our Partners', href: '/about/partners' },
        { label: 'Careers', href: '/about/careers' },
      ],
    },
  },
];

// ─────────────────────────────────────────────
// CHEVRON ICON (down arrow)
// ─────────────────────────────────────────────
function ChevronIcon({ isOpen }) {
  return (
    <svg
      className="nav-chevron"
      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', opacity: isOpen ? 1 : 0.5 }}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// DROPDOWN CONTENT — renders based on type
// ─────────────────────────────────────────────
function DropdownContent({ dropdown, onLinkClick }) {
  if (dropdown.type === 'list') {
    return (
      <div className="nav-dropdown-inner">
        {dropdown.links.map((link) => (
          <a key={link.href} href={link.href} className="nav-dropdown-link" onClick={onLinkClick}>
            <span className="nav-dropdown-dot" />
            {link.label}
          </a>
        ))}
      </div>
    );
  }

  if (dropdown.type === 'products') {
    return (
      <div className="nav-dropdown-inner">
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '0' }}>
          <div style={{ borderRight: '1px solid rgba(94,98,209,0.1)', padding: '8px 0' }}>
            <span className="nav-dropdown-section-title" style={{ paddingLeft: '12px' }}>
              Products by framework
            </span>
            {dropdown.leftLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-dropdown-link" onClick={onLinkClick}>
                <span className="nav-dropdown-dot" />
                {link.label}
              </a>
            ))}
          </div>
          <div style={{ padding: '16px', display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ color: '#9ca3af', fontSize: '13px', paddingTop: '4px' }}>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Quick Links
              </span>
              {[
                { label: 'ISO 27001 Software', href: '/products/iso-27001' },
                { label: 'Documentation Toolkits', href: '/products/toolkits' },
                { label: 'Training & Awareness', href: '/products/training' },
                { label: 'Online Courses', href: '/products/courses' },
              ].map((link) => (
                <a key={link.href} href={link.href} className="nav-dropdown-link" onClick={onLinkClick}>
                  <span className="nav-dropdown-dot" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (dropdown.type === 'sections') {
    return (
      <div className="nav-dropdown-inner">
        <div className="nav-dropdown-grid nav-dropdown-grid--3col">
          {dropdown.sections.map((section) => (
            <div key={section.title} className="nav-dropdown-section">
              <span className="nav-dropdown-section-title">{section.title}</span>
              {section.links.map((link) => (
                <a key={link.href} href={link.href} className="nav-dropdown-link" onClick={onLinkClick}>
                  <span className="nav-dropdown-dot" />
                  {link.label}
                </a>
              ))}
              {section.viewAll && (
                <a href={section.viewAll.href} className="nav-dropdown-view-all" onClick={onLinkClick}>
                  {section.viewAll.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

// ─────────────────────────────────────────────
// MOBILE DROPDOWN CONTENT
// ─────────────────────────────────────────────
function MobileDropdownContent({ dropdown, onClose }) {
  if (dropdown.type === 'list') {
    return dropdown.links.map((link) => (
      <a key={link.href} href={link.href} className="mobile-sublink" onClick={onClose}>
        {link.label}
      </a>
    ));
  }

  if (dropdown.type === 'products') {
    return dropdown.leftLinks.map((link) => (
      <a key={link.href} href={link.href} className="mobile-sublink" onClick={onClose}>
        {link.label}
      </a>
    ));
  }

  if (dropdown.type === 'sections') {
    return dropdown.sections.map((section) => (
      <div key={section.title} className="mobile-subsection">
        <span className="mobile-section-title">{section.title}</span>
        {section.links.map((link) => (
          <a key={link.href} href={link.href} className="mobile-sublink" onClick={onClose}>
            {link.label}
          </a>
        ))}
      </div>
    ));
  }

  return null;
}

// ─────────────────────────────────────────────
// MAIN NAV COMPONENT
// ─────────────────────────────────────────────
export default function Nav() {
  // Is the page scrolled? (adds background to nav)
  const [scrolled, setScrolled] = useState(false);

  // Is the mobile menu open?
  const [menuOpen, setMenuOpen] = useState(false);

  // Which DESKTOP dropdown is open? (label string or null)
  const [openDropdown, setOpenDropdown] = useState(null);

  // Which MOBILE submenu is open? (label string or null) — kept separate to avoid interference
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  // Have we mounted yet? (prevents hydration mismatch with server-rendered HTML)
  // On the server, everything renders with closed/default state.
  // On the client after mount, we allow interactive state changes.
  const [mounted, setMounted] = useState(false);

  // Reference to the whole nav element (used to close dropdown when clicking outside)
  const navRef = useRef(null);

  // Get current page URL path
  const pathname = usePathname();

  // Set mounted to true after first render (client-only)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Listen for scroll to add background to nav
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once immediately
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close everything when the page URL changes
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileSubmenu(null);
  }, [pathname]);

  // Close desktop dropdowns when mobile menu closes
  useEffect(() => {
    if (!menuOpen) {
      setOpenDropdown(null);
      setOpenMobileSubmenu(null);
    }
  }, [menuOpen]);

  // Close dropdown when clicking anywhere outside the nav
  useEffect(() => {
    if (!mounted) return;
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mounted]);

  // Toggle a desktop dropdown open/closed
  function toggleDropdown(label) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }

  // Toggle a mobile submenu open/closed (separate from desktop)
  function toggleMobileSubmenu(label) {
    setOpenMobileSubmenu((prev) => (prev === label ? null : label));
  }

  // Decide which dropdown class to use based on type
  function getDropdownClass(item) {
    if (item.dropdown.type === 'sections') return 'nav-dropdown nav-dropdown--xwide';
    if (item.dropdown.type === 'products') return 'nav-dropdown nav-dropdown--wide';
    return 'nav-dropdown';
  }

  return (
    <nav
      className={`nav${scrolled ? ' scrolled' : ''}`}
      id="main-nav"
      ref={navRef}
    >
      <div className="container">
        <div className="nav-inner">

          {/* ── Logo ── */}
          <a href="/" className="nav-logo">
            <div className="nav-logo-mark">Q</div>
            <span className="nav-logo-text">
              Q<span>Met</span>
            </span>
          </a>

          {/* ── Desktop Navigation Links ── */}
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => {
              const isOpen = mounted && openDropdown === item.label;

              return (
                <li
                  key={item.label}
                  className="nav-item"
                  // Open on hover (desktop only, not when mobile menu is active)
                  onMouseEnter={() => !menuOpen && setOpenDropdown(item.label)}
                  onMouseLeave={() => !menuOpen && setOpenDropdown(null)}
                >
                  {/* Button that toggles the dropdown */}
                  <button
                    type="button"
                    className={`nav-btn${isOpen ? ' open' : ''}${
                      mounted && pathname.startsWith(item.href) ? ' active' : ''
                    }`}
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <ChevronIcon isOpen={isOpen} />
                  </button>

                  {/* The dropdown panel */}
                  <div className={`${getDropdownClass(item)}${isOpen ? ' open' : ''}`}>
                    <DropdownContent dropdown={item.dropdown} onLinkClick={() => setOpenDropdown(null)} />                  </div>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA Button ── */}
          <div className="nav-cta">
            <a
              href="/contact"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              Book a consultation
            </a>
          </div>

          {/* ── Hamburger Button (mobile only) ── */}
          {/* Uses CSS to show/hide lines vs X — avoids server/client mismatch */}
          <button
            className={`nav-mobile-btn${menuOpen ? ' is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {/* Hamburger lines — hidden when menu open via CSS */}
              <line className="hamburger-line" x1="3" y1="6" x2="21" y2="6" />
              <line className="hamburger-line" x1="3" y1="12" x2="21" y2="12" />
              <line className="hamburger-line" x1="3" y1="18" x2="21" y2="18" />
              {/* X lines — shown when menu open via CSS */}
              <line className="close-line" x1="18" y1="6" x2="6" y2="18" />
              <line className="close-line" x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu (slides open below nav) ── */}
      <div
        className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          {NAV_ITEMS.map((item) => {
            const isOpen = openMobileSubmenu === item.label;

            return (
              <li key={item.label} className="mobile-item">
                {/* Toggle button to expand/collapse submenu */}
                <button
                  type="button"
                  className={`mobile-toggle${isOpen ? ' open' : ''}`}
                  onClick={() => toggleMobileSubmenu(item.label)}
                >
                  {item.label}
                  <span className="mobile-toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>

                {/* Collapsible submenu */}
                <div className={`mobile-submenu${isOpen ? ' open' : ''}`}>
                  <MobileDropdownContent
                    dropdown={item.dropdown}
                    onClose={() => setMenuOpen(false)}
                  />
                </div>
              </li>
            );
          })}
        </ul>

        {/* CTA button at bottom of mobile menu */}
        <div className="nav-mobile-cta">
          <a
            href="/contact"
            className="btn-primary"
            style={{ justifyContent: 'center' }}
            onClick={() => setMenuOpen(false)}
          >
            Book a consultation
          </a>
        </div>
      </div>
    </nav>
  );
}