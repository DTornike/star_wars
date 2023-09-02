export const TableTitle = ({
  title,
  count,
}: {
  title?: string;
  count?: string | number;
}) => {
  return (
    <div>
      <span className={"text-headerTwo font-medium text-secondary"}>
        {title}
      </span>{" "}
      {!!count && (
        <span className={"text-headerOneS text-gray"}>({count})</span>
      )}
    </div>
  );
};
