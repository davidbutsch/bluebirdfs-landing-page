import { Navigate, Outlet, RouteObject, useLocation } from "react-router-dom";

import { AppLayout } from "@/components";
import { CssBaseline } from "@mui/material";
import { authRoutes } from "@/features/Auth";
import { homeRoutes } from "@/features/Home";
import { isFeatureRouteActive } from "@/common";

const Main = () => {
  const pathname = useLocation().pathname;

  return isFeatureRouteActive(pathname, [authRoutes]) ? (
    <>
      <Outlet />
      <CssBaseline />
    </>
  ) : (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
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
