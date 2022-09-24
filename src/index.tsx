import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./contexts/AppContext";
import PackageProvider from "./contexts/PackageContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PackageProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </PackageProvider>
  </React.StrictMode>
);
