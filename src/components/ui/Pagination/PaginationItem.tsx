import { PropsWithChildren } from "react";
import { Button } from "components/ui";

type TPaginationItem = {
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const PaginationItem = ({
  active,
  disabled,
  children,
  onClick,
}: PropsWithChildren<TPaginationItem>) => (
  <Button
    label={children}
    className={[
      "flex h-[30px] w-[30px] cursor-poinater items-center justify-center rounded-sm p-0 shadow-sm",
      active ? "bg-primary text-white" : "bg-gray text-primary",
    ].join(" ")}
    disabled={disabled}
    onClick={onClick}
  />
);

export default PaginationItem;
