import {
  Loader,
  Pagination,
  Table,
  TableBody,
  TableBodyCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  TableSearch,
  TableTitle,
  TableTools,
  TableToolsLeft,
  TableToolsRight,
} from "components/ui";
import dayjs from "dayjs";
import { useTable } from "hooks";
import { useState } from "react";
import { SWAPIModels } from "utils/constants.ts";
import { TSpecies } from "utils/models";

export const Species = () => {
  const [searchValue, setSearchValue] = useState("");

  const { tableData, tableLoading, pagination } = useTable<TSpecies>({
    model: SWAPIModels.Species,
  });

  return (
    <div>
      <TableContainer>
        <TableTools>
          <TableToolsLeft>
            <TableTitle title="Species" count={pagination.totalItems} />
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
                  <TableHeaderCell>AVERAGE HEIGHT</TableHeaderCell>
                  <TableHeaderCell>AVERAGE LIFESPAN</TableHeaderCell>
                  <TableHeaderCell>CLASSIFICATION</TableHeaderCell>
                  <TableHeaderCell>DESIGNATION</TableHeaderCell>
                  <TableHeaderCell>CREATED</TableHeaderCell>
                </TableHeaderRow>
              </TableHeader>
              <TableBody>
                {tableData.map((person) => {
                  return (
                    <TableRow key={person.url}>
                      <TableBodyCell>{person.name}</TableBodyCell>
                      <TableBodyCell>{person.average_height}</TableBodyCell>
                      <TableBodyCell>{person.average_lifespan}</TableBodyCell>
                      <TableBodyCell>{person.classification}</TableBodyCell>
                      <TableBodyCell>{person.designation}</TableBodyCell>
                      <TableBodyCell>
                        {dayjs(person.created).format("DD/MM/YYYY hh:mm")}
                      </TableBodyCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            {tableLoading && (
              <div className="py-4">
                <Loader />
              </div>
            )}
          </div>
          <TableTools>
            <Pagination {...pagination} />
          </TableTools>
        </>
      </TableContainer>
    </div>
  );
};