import './HowItWorks.css';

const steps = [
  {
    num: '01',
    title: 'Bezpłatna analiza i wycena',
    body: 'Zadzwoń lub wypełnij formularz. W ciągu 48h dostajesz konkretną wycenę dopasowaną do Twojego domu — bez ogólników, bez ukrytych kosztów.',
    detail: 'W 100% bezpłatnie',
  },
  {
    num: '02',
    title: 'Projekt i formalności',
    body: 'Nasz inżynier projektuje optymalny układ paneli. Zajmujemy się całą dokumentacją, zgłoszeniami do sieci energetycznej i wnioskami o dofinansowanie.',
    detail: 'Czas: ok. 2–3 tygodnie',
  },
  {
    num: '03',
    title: 'Montaż w 1–2 dni',
    body: 'Certyfikowany zespół montażowy instaluje system sprawnie i czysto. Po zakończeniu szkolimy Cię z obsługi aplikacji monitorującej.',
    detail: 'Gwarancja czystości placu',
  },
  {
    num: '04',
    title: 'Odbiór i monitoring',
    body: 'Uruchamiamy system, sprawdzamy każdy panel i wręczamy dokumenty gwarancyjne. Od tej chwili Twój prąd pracuje na Ciebie — a my monitorujemy wszystko online.',
    detail: 'Monitoring 24/7',
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="jak-dzialamy" aria-labelledby="how-heading">
      <div className="container">
        <div className="section-header anim">
          <span className="section-label">Jak działamy</span>
          <h2 id="how-heading" className="section-title">
            Od pierwszego kontaktu<br />do własnej energii — w 4 krokach
          </h2>
        </div>

        <div className="how__grid">
          {steps.map((step, i) => (
            <div key={step.num} className={`how__step anim anim-delay-${i + 1}`}>
              <div className="how__step-num" aria-hidden="true">{step.num}</div>
              {i < steps.length - 1 && (
                <div className="how__connector" aria-hidden="true" />
              )}
              <div className="how__step-content">
                <span className="how__step-detail">{step.detail}</span>
                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
