import { useCallback, useMemo } from "react";
import { axiosClient, SWAPIModels } from "utils/constants.ts";
import { TListDataResponse } from "utils/global-types.ts";

export const useApiService = <T>(model?: SWAPIModels) => {
  const getEntityList = useCallback(
    async (searchValue: string, page: number) => {
      const { data } = await axiosClient.get<TListDataResponse<T[]>>(
        `${model}?search=${searchValue}&page=${page + 1}`,
      );

      return data;
    },
    [model],
  );

  const getEntity = useCallback(
    async (entityId?: string) => {
      const { data } = await axiosClient.get<T>(`${model}/${entityId}`);

      return data;
    },
    [model],
  );

  return useMemo(
    () => ({ getEntityList, getEntity }),
    [getEntityList, getEntity],
  );
};
