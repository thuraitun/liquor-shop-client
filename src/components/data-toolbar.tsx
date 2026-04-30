import { TextInput, Select, Group } from "@mantine/core";

type Props = {
  search: string;
  onSearchChange: (v: string) => void;

  filterValue?: string | null;
  onFilterChange?: (v: string | null) => void;

  filterOptions?: { value: string; label: string }[];
};

export function TableToolbar({
  search,
  onSearchChange,
  filterValue,
  onFilterChange,
  filterOptions = [],
}: Props) {
  return (
    <Group mb="md">
      <TextInput
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {onFilterChange && (
        <Select
          placeholder="Filter"
          data={filterOptions}
          value={filterValue}
          onChange={onFilterChange}
          clearable
        />
      )}
    </Group>
  );
}
