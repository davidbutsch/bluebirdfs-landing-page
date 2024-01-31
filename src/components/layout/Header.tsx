import { AppBar, Container } from "@mui/material";

import { NavBar } from "./NavBar";
import { theme } from "@/styles";

export const Header = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        bgcolor: "#00000008",
        backdropFilter: "blur(12px)",
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <NavBar />
      </Container>
    </AppBar>
  );
};
