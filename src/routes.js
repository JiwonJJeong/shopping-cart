import Home from './Home.jsx'
import Items from './Items.jsx'
import Checkout from './Checkout.jsx'
import ErrorPage from './ErrorPage.jsx'

const routes = [
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
  ]

export default routes;