import { Button, ButtonProps } from "@mui/material";
import { Link, useMatch } from "react-router-dom";

type LinkButtonProps = ButtonProps & {
  to: string;
};

export const LinkButton = ({ to, children, ...props }: LinkButtonProps) => {
  const isActive = !!useMatch({
    path: to,
  });

  return (
    <Button
      component={Link}
      {...props}
      to={to}
      color={isActive ? "primary" : "accent"}
    >
      {children}
    </Button>
  );
};
