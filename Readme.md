# Muhammad Dawood - Portfolio

A single-page portfolio site styled like an ML "model card" - a YAML-style
metadata block in the hero, tag pills for skills, and section labels written
as `key: value` pairs. Frontend-only, static, and deployed on GitHub Pages.

**Live site:** https://idavidkhan.github.io/DevOps/

## Stack

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) - dev server and build
- [Tailwind CSS](https://tailwindcss.com/) - styling, with a small custom
  stylesheet for the background grid and a couple of global rules
- [Font Awesome](https://fontawesome.com/) - icons (loaded via CDN)
- [Google Fonts](https://fonts.google.com/) - Space Grotesk, Inter, JetBrains Mono
- [Formspree](https://formspree.io/) - contact form submissions (no backend)
- [OxLint](https://oxc.rs/docs/guide/usage/linter.html) - linting

There is no backend, no API, and no database. Every piece of content is
bundled directly into the frontend.

## Project structure

```
├── .github/workflows/deploy.yml   GitHub Actions: lint ⟶ build ⟶ deploy
├── public/
│   ├── favicon/                   favicon.svg + generated PNG sizes
│   ├── og-image.png                social share preview image
│   └── site.webmanifest
├── src/
│   ├── components/                 Nav, Hero, Section, Tag, About, Skills,
│   │                                Experience, Projects, EducationCerts,
│   │                                Contact, Footer
│   ├── data/
│   │   ├── portfolio.ts            all resume content - edit this file
│   │   ├── nav.ts                  navigation links
│   │   └── types.ts                shared TypeScript types
│   ├── styles/globals.css          background grid, selection color, focus ring
│   ├── App.tsx                     composes the sections
│   └── main.tsx                    entry point
├── index.html                      fonts, Font Awesome, favicon, SEO/OG tags
├── tailwind.config.js               color palette, font tokens, background grid
└── vite.config.ts                   base path, @ alias
```

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Lint

```bash
npm run lint
```

Runs OxLint across the project. The CI workflow fails the build if this
doesn't pass.

## Updating content

Everything lives in `src/data/portfolio.ts`:

- **Experience** - edit the `experience` array (`title`, `org`, `location`,
  `dates`, `points`).
- **Projects** - edit the `projects` array. Leave `link` / `demo_link` as
  `null` until a project actually has a public URL - the card simply omits
  the link row when they're null.
- **Skills** - grouped under `skills`, each group has a `group` label and a
  `tags` array rendered as pills.
- **Education & certifications** - `education` and `certifications` arrays.
- **Contact details & social links** - `email`, `phone`, `location`, and the
  `links` object (`linkedin`, `github`, `booking`).

Navigation links live separately in `src/data/nav.ts`.

## Contact form (Formspree)

The form in `src/components/Contact.tsx` posts to a Formspree endpoint
(`https://formspree.io/f/xrpgakrd`). It's a real HTML form - `action` and
`method` are set directly on the `<form>` - so it degrades gracefully even
without JavaScript. The `onSubmit` handler intercepts the submission to show
an inline "sending / sent / error" status instead of a full-page redirect,
using Formspree's AJAX response format (`Accept: application/json`).

A hidden `_subject` field sets a readable email subject line, and a hidden
`_gotcha` field acts as a spam honeypot. Replies go to whatever address the
visitor enters in the `email` field - Formspree picks this up automatically.

To point the form at a different Formspree form, update
`FORMSPREE_ENDPOINT` in `src/components/Contact.tsx`.

## Favicon

`public/favicon/favicon.svg` is a custom vector "MD" monogram (in the site's
teal/amber palette, on a rounded dark square) that the PNG sizes
(`icon-16.png` through `icon-512.png`) are rasterized from. `site.webmanifest`
references the 192px and 512px versions for home-screen icons. Regenerate
the PNGs from the SVG if you ever change the mark.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` runs on every push to `main`: install deps,
lint, build, then publish `dist/` via GitHub's official Pages actions. No
secrets or environment variables are required.

In the repository settings, set **Settings ⟶ Pages ⟶ Source** to
**GitHub Actions** (one-time setup) and pushes to `main` will deploy
automatically.

The Vite `base` in `vite.config.ts` is set to `/DevOps/` to match this
repo's Pages URL (`https://idavidkhan.github.io/DevOps/`). If you fork this
under a different repository name, update `base` in `vite.config.ts` and the
canonical/OG URLs in `index.html` to match.
