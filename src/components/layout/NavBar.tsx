import { BluebirdLogo, LinkButton } from "../elements";
import { Stack, Toolbar, useMediaQuery } from "@mui/material";

import { theme } from "@/styles";

const routes = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Services",
    to: "/services",
  },
  {
    title: "Contact Us",
    to: "/contact",
  },
];

export const NavBar = () => {
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
      disableGutters
    >
      <BluebirdLogo full={!xs} size={24} />
      <Stack direction="row" gap={1}>
        {routes.map((route, index) => (
          <LinkButton key={index} to={route.to}>
            {route.title}
          </LinkButton>
        ))}
      </Stack>
    </Toolbar>
  );
};
