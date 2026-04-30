import { Pagination, Group } from "@mantine/core";

type Props = {
  page: number;
  total: number;
  onChange: (page: number) => void;
};

export function TablePagination({ page, total, onChange }: Props) {
  return (
    <Group justify="center" mt="md">
      <Pagination value={page} onChange={onChange} total={total} />
    </Group>
  );
}
