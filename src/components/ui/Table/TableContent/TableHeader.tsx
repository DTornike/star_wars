import { ReactNode } from "react";

export const TableHeader = ({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return <thead className={className}>{children}</thead>;
};
