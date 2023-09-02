import { ReactNode } from "react";

export const Table = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <table className={["w-full table-fixed", className].join(" ")}>
      {children}
    </table>
  );
};
