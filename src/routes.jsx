import App from "./App";
import { Home, Projects, Publications, Awards, Resume } from "./pages";

const Routes = {
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/publications",
      element: <Publications />
    },
    {
      path: "/awards",
      element: <Awards />
    },
    {
      path: "/resume",
      element: <Resume />
    }
  ]
};

export default Routes;
