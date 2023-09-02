import { ReactNode } from "react";

export const TableHeaderCell = ({
  children,
  className,
  onClick,
}: {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <th
      onClick={onClick}
      className={[
        "h-[28px] text-paragraph bg-gray-two text-secondary text-left p-3",
        className,
      ].join(" ")}
    >
      {children}
    </th>
  );
};
