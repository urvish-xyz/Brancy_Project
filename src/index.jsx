import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';
import DashboardLayout from './layout/dashboardLayout';
import Home from './routes/home';
import About from './routes/about';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<RouterProvider router={router} />);
