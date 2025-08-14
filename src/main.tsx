import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/glass.css";

const root = document.getElementById("root");
if (!root) {
  const msg = 'Fatal: missing <div id="root"></div> in index.html';
  console.error(msg);
  throw new Error(msg);
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
    <div className="debug-banner">✅ App booted</div>
  </React.StrictMode>
);
