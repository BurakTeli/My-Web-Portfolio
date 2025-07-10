import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Import global and theme styles
import "./style/globals.css";
import "./style/dark-theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
