/* MobileAccordion — wraps content with a tappable header on mobile (≤720px).
   On desktop it renders children flat (no chrome, no listeners). */

const MOBILE_QUERY = '(max-width: 720px)';

function useIsMobile() {
  const [m, setM] = React.useState(() =>
    typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(MOBILE_QUERY).matches : false);
  React.useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const handler = (e) => setM(e.matches);
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
    setM(mq.matches);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler);
    };
  }, []);
  return m;
}

/*
  <MobileAccordion
    id="how"                  // anchor id (hoists from inner section if you pass anchor=false)
    eyebrow="How NXT Move Works"
    title="How it works"
    meta="3 ways"             // optional right-side chip
    defaultOpen={false}       // mobile only
    open={controlledOpen}     // optional controlled
    onToggle={(next)=>...}    // optional
    variant="section"         // "section" | "card" | "footer"
  >
    {children}
  </MobileAccordion>
*/
function MobileAccordion({
  id,
  eyebrow,
  title,
  meta,
  defaultOpen = false,
  open: openProp,
  onToggle,
  variant = 'section',
  className = '',
  children,
  forceOpen = false,        // when true, always render expanded even on mobile (e.g. filter match)
}) {
  const isMobile = useIsMobile();
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = forceOpen ? true : (isControlled ? openProp : internalOpen);

  // If the URL hash points at this id, force-open on mount so anchor links work on mobile
  React.useEffect(() => {
    if (!isMobile || !id) return;
    if (window.location.hash === '#' + id && !open) {
      if (isControlled) onToggle && onToggle(true);
      else setInternalOpen(true);
    }
    const onHash = () => {
      if (window.location.hash === '#' + id) {
        if (isControlled) onToggle && onToggle(true);
        else setInternalOpen(true);
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  // eslint-disable-next-line
  }, [id, isMobile, isControlled]);

  const toggle = () => {
    const next = !open;
    if (isControlled) onToggle && onToggle(next);
    else setInternalOpen(next);
    if (onToggle && !isControlled) onToggle(next);
  };

  if (!isMobile) {
    // Desktop: render children inline, attach id for anchor scroll
    return (
      <div id={id} className={`ma-passthrough ma-${variant} ${className}`}>
        {children}
      </div>);
  }

  return (
    <div id={id} className={`ma ma--${variant} ${open ? 'ma--open' : ''} ${className}`}>
      <button
        type="button"
        className="ma-header"
        aria-expanded={open}
        onClick={toggle}>
        <div className="ma-header-text">
          {eyebrow && <div className="ma-eyebrow">{eyebrow}</div>}
          {title && <div className="ma-title">{title}</div>}
        </div>
        {meta && <span className="ma-meta">{meta}</span>}
        <span className={`ma-chev ${open ? 'open' : ''}`} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className="ma-body" hidden={!open}>
        {open && children}
      </div>
    </div>);
}

window.MobileAccordion = MobileAccordion;
window.useIsMobile = useIsMobile;
