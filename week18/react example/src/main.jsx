import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PageContextProvider from "./contexts/PageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </StrictMode>,
);
