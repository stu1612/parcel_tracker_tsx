import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PackageProvider from "./contexts/PackageContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PackageProvider>
      <App />
    </PackageProvider>
  </React.StrictMode>
);
