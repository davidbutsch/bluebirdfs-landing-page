import { PaletteColor } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    sizes: {
      small: number;
      medium: number;
      large: number;
    };
  }
  interface ThemeOptions {
    sizes: {
      small: number;
      medium: number;
      large: number;
    };
  }
  interface Palette {
    accent: PaletteColor;
    positive: PaletteColor;
    negative: PaletteColor;
  }
  interface PaletteOptions {
    accent: PaletteColor;
    positive: PaletteColor;
    negative: PaletteColor;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
    positive: true;
    negative: true;
  }
  interface ButtonPropsVariantOverrides {
    translucent: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    accent: true;
    positive: true;
    negative: true;
  }
  interface ChipPropsVariantOverrides {
    translucent: true;
  }
}
