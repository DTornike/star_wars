import { Loader } from "components/ui";
import { ReactNode } from "react";

type TLoaderHoc = {
  children?: ReactNode;
  isLoading: boolean;
};

export const LoaderHoc = ({ children, isLoading }: TLoaderHoc) => {
  if (isLoading) return <Loader />;

  return children;
};
