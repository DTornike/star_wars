import { ReactNode } from "react";

type TCard = {
  children?: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: TCard) => {
  return (
    <div
      className={[
        "bg-white shadow w-full min-h-[100px] rounded flex justify-center items-center ",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};
