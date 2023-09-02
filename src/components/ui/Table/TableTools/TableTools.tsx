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
        "w-full min-h-[40px] gap-4 flex justify-center mb-[32px] flex-wrap",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};
