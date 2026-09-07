import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// oxlint-disable-next-line import/no-unassigned-import -- global stylesheet, intentionally side-effect only
import "./styles/globals.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
