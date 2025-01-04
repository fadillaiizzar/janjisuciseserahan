import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/404.jsx'
import Layanan from './Layouts/Layanan/Layanan.jsx'
import Project from './Layouts/Project/Project.jsx'
import Attention from './Layouts/Attention/Attention.jsx'
import Kontak from './Layouts/Kontak/Kontak.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/layanan",
    element: <Layanan />
  },
  {
    path: "/project",
    element: <Project />
  },
  {
    path: "/perhatian",
    element: <Attention />
  },
  {
    path: "/kontak",
    element: <Kontak />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
