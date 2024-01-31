import { CssBaseline } from "@mui/material";
import { Header } from "./Header";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <CssBaseline />
      <Header />
      {children}
    </>
  );
};
