# NXT Move C4S — Netlify deploy

Two-page static site (Partnership Prospectus + Giving) for NXT Move.

## What changed from the original zip

The original was a "drop into a static host" package that did all its work in the
browser at every page load. That's fine for a Figma-style prototype host, but
it's expensive over the open internet. This repackage shifts that work to build
time so visitors get a fast page.

| Concern | Before | After |
|---|---|---|
| JSX transpilation | Babel Standalone, in the browser, every load (~3MB script + parse all JSX cold) | Pre-compiled at build time with `@babel/core` |
| React build | `react.development.js` UMD (unminified, with warnings) | `react.production.min.js` UMD |
| JSX file count loaded by browser | 11 separate files transpiled cold | 11 minified `.js` files, `defer`-loaded |
| Total JS bytes (network + parse) | ~3.2 MB Babel + 168 KB JSX text | ~140 KB React + ~70 KB compiled JS |
| Unused JSX shipped | `design-canvas.jsx` (31 KB, not referenced by any HTML) | removed |
| Unused image assets | 6 files / ~2.9 MB shipped, never referenced | removed |
| PNG sizes | hero-photo 1.5 MB, partner-prayer 2.2 MB, etc. at 956px tall (oversized) | downsampled & oxipng-compressed |
| Asset total | ~10 MB | ~4.3 MB |

The architecture is unchanged. `app.jsx` still reads `window.NXT_DATA`,
component files still register themselves with `window.X = X`. We only swapped
out the transpiler — no source file was refactored. That keeps the diff small
and reversible.

## Layout

```
.
├── src/                   ← edit here
│   ├── index.html         (was "Partnership Prospectus.html")
│   ├── giving.html        (was "Giving.html")
│   ├── *.jsx              (component files, unchanged from original)
│   └── *.css              (unchanged from original)
├── public/                ← deploy target; build.mjs writes into it
│   └── assets/            ← images & SVGs (committed; not regenerated)
├── build.mjs              ← transpile + minify + html rewrite
├── netlify.toml           ← Netlify build config + cache headers + redirects
└── package.json
```

`assets/` is committed because it's not a build artifact — there's no source
representation of those PNGs. `public/*.html`, `public/*.js`, `public/*.css`
are regenerated on every build, so they're gitignored.

## Local development

```bash
npm install
npm run dev
# → http://localhost:8080
```

`npm run dev` builds once and starts a static server. There's no watch mode —
edit a file, re-run `npm run build`, hard-refresh. (If that gets annoying we
can add chokidar-based watching later; for a 2-page brochure site it's not
worth the complexity yet.)

## Deploy to Netlify

### Recommended: Git-connected deploy

1. Push this directory to a Git repo (GitHub / GitLab / Bitbucket).
2. In the Netlify UI: **Add new site → Import an existing project**.
3. Pick the repo. Netlify auto-detects `netlify.toml`, so build command and
   publish directory are already set:
   - Build command: `npm run build`
   - Publish directory: `public`
4. Hit **Deploy**. First build takes ~30s.

### Alternative: drag-and-drop

⚠️ **Drag-and-drop deploys ignore `netlify.toml`.** Netlify just serves whatever
folder you drop, so the build command, publish directory, redirects, and cache
headers in `netlify.toml` are all skipped. You must build locally first and
drop the `public/` folder specifically — not the project root.

```bash
npm install
npm run build
# Then drag the public/ folder (not nxt_move_netlify/) onto Netlify's deploy UI
```

If `/` returns 404 after a drag-and-drop deploy, you almost certainly dragged
the wrong folder. The browser is asking for `index.html`, and Netlify is
serving a directory that doesn't have one at its root.

## URL routing

- `/` → Partnership Prospectus (`index.html`)
- `/giving` → Giving page (clean URL, no `.html`)
- `/Partnership%20Prospectus.html` → 301 to `/`
- `/Giving.html` → 301 to `/giving.html`

The legacy 301s are a safety net in case any external link still uses the old
filenames. Drop them once you're sure nothing references them.

## Cache headers

- HTML: `max-age=0, must-revalidate` — always re-checked, so content updates
  ship instantly.
- JS / CSS / assets: `max-age=31536000, immutable` — cached for a year. Source
  files use `?v=N` querystring cachebusters where needed (e.g. `styles.css?v=2`),
  so bumping that string in the HTML invalidates the cache without renaming
  the file.

## Things I did NOT do (and why)

- **Didn't introduce Vite / Webpack / a real bundler.** The current code uses
  globals and script-tag ordering. A bundler would force converting everything
  to ES modules, which is a larger refactor with real risk on a working site.
  The pre-compile-each-file approach captures most of the win for ~70 lines of
  build script.
- **Didn't convert PNGs to WebP.** Several big PNGs (`hero-photo`,
  `partner-prayer`, `chevrons`) have real transparency, so a JPG conversion
  would lose alpha. WebP would work but requires `<picture>` elements with
  PNG fallbacks, which means touching the JSX. Lossless re-compression +
  downsampling got us most of the size reduction without changing source.
  If you want the next 30% off, switching to WebP with `<picture>` fallback
  is the move — happy to do that as a follow-up.
- **Didn't remove `tweaks-panel.jsx`.** Even though it's a dev-only Figma-
  prototype-host panel, `app.jsx` actually uses its `useTweaks` hook for theme
  state. Untangling that is doable but wasn't necessary for the deploy.
- **Didn't add an SRI hash to the production React UMDs.** The `.development`
  versions had hashes that the production versions don't match. You can add
  fresh ones from Cloudflare/unpkg if you care, but pinning by version on a
  reputable CDN is the practical equivalent.
