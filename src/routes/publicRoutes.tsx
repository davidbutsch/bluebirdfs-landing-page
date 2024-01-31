import { Navigate, Outlet, RouteObject } from "react-router-dom";

import { AppLayout } from "@/components";

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      {
        path: "/",
        element: "App",
      },
      {
        path: "*",
        element: <Navigate replace to="/" />,
      },
    ],
  },
];
