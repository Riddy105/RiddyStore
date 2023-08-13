import { createBrowserRouter } from "react-router-dom";
import { Category, Home, ProductDetail, Root } from "./pages";
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
    ],
  },
]);

export default router;
