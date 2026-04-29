/* World map component — stylized SVG with 11 region dots */
const REGION_COORDS = {
  'africa':         { x: 540, y: 350, label: 'Africa' },
  'brazil':         { x: 350, y: 420, label: 'Brazil' },
  'central-asia':   { x: 660, y: 220, label: 'Central Asia' },
  'east-asia':      { x: 800, y: 240, label: 'East Asia' },
  'europe':         { x: 530, y: 200, label: 'Europe' },
  'latin-america':  { x: 270, y: 380, label: 'Latin America' },
  'middle-east':    { x: 590, y: 270, label: 'MENA' },
  'north-america':  { x: 200, y: 230, label: 'N. America' },
  'south-asia':     { x: 720, y: 290, label: 'South Asia' },
  'southeast-asia': { x: 800, y: 340, label: 'SE Asia' },
  'south-pacific':  { x: 880, y: 460, label: 'S. Pacific' },
};

function WorldMap({ regions, activeRegion, onSelect, onHover }) {
  return (
    <div className="map-wrap">
      <svg className="world-map" viewBox="0 0 1000 560" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="mapBg" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(255,107,26,0.06)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="1000" height="560" fill="url(#mapBg)" />

        {/* Stylized continents — abstract blobs, not literal cartography */}
        <g fill="currentColor" opacity="0.08">
          {/* North America */}
          <path d="M 80 130 Q 130 100 210 110 Q 280 130 290 200 Q 300 280 250 320 L 200 340 Q 150 320 120 280 Q 90 230 80 180 Z" />
          {/* South America */}
          <path d="M 280 350 Q 320 360 350 400 Q 380 470 360 510 Q 330 540 300 510 Q 270 460 270 410 Z" />
          {/* Europe */}
          <path d="M 470 170 Q 520 150 570 170 Q 600 200 580 230 Q 540 240 500 230 Q 470 210 470 180 Z" />
          {/* Africa */}
          <path d="M 510 270 Q 560 270 590 310 Q 610 380 580 440 Q 540 460 510 430 Q 480 380 490 320 Z" />
          {/* MENA */}
          <path d="M 580 240 Q 630 240 650 270 Q 660 300 630 310 Q 600 310 585 285 Z" />
          {/* Central / South Asia */}
          <path d="M 620 200 Q 700 190 760 210 Q 790 240 770 280 Q 720 320 680 300 Q 640 270 620 230 Z" />
          {/* East Asia */}
          <path d="M 770 200 Q 830 200 860 240 Q 870 280 830 290 Q 790 280 770 250 Z" />
          {/* SE Asia */}
          <path d="M 780 320 Q 830 320 850 350 Q 850 380 820 380 Q 790 370 780 340 Z" />
          {/* Australia / Pacific */}
          <path d="M 850 440 Q 910 440 930 470 Q 920 500 880 500 Q 850 490 845 460 Z" />
        </g>

        {/* Connection lines suggesting global community */}
        <g stroke="rgba(255,107,26,0.18)" strokeWidth="1" fill="none" strokeDasharray="2 4">
          {regions.map((r, i) => {
            const c = REGION_COORDS[r.id];
            if (!c) return null;
            const next = regions[(i + 1) % regions.length];
            const nc = REGION_COORDS[next.id];
            if (!nc) return null;
            return <line key={r.id} x1={c.x} y1={c.y} x2={nc.x} y2={nc.y} />;
          })}
        </g>

        {/* Region dots */}
        {regions.map((r) => {
          const c = REGION_COORDS[r.id];
          if (!c) return null;
          const active = activeRegion === r.id;
          return (
            <g
              key={r.id}
              className={`region-dot ${active ? 'active' : ''}`}
              transform={`translate(${c.x}, ${c.y})`}
              onClick={() => onSelect(r.id)}
              onMouseEnter={() => onHover && onHover(r.id)}
              onMouseLeave={() => onHover && onHover(null)}
            >
              <circle className="dot-pulse" r="11" fill={r.accentSolid} />
              <circle className="dot-core" r="11" fill={r.accentSolid} stroke="white" strokeWidth="2.5" />
              <text y="-22" fill="currentColor">{c.label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

window.WorldMap = WorldMap;
