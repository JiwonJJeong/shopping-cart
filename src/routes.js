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