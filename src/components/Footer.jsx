import './Footer.css';

const navLinks = [
  { label: 'Dlaczego my', href: '#dlaczego' },
  { label: 'Jak działamy', href: '#jak-dzialamy' },
  { label: 'Kalkulator', href: '#kalkulator' },
  { label: 'Opinie', href: '#opinie' },
  { label: 'FAQ', href: '#faq' },
];

const legalLinks = [
  { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
  { label: 'Regulamin', href: '/regulamin' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="SolarHaus – strona główna">
            <LogoMark />
            <span>SolarHaus</span>
          </a>
          <p className="footer__tagline">
            Energia, która należy do Ciebie.<br />Instalacje fotowoltaiczne z 25-letnią gwarancją.
          </p>
          <address className="footer__address">
            ul. Słoneczna 14, 00-001 Warszawa<br />
            <a href="tel:+48800100200">800 100 200</a><br />
            <a href="mailto:kontakt@solarhaus.pl">kontakt@solarhaus.pl</a>
          </address>
        </div>

        {/* Navigation */}
        <nav className="footer__nav" aria-label="Nawigacja stopki">
          <h3 className="footer__nav-title">Nawigacja</h3>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleClick(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div className="footer__nav">
          <h3 className="footer__nav-title">Usługi</h3>
          <ul>
            {['Instalacje fotowoltaiczne', 'Magazyny energii', 'Pompy ciepła', 'Serwis i monitoring', 'Dofinansowania'].map((s) => (
              <li key={s}><span>{s}</span></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {year} SolarHaus. Wszelkie prawa zastrzeżone.
          </p>
          <div className="footer__legal">
            {legalLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="8" fill="#FAF8F5" />
      <line x1="16" y1="2" x2="16" y2="6" stroke="#FAF8F5" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="26" x2="16" y2="30" stroke="#FAF8F5" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="2" y1="16" x2="6" y2="16" stroke="#FAF8F5" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="26" y1="16" x2="30" y2="16" stroke="#FAF8F5" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6.34" y1="6.34" x2="9.17" y2="9.17" stroke="rgba(212,120,10,0.7)" strokeWidth="2" strokeLinecap="round" />
      <line x1="22.83" y1="22.83" x2="25.66" y2="25.66" stroke="rgba(212,120,10,0.7)" strokeWidth="2" strokeLinecap="round" />
      <line x1="25.66" y1="6.34" x2="22.83" y2="9.17" stroke="rgba(212,120,10,0.7)" strokeWidth="2" strokeLinecap="round" />
      <line x1="9.17" y1="22.83" x2="6.34" y2="25.66" stroke="rgba(212,120,10,0.7)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
