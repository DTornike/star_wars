import { ReactNode } from "react";
import { Loader } from "../Loader/Loader.tsx";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string | ReactNode;
  icon?: string | ReactNode;
  onClick?: () => void;
  variant?: BUTTON_TYPES;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

export enum BUTTON_TYPES {
  primary = "primary",
  transparent = "transparent",
  actions = "actionsActive",
  actionsInactive = "actionsInactive",
  dotted = "dotted",
}

const types = {
  [BUTTON_TYPES.primary]: "bg-primary text-white",
  [BUTTON_TYPES.transparent]: "bg-transparent text-primary",
  [BUTTON_TYPES.actions]: "bg-primary/10 text-primary text-paragraphOne",
  [BUTTON_TYPES.actionsInactive]:
    "bg-gray-seven/80 text-secondary text-paragraphOne",
  [BUTTON_TYPES.dotted]:
    "bg-transparent text-primary text-paragraphOne border-dashed border-primary/40 border-[1px]",
};

export const Button = ({
  backgroundColor,
  label,
  icon,
  variant = BUTTON_TYPES.primary,
  className = "",
  disabled,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={loading}
      className={[
        "active:box-shadow flex h-[44px] w-full items-center justify-center rounded-[4px] p-[14px] text-paragraphTwo font-medium hover:opacity-90",
        types[variant],
        disabled &&
          "pointer-events-none cursor-default bg-primary-seven text-secondary-three",
        className,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {loading ? (
        <div>
          <Loader size={24} />
        </div>
      ) : (
        <>
          {icon && (
            <div className={"mx-[8px] flex h-[10px] items-center"}>{icon}</div>
          )}
          {label}
        </>
      )}
    </button>
  );
};
