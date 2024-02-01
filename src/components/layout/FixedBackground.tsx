// linear-gradient(45deg, #eef, #e7e5ff 10%, #eeeef5 23%, #f6f0ff 40%, #eeedff 61%, #ecf2ff 80%, #f5eafa)

import { Box, alpha, styled } from "@mui/material";

import { palette } from "@/styles";

export const FixedBackground = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    background: `linear-gradient(135deg, ${alpha(
      palette.primary,
      0.1
    )} 0%, rgba(153, 56, 255, .1) 100%)`,

    zIndex: -1,
  })
);
