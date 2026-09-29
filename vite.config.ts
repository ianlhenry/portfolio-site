/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { person } from "./src/data/resumeData";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Fills `%SITE_TITLE%` / `%SITE_DESCRIPTION%` in index.html from `person` in resumeData.ts. */
function siteMetaPlugin(): Plugin {
  const replacements: Record<string, string> = {
    "%SITE_TITLE%": escapeHtml(`${person.name} — ${person.title}`),
    "%SITE_DESCRIPTION%": escapeHtml(person.summary),
  };
  return {
    name: "site-meta",
    transformIndexHtml: {
      // Runs before Vite's own %ENV% replacement, which would warn about unknown placeholders.
      order: "pre",
      handler(html) {
        return Object.entries(replacements).reduce(
          (result, [placeholder, value]) => result.replaceAll(placeholder, value),
          html,
        );
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), siteMetaPlugin()],
  base: "./",
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
