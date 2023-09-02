import { Button } from "components/ui";
import { PropsWithChildren } from "react";
import { ButtonTypes } from "utils/constants.ts";

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
    className={
      "flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-sm p-0 shadow-sm"
    }
    variant={active ? ButtonTypes.primary : ButtonTypes.transparent}
    disabled={disabled}
    onClick={onClick}
  />
);

export default PaginationItem;
