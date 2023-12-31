import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Project from './pages/Project'
import Gallery from './pages/Gallery'
import Me from './pages/Me'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/me",
    element: <Me />,
  },
  {
    path: "/projects",
    element: <Project />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
