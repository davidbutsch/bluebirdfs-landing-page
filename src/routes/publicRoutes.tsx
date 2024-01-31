import { Navigate, Outlet, RouteObject } from "react-router-dom";

import { Page } from "@/components";

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Page>App</Page>,
      },
      {
        path: "*",
        element: <Navigate replace to="/" />,
      },
    ],
  },
];
