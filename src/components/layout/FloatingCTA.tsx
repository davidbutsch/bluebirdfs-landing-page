import { Button } from "@mui/material";

export const FloatingCTA = () => {
  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      sx={{
        position: "fixed",
        bottom: 32,
        right: 32,
      }}
    >
      Call to action 1
    </Button>
  );
};
