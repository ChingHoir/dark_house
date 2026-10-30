// Small, reusable render functions. Each returns an HTML string.

export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const initials = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

export const Section = ({ id, title, lead = '', children, className = '' }) => `
<section id="${id}" class="section ${className}" aria-labelledby="${id}-title">
  <div class="wrap">
    <header class="section-head reveal">
      <h2 id="${id}-title" class="section-title">${esc(title)}</h2>
      ${lead ? `<p class="section-lead">${esc(lead)}</p>` : ''}
    </header>
    ${children}
  </div>
</section>`;

export const Button = ({ href, label, variant = 'primary', external = true }) => `
<a class="btn btn-${variant}" href="${esc(href)}"${external ? ' target="_blank" rel="noopener"' : ''}>${esc(label)}</a>`;

export const Tags = (items) =>
  `<ul class="tags" role="list">${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;

export const Stat = ({ value, label }) => `
<div class="stat">
  <dt class="stat-label">${esc(label)}</dt>
  <dd class="stat-value" data-count="${value}">${value}</dd>
</div>`;

export const Lane = (m, i) => `
<li class="lane reveal" style="--i:${i}">
  <span class="lane-no" aria-hidden="true">${i + 1}</span>
  <div class="lane-photo" data-initials="${esc(initials(m.name))}">
    <img src="${esc(m.photo)}" alt="Portrait of ${esc(m.name)}" width="170" height="227" loading="lazy" decoding="async">
  </div>
  <div class="lane-body">
    <h3 class="lane-name">${esc(m.name)}</h3>
    <p class="lane-role">${esc(m.role)}</p>
    <p class="lane-focus">${esc(m.focus)}</p>
    ${Tags(m.skills)}
  </div>
</li>`;

export const Capability = (c) => `
<li class="cap reveal">
  <h3 class="cap-title">${esc(c.title)}</h3>
  <p>${esc(c.body)}</p>
  ${c.seenIn ? `<p class="cap-seen">Seen in ${c.seenIn.map(esc).join(', ')}</p>` : ''}
  <p class="cap-evidence">${esc(c.evidence)}</p>
</li>`;

export const IndustryProject = (p) => `
<article class="ind reveal">
  <div class="ind-head">
    <h4 class="ind-name">${esc(p.name)}</h4>
    ${Tags(p.tech)}
  </div>
  <dl class="ind-story">
    <div><dt>Problem</dt><dd>${esc(p.problem)}</dd></div>
    <div><dt>What we built</dt><dd>${esc(p.summary)}</dd></div>
  </dl>
  <dl class="ind-credits">
    ${p.contributions.map(([who, what]) => `<div><dt>${esc(who)}</dt><dd>${esc(what)}</dd></div>`).join('')}
  </dl>
</article>`;

export const AcademicProject = (p) => `
<li class="acad reveal">
  <h4 class="acad-name">${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.name)}<span class="sr-only"> (source code on GitHub)</span></a>` : esc(p.name)}</h4>
  <p>${esc(p.summary)}</p>
  <p class="acad-meta"><span>Built by ${esc(p.by)}</span><span>${esc(p.tech)}</span></p>
</li>`;

export const Principle = (p) => `
<li class="principle reveal">
  <h3>${esc(p.title)}</h3>
  <p>${esc(p.body)}</p>
</li>`;
