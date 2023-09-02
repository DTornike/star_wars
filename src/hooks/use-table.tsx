import { useQuery } from "@tanstack/react-query";
import { axiosClient, SWAPIModels } from "utils/constants.ts";
import { TListDataResponse } from "utils/global-types.ts";

type TUseTable = {
  model?: SWAPIModels;
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
};

export const useTable = <T,>({ model }: TUseTable): TUseTableResponse<T> => {
  const { data, isLoading } = useQuery([model], () =>
    axiosClient.get<TListDataResponse<T[]>>(`/${model}`),
  );

  return {
    tableLoading: isLoading,
    tableColumns: [],
    tableData: data?.data.results ?? [],
    pagination: {
      currentPage: 0,
      range: [],
      onChange: () => {},
      totalItems: data?.data.count || 0,
    },
  };
};
