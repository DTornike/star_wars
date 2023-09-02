import { ReactNode } from "react";

export const TableHeaderRow = ({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return <tr className={["", className].join(" ")}>{children}</tr>;
};
