# Saad Kabir Uddin — Academic Portfolio

A minimal one-page academic homepage for PhD applications and research enquiries, built in the existing Angular 22 project with TypeScript, semantic HTML, and SCSS. No UI libraries, remote fonts, or tracking scripts.

Live-site URL: https://pro777oy.github.io/saad-academic/

## Local development

Use Node.js 26 (also used in CI) and npm. Install the locked dependencies:

```sh
npm ci
npm start
```

Open http://localhost:4200/. `npm start` runs `ng serve`. The development server uses `/`; production uses `/saad-academic/`.

## Verification and production build

```sh
npm test -- --watch=false
npm run build
```

The production build writes to `dist/saad-academic/browser`. `angular.json` sets the production base href to `/saad-academic/`. All sections use native fragment links on the same page; no separate routes or server rewrites are needed. Static files belong in `public/` and must use relative URLs.

## Deployment

In the GitHub repository, select **Settings → Pages → Build and deployment → Source → GitHub Actions** once. `.github/workflows/deploy.yml` tests, builds, uploads the browser output, and deploys through the official GitHub Pages actions on every push to `main`. It can also be run manually from Actions. The workflow uses built-in token permissions and requires no custom secrets or `gh-pages` branch.

Repository: https://github.com/pro777oy/saad-academic

```sh
git push origin main
```

See [GitHub’s custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Updating content

Repeated content and links are in `src/app/portfolio.data.ts`; introductory, research, and education text is in `src/app/app.html`.

Two items deliberately remain incomplete because their source details were not supplied:

- **Academic CV:** specialized CVs are shared directly with recipients; do not place them in `public/` or add a public download option.
- **Professional reference:** fill in the exact name, position, email, and optional phone in the second reference entry; confirm its organization. Source TODOs mark these fields. Keep exactly three references in the supplied order.
