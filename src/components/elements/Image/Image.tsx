import { styled } from "@mui/material";

const StyledImage = styled("img")();

type ImageProps = React.ComponentProps<typeof StyledImage>;

export const Image = ({ src, ...props }: ImageProps) => {
  return <StyledImage src={src} {...props}></StyledImage>;
};
