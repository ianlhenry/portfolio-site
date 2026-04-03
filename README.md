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
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Run TypeScript with no emit |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Vitest in watch mode |
| `npm run check` | Typecheck, lint, test, and build (full CI-style check) |

## Customizing content

- **Copy and profile:** Edit [`src/data/resumeData.ts`](src/data/resumeData.ts). Types for that file live in [`src/types/resumeTypes.ts`](src/types/resumeTypes.ts).
- **Resume PDF:** Add your PDF under `public/` and point `RESUME_PDF` in `resumeData.ts` at the correct path (see the comment in that file).
- **Page metadata (title, Open Graph, etc.):** Edit [`index.html`](index.html).

The Vite config uses `base: "./"` so asset paths work when the site is opened from the filesystem or deployed under a subpath.

## License

Private project; not licensed for redistribution unless you add a license of your own.
