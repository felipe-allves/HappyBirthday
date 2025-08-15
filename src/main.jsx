import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import './assets/Styles/Default.css'

import App from './App.jsx'
import Nik from './Routers/Nik/Nik.jsx'
import Linda from './Routers/Linda/Linda.jsx'

const Router = createBrowserRouter([
  {
    path: "/",
    element : <App />
  },
  {
    path: "/nk",
    element: <Nik />
  },
  {
    path: "/ld",
    element: <Linda />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
