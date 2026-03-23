import './Benefits.css';

const benefits = [
  {
    icon: <HomeIcon />,
    title: 'Twój dom — twoja energia',
    body: 'Przestań być zależny od taryf i podwyżek. Prąd, który wytwarzasz, należy do Ciebie. Na zawsze.',
    tag: 'Niezależność',
  },
  {
    icon: <CoinsIcon />,
    title: 'Realne oszczędności od pierwszego miesiąca',
    body: 'Przeciętna polska rodzina oszczędza do 4 000 zł rocznie. Instalacja zwraca się w 5–7 lat.',
    tag: 'Oszczędności',
  },
  {
    icon: <ShieldIcon />,
    title: '25-letnia gwarancja wydajności',
    body: 'Montujemy wyłącznie panele Tier 1 z certyfikowaną gwarancją producenta. Żadnych kompromisów.',
    tag: 'Jakość',
  },
  {
    icon: <LeafIcon />,
    title: 'Dom z zerowym śladem węglowym',
    body: 'Każda instalacja to 1,2 tony CO₂ mniej rocznie. Realna zmiana, nie tylko marketing.',
    tag: 'Środowisko',
  },
  {
    icon: <ZapIcon />,
    title: 'Magazynowanie energii',
    body: 'Opcjonalny magazyn energii pozwala korzystać z własnego prądu nawet po zmroku lub podczas awarii sieci.',
    tag: 'Magazyn',
  },
  {
    icon: <SupportIcon />,
    title: 'Serwis przez całą dekadę',
    body: 'Nie znikamy po montażu. Monitoring online i reakcja serwisowa w ciągu 24h.',
    tag: 'Serwis',
  },
];

export default function Benefits() {
  return (
    <section className="benefits" id="dlaczego" aria-labelledby="benefits-heading">
      <div className="container">
        <div className="section-header anim">
          <span className="section-label">Dlaczego SolarHaus</span>
          <h2 id="benefits-heading" className="section-title">
            Sześć powodów, dla których<br />warto wybrać własną energię
          </h2>
        </div>

        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`benefit-card anim anim-delay-${(i % 3) + 1}`}
            >
              <div className="benefit-card__icon" aria-hidden="true">
                {b.icon}
              </div>
              <span className="benefit-card__tag">{b.tag}</span>
              <h3 className="benefit-card__title">{b.title}</h3>
              <p className="benefit-card__body">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Icons as SVGs */
function HomeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12L12 3l9 9" /><path d="M9 21V12h6v9" /><path d="M3 12v9h18v-9" />
    </svg>
  );
}

function CoinsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
