/* StoryPrologue
   Sits above the existing hero/mission area.

   Sections:
   1. "The Future is Being Shaped Today" — opening line + brochure narrative
   2. Isolation → Impact — three transformation cards, each with a click-to-play video
   3. "How We Measure Impact" — three-question framework with chevron arrows
   4. Featured "Because of You" video — full-bleed thank-you piece + closing line
*/

const PROLOGUE_VIDEOS = {
  isolation: { youtubeId: 'FRPvmEUJTMM', title: 'Isolation → Relationship' },
  duplication: { youtubeId: 'G6UmHcX1hxc', title: 'Duplication → Multiplication' },
  disempowerment: { youtubeId: 'Y-rSpiXQVac', title: 'Disempowerment → Impact' },
  featured: { youtubeId: 'FzlW714-5J4', title: 'Because of You' }
};

const ytThumb = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const ytEmbed = (id) => `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;

function VideoCard({ video, accent, label, headline, body }) {
  const [playing, setPlaying] = React.useState(false);
  const handlePlay = () => setPlaying(true);
  return (
    <article className="story-card">
      <div className="story-card-media">
        {!playing ?
        <button
          className="story-card-poster"
          onClick={handlePlay}
          style={{ backgroundImage: `url(${ytThumb(video.youtubeId)})` }}
          aria-label={`Play ${video.title}`}>
            <span className="story-play-btn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span className="story-card-runtime">Watch story</span>
          </button> :
        <iframe
          className="story-card-video"
          src={ytEmbed(video.youtubeId)}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
        }
      </div>
      <div className="story-card-body">
        <div className="story-card-arrow">
          <span className="story-from" style={{ fontSize: "14px" }}>{label.from}</span>
          <svg className="story-arrow-svg" width="40" height="14" viewBox="0 0 40 14" aria-hidden="true">
            <path d="M0 7 L34 7 M28 1 L34 7 L28 13" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="story-to" style={{ color: accent, fontSize: "14px" }}>{label.to}</span>
        </div>
        <h3 className="story-card-headline">{headline}</h3>
        <p className="story-card-body-text">{body}</p>
      </div>
    </article>);

}

function StoryPrologue() {
  const [featuredPlaying, setFeaturedPlaying] = React.useState(false);
  const featured = PROLOGUE_VIDEOS.featured;
  const handleFeaturedPlay = () => setFeaturedPlaying(true);

  return (
    <section className="story-prologue" id="story">
      {/* Section 1 — Opening */}
      <div className="story-intro">
        <div className="story-eyebrow">A story before the strategy</div>
        <h2 className="story-headline">
          The future is being shaped <em className="story-italic" style={{ padding: "0px 15px 0px 0px" }}>today</em>.
        </h2>
        <p className="story-lead">
          When leaders are strengthened through meaningful relationships, collaboration, and support,
          the ripple effects reach far beyond a single ministry or organization.
        </p>
        <p className="story-lead-emphasis">
          Stronger leaders mean stronger churches, stronger communities,
          and a stronger future for the next generation.
        </p>
      </div>

      {/* Section 2 — Three transformations */}
      <div className="story-transform-header">
        <div className="story-eyebrow">Helping leaders move from</div>
        <h3 className="story-transform-title">
          <span className="story-outline">Isolation</span>
          <span className="story-arrow-big" aria-hidden="true">→</span>
          <span className="story-impact">Impact</span>
        </h3>
        <p className="story-transform-sub">
          Across the world, leaders serving the next generation often face significant barriers
          that limit their ability to flourish and lead effectively. NXT Move helps leaders
          overcome those barriers — so their impact can multiply.
        </p>
      </div>

      <div className="story-grid">
        <VideoCard
          video={PROLOGUE_VIDEOS.isolation}
          accent="#FF6B1A"
          label={{ from: 'Isolation', to: 'Relationship' }}
          headline="A leader who once felt alone discovers a global community."
          body="Many leaders carry the responsibility of serving the next generation alone. NXT Move connects them with trusted peers and mentors who provide encouragement, wisdom, and soul care for the journey." />

        <VideoCard
          video={PROLOGUE_VIDEOS.duplication}
          accent="#E11D0F"
          label={{ from: 'Duplication', to: 'Multiplication' }}
          headline="Scattered effort becomes collaborative movement."
          body="Too often organizations work toward the same goals without meaningful collaboration. NXT Move brings leaders together around shared challenges so they can align their efforts and multiply their impact." />

        <VideoCard
          video={PROLOGUE_VIDEOS.disempowerment}
          accent="#B81208"
          label={{ from: 'Disempowerment', to: 'Impact' }}
          headline="Leaders who once felt limited begin to see their impact grow."
          body="Many leaders lack access to the resources, insight, and support needed to expand their influence. NXT Move helps them gain the relationships, knowledge, and opportunities that allow them to lead with greater confidence and effectiveness." />

      </div>

      {/* Section 3 — How We Measure Impact */}
      <div className="story-measure">
        <div className="story-measure-header">
          <div className="story-eyebrow">WHAT DOES SUCCESS LOOK LIKE?</div>
          <h3 className="story-measure-title">Three questions to measure impact:</h3>
        </div>
        <div className="story-measure-grid">
          <div className="story-measure-item">
            <span className="story-measure-num">01</span>
            <p>Does the next generation <strong>follow Jesus</strong>?</p>
          </div>
          <div className="story-measure-chev" aria-hidden="true">
            <svg width="56" height="32" viewBox="0 0 56 32"><path d="M8 4l16 12-16 12M28 4l16 12-16 12" fill="none" stroke="url(#story-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><defs><linearGradient id="story-grad" x1="0" x2="1"><stop offset="0%" stopColor="#FFC60B" /><stop offset="50%" stopColor="#FF6B1A" /><stop offset="100%" stopColor="#E11D0F" /></linearGradient></defs></svg>
          </div>
          <div className="story-measure-item">
            <span className="story-measure-num">02</span>
            <p>Does the next generation <strong>participate in His mission</strong>?</p>
          </div>
          <div className="story-measure-chev" aria-hidden="true">
            <svg width="56" height="32" viewBox="0 0 56 32"><path d="M8 4l16 12-16 12M28 4l16 12-16 12" fill="none" stroke="url(#story-grad-2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><defs><linearGradient id="story-grad-2" x1="0" x2="1"><stop offset="0%" stopColor="#FFC60B" /><stop offset="50%" stopColor="#FF6B1A" /><stop offset="100%" stopColor="#E11D0F" /></linearGradient></defs></svg>
          </div>
          <div className="story-measure-item">
            <span className="story-measure-num">03</span>
            <p>Does the next generation's <strong>world look different</strong> because of Him?</p>
          </div>
        </div>
      </div>

      {/* Section 4 — Featured "Because of You" video */}
      <div className="story-featured">
        <div className="story-featured-frame">
          {!featuredPlaying ?
          <button
            className="story-featured-poster"
            onClick={handleFeaturedPlay}
            style={{ backgroundImage: `url(${ytThumb(featured.youtubeId)})` }}
            aria-label={`Play ${featured.title}`}>
              <div className="story-featured-poster-content">
                <span className="story-featured-eyebrow">
</span>
                <span className="story-featured-title">Because of you.</span>
                <span className="story-play-btn story-play-btn-lg">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </span>
                <span className="story-featured-cta">Play video</span>
              </div>
            </button> : <iframe
            className="story-featured-video"
            src={ytEmbed(featured.youtubeId)}
            title={featured.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
          }
        </div>
        <p className="story-featured-line">
          This work is made possible by partners who believe the next generation
          is worth our best collaboration.
        </p>
      </div>

      <div className="story-divider" aria-hidden="true">
        <span className="story-divider-mark">This is <strong>NXT Move</strong>.</span>
      </div>
    </section>);

}

window.StoryPrologue = StoryPrologue;