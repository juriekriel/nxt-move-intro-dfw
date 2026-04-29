/* Main NXT Move Partnership Prospectus app */
const { REGIONS, INITIATIVES, FILTERS, PARTNER_TIERS } = window.NXT_DATA;
// Components below (WorldMap, RegionModal, InitiativeModal, DonateModal,
// StatCounter, GeoMap, DFWSection) are declared via `function Name() {...}`
// at the top level of their own classic-script files after pre-compile, which
// auto-promotes them to global var bindings — so they're already accessible
// here by bare name. The previous `const { WorldMap, ... } = window;` line
// re-declared those same names lexically, which collides with the existing
// global var bindings at parse time and throws "SyntaxError: Identifier
// 'WorldMap' has already been declared" — preventing app.js from running at
// all and leaving the page blank.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "showScript": true,
  "density": "comfortable",
  "mapStyle": "shaded",
  "editPins": false
} /*EDITMODE-END*/;

function TopNav({ onDonate }) {
  return (
    <header className="topnav">
      <div className="topnav-inner">
        <a href="#top" className="topnav-brand">
          <img src="assets/logos/nxt-horizontal.png" alt="NXT Move" />
        </a>
        <nav className="topnav-links">
          <a className="topnav-link" href="#how">How</a>
          <a className="topnav-link" href="#find">Find Yours</a>
          <a className="topnav-link" href="#regions">Regions</a>
          <a className="topnav-link" href="#dfw">DFW</a>
          <a className="topnav-link" href="#initiatives">Initiatives</a>
          <a className="topnav-cta" href="#partner">Partner</a>
        </nav>
      </div>
    </header>);

}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-eyebrow">INTRODUCTION TO NXT MOVE GLOBALLY & IN DFW:</div>
      <h1 className="hero-title hero-title-shaping">
        <span className="hero-title-line1">Shaping the Future Together</span>
        <span className="hero-title-line2">for the</span>
        <span className="hero-title-line3">
          <span className="hero-title-nxt-wrap">
            <span className="hero-title-nxt-letters">
              <span className="hero-title-nxt-letter hero-title-nxt-outline">N</span>
              <span className="hero-title-nxt-letter hero-title-nxt-outline">E</span>
              <span className="hero-title-nxt-letter hero-title-nxt-x">X</span>
              <span className="hero-title-nxt-letter hero-title-nxt-outline">T</span>
            </span>
          </span>
          <span className="hero-title-generation">Generation</span>
        </span>
      </h1>
      <div className="hero-tagline">
        <span>Elevating Leaders.</span>
        <span className="grad">Multiplying Impact.</span>
      </div>
      <div className="hero-stats">
        <StatCounter value="11" label="Regions across the globe" />
        <StatCounter value="7" label="Global initiatives" />
        <StatCounter value="50+" label="Nations served" />
        <StatCounter value="1" label="Mission" />
      </div>
      <figure className="hero-photo">
        <img src="assets/hero-photo.png?v=2" alt="Young leaders gathered in prayer" />
      </figure>
    </section>);

}

function HowItWorks() {
  return (
    <section className="how-section" id="how">
      <div className="section-eyebrow">How NXT Move Works</div>
      <h2 className="section-title" style={{ color: "rgb(5, 5, 5)", fontFamily: "Caveat", fontSize: "45px" }}>
        Strengthening the leaders who <span className="grad-text">shape</span> the future.
      </h2>
      <p className="section-lead mission-lead" style={{ fontSize: "44px", textAlign: "right", lineHeight: 1.2 }}>
        <img src="assets/chevrons.png?v=2" alt="" className="mission-chevrons" style={{ width: "232.655px", height: "174.993px" }} />
        <span>NXT Move exists to accelerate Christianity<br />in the next generation.</span>
      </p>
      <div className="how-grid">
        <div className="how-card">
          <div className="how-card-num">01</div>
          <h3 className="how-card-title">Catalyze</h3>
          <p className="how-card-body">
            We catalyze leaders by creating environments where ideas, relationships, and opportunities
            come together to accelerate their impact for the next generation.
          </p>
        </div>
        <div className="how-card">
          <div className="how-card-num">02</div>
          <h3 className="how-card-title">Collaborate</h3>
          <p className="how-card-body">
            We collaborate with leaders and organizations across the global Church to align efforts
            and multiply what God is doing among the next generation.
          </p>
        </div>
        <div className="how-card">
          <div className="how-card-num">03</div>
          <h3 className="how-card-title">Champion</h3>
          <p className="how-card-body">
            We champion leaders by elevating their voices, strengthening their influence,
            and ensuring they have the support they need to lead well.
          </p>
        </div>
      </div>
    </section>);

}

