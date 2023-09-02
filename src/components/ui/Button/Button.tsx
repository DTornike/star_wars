import { ReactNode } from "react";
import { ButtonTypes } from "utils/constants.ts";
import { Loader } from "../Loader/Loader.tsx";

type TButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  label: string | ReactNode;
  icon?: string | ReactNode;
  onClick?: () => void;
  variant?: ButtonTypes;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
};

const types = {
  [ButtonTypes.primary]: "bg-primary text-white",
  [ButtonTypes.transparent]: "bg-transparent text-primary",
  [ButtonTypes.actions]: "bg-primary/10 text-primary text-paragraphOne",
  [ButtonTypes.actionsInactive]:
    "bg-gray-seven/80 text-secondary text-paragraphOne",
  [ButtonTypes.dotted]:
    "bg-transparent text-primary text-paragraphOne border-dashed border-primary/40 border-[1px]",
};

export const Button = ({
  backgroundColor,
  label,
  icon,
  variant = ButtonTypes.primary,
  className = "",
  disabled,
  loading,
  ...props
}: TButtonProps) => {
  return (
    <button
      type="button"
      disabled={loading || disabled}
      className={[
        "flex items-center justify-center rounded-[4px] p-2 text-paragraph font-medium hover:opacity-90",
        types[variant],
        disabled &&
          "pointer-events-none cursor-default text-secondary opacity-50",
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
