import React, { lazy, Suspense } from 'react';
import { LoadingMessage } from './components';
import LazyLoad from 'react-lazyload';

const Home = lazy(() => import('./pages/home/Home'));
const Projects = lazy(() => import('./pages/projects/Projects'));
const Publications = lazy(() => import('./pages/publications/Publications'));
const Awards = lazy(() => import('./pages/awards/Awards'));
const Resume = lazy(() => import('./pages/resume/Resume'));

const App = lazy(() => import('./App'));

const Routes = {
  path: '/',
  element: (
    <Suspense fallback={<LoadingMessage message="Loading..." />}>
      <App />
    </Suspense>
  ),
  children: [
    {
      path: '/',
      element: (
        <Suspense fallback={<LoadingMessage message="Loading..." />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: '/projects',
      element: (
        <LazyLoad height={200}>
          <Suspense fallback={<LoadingMessage message="Loading Projects..." />}>
            <Projects />
          </Suspense>
        </LazyLoad>
      ),
    },
    {
      path: '/publications',
      element: (
        <LazyLoad height={200}>
          <Suspense fallback={<LoadingMessage message="Loading Publications..." />}>
            <Publications />
          </Suspense>
        </LazyLoad>
      ),
    },
    {
      path: '/awards',
      element: (
        <Suspense fallback={<LoadingMessage message="Loading..." />}>
          <Awards />
        </Suspense>
      ),
    },
    {
      path: '/resume',
      element: (
        <Suspense fallback={null}>
          <Resume />
        </Suspense>
      ),
    },
  ],
};

export default Routes;
