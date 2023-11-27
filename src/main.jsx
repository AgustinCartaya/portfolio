import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Routes from './routes';
import { ProviderDarkMode } from './context/darkMode';
import 'material-icons/iconfont/material-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const queryClient = new QueryClient();

const router = createHashRouter([Routes]);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProviderDarkMode>
        <RouterProvider router={router} />
      </ProviderDarkMode>
    </QueryClientProvider>
  </StrictMode>
);
