import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Shop from './Components/Shop.jsx'
import Home from './Components/Home.jsx'
import Sneaker from './Components/Sneaker.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "/shop", element: <Shop /> },
      { path: "/home", element: <Home /> },
      { path: "/shop/:title", element: <Sneaker /> }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
