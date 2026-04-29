/* Region modal + initiative modal */

function initials(name) {
  return name
    .replace(/&|—|—/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

function RegionModal({ region, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!region) return null;
  const style = { '--region-accent': region.accent };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" style={style} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-hero">
          <div className="modal-hero-logo">
            <img src={region.logo} alt={`NXT Move ${region.name}`} />
          </div>
          <div className="modal-hero-num">Region {region.num}</div>
          <h2 className="modal-hero-title">{region.name}</h2>
          <p className="modal-hero-vision">{region.vision}</p>
        </div>
        <div className="modal-body">
          <div className="modal-stats">
            {region.stats.map((s, i) => (
              <div key={i}>
                <div className="modal-stat-val">{s.value}</div>
                <div className="modal-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
          {region.pull && (
            <blockquote className="modal-pull">
              {region.pull}
              {region.pullAttrib && <span className="modal-pull-attrib">— {region.pullAttrib}</span>}
            </blockquote>
          )}
          <div className="modal-three">
            <div className="modal-three-label">Catalyze</div>
            <div className="modal-three-body">{region.catalyze}</div>
          </div>
          <div className="modal-three">
            <div className="modal-three-label">Collaborate</div>
            <div className="modal-three-body">{region.collaborate}</div>
          </div>
          <div className="modal-three">
            <div className="modal-three-label">Champion</div>
            <div className="modal-three-body">{region.champion}</div>
          </div>
          {region.leaders && region.leaders.length > 0 && (
            <div className="modal-leaders">
              <div className="modal-leaders-title">Leaders on the ground</div>
              <div className="modal-leaders-list">
                {region.leaders.map((l, i) => (
                  <div key={i} className="modal-leader">
                    <div className="modal-leader-avatar">{initials(l.name)}</div>
                    <div>
                      <div className="modal-leader-name">{l.name}</div>
                      <div className="modal-leader-role">{l.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InitiativeModal({ init, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!init) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-hero">
          <div className="modal-hero-num">Global Initiative {init.num}</div>
          <h2 className="modal-hero-title">{init.name}</h2>
          <p className="modal-hero-vision">{init.tagline}</p>
        </div>
        <div className="modal-body">
          <div className="modal-stats">
            {init.stats.map((s, i) => (
              <div key={i}>
                <div className="modal-stat-val">{s.value}</div>
                <div className="modal-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
          {init.pull && (
            <blockquote className="modal-pull">{init.pull}</blockquote>
          )}
          <div className="modal-three">
            <div className="modal-three-label">Catalyze</div>
            <div className="modal-three-body">{init.catalyze}</div>
          </div>
          <div className="modal-three">
            <div className="modal-three-label">Collaborate</div>
            <div className="modal-three-body">{init.collaborate}</div>
          </div>
          <div className="modal-three">
            <div className="modal-three-label">Champion</div>
            <div className="modal-three-body">{init.champion}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.RegionModal = RegionModal;
window.InitiativeModal = InitiativeModal;
