import { Flex, Heading, IconButton, Table, Tbody, Td, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { ComponentProps, useMemo } from "react"
import { topPicks } from "./picks-data"
import { Column, useTable } from "react-table";
import { Pick } from "types/pick";
import { Image } from "components/image";
import { FaShoppingCart } from "react-icons/fa";
import { brandRing } from "src/utils/brandRing";

const HeaderCell = ({ value }: { value: string }) => (
  <Heading
    size={"xs"}
    textTransform={"none"}
    color={"gray.light"}
  >
    { value }
  </Heading>
)

export const TopPicks = (props: ComponentProps<typeof VStack>) => {
  const data = useMemo(() => topPicks, [])
  const columns = useMemo<Column<Pick>[]>(() => [
    {
      accessor: 'image',
      width: '100px',
      Cell: ({value}) => (
        <VStack alignItems={"flex-start"} justifyContent={"center"}>
          <Image
            src={value}
            width={"14"}
            height={"14"}
            minWidth={"14"}
            minHeight={"14"}
            rounded={"xl"}
            objectFit={"cover"}
            quality={"75"}
            alt={""}
          />
        </VStack>
      )
    },
    {
      HeaderCell: () => <HeaderCell value={"Name"} />,
      accessor: 'name',

    },
    {
      HeaderCell: () => <HeaderCell value={"Producer"} />,
      accessor: 'producer',
    },
    {
      HeaderCell: () => <HeaderCell value={"Category"} />,
      accessor: 'category',

    },
    {
      HeaderCell: () => <HeaderCell value={"Time"} />,
      accessor: 'time',
      width: "40px"
    },
    {
      HeaderCell: () => <HeaderCell value={"Buy"} />,
      id: 'buy',
      width: "40px",
      Cell: () => (
        <IconButton
          icon={<FaShoppingCart/>}
          aria-label={"Buy Song"}
          rounded={"full"}
          {...brandRing}
        />
      )
    },
  ],[])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data })
  return (
    <VStack align={"flex-start"} height={"full"} {...props}>
      <Heading>Top Picks</Heading>
      <Flex overflowY={"auto"} width={"full"}>
        <Table {...getTableProps()} position={"relative"}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th
                    width={column.width}
                    {...column.getHeaderProps()}
                    borderBottom={0}
                    position={"sticky"}
                    zIndex={"banner"}
                    top={0}
                    bg={"black"}
                  >
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <Tr
                  {...row.getRowProps()}
                  transition={"ease-out"}
                  transitionProperty={"background"}
                  transitionDuration={"normal"}
                  _hover={{
                    background: "gray.dark",
                    cursor: "pointer"
                  }}
                >
                  {row.cells.map((cell) => (
                    <Td
                      { ...cell.getCellProps() }
                      py={2}
                      borderBottom={0}
                      paddingInlineEnd={0}
                      minWidth={cell.column.width}
                    >
                      { cell.render("Cell") }
                    </Td>
                  ))}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Flex>
    </VStack>
  )
}