import { Icon, IconProps, styled } from "@mui/material";

import { JSX } from "react";

type StyledIconProps = {
  size?: number;
};

const StyledIcon = styled(Icon)(({ size }: StyledIconProps) => {
  return {
    "> img": {
      display: "block",
      aspectRatio: "1 / 1",
      height: size,
    },
    overflow: "visible",
    textAlign: "center",
    fontSize: size,
  };
});

type ImageIconProps = IconProps & {
  src: string;
  size?: number;
};

export const ImageIcon = (props: ImageIconProps): JSX.Element => {
  return (
    <StyledIcon {...props} size={props.size || 16}>
      <img src={props.src} />
    </StyledIcon>
  );
};
