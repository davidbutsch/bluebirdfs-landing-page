import { BluebirdLogo, LinkButton } from "../elements";
import { Stack, Toolbar } from "@mui/material";

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
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
      disableGutters
    >
      <BluebirdLogo full size={24} />
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
