import { ROUTE_PATHS } from "../constants/routePaths";
import { About, Home, Products } from "../pages";

export const routes = [
  {
    key: 1,
    element: <Home />,
    path: ROUTE_PATHS.home,
  },
  {
    key: 2,
    element: <Products />,
    path: ROUTE_PATHS.products,
  },
  {
    key: 1,
    element: <About />,
    path: ROUTE_PATHS.about,
  },
];
