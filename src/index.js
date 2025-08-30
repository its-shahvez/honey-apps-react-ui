import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./screens/Desktop/Desktop";
import "./index.css"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Desktop />
  </StrictMode>,
);
