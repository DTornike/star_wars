export const TableTitle = ({
  title,
  count,
}: {
  title?: string;
  count?: string | number;
}) => {
  return (
    <div className="h-full flex items-center gap-2">
      <span className={"text-header font-medium text-secondary"}>{title}</span>{" "}
      {!!count && <span className={"text-header text-gray"}>({count})</span>}
    </div>
  );
};
