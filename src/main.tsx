import React from 'react'
import ReactDOM from 'react-dom/client'

import { ParallaxProvider } from 'react-scroll-parallax';

import { Contacts } from './pages/Contacts'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { Process } from './pages/Process'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Sucesso } from './pages/Sucesso'
import ErrorPage from './pages/error-page'

import './global.css'
import { Menu } from './components/Menu';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "historia",
    element: <History />,
    errorElement: <ErrorPage />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "processos",
    element: <Process />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contato",
    element: <Contacts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contato/sucesso",
    element: <Sucesso />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="min-h-screen">
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </div>
  </React.StrictMode>
)