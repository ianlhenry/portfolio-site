import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Dev server entry only. Production builds ship prerendered HTML with no JavaScript
// (see scripts/prerender.js); this file is still the build's CSS entry.
const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element #root not found");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
