import { ReactNode } from "react";

export const TableTools = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={[
        "w-full h-[40px] flex justify-center px-[22px] mb-[32px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};