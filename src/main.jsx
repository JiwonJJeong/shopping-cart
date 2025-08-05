import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import Items from './Items.jsx'
import Checkout from './Checkout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "item/:itemId",
    element: <Item />,
  },
  {
    path: "items",
    element: <Items />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>,
)
