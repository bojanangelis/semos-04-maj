import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./store/ThemeProvider.jsx";
import AuthProvider from "./store/AuthProvider.jsx";
import FormProvider from "./store/FormProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <FormProvider>
          <App />
        </FormProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
