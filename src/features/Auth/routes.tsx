import { LogInPage, SignUpPage } from ".";

import { RouteObject } from "react-router-dom";

export const authRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
];
