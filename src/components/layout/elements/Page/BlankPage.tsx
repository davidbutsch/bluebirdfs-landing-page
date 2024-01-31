import { CssBaseline } from "@mui/material";

type BlankPageProps = {
  children: React.ReactNode;
};

export const BlankPage = ({ children }: BlankPageProps) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};
