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
import { useNavigate } from "react-router-dom";
import { RouteNames, SWAPIModels } from "utils/constants.ts";
import { getIdFromUrl } from "utils/helpers";
import { TPerson } from "utils/models";

// TODO: create AdvancedTable component which takes cols, data, pagination and draws a table
export const People = () => {
  const navigate = useNavigate();
  const {
    tableData,
    tableLoading,
    tableSearchValue,
    setTableSearchValue,
    pagination,
  } = useTable<TPerson>({
    model: SWAPIModels.People,
  });

  const handleViewCharacter = (characterName?: string | null) => {
    if (!characterName) return;
    navigate(`${RouteNames.People}/${characterName}`);
  };

  return (
    <div>
      <TableContainer>
        <TableTools>
          <TableToolsLeft>
            <TableTitle title="Characters" count={pagination.totalItems} />
          </TableToolsLeft>
        </TableTools>
        <TableTools>
          <TableToolsLeft>
            <TableSearch
              value={tableSearchValue}
              setValue={setTableSearchValue}
            />
          </TableToolsLeft>
          <TableToolsRight>
            <Pagination {...pagination} />
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
                {tableData.map((person) => {
                  return (
                    <TableRow
                      key={person.url}
                      onClick={() =>
                        handleViewCharacter(getIdFromUrl(person.url))
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
            {tableLoading && (
              <div className="py-4 h-[410px]">
                <Loader />
              </div>
            )}
          </div>
        </>
      </TableContainer>
    </div>
  );
};
