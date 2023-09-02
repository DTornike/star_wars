import { useQuery } from "@tanstack/react-query";
import { Card } from "components/ui";
import { LoaderHoc } from "components/ui/Loader";
import { Ships } from "pages/people-details/sections/Ships.tsx";
import { Species } from "pages/people-details/sections/Species.tsx";
import { useParams } from "react-router-dom";
import { useApiService } from "services/api.ts";
import { SWAPIModels } from "utils/constants.ts";
import { getIdFromUrl } from "utils/helpers";
import { TPerson } from "utils/models";

export const PeopleDetails = () => {
  const params = useParams();
  const entityId = params.slug;

  const { getEntity } = useApiService<TPerson>(SWAPIModels.People);

  const { data, isLoading } = useQuery(
    [`${SWAPIModels.People}/${entityId}`],
    () => getEntity(entityId),
    {
      enabled: !!entityId,
    },
  );

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <LoaderHoc isLoading={isLoading}>
          <p className="text-headerOne text-left text-secondary mb-2">
            Personal Info
          </p>
          <div className="flex gap-1 flex-col">
            <div className="flex gap-2">
              <div className="text-gray-500 text-paragraph">Name:</div>
              <div className="text-secondary text-paragraph font-bold">
                {data?.name}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-gray-500 text-paragraph">Birth date:</div>
              <div className="text-secondary text-paragraph font-bold">
                {data?.birth_year}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-gray-500 text-paragraph">Height:</div>
              <div className="text-secondary text-paragraph font-bold">
                {data?.height}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-gray-500 text-paragraph">Gender:</div>
              <div className="text-secondary text-paragraph font-bold">
                {data?.gender}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-gray-500 text-paragraph">Eye color:</div>
              <div className="text-secondary text-paragraph font-bold">
                {data?.eye_color}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-gray-500 text-paragraph">Skin color:</div>
              <div className="text-secondary text-paragraph font-bold">
                {data?.hair_color}
              </div>
            </div>
          </div>
        </LoaderHoc>
      </Card>

      <div className="flex flex-wrap flex-1 gap-4 flex-row">
        {data?.species.map((specie) => {
          const specieId = getIdFromUrl(specie);
          return (
            <Card key={specieId}>
              <Species specieId={specieId} />
            </Card>
          );
        })}
      </div>

      <div className="flex flex-wrap flex-1 gap-4 flex-row">
        {data?.starships.map((ship) => {
          const shipId = getIdFromUrl(ship);

          return (
            <Card key={shipId}>
              <Ships shipId={shipId} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};
