import { ReactNode } from "react";

export const TableToolsLeft = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return <div className={["flex-1", className].join(" ")}>{children}</div>;
};
