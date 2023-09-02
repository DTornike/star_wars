import { useQuery } from "@tanstack/react-query";
import usePagination from "hooks/use-pagination.tsx";
import { useCallback, useState } from "react";
import { useApiService } from "services/api.ts";
import { SWAPIModels, TABLE_ITEMS_PER_PAGE } from "utils/constants.ts";
import { useDebounce } from "use-debounce";

type TUseTable = {
  model: SWAPIModels;
};

type TPagination = {
  currentPage: number;
  range: (string | number)[];
  onChange: (page: number) => void;
  totalItems: number;
};

type TUseTableResponse<T> = {
  tableLoading: boolean;
  tableColumns: string[];
  tableData: T[];
  pagination: TPagination;
  tableSearchValue: string;
  setTableSearchValue: (value: string) => void;
};

export const useTable = <T,>({ model }: TUseTable): TUseTableResponse<T> => {
  const { getEntityList } = useApiService<T>(model);

  const [searchValue, setSearchValue] = useState("");
  const [paginationData, setPaginationData] = useState({
    totalPageCount: 0,
    itemsPerPage: TABLE_ITEMS_PER_PAGE,
    currentPage: 0,
    siblingsCount: 1,
  });

  const paginationRange = usePagination(paginationData);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const { data, isLoading } = useQuery(
    [model, debouncedSearchValue, paginationData.currentPage],
    () => getEntityList(searchValue, paginationData.currentPage),
    {
      onSuccess: (data) => {
        setPaginationData((prevState) => ({
          ...prevState,
          totalPageCount: Number(
            (data.count / TABLE_ITEMS_PER_PAGE).toFixed(0),
          ),
        }));
      },
    },
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setPaginationData((prevState) => ({ ...prevState, currentPage: page }));
    },
    [setPaginationData],
  );

  return {
    tableLoading: isLoading,
    tableColumns: [],
    tableData: data?.results ?? [],
    tableSearchValue: searchValue,
    setTableSearchValue: setSearchValue,
    pagination: {
      currentPage: paginationData.currentPage,
      range: paginationRange,
      onChange: handlePageChange,
      totalItems: data?.count || 0,
    },
  };
};
