import { HomePage } from ".";
import { RouteObject } from "react-router-dom";

export const homeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
];
