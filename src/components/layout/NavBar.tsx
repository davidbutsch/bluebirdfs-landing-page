import { Toolbar, Typography } from "@mui/material";

import { BluebirdLogo } from "../elements/Icon";

export const NavBar = () => {
  return (
    <Toolbar>
      <Typography>
        <BluebirdLogo />
      </Typography>
    </Toolbar>
  );
};