function FindYours({ onSelectInterest, activeFilters, matchCount, onScrollToResults }) {
  return (
    <section className="section find-yours" id="find">
      <div className="section-eyebrow">Find Yours</div>
      <h2 className="section-title">
        Somewhere in these pages,<br />
        your heart will <span className="accent" style={{ fontSize: "100px" }}>leap.</span>
      </h2>
      <p className="section-lead">
        You didn't arrive here without already carrying something. A passion. A conviction.
        A particular corner of the world or the Kingdom that keeps you up at night.
        Pick what stirs you — we'll show you where it lives.
      </p>
      <div className="filter-grid">
        {FILTERS.map((f) =>
        <button
          key={f.id}
          className={`filter-card ${activeFilters.includes(f.id) ? 'active' : ''}`}
          onClick={() => onSelectInterest(f.id)}>
          
            <span className="filter-card-arrow">→</span>
            <span className="filter-card-label">{f.label}</span>
            <div className="filter-card-desc">{f.desc}</div>
          </button>
        )}
      </div>
      {activeFilters.length > 0 &&
      <div className="filter-results">
          <div className="filter-results-count">{matchCount}</div>
          <div className="filter-results-text">
            <strong style={{ color: 'var(--ink)', display: 'block', fontSize: 15, marginBottom: 4 }}>
              {matchCount === 1 ? 'match' : 'matches'} for what stirs you
            </strong>
            See where your conviction lives across regions and initiatives below.
          </div>
          <div className="filter-results-chips">
            {activeFilters.map((id) => {
            const f = FILTERS.find((x) => x.id === id);
            return (
              <span key={id} className="filter-chip" onClick={() => onSelectInterest(id)}>
                  {f.label} ×
                </span>);

          })}
            <button className="btn-primary" style={{ padding: '10px 20px', fontSize: 12 }} onClick={onScrollToResults}>
              See matches
            </button>
          </div>
        </div>
      }
    </section>);

}

function RegionsSection({ regions, onOpen, hoverId, setHoverId, activeFilters, mapStyle, editPins }) {
  const useGeo = mapStyle === 'filled' || mapStyle === 'outline' || mapStyle === 'shaded';
  return (
    <section className="section" id="regions">
      <div className="section-eyebrow">11 Regions</div>
      <h2 className="section-title">
        One global community.<br />
        <span className="accent" style={{ fontSize: "100px" }}>Eleven</span> regional expressions.
      </h2>
      <p className="section-lead">
        Browse the regions below — or jump straight to the cards.
      </p>

      {useGeo ?
      <GeoMap regions={regions} activeRegion={hoverId} onSelect={onOpen} onHover={setHoverId} variant={mapStyle} editMode={editPins} /> :
      <WorldMap regions={regions} activeRegion={hoverId} onSelect={onOpen} onHover={setHoverId} />}

      <div className="region-grid" style={{ marginTop: 56 }} id="region-cards">
        {regions.map((r) => {
          const matches = activeFilters.length === 0 || r.interests.some((i) => activeFilters.includes(i));
          return (
            <article
              key={r.id}
              data-region={r.id}
              className={`region-card ${!matches && activeFilters.length > 0 ? 'dimmed' : ''}`}
              onClick={() => onOpen(r.id)}
              onMouseEnter={() => setHoverId(r.id)}
              onMouseLeave={() => setHoverId(null)}
              style={{ '--region-accent': r.accent }}>
              
              <div className="region-card-gradient" />
              <div className="region-card-logo">
                <img src={r.logo} alt={`NXT Move ${r.name}`} />
              </div>
              <div className="region-card-body">
                <div className="region-card-num">Region {r.num}</div>
                <h3 className="region-card-name">{r.name}</h3>
                <p className="region-card-vision">{r.vision}</p>
                <div className="region-card-stats">
                  {r.stats.map((s, i) =>
                  <div key={i} style={{ flex: 1 }}>
                      <div className="region-card-stat-val">{s.value}</div>
                      <div className="region-card-stat-lbl">{s.label}</div>
                    </div>
                  )}
                </div>
                <div className="region-card-expand">Read more →</div>
              </div>
            </article>);

        })}
      </div>
    </section>);

}

