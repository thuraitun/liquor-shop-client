import { Table, Group, TextInput, Loader, Pagination } from "@mantine/core";
import { useBaseFilter } from "../hooks/use-base-filter";

export type Column<T> = {
  key: keyof T;
  header: string;
  render?: (row: T) => React.ReactNode;
};

type Props<T> = {
  data: T[];
  columns: Column<T>[];
  isLoading?: boolean;
  total?: number;
  searchboxProps?: {
    placeholder?: string;
  };
};

export function DataTable<T>({
  data,
  columns,
  isLoading,
  total = 0,
  searchboxProps,
}: Props<T>) {
  const { searchParams, setPage, setSearch } = useBaseFilter();

  return (
    <div>
      {/* Search */}
      <Group justify="end" mb="md">
        {searchboxProps && (
          <TextInput
            placeholder={searchboxProps.placeholder}
            defaultValue={searchParams.search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
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
          {isLoading ? (
            <Table.Tr>
              <Table.Td colSpan={columns.length}>
                <Loader />
              </Table.Td>
            </Table.Tr>
          ) : data.length === 0 ? (
            <Table.Tr>
              <Table.Td colSpan={columns.length}>No data found</Table.Td>
            </Table.Tr>
          ) : (
            data.map((row, i) => (
              <Table.Tr key={i}>
                {columns.map((col) => (
                  <Table.Td key={String(col.key)}>
                    {col.render ? col.render(row) : String(row[col.key])}
                  </Table.Td>
                ))}
              </Table.Tr>
            ))
          )}
        </Table.Tbody>
      </Table>

      {/* Footer */}
      <div className="flex justify-end mt-4">
        <Pagination
          value={searchParams.page}
          total={Math.ceil(total / searchParams.limit)}
          onChange={setPage}
        />
      </div>
    </div>
  );
}
