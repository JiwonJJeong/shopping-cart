import Home from './Home.jsx'
import Items from './Items.jsx'
import Checkout from './Checkout.jsx'
import ErrorPage from './ErrorPage.jsx'
import Item from "./Item.jsx"
import Layout from "./Layout.jsx"

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Home /> },
      {
        element: <LayoutWithCart/>,
        children: [
          { path: 'items', element: <Items /> },
          { path: 'item/:itemId', element: <Item /> },
        ]
      },
      { path: 'checkout', element: <Checkout /> },
    ],
  },
];

export default routes;