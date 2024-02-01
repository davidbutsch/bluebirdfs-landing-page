import { Container, CssBaseline } from "@mui/material";

import { FixedBackground } from "./FixedBackground";
import { FloatingCTA } from "./FloatingCTA";
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
          mt: "64px",
          py: { xs: 2, sm: 3 },
        }}
      >
        {children}
      </Container>
      <FloatingCTA />
      <FixedBackground />
    </>
  );
};
