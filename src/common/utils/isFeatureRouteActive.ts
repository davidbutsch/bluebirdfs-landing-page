import { RouteObject } from "react-router-dom";

// Function to check if a active path belongs to a feature route
export const isFeatureRouteActive = (
  pathname: string,
  featuresRoutes: RouteObject[][]
): boolean =>
  featuresRoutes.some((routes) =>
    routes.some((route) => {
      return pathname === route.path;
    })
  );
