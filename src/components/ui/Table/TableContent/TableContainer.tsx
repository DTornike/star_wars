import { ReactNode } from "react";

export const TableContainer = ({ children }: { children?: ReactNode }) => {
  return <div className={"w-full"}>{children}</div>;
};
