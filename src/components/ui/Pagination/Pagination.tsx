import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import PaginationItem from "components/ui/Pagination/PaginationItem.tsx";

type TPaginationProps = {
  currentPage: number;
  onChange: (page: number) => void;
  range: (number | string)[];
};

export const Pagination = ({
  currentPage,
  onChange,
  range,
}: TPaginationProps) => {
  if (range.length < 2) {
    return null;
  }

  const lastPage = range[range.length - 1] as number;

  return (
    <div className={"flex w-full justify-end gap-1"}>
      <PaginationItem
        disabled={currentPage === 0}
        onClick={() => {
          onChange(currentPage - 1);
        }}
      >
        <IconChevronLeft size={14} />
      </PaginationItem>
      {range.map((pageNumber, i) => {
        // Just to display dots
        if (typeof pageNumber === "string") {
          return (
            <div key={`${pageNumber}-${i}`} className="px-2 text-gray">
              &#8230;
            </div>
          );
        }

        return (
          <PaginationItem
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => onChange(pageNumber)}
          >
            {pageNumber + 1}
          </PaginationItem>
        );
      })}
      <PaginationItem
        disabled={currentPage === lastPage}
        onClick={() => {
          onChange(currentPage + 1);
        }}
      >
        <IconChevronRight size={14} />
      </PaginationItem>
    </div>
  );
};
