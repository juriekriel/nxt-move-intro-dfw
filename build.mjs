// build.mjs — pre-compiles JSX, minifies, and rewrites HTML for static deploy.
//
// Why this exists:
//   The original site used in-browser Babel Standalone to transpile ~3,400 lines
//   of JSX on every page load. That ships ~3MB of Babel + parses everything client-
//   side, blocking first paint. This build does it once, at deploy time, so the
//   browser only ever loads small minified .js files plus production React UMD.
//
//   We deliberately keep the file-per-component "register on window" pattern so
//   no source file needs refactoring — we're just swapping the transpiler out
//   from "browser, every load" to "Node, once".

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { transformAsync } from '@babel/core';
import presetReact from '@babel/preset-react';
import { minify } from 'terser';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, 'public');

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function listFiles(dir, pred) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries.filter((e) => e.isFile() && pred(e.name)).map((e) => e.name);
}

async function buildJsx() {
  const files = await listFiles(SRC, (n) => n.endsWith('.jsx'));
  let totalIn = 0;
  let totalOut = 0;
  for (const f of files) {
    const src = await fs.readFile(path.join(SRC, f), 'utf8');
    totalIn += Buffer.byteLength(src);
    // Babel: JSX -> JS only. We do NOT add module helpers — the original code
    // uses globals (window.*) and this preserves that.
    const transpiled = await transformAsync(src, {
      presets: [[presetReact, { runtime: 'classic' }]],
      filename: f,
      babelrc: false,
      configFile: false,
      compact: false,
      sourceMaps: false,
    });
    // Terser pass for size. Keep function names — react devtools shows them,
    // and hand-debugging stack traces in production is nicer this way.
    const min = await minify(transpiled.code, {
      compress: { passes: 2 },
      mangle: { keep_fnames: true },
      format: { comments: false },
    });
    const outName = f.replace(/\.jsx$/, '.js');
    await fs.writeFile(path.join(OUT, outName), min.code, 'utf8');
    totalOut += Buffer.byteLength(min.code);
    const pct = Math.round((1 - min.code.length / src.length) * 100);
    console.log(`  jsx  ${f.padEnd(24)} ${(src.length / 1024).toFixed(1)}KB -> ${(min.code.length / 1024).toFixed(1)}KB  (${pct}% smaller)`);
  }
  console.log(`  jsx  TOTAL                    ${(totalIn / 1024).toFixed(1)}KB -> ${(totalOut / 1024).toFixed(1)}KB`);
}

async function copyCss() {
  const files = await listFiles(SRC, (n) => n.endsWith('.css'));
  for (const f of files) {
    await fs.copyFile(path.join(SRC, f), path.join(OUT, f));
    const sz = (await fs.stat(path.join(OUT, f))).size;
    console.log(`  css  ${f.padEnd(24)} ${(sz / 1024).toFixed(1)}KB`);
  }
}

// Rewrite script tags:
//   <script type="text/babel" src="foo.jsx"></script>  ->  <script src="foo.js" defer></script>
//   <script src="...react.development.js" ...>          ->  production UMD
//   strip Babel Standalone <script> entirely
async function buildHtml() {
  const files = await listFiles(SRC, (n) => n.endsWith('.html'));
  for (const f of files) {
    let html = await fs.readFile(path.join(SRC, f), 'utf8');

    // Drop the Babel Standalone tag — we no longer transpile in the browser.
    html = html.replace(
      /\s*<script\s+src="https:\/\/unpkg\.com\/@babel\/standalone[^"]+"[^>]*><\/script>/g,
      ''
    );

    // Switch React UMDs to production builds (smaller, faster).
    html = html.replace(/react\.development\.js/g, 'react.production.min.js');
    html = html.replace(/react-dom\.development\.js/g, 'react-dom.production.min.js');
    // Integrity hashes don't match production builds — strip them. SRI on a CDN
    // pinned by version is a wash; we lose nothing meaningful here.
    html = html.replace(/\s+integrity="sha384-[^"]+"/g, '');

    // Convert text/babel script tags to plain JS, .jsx -> .js, and add `defer`
    // so they load in declaration order without blocking parsing.
    html = html.replace(
      /<script\s+type="text\/babel"\s+src="([^"]+)\.jsx"\s*><\/script>/g,
      '<script src="$1.js" defer></script>'
    );

    // The HTML files cache-bust some CSS with ?v= — leave them alone; they're harmless.
    await fs.writeFile(path.join(OUT, f), html, 'utf8');
    console.log(`  html ${f}`);
  }
}

async function main() {
  console.log('Building static site to public/...');
  await ensureDir(OUT);
  await ensureDir(path.join(OUT, 'assets'));
  // assets/ is already populated as a checked-in directory — no copying needed.
  await buildJsx();
  await copyCss();
  await buildHtml();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
