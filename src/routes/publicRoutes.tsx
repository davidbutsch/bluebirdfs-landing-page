import { Navigate, Outlet, RouteObject } from "react-router-dom";

import { AppLayout } from "@/components";
import { authRoutes } from "@/features/Auth";
import { homeRoutes } from "@/features/Home";

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
        children: homeRoutes,
      },
      {
        path: "/",
        children: authRoutes,
      },
      {
        path: "*",
        element: <Navigate replace to="/" />,
      },
    ],
  },
];
