import { Button, Group } from "@mantine/core";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export function RowActions({ onEdit, onDelete }: Props) {
  return (
    <Group gap="xs">
      <Button size="xs" onClick={onEdit}>
        Edit
      </Button>
      <Button size="xs" color="red" onClick={onDelete}>
        Delete
      </Button>
    </Group>
  );
}
