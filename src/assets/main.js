// Progressive enhancement only: the page is fully readable without this script.
(() => {
  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  // Header border once the page scrolls.
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Reveal sections once as they enter the viewport.
  const items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    items.forEach((el) => io.observe(el));
  }

  // If a photo can't load, fall back to the member's initials.
  document.querySelectorAll('.lane-photo img').forEach((img) => {
    const fail = () => img.classList.add('is-broken');
    if (img.complete && img.naturalWidth === 0) fail();
    else img.addEventListener('error', fail, { once: true });
  });

  // Team logo is served by gicitc.com; fall back to the local mark if it fails.
  const logo = document.querySelector('.brand-logo');
  if (logo) {
    const swap = () => { logo.src = 'assets/favicon.svg'; };
    if (logo.complete && logo.naturalWidth === 0) swap();
    else logo.addEventListener('error', swap, { once: true });
  }
})();
