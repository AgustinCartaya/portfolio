import App from "./App";
import { Home, Projects, Services, Contact, Resume } from "./pages";

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
      path: "/services",
      element: <Services />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/resume",
      element: <Resume />
    }
  ]
};

export default Routes;
