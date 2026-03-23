import { useEffect, useRef, useState } from 'react';
import './TrustBar.css';

const stats = [
  { value: 1200, suffix: '+', label: 'instalacji' },
  { value: 8,    suffix: ' lat', label: 'doświadczenia' },
  { value: 25,   suffix: ' lat', label: 'gwarancji' },
  { value: 98,   suffix: '%',    label: 'zadowolonych klientów' },
];

function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, active }) {
  const count = useCounter(value, 1600, active);
  return (
    <div className="trust-bar__stat">
      <strong className="trust-bar__value">
        {count}
        <span className="trust-bar__suffix">{suffix}</span>
      </strong>
      <span className="trust-bar__label">{label}</span>
    </div>
  );
}

export default function TrustBar() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="trust-bar" ref={ref} aria-label="Nasze osiągnięcia">
      <div className="container trust-bar__inner">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} active={active} />
        ))}
      </div>
    </section>
  );
}
