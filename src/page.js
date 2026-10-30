import * as d from './data.js';
import {
  esc, Section, Button, Stat, Lane, Capability, IndustryProject, AcademicProject, Principle,
} from './components.js';

const nav = [
  ['about', 'About'],
  ['experience', 'Projects'],
  ['team', 'Team'],
  ['capabilities', 'Capabilities'],
  ['principles', 'Principles'],
];

const Header = () => `
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="#top" aria-label="Dark Horse, back to top">
      <img src="${esc(d.site.logo)}" alt="" width="32" height="32" class="brand-logo">
      <span>Dark Horse</span>
    </a>
    <nav aria-label="Sections">
      <ul class="nav-list" role="list">
        ${nav.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join('')}
      </ul>
    </nav>
    <a class="btn btn-small" href="#contact">Contact</a>
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
      ${Button({ href: '#experience', label: 'Explore projects', external: false })}
      ${Button({ href: '#team', label: 'Meet the team', variant: 'ghost', external: false })}
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
<section class="overview" aria-label="Team overview">
  <div class="wrap">
    <dl class="stats reveal">${d.stats.map(Stat).join('')}</dl>
  </div>
</section>`;

const About = () =>
  Section({
    id: 'about',
    title: 'About us',
    className: 'section-split',
    children: `<div class="prose reveal">${d.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}</div>`,
  });

const Team = () =>
  Section({
    id: 'team',
    title: 'Five lanes, one race',
    lead: 'Each member owns a part of the system. All five of us can work across the stack.',
    children: `<ol class="lanes" role="list">${d.members.map(Lane).join('')}</ol>`,
  });

const Capabilities = () =>
  Section({
    id: 'capabilities',
    title: 'What we can build',
    lead: 'From the first screen design to the server it runs on.',
    children: `<ul class="caps" role="list">${d.capabilities.map(Capability).join('')}</ul>`,
  });

const Experience = () =>
  Section({
    id: 'experience',
    title: 'Projects',
    lead: 'Three industry projects and six academic projects, with who built what.',
    children: `
    <div class="exp-block">
      <div class="exp-head reveal">
        <h3>Industry experience at ${esc(d.industry.org)}</h3>
        <p>${esc(d.industry.note)}</p>
      </div>
      <div class="inds">${d.industry.projects.map(IndustryProject).join('')}</div>
    </div>
    <div class="exp-block">
      <div class="exp-head reveal">
        <h3>Academic projects</h3>
        <p>Team and individual projects at ITC.</p>
      </div>
      <ul class="acads" role="list">${d.academic.map(AcademicProject).join('')}</ul>
    </div>`,
  });

const Principles = () =>
  Section({
    id: 'principles',
    title: 'How we work',
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
    <p>Dark Horse · Final Year Project Team, ITPM · GIC, Institute of Technology of Cambodia</p>
    <p><a href="${esc(d.site.gicProfile)}" target="_blank" rel="noopener">View our profile on gicitc.com</a></p>
  </div>
</footer>`;

export const renderPage = () => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Dark Horse · Student engineering team at ITC</title>
<meta name="description" content="${esc(d.site.description)}">
<meta name="theme-color" content="#141417">
<meta property="og:title" content="Dark Horse · Young minds. Bold builds.">
<meta property="og:description" content="${esc(d.site.description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${esc(d.site.url)}">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="assets/archivo-wdth.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/styles.css">
<script>document.documentElement.classList.add('js')</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
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
<script src="assets/main.js" defer></script>
</body>
</html>
`;
