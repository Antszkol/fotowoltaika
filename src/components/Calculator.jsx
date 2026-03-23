import { useState } from 'react';
import './Calculator.css';

const ELECTRICITY_PRICE = 0.92; // zł/kWh average Poland 2024
const ANNUAL_PRODUCTION_PER_KW = 950; // kWh/kWp/year (Poland avg)
const SYSTEM_COST_PER_KW = 4800; // zł/kWp installed

function calcSavings(bill) {
  const monthlyKwh = bill / ELECTRICITY_PRICE;
  const annualKwh = monthlyKwh * 12;
  const neededKwp = annualKwh / ANNUAL_PRODUCTION_PER_KW;
  const systemCost = Math.round(neededKwp * SYSTEM_COST_PER_KW / 1000) * 1000;
  const annualSavings = Math.round(annualKwh * ELECTRICITY_PRICE * 0.75); // ~75% coverage
  const payback = +(systemCost / annualSavings).toFixed(1);
  const tenYearSavings = Math.round(annualSavings * 10);
  return { annualSavings, systemCost, payback, tenYearSavings, neededKwp: +neededKwp.toFixed(1) };
}

export default function Calculator() {
  const [bill, setBill] = useState(400);
  const result = calcSavings(bill);

  return (
    <section className="calculator" id="kalkulator" aria-labelledby="calc-heading">
      <div className="container calculator__inner">
        {/* Left: explanation */}
        <div className="calculator__text anim">
          <span className="section-label">Kalkulator oszczędności</span>
          <h2 id="calc-heading" className="section-title calculator__title">
            Ile możesz zaoszczędzić?<br />
            <em>Sprawdź w 10 sekund.</em>
          </h2>
          <p className="calculator__desc">
            Przesuń suwak, aby dopasować swój przeciętny rachunek za prąd.
            Kalkulator pokaże szacunkowe oszczędności i czas zwrotu inwestycji.
          </p>
          <p className="calculator__disclaimer">
            Wyniki są szacunkowe. Dokładna wycena zależy od lokalizacji, kąta dachu i zużycia energii.
          </p>
        </div>

        {/* Right: interactive calculator */}
        <div className="calculator__widget anim anim-delay-2">
          <div className="calc-card">
            <label className="calc-label" htmlFor="bill-slider">
              Twój miesięczny rachunek za prąd
            </label>
            <div className="calc-bill-display">
              <span className="calc-bill-value">{bill} zł</span>
              <span className="calc-bill-sub">/miesiąc</span>
            </div>

            <input
              id="bill-slider"
              type="range"
              min={100}
              max={1200}
              step={50}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="calc-slider"
              aria-label={`Rachunek miesięczny: ${bill} złotych`}
              style={{ '--progress': `${((bill - 100) / 1100) * 100}%` }}
            />
            <div className="calc-slider-range">
              <span>100 zł</span>
              <span>1 200 zł</span>
            </div>

            <div className="calc-results">
              <CalcResult
                label="Oszczędność roczna"
                value={`${result.annualSavings.toLocaleString('pl-PL')} zł`}
                highlight
              />
              <CalcResult
                label="Oszczędność przez 10 lat"
                value={`~${result.tenYearSavings.toLocaleString('pl-PL')} zł`}
              />
              <CalcResult
                label="Szacowany koszt instalacji"
                value={`od ${result.systemCost.toLocaleString('pl-PL')} zł`}
              />
              <CalcResult
                label="Zwrot inwestycji"
                value={`${result.payback} lat`}
              />
            </div>

            <a href="#kontakt" className="btn btn-primary calc-cta" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Chcę dokładną wycenę
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalcResult({ label, value, highlight }) {
  return (
    <div className={`calc-result${highlight ? ' calc-result--highlight' : ''}`}>
      <span className="calc-result__label">{label}</span>
      <strong className="calc-result__value">{value}</strong>
    </div>
  );
}
