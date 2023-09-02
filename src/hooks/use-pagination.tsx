import { useMemo } from "react";

type TUsePagination = {
  totalPageCount: number;
  itemsPerPage: number;
  currentPage: number;
  siblingsCount: number;
};

const DOTS = "...";

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const usePagination = ({
  totalPageCount,
  itemsPerPage,
  currentPage,
  siblingsCount,
}: TUsePagination) => {
  const paginationRange = useMemo(() => {
    const totalPagesToRender = siblingsCount + 5;

    if (totalPagesToRender >= totalPageCount) {
      return range(0, totalPageCount - 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingsCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingsCount,
      totalPageCount - 1,
    );

    const renderLeftDot = leftSiblingIndex > 1;
    const renderRightDot = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 0;
    const lastPageIndex = totalPageCount - 1;

    if (!renderLeftDot && renderRightDot) {
      const leftItemCount = 2 + siblingsCount;
      const leftRange = range(0, leftItemCount);

      return [...leftRange, DOTS, lastPageIndex];
    }

    if (renderLeftDot && !renderRightDot) {
      const rightItemCount = 3 + 2 * siblingsCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount - 1,
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (renderLeftDot && renderRightDot) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalPageCount, itemsPerPage, currentPage, siblingsCount]);

  return paginationRange || [];
};

export default usePagination;
