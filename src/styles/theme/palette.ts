import { colors } from "@mui/material";

type Palette = { [key: string]: string };

export const palette: Palette = {
  background: "#ffffff",
  accent: "#202124",
  primary: "#1958ff",
  text: "#202124",
  textSecondary: "#333333",
  error: colors.red["A400"],
  negative: colors.red["A400"],
  positive: colors.green["A400"],
};
