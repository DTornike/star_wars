import { ReactNode } from "react";

export const TableToolsRight = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={[
        "flex-1 flex justify-end items-center gap-x-[10px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};
