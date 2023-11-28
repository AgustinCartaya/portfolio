import React, { lazy } from 'react';
import App from "./App"
const Home = lazy(() => import('./pages/home/Home'));
const Projects = lazy(() => import('./pages/projects/Projects'));
const Publications = lazy(() => import('./pages/publications/Publications'));
const Awards = lazy(() => import('./pages/awards/Awards'));
const Resume = lazy(() => import('./pages/resume/Resume'));

const Routes = {
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
    {
      path: '/publications',
      element: <Publications />,
    },
    {
      path: '/awards',
      element: <Awards />,
    },
    {
      path: '/resume',
      element: <Resume />,
    },
  ],
};

export default Routes;
