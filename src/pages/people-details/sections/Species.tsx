import { useQuery } from "@tanstack/react-query";
import { Loader } from "components/ui";
import { useApiService } from "services/api.ts";
import { SWAPIModels } from "utils/constants.ts";
import { TSpecies } from "utils/models";

export const Species = ({ specieId }: { specieId?: string }) => {
  const { getEntity } = useApiService<TSpecies>(SWAPIModels.Species);

  const { data, isLoading } = useQuery(
    [`${SWAPIModels.Species}/${specieId}`],
    () => getEntity(specieId),
    {
      enabled: !!specieId,
    },
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <p className="text-headerOne text-left text-secondary mb-2">Species</p>
      <div className="flex gap-1 flex-col">
        <div className="flex gap-2">
          <div className="text-gray-500 text-paragraph">Name:</div>
          <div className="text-secondary text-paragraph font-bold">
            {data?.name}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-gray-500 text-paragraph">Average lifespan:</div>
          <div className="text-secondary text-paragraph font-bold">
            {data?.average_lifespan}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-gray-500 text-paragraph">Classification:</div>
          <div className="text-secondary text-paragraph font-bold">
            {data?.classification}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-gray-500 text-paragraph">language:</div>
          <div className="text-secondary text-paragraph font-bold">
            {data?.language}
          </div>
        </div>
      </div>
    </div>
  );
};
