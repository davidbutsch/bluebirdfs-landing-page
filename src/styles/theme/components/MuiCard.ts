import { Components, Theme } from "@mui/material";

export const MuiCard: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: ({ theme }) =>
      theme.unstable_sx({
        p: 2,

        bgcolor: "rgba(255, 255, 255, .5)",

        border: "1px solid rgba(255, 255, 255, .5)",

        boxShadow: "0 8px 16px rgba(79, 42, 147, 0.05)",
      }),
  },
};
