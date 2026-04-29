/* DFW Model City — a local expression of the global vision.
   Sits between Regions and the Initiatives pull-quote, presenting DFW
   as the working prototype of the Catalytic Communities model that the
   rest of the network is watching. */

function DFWSection({ onDonate }) {
  const dfw = window.NXT_DATA.DFW_MODEL;

  return (
    <section className="dfw-section" id="dfw">
      <div className="dfw-inner">
        <div className="dfw-header">
          <div className="dfw-eyebrow" style={{ fontSize: "20px", textAlign: "center" }}>
            <span className="dfw-eyebrow-pin" aria-hidden="true">◆</span>
            Zoom in · Dallas–Fort Worth
          </div>
          <h2 className="dfw-title">
            One city is already living the model<br />
            the <span className="dfw-title-accent">whole world</span> is watching.
          </h2>
          <p className="dfw-lead">{dfw.position}</p>
        </div>

        <div className="dfw-research">
          <div className="dfw-research-label">The local stakes</div>
          <div className="dfw-research-grid">
            {dfw.research.map((s, i) =>
            <div key={i} className="dfw-research-stat">
                <div className="dfw-research-val">{s.value}</div>
                <div className="dfw-research-lbl">{s.label}</div>
              </div>
            )}
          </div>
          <div className="dfw-research-attrib">{dfw.researchAttrib}</div>
        </div>

        <div className="dfw-pillars-header">
          <div className="dfw-pillars-rule" />
          <div className="dfw-pillars-eyebrow">Four pillars · One working model</div>
          <div className="dfw-pillars-rule" />
        </div>

        <div className="dfw-pillars">
          {dfw.pillars.map((p) =>
          <div key={p.num} className="dfw-pillar">
              <div className="dfw-pillar-num">{p.num}</div>
              <h3 className="dfw-pillar-name">{p.name}</h3>
              <p className="dfw-pillar-body">{p.body}</p>
            </div>
          )}
        </div>

        <div className="dfw-bridge">
          <div className="dfw-bridge-mark">
            <span className="dfw-bridge-from">DFW</span>
            <span className="dfw-bridge-arrow" aria-hidden="true">→</span>
            <span className="dfw-bridge-to">11 regions</span>
          </div>
          <p className="dfw-bridge-body">{dfw.bridge}</p>
          <p className="dfw-bridge-cta">{dfw.cta}</p>
          <div className="dfw-bridge-actions">
            <button className="btn-primary" onClick={() => onDonate(null)}>
              Partner with DFW
            </button>
            <a className="btn-secondary" href="#partner">
              See partnership levels
            </a>
          </div>
        </div>
      </div>
    </section>);

}

window.DFWSection = DFWSection;