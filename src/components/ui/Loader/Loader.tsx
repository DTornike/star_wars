import { motion } from "framer-motion";

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1,
};

type TLoader = {
  size?: number;
  text?: string;
};

export const Loader = ({ size = 35, text }: TLoader) => {
  return (
    <div className={"flex h-full w-full flex-col items-center justify-center"}>
      <div
        className={"border-box relative "}
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <motion.span
          animate={{ rotate: 360 }}
          transition={spinTransition}
          className="border-gray-fifth absolute top-0 left-0 h-full w-full rounded-[50%] border-2 border-t-primary"
        />
      </div>
      {text && (
        <div className={"mt-[30px] text-paragraphTwo text-gray"}>{text}</div>
      )}
    </div>
  );
};
