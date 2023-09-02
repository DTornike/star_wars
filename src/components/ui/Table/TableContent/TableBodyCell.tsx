import { ReactNode } from "react";

export const TableBodyCell = ({
  children,
  className = "",
  onClick,
}: {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <td
      className={[
        "h-[41px] px-[22px] text-left text-paragraphTwo text-secondary",
        className,
      ].join(" ")}
      onClick={(event) => {
        if (onClick) {
          event.preventDefault();
          event.stopPropagation();
          onClick();
        }
      }}
    >
      {children}
    </td>
  );
};
