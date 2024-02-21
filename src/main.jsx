import React from 'react'
import ReactDOM from 'react-dom/client'

import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'
import ResumePage from './pages/ResumePage'
import App from './App';
import './index.css'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: '/PortfolioPage',
        element: <PortfolioPage />,
      },
      {
        path: '/ResumePage',
        element: <ResumePage />,
      },
      {
        path: '/ContactPage',
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

