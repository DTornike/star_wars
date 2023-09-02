import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useGetEntityListService } from "services/api.ts";
import { SWAPIModels } from "utils/constants.ts";
import { useDebounce } from "use-debounce";

type TUseTable = {
  model: SWAPIModels;
};

type TPagination = {
  currentPage: number;
  range: (string | number)[];
  onChange: () => void;
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
  const { getEntity } = useGetEntityListService<T>(model);

  const [searchValue, setSearchValue] = useState("");
  const [paginationData, setPaginationData] = useState();

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const { data, isLoading } = useQuery([model, debouncedSearchValue], () =>
    getEntity(searchValue, 0),
  );

  return {
    tableLoading: isLoading,
    tableColumns: [],
    tableData: data?.results ?? [],
    tableSearchValue: searchValue,
    setTableSearchValue: setSearchValue,
    pagination: {
      currentPage: 0,
      range: [],
      onChange: () => {},
      totalItems: data?.count || 0,
    },
  };
};
