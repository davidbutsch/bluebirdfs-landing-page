import { publicRoutes } from "./publicRoutes";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const element = useRoutes(publicRoutes);

  return element;
};
