import { createBrowserRouter } from "react-router-dom";
import { Cart, Category, Home, ProductDetail, Root } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category",
        children: [
          {
            path: ":categoryId",
            element: <Category />,
          },
          {
            path: ":categoryId/:productId",
            element: <ProductDetail />,
          },
        ],
      },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export default router;
