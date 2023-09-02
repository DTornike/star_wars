import {
  IconChevronsLeft,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsRight,
} from "@tabler/icons-react";
import PaginationItem from "components/ui/Pagination/PaginationItem.tsx";

type TPaginationProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
  paginationRange: (number | string)[];
};

export const Pagination = ({
  currentPage,
  onPageChange,
  paginationRange,
}: TPaginationProps) => {
  if (paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1] as number;

  return (
    <div className={"w-full"}>
      <hr className={"mb-2 border"} />
      <div className={"flex w-full justify-end gap-1"}>
        <PaginationItem
          disabled={currentPage === 0}
          onClick={() => {
            onPageChange(0);
          }}
        >
          <IconChevronsLeft size={14} />
        </PaginationItem>
        <PaginationItem
          disabled={currentPage === 0}
          onClick={() => {
            onPageChange(currentPage - 1);
          }}
        >
          <IconChevronLeft size={14} />
        </PaginationItem>
        {paginationRange.map((pageNumber) => {
          // Just to display dots
          if (typeof pageNumber === "string") {
            return <div className="px-2 text-gray">&#8230;</div>;
          }

          return (
            <PaginationItem
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber + 1}
            </PaginationItem>
          );
        })}
        <PaginationItem
          disabled={currentPage === lastPage}
          onClick={() => {
            onPageChange(currentPage + 1);
          }}
        >
          <IconChevronRight size={14} />
        </PaginationItem>
        <PaginationItem
          disabled={currentPage === lastPage}
          onClick={() => {
            onPageChange(lastPage);
          }}
        >
          <IconChevronsRight size={14} />
        </PaginationItem>
      </div>
    </div>
  );
};
