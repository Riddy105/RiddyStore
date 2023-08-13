import { createBrowserRouter } from "react-router-dom";
import { Category, Home, Root } from "./pages";
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
        path: "category/:categoryId",
        element: <Category />,
      },
    ],
  },
]);

export default router;
