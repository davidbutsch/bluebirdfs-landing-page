import { alpha } from "@mui/material";
import { palette } from "../theme";

export const translucentStyle = (color: string = palette.accent) => ({
  bgcolor: alpha(color, 0.125),
  color: color,
});

export const translucentButtonStyle = (color: string = palette.accent) => ({
  ...translucentStyle(color),
  "&:hover": {
    bgcolor: alpha(color, 0.24) + " !important",
  },
});
