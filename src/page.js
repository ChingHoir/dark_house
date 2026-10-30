import {
  setUI, esc, Section, Button, Stat, Lane, Capability, IndustryProject, AcademicProject, Principle,
} from './components.js';

// Set per language by renderPage().
let d;
let base = '';
let altHref = '';
const navIds = ['about', 'experience', 'team', 'capabilities', 'principles'];

const Header = () => `
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="#top" aria-label="${esc(d.ui.brandAria)}">
      <img src="${esc(d.site.logo)}" alt="" width="32" height="32" class="brand-logo">
      <span>Dark Horse</span>
    </a>
    <nav aria-label="${esc(d.ui.navAria)}">
      <ul class="nav-list" role="list">
        ${navIds.map((id) => `<li><a href="#${id}">${esc(d.ui.nav[id])}</a></li>`).join('')}
      </ul>
    </nav>
    <a class="lang-switch" href="${esc(altHref)}" hreflang="${d.ui.switchLang}" lang="${d.ui.switchLang}" aria-label="${esc(d.ui.switchAria)}">${esc(d.ui.switchLabel)}</a>
    <a class="btn btn-small" href="#contact">${esc(d.ui.contact)}</a>
  </div>
</header>`;

const Hero = () => `
<section class="hero" id="top" aria-labelledby="hero-title">
  <div class="wrap hero-inner">
    <p class="hero-kicker">${esc(d.hero.kicker)}</p>
    <h1 id="hero-title" class="hero-title">
      ${d.hero.title.map((line) => `<span class="hero-line">${esc(line)}</span>`).join('')}
    </h1>
    <p class="hero-intro">${esc(d.hero.intro)}</p>
    <div class="hero-actions">
      ${Button({ href: '#experience', label: d.ui.heroPrimary, external: false })}
      ${Button({ href: '#team', label: d.ui.heroSecondary, variant: 'ghost', external: false })}
    </div>
  </div>
  <div class="track" aria-hidden="true">
    ${d.members
      .map(
        (m, i) => `<div class="track-lane" style="--i:${i}">
          <span class="track-label"><b>${i + 1}</b>${esc(m.short)}</span>
          <span class="track-line"><span class="track-runner"></span></span>
        </div>`,
      )
      .join('')}
  </div>
</section>`;

const Overview = () => `
<section class="overview" aria-label="${esc(d.ui.overviewAria)}">
  <div class="wrap">
    <dl class="stats reveal">${d.stats.map(Stat).join('')}</dl>
  </div>
</section>`;

const About = () =>
  Section({
    id: 'about',
    title: d.ui.aboutTitle,
    className: 'section-split',
    children: `<div class="prose reveal">${d.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}</div>`,
  });

const Team = () =>
  Section({
    id: 'team',
    title: d.ui.teamTitle,
    lead: d.ui.teamLead,
    children: `<ol class="lanes" role="list">${d.members.map(Lane).join('')}</ol>`,
  });

const Capabilities = () =>
  Section({
    id: 'capabilities',
    title: d.ui.capsTitle,
    lead: d.ui.capsLead,
    children: `<ul class="caps" role="list">${d.capabilities.map(Capability).join('')}</ul>`,
  });

const Experience = () =>
  Section({
    id: 'experience',
    title: d.ui.projectsTitle,
    lead: d.ui.projectsLead,
    children: `
    <div class="exp-block">
      <div class="exp-head reveal">
        <h3>${esc(d.ui.industryTitle(d.industry.org))}</h3>
        <p>${esc(d.industry.note)}</p>
      </div>
      <div class="inds">${d.industry.projects.map(IndustryProject).join('')}</div>
    </div>
    <div class="exp-block">
      <div class="exp-head reveal">
        <h3>${esc(d.ui.academicTitle)}</h3>
        <p>${esc(d.ui.academicNote)}</p>
      </div>
      <ul class="acads" role="list">${d.academic.map(AcademicProject).join('')}</ul>
    </div>`,
  });

const Principles = () =>
  Section({
    id: 'principles',
    title: d.ui.principlesTitle,
    children: `<ul class="principles" role="list">${d.principles.map(Principle).join('')}</ul>`,
  });

const Cta = () => `
<section class="cta" id="contact" aria-labelledby="cta-title">
  <div class="wrap cta-inner reveal">
    <h2 id="cta-title" class="cta-title">${esc(d.cta.title)}</h2>
    <p class="cta-body">${esc(d.cta.body)}</p>
    <div class="hero-actions">
      ${Button({ href: d.site.telegram.url, label: `Telegram ${d.site.telegram.handle}` })}
      ${Button({ href: d.site.github.url, label: `GitHub ${d.site.github.handle}`, variant: 'ghost' })}
    </div>
  </div>
</section>`;

const Footer = () => `
<footer class="site-footer">
  <div class="wrap footer-inner">
    <p>${esc(d.ui.footer)}</p>
    <p><a href="${esc(d.site.gicProfile)}" target="_blank" rel="noopener">${esc(d.ui.footerLink)}</a></p>
  </div>
</footer>`;

export const renderPage = (data, opts) => {
  d = data;
  ({ base, altHref } = opts);
  setUI(d.ui);
  return `<!doctype html>
<html lang="${d.ui.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(d.ui.title)}</title>
<meta name="description" content="${esc(d.site.description)}">
<meta name="theme-color" content="#141417">
<meta property="og:title" content="${esc(d.ui.ogTitle)}">
<link rel="alternate" hreflang="en" href="${esc(opts.urls.en)}">
<link rel="alternate" hreflang="km" href="${esc(opts.urls.km)}">
<meta property="og:description" content="${esc(d.site.description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${esc(d.site.url)}">
<link rel="icon" href="${base}assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="${base}assets/archivo-wdth.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${base}assets/styles.css">
<script>document.documentElement.classList.add('js')</script>
</head>
<body>
<a class="skip" href="#main">${esc(d.ui.skip)}</a>
${Header()}
<main id="main">
${Hero()}
${Overview()}
${About()}
${Experience()}
${Team()}
${Capabilities()}
${Principles()}
${Cta()}
</main>
${Footer()}
<script src="${base}assets/main.js" defer></script>
</body>
</html>
`;
};
