/* Donate / Partner flow modal */
function DonateModal({ open, onClose, initialAmount }) {
  const [step, setStep] = React.useState(0);
  const [amount, setAmount] = React.useState(initialAmount || 209);
  const [custom, setCustom] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [interest, setInterest] = React.useState('');

  React.useEffect(() => {
    if (open) {
      setStep(0);
      setAmount(initialAmount || 209);
      setCustom('');
    }
  }, [open, initialAmount]);

  React.useEffect(() => {
    const onKey = (e) => {if (e.key === 'Escape' && open) onClose();};
    document.addEventListener('keydown', onKey);
    if (open) document.body.style.overflow = 'hidden';
    return () => {document.removeEventListener('keydown', onKey);document.body.style.overflow = '';};
  }, [open, onClose]);

  if (!open) return null;

  const presets = [209, 1200, 5000, 12000, 25000, 75000];
  const presetLabels = {
    209: '1 leader trained',
    1200: '1 cohort seat',
    5000: 'Catalyst gift',
    12000: 'Roundtable cycle',
    25000: 'Activation Fund',
    75000: '10/40 Gathering'
  };
  const finalAmount = custom ? parseInt(custom) : amount;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" style={{ maxWidth: 560 }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body" style={{ padding: '48px 48px 40px' }}>
          <div className="donate-progress">
            <div className={step >= 0 ? 'done' : ''} />
            <div className={step >= 1 ? 'done' : ''} />
            <div className={step >= 2 ? 'done' : ''} />
          </div>

          {step === 0 &&
          <div className="donate-step">
              <h3>Stand alongside the leaders.</h3>
              <p>Every gift goes toward the relational infrastructure that keeps 11 regions multiplying.</p>
              <div className="donate-amounts">
                {presets.map((p) =>
              <div
                key={p}
                className={`donate-amount ${!custom && amount === p ? 'active' : ''}`}
                onClick={() => {setAmount(p);setCustom('');}}>
                
                    ${p.toLocaleString()}
                    <span className="donate-amount-label">{presetLabels[p]}</span>
                  </div>
              )}
              </div>
              <input
              type="number"
              placeholder="Custom amount (USD)"
              className="donate-input"
              value={custom}
              onChange={(e) => setCustom(e.target.value)} />
            
              <button
              className="btn-primary"
              style={{ width: '100%', marginTop: 12 }}
              disabled={!finalAmount || finalAmount < 1}
              onClick={() => setStep(1)}>
              
                Continue · ${(finalAmount || 0).toLocaleString()}
              </button>
            </div>
          }

          {step === 1 &&
          <div className="donate-step">
              <h3>Where would you like this directed?</h3>
              <p>Every gift strengthens the whole network.  While we do our best to allocate gifts according to passion, this gift does not constitute a restricted fund.  Feel free to reach out to us for more information or to lock in a gift specifically.</p>
              <select className="donate-input" value={interest} onChange={(e) => setInterest(e.target.value)}>
                <option value="">Wherever it's needed most</option>
                <option>South Asia Church Planter Training</option>
                <option>Soul Care for Leaders</option>
                <option>Women's Leadership Initiative</option>
                <option>10/40 Window Gathering</option>
                <option>Mercy Ministry</option>
                <option>Next Gen Global Collab</option>
                <option>Africa Region</option>
                <option>Central Asia Region</option>
                <option>MENA Region</option>
              </select>
              <input className="donate-input" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="donate-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <div className="cta-button-row" style={{ marginTop: 8 }}>
                <button className="btn-secondary" onClick={() => setStep(0)}>Back</button>
                <button className="btn-primary" style={{ flex: 1 }} disabled={!name || !email} onClick={() => setStep(2)}>
                  Confirm partnership
                </button>
              </div>
            </div>
          }

          {step === 2 &&
          <div className="donate-success">
              <div className="donate-check">✓</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, margin: '0 0 12px' }}>
                Welcome in, {name.split(' ')[0] || 'partner'}.
              </h3>
              <p style={{ color: 'var(--ink-soft)', maxWidth: 380, margin: '0 auto 24px' }}>
                Your ${(finalAmount || 0).toLocaleString()} gift is recorded. A member of our team will be in touch within 48 hours
                {interest ? ` about ${interest}` : ''}. The leaders thank you.
              </p>
              <button className="btn-primary" onClick={onClose}>Close</button>
            </div>
          }
        </div>
      </div>
    </div>);

}
window.DonateModal = DonateModal;