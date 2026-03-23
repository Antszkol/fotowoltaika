import './Hero.css';
import neighbourhood from '../images/neighbourhood.jpeg';

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="hero"
      aria-label="Sekcja główna"
      style={{ backgroundImage: `url(${neighbourhood})` }}
    >
      <div className="container hero__inner">
        {/* Left: editorial text column */}
        <div className="hero__text">
          <div className="hero__badge anim">
            <span className="hero__badge-dot" />
            Ponad 1 200 instalacji w Polsce
          </div>

          <h1 className="hero__heading anim anim-delay-1">
            Energia,&nbsp;która<br />
            <em>należy&nbsp;do&nbsp;Ciebie.</em>
          </h1>

          <p className="hero__sub anim anim-delay-2">
            Nie płać przez kolejne 30 lat za prąd cudzych firm.
            Zainwestuj raz — i zbuduj własne źródło energii z 25-letnią gwarancją wydajności.
          </p>

          <div className="hero__actions anim anim-delay-3">
            <a
              href="#kontakt"
              className="btn btn-primary hero__btn-main"
              onClick={(e) => handleScroll(e, '#kontakt')}
            >
              Oblicz swoje oszczędności
              <ArrowRight />
            </a>
            <a
              href="#jak-dzialamy"
              className="btn btn-outline"
              onClick={(e) => handleScroll(e, '#jak-dzialamy')}
            >
              Jak to działa?
            </a>
          </div>

          <div className="hero__trust anim anim-delay-4">
            <TrustItem icon="★" value="4.9/5" label="Google Reviews" />
            <div className="hero__trust-divider" />
            <TrustItem icon="⚡" value="48h" label="czas na wycenę" />
            <div className="hero__trust-divider" />
            <TrustItem icon="✓" value="25 lat" label="gwarancja paneli" />
          </div>
        </div>

        {/* Right: geometric solar illustration */}
        <div className="hero__visual anim anim-delay-2" aria-hidden="true">
          <SolarIllustration />
        </div>
      </div>

      {/* Decorative grain texture */}
      <div className="hero__grain" aria-hidden="true" />
    </section>
  );
}

function TrustItem({ icon, value, label }) {
  return (
    <div className="hero__trust-item">
      <span className="hero__trust-icon">{icon}</span>
      <div>
        <strong className="hero__trust-value">{value}</strong>
        <span className="hero__trust-label">{label}</span>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SolarIllustration() {
  return (
    <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__svg">
      {/* Background circle */}
      <circle cx="240" cy="240" r="200" fill="#F2EFE9" />

      {/* Roof outline */}
      <path d="M100 280 L240 160 L380 280 L380 380 L100 380 Z" fill="#E8E4DF" stroke="#D4D0CB" strokeWidth="2" />

      {/* Solar panels grid */}
      {[0,1,2,3].map(col =>
        [0,1,2].map(row => (
          <rect
            key={`${col}-${row}`}
            x={140 + col * 52}
            y={200 + row * 42}
            width={46}
            height={36}
            rx="3"
            fill="#A85C09"
            fillOpacity={0.85 - row * 0.1}
            stroke="#8C4D07"
            strokeWidth="1"
          />
        ))
      )}

      {/* Panel cell lines */}
      {[0,1,2,3].map(col =>
        [0,1,2].map(row => (
          <g key={`lines-${col}-${row}`}>
            <line
              x1={140 + col * 52 + 23}
              y1={200 + row * 42 + 4}
              x2={140 + col * 52 + 23}
              y2={200 + row * 42 + 32}
              stroke="#FAF8F5"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <line
              x1={140 + col * 52 + 4}
              y1={200 + row * 42 + 18}
              x2={140 + col * 52 + 42}
              y2={200 + row * 42 + 18}
              stroke="#FAF8F5"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
          </g>
        ))
      )}

      {/* Sun rays */}
      <circle cx="360" cy="120" r="36" fill="#D4780A" fillOpacity="0.2" />
      <circle cx="360" cy="120" r="24" fill="#D4780A" fillOpacity="0.5" />
      <circle cx="360" cy="120" r="14" fill="#D4780A" />

      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 360 + Math.cos(rad) * 28;
        const y1 = 120 + Math.sin(rad) * 28;
        const x2 = 360 + Math.cos(rad) * 44;
        const y2 = 120 + Math.sin(rad) * 44;
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#D4780A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}

      {/* Energy flow lines */}
      <path
        d="M240 330 L240 360 L300 360 L300 400"
        stroke="#A85C09"
        strokeWidth="2.5"
        strokeDasharray="6 4"
        strokeLinecap="round"
      />
      <circle cx="300" cy="400" r="8" fill="#A85C09" fillOpacity="0.3" />
      <circle cx="300" cy="400" r="4" fill="#A85C09" />

      {/* House door */}
      <rect x="210" y="320" width="30" height="50" rx="2" fill="#D4D0CB" />
      <rect x="215" y="325" width="9" height="40" rx="1" fill="#C8C4BE" />
      <rect x="226" y="325" width="9" height="40" rx="1" fill="#C8C4BE" />

      {/* Percent saving label */}
      <rect x="60" y="200" width="80" height="52" rx="10" fill="#1A1A1C" />
      <text x="100" y="222" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="20" fill="#FAF8F5">80%</text>
      <text x="100" y="240" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontSize="11" fill="#8C8884">mniej za prąd</text>
    </svg>
  );
}
