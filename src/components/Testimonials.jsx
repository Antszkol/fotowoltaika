import './Testimonials.css';

const testimonials = [
  {
    initials: 'MK',
    name: 'Marcin K.',
    location: 'Kraków',
    stars: 5,
    quote:
      'Sceptycznie podchodziłem do branży PV — widziałem już firmy, które znikają po montażu. SolarHaus zamontował instalację w jeden dzień, a od 14 miesięcy obsługuje monitoring i raz już przyjechał na przegląd z własnej inicjatywy. Rachunek za prąd spadł z 650 do 90 zł.',
    savings: '−84% rachunku',
  },
  {
    initials: 'AW',
    name: 'Anna W.',
    location: 'Wrocław',
    stars: 5,
    quote:
      'Cały proces od wyceny do odbioru trwał 3 tygodnie. Inżynier wytłumaczył wszystko po ludzku — bez technicznego żargonu. Aplikacja monitorująca pokazuje produkcję na żywo. Polecam każdemu, kto poważnie myśli o własnej energii.',
    savings: '+4 200 zł/rok',
  },
  {
    initials: 'PT',
    name: 'Piotr T.',
    location: 'Gdańsk',
    stars: 5,
    quote:
      'Trzy firmy dały mi wycenę, SolarHaus była w środku cenowo ale jedyna, która zrobiła szczegółowy projekt z analizą zacienienia dachu. Dzięki temu unikniemy strat, których inne firmy w ogóle nie wzięły pod uwagę. Instalacja od 8 miesięcy działa bez zarzutu.',
    savings: 'Zwrot w 5,8 lat',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="opinie" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section-header anim">
          <span className="section-label">Opinie klientów</span>
          <h2 id="testimonials-heading" className="section-title">
            Co mówią ludzie, którzy<br />podjęli decyzję
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className={`testimonial-card anim anim-delay-${i + 1}`}
            >
              <div className="testimonial-card__top">
                <div className="testimonial-card__avatar" aria-hidden="true">
                  {t.initials}
                </div>
                <div className="testimonial-card__meta">
                  <strong className="testimonial-card__name">{t.name}</strong>
                  <span className="testimonial-card__location">{t.location}</span>
                </div>
                <div className="testimonial-card__stars" aria-label={`${t.stars} gwiazdek`}>
                  {'★'.repeat(t.stars)}
                </div>
              </div>

              <p className="testimonial-card__quote">"{t.quote}"</p>

              <div className="testimonial-card__result">
                <span className="testimonial-card__result-value">{t.savings}</span>
              </div>
            </blockquote>
          ))}
        </div>

        <div className="testimonials__footer anim">
          <p className="testimonials__rating">
            <span className="testimonials__stars">★★★★★</span>
            <strong>4.9/5</strong> na podstawie <strong>287 opinii</strong> w Google
          </p>
        </div>
      </div>
    </section>
  );
}
