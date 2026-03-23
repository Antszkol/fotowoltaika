import { useState, useEffect } from 'react';
import './Nav.css';

const links = [
  { label: 'Dlaczego my', href: '#dlaczego' },
  { label: 'Jak działamy', href: '#jak-dzialamy' },
  { label: 'Kalkulator', href: '#kalkulator' },
  { label: 'Opinie', href: '#opinie' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="banner">
      <div className="container nav__inner">
        {/* Logo */}
        <a href="/" className="nav__logo" aria-label="SolarHaus – strona główna">
          <LogoMark />
          <span className="nav__logo-text">SolarHaus</span>
        </a>

        {/* Desktop links */}
        <nav className="nav__links" aria-label="Nawigacja główna">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav__link"
              onClick={(e) => handleNavClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#kontakt"
          className="btn btn-primary nav__cta"
          onClick={(e) => handleNavClick(e, '#kontakt')}
        >
          Bezpłatna wycena
        </a>

        {/* Hamburger */}
        <button
          className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`nav__drawer${menuOpen ? ' nav__drawer--open' : ''}`} aria-hidden={!menuOpen}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="nav__drawer-link"
            onClick={(e) => handleNavClick(e, l.href)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#kontakt"
          className="btn btn-primary"
          onClick={(e) => handleNavClick(e, '#kontakt')}
          tabIndex={menuOpen ? 0 : -1}
        >
          Bezpłatna wycena
        </a>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="8" fill="#A85C09" />
      <line x1="16" y1="2" x2="16" y2="6" stroke="#A85C09" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="26" x2="16" y2="30" stroke="#A85C09" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="2" y1="16" x2="6" y2="16" stroke="#A85C09" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="26" y1="16" x2="30" y2="16" stroke="#A85C09" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6.34" y1="6.34" x2="9.17" y2="9.17" stroke="#D4780A" strokeWidth="2" strokeLinecap="round" />
      <line x1="22.83" y1="22.83" x2="25.66" y2="25.66" stroke="#D4780A" strokeWidth="2" strokeLinecap="round" />
      <line x1="25.66" y1="6.34" x2="22.83" y2="9.17" stroke="#D4780A" strokeWidth="2" strokeLinecap="round" />
      <line x1="9.17" y1="22.83" x2="6.34" y2="25.66" stroke="#D4780A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
