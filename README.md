# sangyoon-lee-aerospace.github.io

Personal academic website of Sangyoon Lee — a static site built with [Astro](https://astro.build/) and published on GitHub Pages at <https://sangyoon-lee-aerospace.github.io/>.

The site is independent of the Inha Jet Propulsion Laboratory (IJPL) website, which it links to externally.

## Requirements

- Node.js 22.23.4 or later (developed with Node.js 26.13.1, npm 11.20.0)
- Dependencies are pinned by `package-lock.json`.

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies from the lockfile |
| `npm run dev` | Development server at `http://localhost:4321/` |
| `npm run check` | Type-check Astro and TypeScript files |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |

## Languages

Korean is the default language, served at `/`; English is served at `/en/`. A switch in the header links each page to its counterpart. Translatable data fields hold both languages side by side, e.g. `{ en: 'Assistant Professor', ko: '조교수' }`, so a change is made in one place. Interface labels (menu items, headings, buttons) are in `src/i18n/ui.ts`. Publication titles, authors and venues are not translated; Korean papers show their Korean title first on Korean pages.

## Project structure

```
src/
  data/          Content: profile, research areas, publications, teaching, CV, navigation
  i18n/ui.ts     Languages, interface labels, path helpers
  views/         Page bodies, shared by both languages
  components/    Reusable components (header, footer, publication entry, CV list, links)
  layouts/       Base layout: <head> metadata, hreflang, skip link, header, footer
  pages/         Thin wrappers: Korean pages at the root, English pages in pages/en/, plus 404 and robots.txt
  assets/        Images processed at build time (profile photo)
  styles/        tokens.css (colours, type, spacing) and global.css
public/          Static files served as-is (favicon; future images and CV PDF)
.github/workflows/deploy.yml   GitHub Pages deployment
```

## Editing content

All content lives in `src/data/`. Components do not contain personal data.

| To change | Edit |
|---|---|
| Name, position, affiliation, photo, bio, research statement, email, academic profiles | `src/data/profile.ts` |
| Menu labels, headings, other interface text | `src/i18n/ui.ts` |
| Research areas and their topics | `src/data/research.ts` |
| Publications (add, correct, mark as selected) | `src/data/publications.ts` |
| CV sections (experience, education, awards, service, memberships) | `src/data/cv.ts` |
| Courses | `src/data/teaching.ts` |
| Site description, navigation order | `src/data/site.ts` |
| Colours, fonts, spacing | `src/styles/tokens.css` |

Notes:

- **Affiliation change:** update `position`, `affiliation`, `lab` and `contact` in `profile.ts`, and add a CV entry in `cv.ts`. Nothing else needs editing.
- **Publications:** add an object to the `publications` array. The home page lists the five most recent publications; the Publications page groups them by type and year. `areas` links a publication to research areas by id. Lists are sorted by year automatically. Field names follow BibTeX so entries can later be generated from a `.bib` file.
- **Academic profiles:** add `{ label: { en: 'ORCID', ko: 'ORCID' }, url: '…' }` (or Google Scholar, Scopus, …) to `profiles` in `profile.ts`.
- **Photo:** replace `src/assets/profile.png` (any size; it is resized and converted to WebP at build time), or remove the `photo` line in `profile.ts` to use the layout without a photo.
- **CV PDF:** put the file in `public/` (e.g. `public/cv/Sangyoon_Lee_CV.pdf`) and set `cvPdf: '/cv/Sangyoon_Lee_CV.pdf'` in `profile.ts`. The download button appears only when this is set.
- **Teaching:** add courses with `published: true`. The Teaching page joins the navigation and sitemap automatically once at least one course is published.
- **Empty sections** (CV sections, publication types) are hidden automatically.
- Only add information that has been verified.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages (Settings → Pages → Source: GitHub Actions).

## License

No license has been chosen for this repository yet. Third-party packages keep their own licenses. Personal content (text, publication list) belongs to Sangyoon Lee.
