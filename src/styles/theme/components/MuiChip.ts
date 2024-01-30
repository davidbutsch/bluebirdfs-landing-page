import { Components, Theme } from "@mui/material";
import { outlinedStyle, palette, translucentStyle } from "@/styles";

export const MuiChip: Components<Theme>["MuiChip"] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const variant = ownerState.variant || "text";
      const color = ownerState.color || "accent";

      const styles = [theme.unstable_sx({})];

      if (variant === "translucent")
        styles.push(theme.unstable_sx(translucentStyle(palette[color])));
      if (variant === "outlined")
        styles.push(theme.unstable_sx(outlinedStyle(palette[color])));

      return styles;
    },
  },
  defaultProps: {
    color: "accent",
    variant: "translucent",
  },
};
