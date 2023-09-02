import { Input } from "components/ui";
import { Search } from "components/icons";

type TTableSearchProps = {
  className?: string;
  value?: string;
  setValue: (value: string) => void;
};

export const TableSearch = ({
  className,
  value,
  setValue,
}: TTableSearchProps) => (
  <div className={["h-full max-w-[250px] flex-1", className].join(" ")}>
    <Input
      placeholder={"Search"}
      className={"h-full"}
      icon={<Search />}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);