function InitiativesSection({ initiatives, onOpen, activeFilters }) {
  return (
    <section className="init-section" id="initiatives">
      <div className="section" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="section-eyebrow">7 Global Initiatives</div>
        <h2 className="section-title">
          Catalytic investments that ripple<br />
          across <span className="accent" style={{ fontSize: "110px" }}>every</span> region.
        </h2>
        <p className="section-lead">
          These aren't programs — they're the cross-cutting commitments that connect what God is doing
          everywhere NXT Move serves.
        </p>
        <div className="init-grid">
          {initiatives.map((init) => {
            const matches = activeFilters.length === 0 || init.interests.some((i) => activeFilters.includes(i));
            return (
              <article
                key={init.id}
                className="init-card"
                onClick={() => onOpen(init.id)}
                style={{ opacity: !matches && activeFilters.length > 0 ? 0.4 : 1 }}>
                
                <div className="init-card-num">{init.num}</div>
                <h3 className="init-card-name">{init.name}</h3>
                <p className="init-card-tagline">{init.tagline}</p>
                <div className="init-card-meta">
                  {init.stats.map((s, i) =>
                  <div key={i} className="init-card-stat">
                      <strong>{s.value}</strong>
                      {s.label.length > 60 ? s.label.slice(0, 60) + '…' : s.label}
                    </div>
                  )}
                </div>
              </article>);

          })}
        </div>
      </div>
    </section>);

}

function PullSection() {
  return (
    <section className="pull-section">
      <div className="pull-section-content">
        <p className="pull-section-quote" style={{ fontSize: "65px" }}>
          The world's most unreached young people are not waiting for a better strategy.<br />
          They are waiting to be <span className="script" style={{ color: "rgb(245, 241, 241)", fontSize: "100px", margin: "-35px 0px -80px" }}>activated.</span>
        </p>
        <div className="pull-section-attrib">
</div>
      </div>
    </section>);
}

