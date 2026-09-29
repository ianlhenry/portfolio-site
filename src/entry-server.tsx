import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

/** Renders the full page to static HTML at build time; see `scripts/prerender.js`. */
export function render(): string {
  return renderToStaticMarkup(<App />);
}
