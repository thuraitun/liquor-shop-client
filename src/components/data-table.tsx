import { Table, TextInput, Group, Loader } from "@mantine/core";
import { useState } from "react";
import { useDebounce } from "../hooks/uss-debounce";

export type Column<T> = {
  key: keyof T;
  header: string;

  // old simple render
  render?: (row: T) => React.ReactNode;

  // advanced cell API
  cell?: (ctx: { row: T; index: number }) => React.ReactNode;
};

// type ExportOptions<T> = {
//   getData: () => Promise<T[]>;
//   format: (row: T) => Record<string, any>;
//   filename: string;
// };

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  isLoading?: boolean;
  total?: number;

  // search
  searchboxProps?: {
    placeholder?: string;
  };

  // action button
  renderActionButton?: () => React.ReactNode;
};

export function DataTable<T>({
  data,
  columns,
  isLoading,
  searchboxProps,
  renderActionButton,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  // search filter
  const filteredData = data.filter((row) =>
    JSON.stringify(row).toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  // export CSV
  // const handleExport = async () => {
  //   if (!exportOptionsProps) return;

  //   const raw = await exportOptionsProps.getData();
  //   const formatted = raw.map(exportOptionsProps.format);

  //   if (!formatted.length) return;

  //   const csv = [
  //     Object.keys(formatted[0]).join(","),
  //     ...formatted.map((row) => Object.values(row).join(",")),
  //   ].join("\n");

  //   const blob = new Blob([csv], { type: "text/csv" });
  //   const url = URL.createObjectURL(blob);

  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = `${exportOptionsProps.filename}.csv`;
  //   a.click();

  //   URL.revokeObjectURL(url);
  // };

  return (
    <div>
      {/* Toolbar */}
      <Group justify="end" mb="md">
        <Group>
          {searchboxProps && (
            <TextInput
              placeholder={searchboxProps.placeholder || "Search"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
        </Group>

        {renderActionButton && renderActionButton()}
      </Group>

      {/* Table */}
      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            {columns.map((col) => (
              <Table.Th key={String(col.key)}>{col.header}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {/* loading */}
          {isLoading ? (
            <Table.Tr>
              <Table.Td colSpan={columns.length} align="center">
                <Loader size="sm" />
              </Table.Td>
            </Table.Tr>
          ) : /* empty */
          filteredData.length === 0 ? (
            <Table.Tr>
              <Table.Td colSpan={columns.length} align="center">
                No data found
              </Table.Td>
            </Table.Tr>
          ) : (
            /* data rows */
            filteredData.map((row, index) => (
              <Table.Tr key={index}>
                {columns.map((col) => (
                  <Table.Td key={String(col.key)}>
                    {col.cell
                      ? col.cell({ row, index })
                      : col.render
                        ? col.render(row)
                        : String(row[col.key])}
                  </Table.Td>
                ))}
              </Table.Tr>
            ))
          )}
        </Table.Tbody>
      </Table>
    </div>
  );
}
