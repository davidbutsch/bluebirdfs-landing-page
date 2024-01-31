import { Navigate, Outlet, RouteObject } from "react-router-dom";

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
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
