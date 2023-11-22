import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Routes from "./routes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createHashRouter([Routes]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
