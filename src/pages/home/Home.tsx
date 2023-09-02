import { useState } from "react";
import {
  Table,
  TableBody,
  TableBodyCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  TableSearch,
  TableTools,
  TableToolsLeft,
  TableToolsRight,
  TableTitle,
  Loader,
  Pagination,
} from "components/ui";
import { useNavigate } from "react-router-dom";
import { axiosClient, RouteNames } from "utils/constants.ts";
import { TDataResponse } from "utils/global-types.ts";
import { TCharacter } from "utils/models";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

export const Home = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useQuery([], () =>
    axiosClient.get<TDataResponse<TCharacter[]>>(`/people`),
  );

  const handleViewCharacter = (characterName: string) => {
    navigate(`${RouteNames.Character}/${characterName}`);
  };

  return (
    <div>
      <TableContainer>
        <TableTools>
          <TableToolsLeft>
            <TableTitle title={"My escrows"} count={0} />
          </TableToolsLeft>
          <TableToolsRight>
            <TableSearch value={searchValue} setValue={setSearchValue} />
          </TableToolsRight>
        </TableTools>
        <>
          <div className={"min-h-[300px]"}>
            <Table>
              <TableHeader className=" border-2">
                <TableHeaderRow>
                  <TableHeaderCell>NAME</TableHeaderCell>
                  <TableHeaderCell>BIRTH DATE</TableHeaderCell>
                  <TableHeaderCell>HEIGHT</TableHeaderCell>
                  <TableHeaderCell>GENDER</TableHeaderCell>
                  <TableHeaderCell>CREATED AT</TableHeaderCell>
                </TableHeaderRow>
              </TableHeader>
              <TableBody>
                {data?.data?.results.map((person) => {
                  return (
                    <TableRow
                      key={person.url}
                      onClick={() =>
                        handleViewCharacter(
                          person.url.charAt(person.url.length),
                        )
                      }
                    >
                      <TableBodyCell>{person.name}</TableBodyCell>
                      <TableBodyCell>
                        <div className={"cursor-pointer hover:underline"}>
                          {person.birth_year}
                        </div>
                      </TableBodyCell>
                      <TableBodyCell>{person.height}</TableBodyCell>
                      <TableBodyCell>{person.gender}</TableBodyCell>
                      <TableBodyCell>
                        {dayjs(person.created).format("DD/MM/YYYY hh:mm")}
                      </TableBodyCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            {isLoading && (
              <div className="py-4">
                <Loader />
              </div>
            )}
          </div>
          <TableTools>
            <Pagination
              paginationRange={[0, "---", 3, 4, 5, 6, 7, "---", 10]}
              currentPage={3}
              onPageChange={(page) => console.log(page)}
            />
          </TableTools>
        </>
      </TableContainer>
    </div>
  );
};
