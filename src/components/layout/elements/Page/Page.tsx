import { Box, BoxProps } from "@mui/material";

import { AppLayout } from "../../AppLayout";

type PageProps = BoxProps;

export const Page = ({ children, ...boxProps }: PageProps) => {
  return (
    <AppLayout>
      <Box {...boxProps}>{children}</Box>
    </AppLayout>
  );
};
