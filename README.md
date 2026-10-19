# Bebeto — portfolio

Personal portfolio of **Bebeto** (Niyera Néré Brunel), UI/UX designer and developer in Bujumbura, Burundi.
Built with [Astro](https://astro.build), in English and French, in the style of the Nils light template.

## Features

- **Portfolio in two groups**: *Shipped* and *Contributed*. Each case answers who it was for, what I did, what I built it with and what changed.
- **English and French** (`/` and `/fr/`), with a language dropdown in the footer.
- **Light and dark mode**, remembered per visitor.
- **Detailed resume** with timelines, an "At a glance" card, skills and languages.
- **Blog** with search and filters, written in Markdown.
- **Live GitHub activity** calendar (refreshes in the browser; optional real-time worker).
- **Phone-first**: quick-contact bar, thumb-friendly menu, swipeable carousel, no sideways scrolling from 320px up.
- **Working contact form** (email app fallback, or any form service).

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the build locally
```

Image helpers (they read the originals and write small web copies; originals are never changed):

```bash
npm run images     # project screenshots -> public/images/projects/*.webp
npm run assets     # logos, favicon, social preview, client logos, testimonial photos
```

Optional settings live in `.env` (see `.env.example`): a form endpoint and a real-time GitHub worker.

## Where things live

| What | Where |
|---|---|
| Projects, services, resume, skills, links | `src/data/site.ts` |
| French versions of that content | `src/i18n/fr.ts` |
| Interface text (both languages) | `src/i18n/ui.ts` |
| Pages (one shared view per page) | `src/views/` and thin routes in `src/pages/` and `src/pages/fr/` |
| Blog posts | `src/content/blog/en/` and `src/content/blog/fr/` |
| Styles | `src/styles/global.css` |
| Real-time GitHub worker (optional) | `workers/github-contributions.js` |

To add a project: add images to `public/images/`, run `npm run images`, then add an entry to `projects` in `src/data/site.ts` and its French text to `src/i18n/fr.ts`.

## Working on features

`main` is the stable branch: it always builds and is what gets published. All work happens on feature branches.

```bash
git switch main && git pull
git switch -c feature/short-name      # e.g. feature/home-proof-strip
# ... make changes, then:
npm run build                         # must pass
git add -A && git commit -m "feat: what changed and why"
git push -u origin feature/short-name
gh pr create --fill                   # open a pull request into main
```

Branch names: `feature/…` for new things, `fix/…` for bugs, `content/…` for text and images.
Commit messages start with `feat:`, `fix:`, `content:`, `style:`, `docs:` or `chore:`.
Merge a branch only after the build passes and the page has been checked on a phone-sized screen.

## Notes

- The PDF CV is **not** in this repository (it lists a reference's contact details). Put a clean copy at `public/cv.pdf` locally; it is git-ignored.
- The GitHub activity calendar is fetched at build time and cached in `src/data/github-contributions.json`, so builds also work offline.
