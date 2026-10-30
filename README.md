# Dark Horse: team profile site

Team profile for **Dark Horse**, five final-year Information and Communication Engineering students at the Institute of Technology of Cambodia (ITC).

Live site (after GitHub Pages is enabled): https://chinghoir.github.io/dark_house/

## Project structure

```
src/
  data.js        All page content (members, projects, capabilities, copy)
  components.js  Reusable render functions (Section, Lane, Capability, ...)
  page.js        Page layout built from the components
  assets/        CSS, JS, font and favicon (copied into docs/ on build)
build.js         Renders src/ into docs/index.html
docs/            Built site, served by GitHub Pages
```

There are no dependencies. The output is plain HTML, CSS and a small script, so the page works without JavaScript (the script only adds scroll reveals and image fallbacks).

## Edit content

1. Change text or members in `src/data.js`.
2. Run `npm run build` (needs Node 18+).
3. Commit `src/` and `docs/` together.

Preview locally with `npm start`, then open http://localhost:4173.

## Publish with GitHub Pages

In the repository on GitHub: **Settings → Pages → Build and deployment**, set **Source** to *Deploy from a branch*, branch **main**, folder **/docs**, and save.

## Notes

- Member photos and the team logo load from the team's existing profile on gicitc.com. If they can't load, initials and a local mark are shown instead. To host them here, save them into `src/assets/` and update the paths in `src/data.js`.
- Font: [Archivo](https://github.com/Omnibus-Type/Archivo) (SIL Open Font License), self-hosted in `src/assets/`.
- Motion respects the visitor's *reduce motion* setting.
