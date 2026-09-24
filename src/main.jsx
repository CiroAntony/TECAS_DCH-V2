import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

// Accept links shared by earlier versions of the website.
if (location.hash && !location.hash.startsWith("#/")) {
  history.replaceState(
    null,
    "",
    location.pathname + "#/" + location.hash.slice(1),
  );
}
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
