import { Navigate, Outlet, RouteObject } from "react-router-dom";

import { Typography } from "@mui/material";

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Typography>App</Typography>,
      },
      {
        path: "*",
        element: <Navigate replace to="/" />,
      },
    ],
  },
];
