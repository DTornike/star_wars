import { InputHTMLAttributes, ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface IInput extends InputHTMLAttributes<any> {
  placeholder?: string;
  value?: string | number;
  label?: string;
  icon?: ReactNode;
  className?: string;
}

export const Input = ({
  value,
  label,
  placeholder,
  icon,
  className,
  onChange,
  ...props
}: IInput) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={"relative h-full w-full"}>
      <input
        placeholder={placeholder}
        className={[
          "h-[44px] w-full rounded-[4px] border border-gray-five py-[13px] pl-[22px] pr-[40px] text-paragraphTwo placeholder:text-gray-five focus:border-primary focus:border-opacity-30 focus:outline-none",
          className,
        ].join(" ")}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {label && (
        <motion.div
          animate={
            focused ? { scale: 1, opacity: 0.8 } : { scale: 0, opacity: 0 }
          }
          transition={{
            duration: 0.1,
          }}
          className={
            "absolute top-[-8px] left-[8px] bg-white px-[8px] text-captionsTwo text-primary opacity-0"
          }
        >
          {label}
        </motion.div>
      )}
      {icon && (
        <div
          className={
            "absolute right-[16px] top-0 flex h-full cursor-pointer items-center justify-center"
          }
        >
          <div className="flex h-[16px] items-center justify-center text-paragraphTwo text-gray-five">
            {icon}
          </div>
        </div>
      )}
    </div>
  );
};