function PartnerSection({ onDonate }) {
  const [tier, setTier] = React.useState('Catalyst');
  const [showInfo, setShowInfo] = React.useState(false);
  const tierMap = {
    Catalyst: 209,
    Champion: 12000,
    Backbone: 75000
  };

  const pushpayURL = 'https://pushpay.com/g/nxtmove?src=hpp';
  const kioskURL = 'https://pushpay.com/kiosk/nxtmove?src=wg-guest&a=1&f%5B0%5D=General%20Fund';

  return (
    <React.Fragment>
    <section className="cta-section" id="partner">
      <div className="section-eyebrow">Partner</div>
      <h2 className="cta-heading" style={{ margin: "0px 0px 64px", lineHeight: "1.3" }}>
        An investment in leaders is an investment in <span className="accent" style={{ fontSize: "140px", margin: "-40px 5.6px 0px 0px" }}>generations.</span>
      </h2>

      {/* ── Block 01: Relational ── */}
      <div className="partner-block">
        <div className="partner-block-num-display">01</div>
        <div className="partner-block-content">
          <div className="partner-block-eyebrow">Become Part of a Transformational Community</div>
          <h3 className="partner-block-heading">
            We’re not just looking for funders.<br />
            We&rsquo;re looking for <span className="accent">people</span> who want to be in this with us.
          </h3>
          <p className="partner-block-body">
            NXT Move is a community before it is a strategy. We&rsquo;re inviting you to join us in
            relationship — to dream and strategize alongside the next generation of leaders God is
            already raising up across 11 regions and 50+ nations. Come to the table. Pray with us.
            Sit in roundtables. Ask the hard questions. Belong to the family that is championing
            these leaders into their callings — not because you wrote a check, but because you said
            yes to walking this road with them.
          </p>
          <div className="cta-pairs">
            {[['Isolation', 'Relationship'], ['Duplication', 'Multiplication'],
              ['Disempowerment', 'Impact']].
              map(([from, to]) =>
              <div key={from} className="cta-pair">
                <div className="cta-pair-from">{from}</div>
                <div className="cta-pair-arrow">→</div>
                <div className="cta-pair-to">{to}</div>
              </div>
              )}
          </div>
        </div>
      </div>

      {/* ── Block 02: Financial ── */}
      <div className="partner-block">
        <div className="partner-block-num-display">02</div>
        <div className="partner-block-content">
          <div className="partner-block-eyebrow">Partner Financially</div>
          <h3 className="partner-block-heading">
            Not just transactional.<br />
            Your <span className="accent">stake</span> in the multiplier.
          </h3>
          <p className="partner-block-body">
            Your contribution is an invitation to stand alongside the leaders already doing the
            most important work on earth — in underground churches, city innovation hubs, training
            centers, and prayer movements across 11 regions and more than 50 nations. Your
            partnership targets the multiplier: the leader who goes back to a community and
            changes it. The training events are moments. The lasting investment is the network,
            the accountability community, and the relational infrastructure that keeps every
            leader growing, reporting, and multiplying long after any single gathering is over.
          </p>

          <div className="tier-grid tier-grid-cols">
            {PARTNER_TIERS.map((t) =>
              <div
                key={t.name}
                className={`tier ${tier === t.name ? 'selected' : ''}`}
                onClick={() => setTier(t.name)}>
                <div className="tier-head">
                  <div className="tier-name">{t.name}</div>
                  <div className="tier-range">{t.range}</div>
                </div>
                <div className="tier-flavor">{t.flavor}</div>
                <div className="tier-examples">
                  {t.examples.map((e, i) => <span key={i} className="tier-ex">{e}</span>)}
                </div>
              </div>
              )}
          </div>

          <div className="cta-button-row">
            <button className="btn-primary" onClick={() => onDonate(tierMap[tier])}>
              Partner as a {tier}
            </button>
            <button className="btn-secondary" onClick={() => onDonate(null)}>
              Give another amount
            </button>
            <button
                className={`btn-secondary btn-disclosure ${showInfo ? 'expanded' : ''}`}
                onClick={() => setShowInfo(!showInfo)}
                aria-expanded={showInfo}>
              {showInfo ? 'Hide giving info' : 'More giving info'}
              <span className="btn-disclosure-icon">{showInfo ? '−' : '+'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Inline expandable: More giving info ── */}
      <div className={`giving-disclose ${showInfo ? 'open' : ''}`} aria-hidden={!showInfo}>
        <div className="giving-disclose-inner">

          {/* Pushpay frame */}
          <div className="give-card give-card--feature">
            <div className="give-card-eyebrow">Pushpay · Secure giving</div>
            <h3 className="give-card-title">
              Give monthly. Or once.<br />
              <span className="accent">Either way</span>, fuel the next generation.
            </h3>
            <div className="give-twin">
              <div className="give-twin-card give-twin-card--primary">
                <div className="give-twin-tag">Most strategic</div>
                <div className="give-twin-label">Monthly partnership</div>
                <p>Predictable runway gives our regional leaders a year to plan catalytic gatherings, training cohorts, and soul-care infrastructure — instead of a year of fundraising.</p>
                <a className="btn-primary" href={pushpayURL} target="_blank" rel="noopener noreferrer">
                  Set up monthly →
                </a>
              </div>
              <div className="give-twin-card">
                <div className="give-twin-label">One-time gift</div>
                <p>Equally welcomed. Direct your gift to the General Fund and we&rsquo;ll deploy it where it&rsquo;s most strategic across all 11 regions.</p>
                <a className="btn-secondary" href={pushpayURL} target="_blank" rel="noopener noreferrer">
                  Give once →
                </a>
              </div>
            </div>
          </div>

          {/* How to give — 4 steps */}
          <div className="give-card">
            <div className="give-card-eyebrow">How to give in four steps</div>
            <ol className="give-steps">
              <li><span className="give-step-num">01</span><span className="give-step-text"><strong>Open Pushpay.</strong> Secure portal — credit, debit, or bank transfer.</span></li>
              <li><span className="give-step-num">02</span><span className="give-step-text"><strong>Choose recurring or one-time.</strong> Monthly partnership is the most strategic.</span></li>
              <li><span className="give-step-num">03</span><span className="give-step-text"><strong>Choose your amount and select General Fund.</strong> We deploy where it&rsquo;s most needed.</span></li>
              <li><span className="give-step-num">04</span><span className="give-step-text"><strong>Follow the on-screen steps.</strong> Pushpay handles confirmation, receipt, and your annual Statement.</span></li>
            </ol>
            <div className="give-help">
              <span>Stuck at any step?</span>
              <a href={kioskURL} target="_blank" rel="noopener noreferrer">Use the kiosk fallback →</a>
              <span className="give-help-sep">·</span>
              <a href="mailto:lynnae@nxtmove.global">Email Lynnae</a>
            </div>
          </div>

          {/* Other ways to give */}
          <div className="give-card">
            <div className="give-card-eyebrow">Other ways to give</div>
            <h3 className="give-card-title give-card-title--small">
              Stock, wire transfer, or mailed check.
            </h3>
            <div className="give-other">
              <div className="give-other-item">
                <div className="give-other-label">Stock donations</div>
                <p>Transfer appreciated stock for a tax-efficient gift. We&rsquo;ll send DTC instructions on request.</p>
              </div>
              <div className="give-other-item">
                <div className="give-other-label">Wire transfer</div>
                <p>Domestic and international wires welcomed for larger or organizational gifts.</p>
              </div>
              <div className="give-other-item">
                <div className="give-other-label">Mailed check</div>
                <p>Prefer paper? Email us for the mailing address and we&rsquo;ll confirm receipt.</p>
              </div>
            </div>
            <div className="give-other-contact-row">
              <a className="btn-secondary" href="mailto:lynnae@nxtmove.global">
                Contact Lynnae →
              </a>
              <span className="give-other-contact-email">lynnae@nxtmove.global</span>
            </div>
          </div>

          {/* 501c3 footnote */}
          <p className="give-501">
            <strong>NXT Move Inc.</strong> is a 501(c)(3) organization (EIN&nbsp;85-3161284). All
            donations are tax-deductible. A year-end Statement of Donations is emailed annually by
            January&nbsp;31. In accordance with IRS regulations, you agree to relinquish control of
            donated funds to the discretion of NXT Move at the direction of its board.
          </p>
        </div>
      </div>
    </section>
    <div className="partner-fullbleed">
      <img src="assets/partner-prayer.png" alt="" />
    </div>
    </React.Fragment>);

}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <img src="assets/logos/nxt-mark.png" alt="NXT Move" style={{ height: 56, marginBottom: 16 }} />
          <div className="footer-tagline">
            Elevating Leaders.<br />
            <span className="script">Multiplying impact.</span>
          </div>
          <p className="footer-mini">
            NXT Move Inc. is a registered 501(c)(3) nonprofit. All gifts are tax-deductible.
          </p>
        </div>
        <div className="footer-col">
          <h4>Regions</h4>
          <ul>
            <li><a href="#regions">All 11 regions</a></li>
            <li><a href="#regions">Africa</a></li>
            <li><a href="#regions">South Asia</a></li>
            <li><a href="#regions">Central Asia</a></li>
            <li><a href="#regions">Europe</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Initiatives</h4>
          <ul>
            <li><a href="#initiatives">10/40 Window</a></li>
            <li><a href="#initiatives">Soul Care</a></li>
            <li><a href="#initiatives">Women's Leadership</a></li>
            <li><a href="#initiatives">Mercy Ministry</a></li>
            <li><a href="#initiatives">Global Collab</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Partner</h4>
          <ul>
            <li><a href="#partner">Become a partner</a></li>
            <li><a href="#partner">Catalyst tier</a></li>
            <li><a href="#partner">Champion tier</a></li>
            <li><a href="#partner">Backbone tier</a></li>
            <li><a href="https://nxtmove.global">NxtMove.Global</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-rule">
        <span>© 2026 NXT Move Inc. · Partnership Prospectus</span>
        <span>Elevating Leaders. Multiplying Impact.</span>
      </div>
    </footer>);

}

