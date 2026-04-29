/* Real-geography world map options.
   - filled / outline: PNG silhouette + colored pins
   - shaded: SVG with each country tinted by its region's accent color
*/

const PIN_COORDS_PNG = {
  'north-america':  { x: 25.6, y: 38.1 },
  'latin-america':  { x: 31.2, y: 55.6 },
  'brazil':         { x: 37.3, y: 68.6 },
  'europe':         { x: 48.4, y: 34.2 },
  'africa':         { x: 53.5, y: 62.0 },
  'middle-east':    { x: 55.3, y: 46.2 },
  'central-asia':   { x: 69.3, y: 23.9 },
  'south-asia':     { x: 65.6, y: 47.5 },
  'east-asia':      { x: 71.1, y: 39.1 },
  'southeast-asia': { x: 72.1, y: 56.5 },
  'south-pacific':  { x: 77.4, y: 73.9 },
};

/* Pin coords for the SVG variant (2000×857 viewBox, different cropping). */
const PIN_COORDS_SVG = {
  'north-america':  { x: 24.3, y: 27.7 },
  'latin-america':  { x: 29.5, y: 52.1 },
  'brazil':         { x: 35.3, y: 63.8 },
  'europe':         { x: 51.0, y: 28.0 },
  'africa':         { x: 56.4, y: 56.6 },
  'middle-east':    { x: 59.9, y: 36.7 },
  'central-asia':   { x: 68.4, y: 19.3 },
  'south-asia':     { x: 70.4, y: 41.9 },
  'east-asia':      { x: 76.0, y: 32.4 },
  'southeast-asia': { x: 80.5, y: 56.0 },
  'south-pacific':  { x: 85.3, y: 72.6 },
};

/* Lazy-loaded SVG markup (fetched once and cached). */
let _svgPromise = null;
function loadShadedSvg() {
  if (!_svgPromise) {
    _svgPromise = fetch('assets/world-countries-tagged.svg')
      .then((r) => r.text())
      .catch((e) => { console.error('Map SVG failed to load', e); return ''; });
  }
  return _svgPromise;
}

function ShadedSvgLayer({ regions, hoveredId }) {
  const ref = React.useRef(null);
  const [markup, setMarkup] = React.useState('');

  React.useEffect(() => {
    let cancelled = false;
    loadShadedSvg().then((txt) => { if (!cancelled) setMarkup(txt); });
    return () => { cancelled = true; };
  }, []);

  // Apply per-region fills via CSS custom properties on the wrapper.
  // Each path gets `fill: var(--fill-<region>)` via the stylesheet.
  const styleVars = {};
  regions.forEach((r) => {
    styleVars[`--fill-${r.id}`] = r.accentSolid;
  });
  styleVars['--hover-region'] = hoveredId || 'none';

  return (
    <div
      ref={ref}
      className="geo-svg-layer"
      style={styleVars}
      data-hover={hoveredId || ''}
      dangerouslySetInnerHTML={{ __html: markup }} />
  );
}

function GeoMap({ regions, onSelect, onHover, activeRegion, variant, editMode }) {
  const isShaded = variant === 'shaded';
  const [hoveredId, setHoveredId] = React.useState(null);
  const [pickedId, setPickedId] = React.useState(null);
  const [coordsPng, setCoordsPng] = React.useState(PIN_COORDS_PNG);
  const [coordsSvg, setCoordsSvg] = React.useState(PIN_COORDS_SVG);
  const canvasRef = React.useRef(null);

  const coords = isShaded ? coordsSvg : coordsPng;
  const setCoords = isShaded ? setCoordsSvg : setCoordsPng;

  const handleHover = (id) => {
    setHoveredId(id);
    if (onHover) onHover(id);
  };
  const activeId = hoveredId || activeRegion;

  const onPinClick = (e, id) => {
    if (editMode) {
      e.stopPropagation();
      setPickedId(pickedId === id ? null : id);
    } else {
      onSelect(id);
    }
  };

  const onCanvasClick = (e) => {
    if (!editMode || !pickedId) return;
    const target = canvasRef.current.querySelector(isShaded ? '.geo-svg-layer svg' : '.geo-base');
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (x < 0 || x > 100 || y < 0 || y > 100) return;
    setCoords((c) => ({ ...c, [pickedId]: { x: +x.toFixed(1), y: +y.toFixed(1) } }));
  };

  const renderBase = () => {
    if (isShaded) {
      return <ShadedSvgLayer regions={regions} hoveredId={activeId} />;
    }
    const imgSrc = variant === 'outline' ? 'assets/world-outline.png' : 'assets/world-filled.png';
    return <img className="geo-base" src={imgSrc} alt="" aria-hidden="true" />;
  };

  return (
    <div className={`geo-wrap geo-${variant} ${editMode ? 'is-editing' : ''}`}>
      <div className="geo-canvas" ref={canvasRef} onClick={onCanvasClick}>
        {renderBase()}
        {regions.map((r) => {
          const pin = coords[r.id];
          if (!pin) return null;
          const isActive = activeId === r.id;
          const isPicked = pickedId === r.id;
          return (
            <button
              key={r.id}
              className={`geo-pin ${isActive ? 'is-active' : ''} ${isPicked ? 'is-picked' : ''}`}
              style={{
                left: `${pin.x}%`,
                top: `${pin.y}%`,
                '--pin-color': r.accentSolid,
              }}
              onClick={(e) => onPinClick(e, r.id)}
              onMouseEnter={() => handleHover(r.id)}
              onMouseLeave={() => handleHover(null)}
              aria-label={`Open ${r.name}`}>
              <span className="geo-pin-dot" />
              <span className="geo-pin-ring" />
              <span className="geo-pin-label">
                <span className="geo-pin-num">{r.num}</span>
                {r.name}
              </span>
            </button>
          );
        })}
      </div>
      <div className="geo-caption">
        {editMode
          ? (pickedId
              ? `Editing ${regions.find(r => r.id === pickedId)?.name} — click on the map to drop the pin.`
              : 'Edit mode: click a pin to pick it up, then click on the map to move it.')
          : 'Hover any pin to see the region name. Click to open the full brief.'}
      </div>
      {editMode && (
        <div className="geo-edit-panel">
          <div className="geo-edit-title">
            Pin coordinates ({isShaded ? 'PIN_COORDS_SVG' : 'PIN_COORDS_PNG'})
          </div>
          <pre className="geo-edit-code">{`const ${isShaded ? 'PIN_COORDS_SVG' : 'PIN_COORDS_PNG'} = {
${regions.map(r => `  '${r.id}':${' '.repeat(Math.max(0, 18 - r.id.length))}{ x: ${coords[r.id].x.toString().padStart(4, ' ')}, y: ${coords[r.id].y.toString().padStart(4, ' ')} },`).join('\n')}
};`}</pre>
        </div>
      )}
    </div>
  );
}

window.GeoMap = GeoMap;
