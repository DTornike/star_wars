import { ReactNode } from "react";

type TCard = {
  children?: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: TCard) => {
  return (
    <div
      className={[
        "p-4 shadow flex-1 w-full min-h-[100px] rounded",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};
