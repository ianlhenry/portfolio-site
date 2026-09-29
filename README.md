# Portfolio site

A single-page resume and portfolio built with React and TypeScript. Content is driven from structured data so you can update experience, education, and contact details without touching layout code.

**Stack:** [React](https://react.dev/) 18, [TypeScript](https://www.typescriptlang.org/), [Vite](https://vite.dev/) 6, [Vitest](https://vitest.dev/) for tests, [ESLint](https://eslint.org/) (including accessibility rules for JSX).

## Prerequisites

- [Node.js](https://nodejs.org/) (current LTS is a good choice)
- npm (bundled with Node)

## Setup

```bash
npm install
```

## Scripts

| Command | Description |
| -------- | ----------- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build to `dist/`, with the page prerendered to static HTML |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Run TypeScript with no emit |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Vitest in watch mode |
| `npm run check` | Typecheck, lint, test, and build (full CI-style check) |

## Customizing content

- **Copy and profile:** Edit [`src/data/resumeData.ts`](src/data/resumeData.ts). Types for that file live in [`src/types/resumeTypes.ts`](src/types/resumeTypes.ts).
- **Resume PDF:** Add your PDF under `public/` and point `RESUME_PDF` in `resumeData.ts` at the correct path (see the comment in that file).
- **Page metadata (title, Open Graph, etc.):** The page title and description are filled in at build time from `person.name`, `person.title`, and `person.summary` in `resumeData.ts` (see `siteMetaPlugin` in [`vite.config.ts`](vite.config.ts)). Other tags, such as `og:url` and `theme-color`, are set directly in [`index.html`](index.html).

## Prerendering

`npm run build` renders the whole page to static HTML and CSS. The deployed site ships **no JavaScript**: React is only used at build time. It runs in three steps:

1. `vite build` builds the client bundle into `dist/`. The CSS output is what gets used; the JS is discarded.
2. `vite build --ssr src/entry-server.tsx` builds a Node version of the app into `dist-ssr/`.
3. [`scripts/prerender.js`](scripts/prerender.js) renders the app with it, writes the HTML into the `<!--app-html-->` placeholder in `dist/index.html`, removes the `<script>` tag and the JS files from `dist/assets/`, and deletes `dist-ssr/`. The build fails if a `<script>` tag remains.

The dev server (`npm run dev`) still renders in the browser with React via [`src/main.tsx`](src/main.tsx), so hot reload works as usual.

Because nothing runs in the browser, React state, effects, and event handlers (`useState`, `useEffect`, `onClick`, and so on) have no effect in production even though they work in dev. Keep interactivity to plain HTML and CSS, or add a small standalone script. To bring React back in the browser, switch `entry-server.tsx` back to `renderToString`, have `main.tsx` call `hydrateRoot`, and stop stripping the script in `prerender.js`.

## Deploying

The site deploys to Cloudflare Workers (Worker name `ilh-cv`) as static assets, using [`wrangler.jsonc`](wrangler.jsonc). `wrangler deploy` runs `npm run build` and then uploads `dist/`. Keep that file in the repo. Without it, Wrangler's auto-setup adds `@cloudflare/vite-plugin` to the Vite config, which changes the build output layout and breaks prerendering.

The Vite config uses `base: "./"` so asset paths work when the site is opened from the filesystem or deployed under a subpath.

## License

Private project; not licensed for redistribution unless you add a license of your own.
