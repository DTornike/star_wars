import { PropsWithChildren } from "react";

interface TableRowProps {
  onClick?: () => void;
  className?: string;
}

export const TableRow = ({
  children,
  onClick,
  className = "",
}: PropsWithChildren<TableRowProps>) => {
  return (
    <tr
      onClick={onClick}
      className={[
        "border-b border-gray-three last:border-none ",
        className,
        onClick ? "cursor-pointer hover:bg-primary/10" : "",
      ].join(" ")}
    >
      {children}
    </tr>
  );
};
