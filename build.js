// Builds the static site into /docs (served by GitHub Pages):
//   docs/index.html     English
//   docs/km/index.html  Khmer
import { mkdirSync, writeFileSync, copyFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { renderPage } from './src/page.js';
import * as en from './src/data.js';
import * as km from './src/data.km.js';

const out = 'docs';
mkdirSync(join(out, 'assets'), { recursive: true });
mkdirSync(join(out, 'km'), { recursive: true });

const urls = { en: en.site.url, km: km.site.url };
writeFileSync(join(out, 'index.html'), renderPage(en, { base: '', altHref: 'km/', urls }));
writeFileSync(join(out, 'km', 'index.html'), renderPage(km, { base: '../', altHref: '../', urls }));

for (const f of readdirSync('src/assets')) copyFileSync(join('src/assets', f), join(out, 'assets', f));
writeFileSync(join(out, '.nojekyll'), '');

console.log('Built docs/index.html and docs/km/index.html');
