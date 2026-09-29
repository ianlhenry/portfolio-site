// Turns the client build into a static, JavaScript-free page.
// Runs after `vite build` (client, into dist/) and `vite build --ssr` (into dist-ssr/):
// injects the server-rendered app into dist/index.html, then strips the client script.
import { readdir, readFile, rm, writeFile } from "node:fs/promises";

const htmlUrl = new URL("../dist/index.html", import.meta.url);
const assetsUrl = new URL("../dist/assets/", import.meta.url);
const ssrDirUrl = new URL("../dist-ssr/", import.meta.url);
const PLACEHOLDER = "<!--app-html-->";

const { render } = await import(new URL("entry-server.js", ssrDirUrl).href);
const template = await readFile(htmlUrl, "utf8");

if (!template.includes(PLACEHOLDER)) {
  throw new Error(`${PLACEHOLDER} not found in dist/index.html`);
}

const html = template
  .replace(PLACEHOLDER, () => render())
  .replace(/\s*<script\b[^>]*>[\s\S]*?<\/script>/g, "")
  .replace(/\s*<link\b[^>]*rel="modulepreload"[^>]*>/g, "");

if (/<script\b/i.test(html)) {
  throw new Error("dist/index.html still contains a <script> tag");
}

await writeFile(htmlUrl, html);

for (const file of await readdir(assetsUrl)) {
  if (file.endsWith(".js")) {
    await rm(new URL(file, assetsUrl));
  }
}
await rm(ssrDirUrl, { recursive: true, force: true });

console.log("Prerendered dist/index.html (no JavaScript)");
