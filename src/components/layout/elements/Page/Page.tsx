import { AppLayout } from "../../AppLayout";

type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return <AppLayout>{children}</AppLayout>;
};
