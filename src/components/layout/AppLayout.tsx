import { Container, CssBaseline } from "@mui/material";

import { Header } from "./Header";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          py: { xs: 2, sm: 3 },
        }}
      >
        {children}
      </Container>
    </>
  );
};
