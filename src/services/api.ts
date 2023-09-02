import { useCallback, useMemo } from "react";
import { axiosClient, SWAPIModels } from "utils/constants.ts";
import { TListDataResponse } from "utils/global-types.ts";

export const useGetEntityListService = <T>(model: SWAPIModels) => {
  const getEntity = useCallback(
    async (searchValue: string, page: number) => {
      const { data } = await axiosClient.get<TListDataResponse<T[]>>(
        `${model}?search=${searchValue}&page=${page + 1}`,
      );

      return data;
    },
    [model],
  );

  return useMemo(() => ({ getEntity }), [getEntity]);
};
