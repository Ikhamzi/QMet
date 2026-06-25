'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: '/',           label: 'Home' },
    { href: '#services',   label: 'Services' },
    { href: '#standards',  label: 'Standards' },
    { href: '#industries', label: 'Industries' },
    { href: '/about',      label: 'About' },
    { href: '/contact',    label: 'Contact' },
  ];

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="main-nav">
      <div className="container">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <div className="nav-logo-mark">Q</div>
            <span className="nav-logo-text">Q<span>Met</span></span>
          </a>

          <ul className="nav-links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={pathname === href ? 'active' : ''}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <a href="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
              Get a Consultation
            </a>
          </div>

          <button
            className="nav-mobile-btn"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={pathname === href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="/contact" className="btn-primary" style={{ marginTop: '12px', justifyContent: 'center' }}>
          Get a Consultation
        </a>
      </div>
    </nav>
  );
}
