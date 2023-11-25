import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Routes from "./routes";
import { ProviderDarkMode } from "./context/darkMode";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createHashRouter([Routes]);

root.render(
  <StrictMode>
    <ProviderDarkMode>
      <RouterProvider router={router} />
    </ProviderDarkMode>
  </StrictMode>
);