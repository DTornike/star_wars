import { useQuery } from "@tanstack/react-query";
import { Loader } from "components/ui";
import { useApiService } from "services/api.ts";
import { SWAPIModels } from "utils/constants.ts";
import { TStarship } from "utils/models";

export const Ships = ({ shipId }: { shipId?: string }) => {
  const { getEntity } = useApiService<TStarship>(SWAPIModels.Starships);

  const { data, isLoading } = useQuery(
    [`${SWAPIModels.Starships}/${shipId}`],
    () => getEntity(shipId),
    {
      enabled: !!shipId,
    },
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <p className="text-headerOne text-left text-secondary mb-2">
        Ship #{shipId}
      </p>
      <div className="flex gap-1 flex-col">
        <div className="flex gap-2">
          <div className="text-gray-500 text-paragraph">Name:</div>
          <div className="text-secondary text-paragraph font-bold">
            {data?.name}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-gray-500 text-paragraph">Model:</div>
          <div className="text-secondary text-paragraph font-bold">
            {data?.model}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-gray-500 text-paragraph">Passengers:</div>
          <div className="text-secondary text-paragraph font-bold">
            {data?.passengers}
          </div>
        </div>
      </div>
    </div>
  );
};
