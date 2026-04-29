/* NXT Move Giving page */

const PUSHPAY_URL = 'https://pushpay.com/g/nxtmove?src=hpp';

function TopNav() {
  return (
    <header className="topnav">
      <div className="topnav-inner">
        <a href="index.html" className="topnav-brand">
          <img src="assets/logos/nxt-horizontal.png" alt="NXT Move" />
        </a>
        <nav className="topnav-links">
          <a className="topnav-link" href="index.html">Prospectus</a>
          <a className="topnav-link" href="index.html#regions">Regions</a>
          <a className="topnav-link" href="index.html#initiatives">Initiatives</a>
          <a className="topnav-link" href="index.html#partner">Partner</a>
          <a className="topnav-cta" href={PUSHPAY_URL} target="_blank" rel="noopener noreferrer">Give</a>
        </nav>
      </div>
    </header>);

}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>);

}

function Hero() {
  return (
    <section className="giving-hero">
      <div className="giving-hero-bg" />
      <div className="giving-hero-inner">
        <a href="index.html" className="back-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Back to Prospectus
        </a>
        <div className="giving-eyebrow" style={{ color: "rgb(10, 10, 10)", lineHeight: "1", fontSize: "50px", padding: "0px 0px 60px" }}>PARTNER WITH US IN OUR AUDACIOUS MISSION:





        </div>
        <p className="giving-hero-kicker">
</p>
        <h1 className="giving-hero-title" style={{ fontSize: "80px", textAlign: "center", margin: "0px 0px 36px 225px", lineHeight: 1 }}>
          A next generation that <span className="grad" style={{ padding: "0px 35px 0px 0px", margin: "0px -3px 0px 0px", fontSize: "80px" }}>KNOWS   AND FOLLOWS</span>
          <br /><span className="giving-hero-script" style={{ margin: "0px 0px 30px", padding: "0px 10px 30px", fontSize: "100px", color: "rgb(10, 10, 10)" }}>Jesus.</span>
        </h1>
        <p className="giving-hero-lede">Behind every leader we equip is a partner who said yes.
Yours is the gift that puts another name on that list.
        </p>
        <a href={PUSHPAY_URL} target="_blank" rel="noopener noreferrer" className="giving-hero-cta">
          Click here to give
          <span className="giving-hero-cta-arrow"><Arrow /></span>
        </a>
      </div>
    </section>);}const STATS = [{ num: '80%', text: 'of Christians made the decision to follow Jesus before the age of 18.'
},
{
  num: '38%',
  text: 'of Millennials are leaving the Church — and they\u2019re not going back.'
},
{
  num: '52%',
  text: 'of teens globally say they never read religious scripture on their own.'
}];


function StatsBand() {
  return (
    <section className="giving-stats">
      <div className="giving-stats-inner">
        <div className="giving-stats-eyebrow">Why now</div>
        <h2 className="giving-stats-title" style={{ margin: "0px 0px 64px" }}>The window for the next generation is open. Not for long.

        </h2>
        <div className="giving-stat-grid">
          {STATS.map((s, i) =>
          <div key={i} className="giving-stat-card">
              <div className="giving-stat-num">{s.num}</div>
              <p className="giving-stat-text">{s.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

const GENEROSITY = [
{
  num: '01',
  title: 'Develop regional leaders across all 11 regions',
  body: 'Equipping the men and women on the ground who mobilize local teams, train next-generation leaders, and carry the weight of their region\u2019s mission.'
},
{
  num: '02',
  title: 'Advance the Gospel through catalytic gatherings',
  body: 'Funding strategic global and regional projects — convenings, roundtables, and partnerships that turn isolated effort into coordinated movement.'
},
{
  num: '03',
  title: 'Enable local leaders to engage globally',
  body: 'Overcoming the financial barriers that keep gifted local leaders from the relationships and resources that would multiply their impact tenfold.'
},
{
  num: '04',
  title: 'Build the relationships that sustain mission',
  body: 'Creating the spaces — soul care networks, mentor relationships, peer cohorts — where leaders are formed, sustained, and sent back stronger.'
}];


function Generosity() {
  return (
    <section className="generosity">
      <div className="generosity-inner">
        <div className="generosity-head">
          <div>
            <div className="giving-eyebrow">ENABLING GLOBAL COMMUNITY</div>
            <h2 className="generosity-title" style={{ lineHeight: "0.8" }}>
              What your <span className="accent" style={{ fontSize: "110px", padding: "0px 20px 0px 0px" }}>generosity</span> empowers us to do.
            </h2>
          </div>
          <p className="generosity-sub">Your gift funds the unseen connective tissue that makes 11 regions work as one — the relational infrastructure that keeps leaders multiplying.

          </p>
        </div>
        <div className="generosity-grid">
          {GENEROSITY.map((g, i) =>
          <article key={i} className="generosity-card">
              <div className="generosity-card-num">{g.num}</div>
              <h3 className="generosity-card-title">{g.title}</h3>
              <p className="generosity-card-body">{g.body}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}

function Legal() {
  return (
    <section className="legal">
      <div className="legal-inner">
        <div className="legal-eyebrow" style={{ fontSize: "50px", lineHeight: "1" }}>The NXT Move</div>
        <h2 className="legal-title">
          is a <span className="grad">501(c)(3)</span> organization.
        </h2>
        <p className="legal-body">
          All donations to <strong>NXT Move Inc.</strong> (EIN: 85-3161284) are tax-deductible, and a year-end Statement of Donations will be emailed to you annually by January 31. Unless otherwise communicated and in accordance with IRS regulations, you agree to relinquish control of the donated funds to the discretion of NXT Move, at the direction of its board. Thanks so much for your generosity. For stock donations, wire transfers or if you prefer to mail a check, please contact Lynnae@nxtmove.global.
        </p>
      </div>
    </section>);

}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-inner">
        <span className="final-cta-script">Together,</span>
        <h2 className="final-cta-title">Let&rsquo;s change the world.</h2>
        <a href={PUSHPAY_URL} target="_blank" rel="noopener noreferrer" className="final-cta-button">
          Give Now
          <span className="final-cta-button-arrow"><Arrow /></span>
        </a>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <img src="assets/logos/nxt-mark.png" alt="NXT Move" style={{ height: 56, marginBottom: 16 }} />
          <div className="footer-tagline">
            Elevating Leaders.<br />
            Multiplying <span className="script">Impact.</span>
          </div>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="index.html">Prospectus</a></li>
            <li><a href="index.html#regions">11 Regions</a></li>
            <li><a href="index.html#initiatives">Initiatives</a></li>
            <li><a href="index.html#partner">Partner</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Give</h4>
          <ul>
            <li><a href={PUSHPAY_URL} target="_blank" rel="noopener noreferrer">One-time gift</a></li>
            <li><a href={PUSHPAY_URL} target="_blank" rel="noopener noreferrer">Recurring gift</a></li>
            <li><a href="https://nxtmove.global">NxtMove.Global</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:lynnae@nxtmove.global">lynnae@nxtmove.global</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-rule">
        <span>© 2026 NXT Move Inc. · EIN 85-3161284</span>
        <span>Elevating Leaders. Multiplying Impact.</span>
      </div>
    </footer>);

}

function App() {
  return (
    <React.Fragment>
      <TopNav />
      <Hero />
      <StatsBand />
      <Legal />
      <FinalCTA />
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);