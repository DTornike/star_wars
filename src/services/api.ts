import { useCallback, useMemo } from "react";
import { axiosClient } from "utils/constants.ts";
import { TListDataResponse } from "utils/global-types.ts";
import { TPerson } from "utils/models/Person.ts";

export const usePersonsService = () => {
  const getList = useCallback(async () => {
    const { data } =
      await axiosClient.get<TListDataResponse<TPerson[]>>(`persons`);

    return data ?? {};
  }, []);

  return useMemo(() => ({ getPersons }), [getPersons]);
};
