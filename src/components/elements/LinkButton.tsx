import { Button, ButtonProps } from "@mui/material";

import { Link } from "react-router-dom";

type LinkButtonProps = ButtonProps & {
  to: string;
};

export const LinkButton = ({ to, children, ...props }: LinkButtonProps) => (
  <Button component={Link} {...props} to={to}>
    {children}
  </Button>
);
