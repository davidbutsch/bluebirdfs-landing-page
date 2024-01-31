import { BLUEBIRD_FULL_LOGO_URL, BLUEBIRD_LOGO_URL } from "@/common";

import { IconProps } from "@mui/material";
import { ImageIcon } from "./ImageIcon";

type BluebirdLogoProps = IconProps & {
  size?: number;
  full?: boolean;
};

export const BluebirdLogo = ({ full, ...props }: BluebirdLogoProps) => (
  <ImageIcon
    {...props}
    sx={{
      "> img": {
        aspectRatio: "auto",
      },
      width: "fit-content",
    }}
    src={full ? BLUEBIRD_FULL_LOGO_URL : BLUEBIRD_LOGO_URL}
  />
);
