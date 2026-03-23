import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Ile trwa cały proces od wyceny do gotowej instalacji?',
    a: 'Zazwyczaj 3–6 tygodni. Wycena trafia do Ciebie w ciągu 48h od zgłoszenia. Dokumentacja i zgłoszenia do sieci zajmują 2–3 tygodnie, sam montaż trwa 1–2 dni.',
  },
  {
    q: 'Czy mogę uzyskać dofinansowanie lub ulgę podatkową?',
    a: 'Tak. Przy zakupie instalacji przysługuje ulga termomodernizacyjna (do 53 000 zł odliczenia od PIT/CIT). Pomagamy też w aplikowaniu o dofinansowania z programów gminnych i regionalnych. Zajmujemy się całą dokumentacją.',
  },
  {
    q: 'Co dzieje się w pochmurne dni lub zimą?',
    a: 'Panele produkują prąd nawet przy zachmurzeniu — z mniejszą wydajnością. Nadwyżki produkowane latem są magazynowane (net-metering) i odliczane od rachunków zimą. Opcjonalny magazyn energii zwiększa samodzielność do 90%.',
  },
  {
    q: 'Czy potrzebuję pozwolenia na budowę?',
    a: 'W przypadku instalacji do 50 kWp na dachu budynku mieszkalnego wystarczy zgłoszenie — nie potrzeba pozwolenia. Zajmujemy się wszystkimi formalnościami za Ciebie.',
  },
  {
    q: 'Jaka gwarancja jest na panele i inwerter?',
    a: 'Panele mają 25-letnią gwarancję producenta na moc (min. 80% po 25 latach) oraz 12–15 lat gwarancji produktowej. Inwertery — 10 lat. Na nasz montaż dajemy 5-letnią gwarancję na wykonanie.',
  },
  {
    q: 'Co się stanie, jeśli coś przestanie działać?',
    a: 'Monitorujemy Twoją instalację 24/7. Jeśli system wykryje anomalię, serwis reaguje w ciągu 24h. Przez cały okres gwarancyjny naprawy są bezpłatne.',
  },
  {
    q: 'Czy muszę wymienić dach przed instalacją?',
    a: 'Nie, ale oceniamy stan dachu podczas wizji. Montujemy na dachach skośnych i płaskich — ceramicznych, bitumicznych, metalowych i blaszanych. Jeśli dach wymaga prac, informujemy o tym z wyprzedzeniem.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <div className="container faq__inner">
        <div className="faq__header anim">
          <span className="section-label">FAQ</span>
          <h2 id="faq-heading" className="section-title">
            Najczęściej zadawane pytania
          </h2>
          <p className="faq__subtitle">
            Nie znalazłeś odpowiedzi? <a href="#kontakt" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
            }}>Zapytaj nas bezpośrednio.</a>
          </p>
        </div>

        <div className="faq__list" role="list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq__item anim anim-delay-${Math.min(i + 1, 4)}`}
              role="listitem"
            >
              <button
                className={`faq__question${open === i ? ' faq__question--open' : ''}`}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{item.q}</span>
                <ChevronIcon />
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`faq__answer${open === i ? ' faq__answer--open' : ''}`}
                aria-hidden={open !== i}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="faq__chevron">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
