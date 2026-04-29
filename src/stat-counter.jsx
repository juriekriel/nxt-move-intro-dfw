/* Animated stat counter — counts up when in view */
function StatCounter({ value, label, accentSolid }) {
  const [display, setDisplay] = React.useState('0');
  const ref = React.useRef(null);
  const animatedRef = React.useRef(false);

  // Parse the value: extract leading number, prefix, suffix
  const parse = (v) => {
    const s = String(v);
    const m = s.match(/^([^\d.<~–\-]*)([\d,.]+)\s*([KMB]?)([+%]?)(.*)$/);
    if (!m) return null;
    const prefix = m[1] || '';
    const num = parseFloat(m[2].replace(/,/g, ''));
    const mag = m[3];
    const tail = (m[4] || '') + (m[5] || '');
    if (isNaN(num)) return null;
    return { prefix, num, mag, tail, raw: s };
  };

  const parsed = parse(value);

  React.useEffect(() => {
    if (!parsed || animatedRef.current) {
      setDisplay(value);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (t) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              const cur = parsed.num * eased;
              let formatted;
              if (parsed.num >= 100 && Number.isInteger(parsed.num)) {
                formatted = Math.round(cur).toLocaleString();
              } else if (parsed.num % 1 !== 0) {
                formatted = cur.toFixed(1);
              } else {
                formatted = Math.round(cur).toLocaleString();
              }
              setDisplay(parsed.prefix + formatted + parsed.mag + parsed.tail);
              if (p < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <div className="hero-stat-num">{display}</div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
}
window.StatCounter = StatCounter;
