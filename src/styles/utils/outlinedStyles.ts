import { alpha } from "@mui/material";
import { palette } from "../theme";

export const outlinedStyle = (color: string = palette.accent) => ({
  color: color,
  border: `1px solid ${alpha(color, 0.25)}`,
});

export const outlinedButtonStyle = (color: string = palette.accent) => ({
  ...outlinedStyle(color),
  "&:hover": {
    bgcolor: alpha(color, 0.125),
    border: `1px solid ${alpha(color, 0)}`,
  },
});