function StickyTOC() {
  const [active, setActive] = React.useState('top');
  React.useEffect(() => {
    const sections = ['top', 'how', 'find', 'regions', 'dfw', 'initiatives', 'partner'];
    const onScroll = () => {
      const y = window.scrollY + 200;
      let cur = 'top';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
  { id: 'top', label: 'Top' },
  { id: 'how', label: 'How' },
  { id: 'find', label: 'Find Yours' },
  { id: 'regions', label: 'Regions' },
  { id: 'dfw', label: 'DFW' },
  { id: 'initiatives', label: 'Initiatives' },
  { id: 'partner', label: 'Partner' }];


  return (
    <div className="toc">
      {items.map((i) =>
      <a
        key={i.id}
        className={`toc-dot ${active === i.id ? 'active' : ''}`}
        data-label={i.label}
        href={`#${i.id}`} />

      )}
    </div>);

}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [activeFilters, setActiveFilters] = React.useState([]);
  const [openRegion, setOpenRegion] = React.useState(null);
  const [openInit, setOpenInit] = React.useState(null);
  const [hoverId, setHoverId] = React.useState(null);
  const [donateOpen, setDonateOpen] = React.useState(false);
  const [donateAmount, setDonateAmount] = React.useState(null);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme || 'light');
  }, [tweaks.theme]);

  const toggleFilter = (id) =>
  setActiveFilters((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  // Filter matches
  const matchCount = React.useMemo(() => {
    if (activeFilters.length === 0) return 0;
    const r = REGIONS.filter((x) => x.interests.some((i) => activeFilters.includes(i))).length;
    const i = INITIATIVES.filter((x) => x.interests.some((y) => activeFilters.includes(y))).length;
    return r + i;
  }, [activeFilters]);

  const region = openRegion ? REGIONS.find((r) => r.id === openRegion) : null;
  const init = openInit ? INITIATIVES.find((r) => r.id === openInit) : null;

  const openDonate = (amt) => {
    setDonateAmount(amt);
    setDonateOpen(true);
  };

  return (
    <div className="app">
      <TopNav onDonate={() => openDonate(null)} />
      <Hero />
      <StoryPrologue />
      <HowItWorks />
      <FindYours
        activeFilters={activeFilters}
        onSelectInterest={toggleFilter}
        matchCount={matchCount}
        onScrollToResults={() => {
          const el = document.getElementById('region-cards');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }} />
      
      <RegionsSection
        regions={REGIONS}
        onOpen={setOpenRegion}
        hoverId={hoverId}
        setHoverId={setHoverId}
        activeFilters={activeFilters}
        mapStyle={tweaks.mapStyle}
        editPins={tweaks.editPins} />
      
      <DFWSection onDonate={openDonate} />
      <PullSection />
      <InitiativesSection initiatives={INITIATIVES} onOpen={setOpenInit} activeFilters={activeFilters} />
      <PartnerSection onDonate={openDonate} />
      <Footer />
      <StickyTOC />

      {region && <RegionModal region={region} onClose={() => setOpenRegion(null)} />}
      {init && <InitiativeModal init={init} onClose={() => setOpenInit(null)} />}
      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} initialAmount={donateAmount} />

      <TweaksPanel>
        <TweakSection title="Appearance">
          <TweakRadio
            label="Theme"
            options={[{ value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' }]}
            value={tweaks.theme}
            onChange={(v) => setTweak('theme', v)} />
          <TweakRadio
            label="Region map"
            options={[
            { value: 'shaded', label: 'Shaded' },
            { value: 'filled', label: 'Filled' },
            { value: 'outline', label: 'Outline' },
            { value: 'original', label: 'Original' }]
            }
            value={tweaks.mapStyle}
            onChange={(v) => setTweak('mapStyle', v)} />
          <TweakToggle
            label="Edit pin positions"
            value={tweaks.editPins}
            onChange={(v) => setTweak('editPins', v)} />
          
        </TweakSection>
        <TweakSection title="Try a partnership level">
          <TweakButton onClick={() => openDonate(209)}>Open: $209 — Train one leader</TweakButton>
          <TweakButton onClick={() => openDonate(12000)}>Open: $12,000 — Roundtable cycle</TweakButton>
          <TweakButton onClick={() => openDonate(75000)}>Open: $75,000 — 10/40 Gathering</TweakButton>
        </TweakSection>
        <TweakSection title="Filter quick-pick">
          <TweakButton onClick={() => setActiveFilters(['multiplier', 'global-south'])}>
            "If you believe one leader multiplies thousands"
          </TweakButton>
          <TweakButton onClick={() => setActiveFilters(['unreached', '10-40'])}>
            "If your heart breaks for the least-reached"
          </TweakButton>
          <TweakButton onClick={() => setActiveFilters(['healthy-leaders'])}>
            "If you know healthy leaders change everything"
          </TweakButton>
          <TweakButton onClick={() => setActiveFilters([])}>Reset filters</TweakButton>
        </TweakSection>
      </TweaksPanel>
    </div>);

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// After React mounts, re-scroll to URL hash (since the target element didn't exist on initial parse)
if (window.location.hash) {
  const targetId = decodeURIComponent(window.location.hash.slice(1));
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  });
}