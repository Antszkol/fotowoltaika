import { useState } from 'react';
import './ContactCTA.css';

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', bill: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Podaj imię';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 9) e.phone = 'Podaj poprawny numer';
    if (!form.email.trim() || !form.email.includes('@')) e.email = 'Podaj poprawny adres e-mail';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((err) => { const next = { ...err }; delete next[field]; return next; });
  };

  return (
    <section className="contact-cta" id="kontakt" aria-labelledby="contact-heading">
      <div className="container contact-cta__inner">
        {/* Left text */}
        <div className="contact-cta__text anim">
          <span className="contact-cta__label">Bezpłatna wycena</span>
          <h2 id="contact-heading" className="contact-cta__title">
            Gotowy zobaczyć<br />ile zaoszczędzisz?
          </h2>
          <p className="contact-cta__desc">
            Zostaw kontakt — oddzwonimy w ciągu 48h z konkretną ofertą
            dopasowaną do Twojego domu. Zero presji, zero zobowiązań.
          </p>

          <ul className="contact-cta__perks">
            {['Wycena w 48h — bezpłatnie', 'Bez zobowiązań i podpisywania czegokolwiek na miejscu', 'Gwarancja najlepszej ceny'].map((p) => (
              <li key={p}>
                <CheckIcon />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="contact-cta__direct">
            <p>Wolisz zadzwonić bezpośrednio?</p>
            <a href="tel:+48800100200" className="contact-cta__phone">800 100 200</a>
            <span className="contact-cta__hours">Pon–Pt 8:00–18:00</span>
          </div>
        </div>

        {/* Right form */}
        <div className="contact-cta__form-wrap anim anim-delay-2">
          {submitted ? (
            <div className="contact-form__success" role="status" aria-live="polite">
              <span className="contact-form__success-icon" aria-hidden="true">✓</span>
              <h3>Dziękujemy, {form.name.split(' ')[0]}!</h3>
              <p>Odezwiemy się w ciągu 48 godzin roboczych z bezpłatną wyceną dopasowaną do Twojego domu.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Formularz kontaktowy">
              <Field
                id="cf-name"
                label="Imię i nazwisko"
                type="text"
                placeholder="Jan Kowalski"
                value={form.name}
                onChange={handleChange('name')}
                error={errors.name}
                required
              />
              <Field
                id="cf-phone"
                label="Numer telefonu"
                type="tel"
                placeholder="500 000 000"
                value={form.phone}
                onChange={handleChange('phone')}
                error={errors.phone}
                required
              />
              <Field
                id="cf-email"
                label="Adres e-mail"
                type="email"
                placeholder="jan@example.com"
                value={form.email}
                onChange={handleChange('email')}
                error={errors.email}
                required
              />
              <Field
                id="cf-bill"
                label="Przeciętny rachunek za prąd (opcjonalnie)"
                type="text"
                placeholder="np. 400 zł/miesiąc"
                value={form.bill}
                onChange={handleChange('bill')}
              />

              <button type="submit" className="btn btn-primary contact-form__submit">
                Wyślij zapytanie o wycenę
                <ArrowIcon />
              </button>

              <p className="contact-form__privacy">
                Twoje dane są bezpieczne. Nie wysyłamy spamu.
                <br />Wysyłając formularz, akceptujesz <a href="/polityka-prywatnosci">politykę prywatności</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, type, placeholder, value, onChange, error, required }) {
  return (
    <div className={`form-field${error ? ' form-field--error' : ''}`}>
      <label htmlFor={id} className="form-field__label">
        {label}
        {required && <span aria-hidden="true" className="form-field__req"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        className="form-field__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span id={`${id}-error`} className="form-field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="rgba(168,92,9,0.12)" />
      <path d="M5.5 9L8 11.5L12.5 7" stroke="#A85C09" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
