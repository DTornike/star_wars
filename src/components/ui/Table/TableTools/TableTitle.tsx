export const TableTitle = ({
  title,
  count,
}: {
  title?: string;
  count?: string | number;
}) => {
  return (
    <div className="h-full flex items-center gap-2">
      <span className={"text-headerOne font-medium text-secondary"}>
        {title}
      </span>{" "}
      {!!count && (
        <span className={"text-headerOne text-secondary"}>({count})</span>
      )}
    </div>
  );
};
