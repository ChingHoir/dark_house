// Builds the static site into /docs (served by GitHub Pages).
import { mkdirSync, writeFileSync, copyFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { renderPage } from './src/page.js';

const out = 'docs';
mkdirSync(join(out, 'assets'), { recursive: true });

writeFileSync(join(out, 'index.html'), renderPage());
for (const f of readdirSync('src/assets')) copyFileSync(join('src/assets', f), join(out, 'assets', f));
writeFileSync(join(out, '.nojekyll'), '');

console.log('Built docs/index.html');
