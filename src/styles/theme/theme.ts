import { palette, sizes } from ".";

import { components } from "./components";
import { createTheme } from "@mui/material";

const _theme = createTheme();

export const theme = createTheme({
  shape: {
    borderRadius: 16,
  },
  sizes,
  palette: {
    mode: "light",
    primary: {
      main: palette.primary,
    },
    accent: _theme.palette.augmentColor({
      color: { main: palette.accent },
    }),
    text: {
      primary: palette.text,
      secondary: palette.textSecondary,
    },
    positive: _theme.palette.augmentColor({
      color: { main: palette.positive },
    }),
    negative: _theme.palette.augmentColor({
      color: { main: palette.negative },
    }),
    error: {
      main: palette.error,
    },
    background: {
      default: palette.background,
    },
  },
  components,
});
