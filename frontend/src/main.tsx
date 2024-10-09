import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Theme accentColor="teal" appearance="dark">
        <AuthContextProvider>
          <App />
          {/* <ThemePanel /> */}
        </AuthContextProvider>
      </Theme>
    </BrowserRouter>
  </StrictMode>
);
